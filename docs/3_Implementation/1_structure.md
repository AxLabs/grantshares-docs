---
---

# Code Structure

## Neo N3 Contracts

The [smart contract repository](https://github.com/axlabs/grantshares-contracts) has three source sets: `main`, `test`,
and `deploy`.

**main**  
Contains the contract code. GrantShares consists of two smart contracts, the `GrantSharesGov` and `GrantSharesTreasury`.
The other classes in the same package are structs and utilities used by the contracts. E.g., the `Intent` class is a
NeoVm struct used to represent a proposal's intents.

**test**  
Contains automated contract tests. The tests make use of neow3j's test library. Checkout the [neow3j
docs](https://neow3j.io) for more information. 

**deploy**  
The deploy source set contains code for manually deploying and invoking the contracts on a private net, testnet and mainnet.

## NeoX Contracts

In addition to the Neo N3 contracts, GrantShares includes smart contracts for NeoX integration located in the same repository:

**Solidity Contracts** (in `src/main/solidity/`)

- **GrantSharesRelayer.sol**: An upgradeable Solidity contract deployed on NeoX that serves as an event relayer for cross-chain proposals. It uses OpenZeppelin's upgradeable contract patterns (UUPS proxy) and includes pausability and ownership controls.

**Bridge Adapter** (in `src/main/java/com/axlabs/neo/grantshares/`)

- **GrantSharesBridgeAdapter.java**: A NeoVM smart contract that interfaces between the GrantShares governance system and the Neo X Bridge. It handles the secure transfer of assets from Neo N3 to NeoX as part of proposal execution.

These contracts work together to enable cross-chain proposal execution and asset transfers. See the [NeoX Integration](../2_System%20Design/5_neox-integration.md) section for detailed architecture information.
