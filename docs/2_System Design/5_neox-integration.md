---
---

# NeoX Integration

## Overview

GrantShares extends beyond Neo N3 to support cross-chain functionality with NeoX, an EVM-compatible sidechain. This integration enables the DAO to create and execute proposals on NeoX, bridging assets between Neo N3 and NeoX seamlessly.

The NeoX integration consists of three primary components:
- **GrantSharesRelayer** (Solidity) - Deployed on NeoX
- **GrantSharesBridgeAdapter** (neow3j) - Deployed on Neo N3
- **Backend Event Monitor** - Monitors NeoX events and triggers N3 transactions

## Architecture

### High-Level Flow Diagram

```
┌──────────────┐         ┌──────────────────┐         ┌─────────────────┐         ┌───────────────┐
│   User/dApp  │         │   NeoX           │         │   Backend       │         │   Neo N3      │
│              │         │                  │         │                 │         │               │
│              │────1───▶│ Relayer Contract │         │                 │         │               │
│              │ propose │ Emits Event      │────2───▶│ Event Monitor   │         │               │
│              │         │                  │         │                 │────3───▶│ GrantSharesGov│
│              │         │                  │         │ Calls N3        │         │ createProposal│
│              │         │                  │         │                 │         │               │
│              │         │                  │         │                 │         │               │
│              │────4───▶│ Relayer Contract │         │                 │         │ [Voting...]   │
│              │ execute │ Emits Event      │────5───▶│ Event Monitor   │         │               │
│              │         │                  │         │                 │────6───▶│ GrantSharesGov│
│              │         │                  │         │ Calls N3        │         │ execute()     │
│              │         │                  │         │                 │         │      │        │
│              │         │                  │         │                 │         │      ▼        │
│              │         │                  │         │                 │         │ Treasury      │
│              │         │                  │         │                 │         │      │        │
│              │         │                  │         │                 │         │      ▼        │
│              │         │                  │         │                 │         │ BridgeAdapter │
│              │         │                  │         │                 │         │      │        │
│              │         │ ◀────────────────┼─────────┼─────────────────┼─────────┤      ▼        │
│              │◀────7───│ Funds Received   │         │                 │         │ Neo X Bridge  │
└──────────────┘         └──────────────────┘         └─────────────────┘         └───────────────┘
```

### Flow Description

#### Proposal Creation Flow

1. **Event Emission on NeoX**: User or dApp calls `propose()` on the `GrantSharesRelayer` contract
    - Pays `proposalFee` in ETH
    - Emits `CreateProposal` event with:
        - `sender`: Address of proposer (indexed)
        - `proposal`: Struct containing `intents`, `offchainUri`, and `linkedProposal`

2. **Backend Captures Event**: The backend's `ChainMonitorService` monitors NeoX blocks
    - Listens for `CreateProposal` events using Web3j event filtering
    - Validates the event data via `EvmEventValidatorService`
    - Extracts proposal data including `offchainUri` (GitHub issue URL) and `linkedProposal` ID

3. **Backend Calls N3 Contract**: The `NeoTransactionService` creates and sends a transaction
    - Calls `createProposal()` on the `GrantSharesGov` contract
    - Parameters: proposer address, intents, offchainUri, linkedProposal
    - Uses backend account credentials for signing
    - Proposal enters standard GrantShares voting workflow

#### Proposal Execution Flow

4. **Event Emission on NeoX**: User or dApp calls `execute()` on the `GrantSharesRelayer` contract
    - Pays `executionFee` in ETH
    - Emits `ExecuteProposal` event with:
        - `proposalId`: On-chain ID of proposal to execute (indexed)

5. **Backend Captures Event**: The backend's `ChainMonitorService` monitors NeoX blocks
    - Listens for `ExecuteProposal` events
    - Validates the event and retrieves the corresponding proposal from database
    - Verifies proposal is in `Accepted` state and ready for execution

6. **Backend Calls N3 Contract**: The `NeoTransactionService` executes the proposal
    - Calls `execute()` on the `GrantSharesGov` contract with the proposal ID
    - Uses special signers configuration:
        - `AccountSigner.none(backendAccount)` - Backend account
        - `ContractSigner.calledByEntry(BridgeAdapter)` - Allows bridge adapter to call GAS/NEO contracts
    - The execution triggers the proposal's intents in sequence:

7. **Funds Transfer and Bridging**:
    - **Treasury Transfer**: Tokens move from `GrantSharesTreasury` to `GrantSharesBridgeAdapter`
    - **Bridge Call**: The adapter calls `bridge(token, to, amount)`:
        - Validates token type (GAS or NEO only)
        - Checks balance is sufficient for amount + bridge fees
        - Calls the Neo X Bridge contract:
            - `depositNative()` for GAS tokens
            - `depositToken()` for NEO tokens
        - Validates no excess tokens remain (except up to `maxFee` for GAS)
    - **Bridge Processing**: Neo X Bridge ensures funds arrive at the recipient's NeoX address
    - **Recipient Receives**: Funds become available on the NeoX address specified in the proposal

### Components

#### 1. GrantSharesRelayer (NeoX - Solidity)

The **GrantSharesRelayer** is an upgradeable Solidity contract deployed on NeoX that serves as an event emitter and fee gate for cross-chain proposals.

**Key Features:**
- **Event-based Architecture**: Emits events captured by the backend for relay to Neo N3
- **Fee System**: Requires payment of configurable fees to prevent spam
- **Pausable**: Can be paused by the contract owner in case of emergencies
- **Upgradeable**: Uses UUPS (Universal Upgradeable Proxy Standard) upgrade pattern
