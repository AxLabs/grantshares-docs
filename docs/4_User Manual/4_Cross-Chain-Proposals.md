# Creating Cross-Chain Proposals

This guide explains how to create a proposal that bridges assets from Neo N3 to NeoX and executes actions on the NeoX network.

## What is a Cross-Chain Proposal?

A cross-chain proposal enables the GrantShares DAO to fund projects building on NeoX by transferring funds from the Neo N3 treasury to NeoX

The proposal goes through the same voting process as regular proposals but includes additional steps to bridge assets and relay execution to NeoX.

## Prerequisites

Before creating a cross-chain proposal, ensure you have:

1. A **NeoX wallet address** where you want to receive funds
2. **Clear project requirements** that specify why NeoX funding is needed
3. Understanding of **NeoX-specific development** considerations
4. **ETH on NeoX** for paying proposal and execution fees (if you plan to execute the proposal yourself)

## Creating Your Proposal

### Step 1: Proposal Details

When creating your proposal in the GrantShares app:

1. Select **"Request for funding"** as the proposal type
2. In the **Title** and **Proposal details**, state:
    - That this is a NeoX-based project
    - Why the project requires deployment on NeoX

3. In the funding request section:
    - Enter the amount in GAS or NEO
    - **Important**: Enter your **NeoX address** (0x... format), not a Neo N3 address
    - The system will automatically configure the bridge intents

### Step 2: Understanding the Intents

Your cross-chain proposal will include multiple intents that execute in sequence:

1. **Transfer fee from Treasury to Bridge Adapter**: Moves GAS tokens from the treasury to the bridge adapter contract
2. **Transfer requested funds from Treasury to Bridge Adapter**: Moves requested tokens from the treasury to the bridge adapter contract
3. **Bridge to NeoX**: Calls the bridge adapter to transfer tokens to NeoX


You don't need to manually specify these intents—the GrantShares backend generates them automatically for cross-chain proposals.

## Voting and Execution

### Voting Phase

The voting process is identical to standard proposals:
- Requires endorsement from a GrantShares member
- 7-day voting period
- Requires quorum and acceptance rate to pass
- 3-day time lock after approval

### Execution

After the time lock period:

1. Navigate to your proposal page
2. Click **"Execute Proposal"**
3. Confirm the transaction in your wallet (requires GAS for transaction fees)
4. The execution will:
    - Emit events for NeoX relayer
    - Initiate the N3 execution of the intents:
      - Transfer fee from treasury to bridge adapter
      - Transfer requested tokens from treasury to bridge adapter
      - Initiate the cross-chain bridge transfer

After the Neo N3 execution completes you will have to wait for the bridge transfer to complete (up to a few minutes), then your tokens will be available at the specified NeoX address

## Fees and Costs

### For Proposers

- **NeoX Fees**: You'll need GAS (native coin) on NeoX for:
    - Proposal creation fee (configurable, check current rates)
    - Execution fee (configurable, check current rates)
These fees are paid on NeoX and are used to offset the costs of the relayer sending the N3 transactions. Proposers must ensure they have sufficient GAS on NeoX to cover these fees.

### For the DAO

- **Neo N3 Transaction Fees**: Small amount of GAS (typically < 0.1 GAS) to create and execute the proposal on N3
- **Bridge Fees**: The Neo X Bridge charges fees for cross-chain transfers (paid in GAS from the treasury)
- **Relayer Fees**: Operational costs for the off-chain relayer service

## Example Use Case

**Scenario**: A developer wants 100 GAS to build a DeFi dApp on NeoX.

1. Developer creates a proposal with:
    - Title: "Build DEX Aggregator on NeoX"
    - Details: Project description, milestones, NeoX deployment benefits
    - Amount: 100 GAS
    - Recipient: `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb` (NeoX address)

2. Proposal goes through discussion, endorsement, and voting

3. After approval and time lock, developer executes the proposal

4. Tokens are bridged to NeoX and appear at the developer's NeoX address

5. Developer builds and deploys the dApp on NeoX

## Troubleshooting

**"Bridge transfer hasn't arrived"**
- Check the Neo X Bridge explorer for transfer status
- Bridge transfers may sometimes take 5-15 minutes
- Contact GrantShares via the GitHub discussions if the transfer is delayed beyond 30 minutes

**"Insufficient GAS for execution"**
- Ensure your wallet has enough GAS for transaction fees on N3
- For NeoX execution, ensure you have sufficient ETH

**"Invalid NeoX address"**
- Verify your address starts with `0x` and is a valid Ethereum-style address
- NeoX addresses are different from Neo N3 addresses
- If an EVM wallet is connected, the recipient address will be auto-completed with the connected wallet address, but you can edit it if needed

## Best Practices

1. **Double-Check Addresses**: Ensure your NeoX address is correct—blockchain transactions are irreversible
2. **Monitor Bridge Status**: Keep track of your bridge transfer using the Neo X Bridge explorer
3. **Account for Fees**: Request slightly more than your project requires to account for bridge fees
4. **Document Your Project**: Provide clear documentation of why NeoX is necessary for your project

## Additional Resources

- [Neo X Bridge Documentation](https://xdocs.ngd.network/bridge/general)
- [NeoX Explorer](https://xexplorer.neo.org/)

## FAQ

**Q: Can I bridge NEO tokens to NeoX?**  
A: Yes, the bridge adapter supports both GAS and NEO. Specify NEO as your token type when creating the proposal.

**Q: Who pays for the relayer fees?**  
A: The user creating the proposal pays the NeoX proposal and execution fees in GAS on NeoX. The DAO covers the Neo N3 transaction fees and bridge transfer fees.

**Q: How long does the entire cross-chain process take?**  
A: From proposal being put on-chain to receiving tokens on NeoX typically takes 10 days (7-day voting, 3-day time-lock, plus a small bridge transfer time). This does not include the time for discussions before the proposal is put on chain and, of course, assuming the proposal is endorsed.
