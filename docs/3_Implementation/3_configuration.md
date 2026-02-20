---
---

# Configuration

Both contracts have to be configured at deploy time. The configuration can later be adapted via proposals. The following describes the things that need to be configured.

**Governance Contract**

- Min Quorum: The minimum quorum is the lower threshold for the quorum a proposal can have. The quorum determines how many members have to take part in voting on a proposal. It is set in percentage of the total number of members. The quorum can be set per proposal. If it is not specifically set, it defaults to the minimum.
- Min Acceptance Rate: The minimum acceptance rate is the lower threshold for the acceptance rate a proposal can have. The acceptance rate can be set per proposal but cannot go under this minimum. The acceptance rate determines, in percentage, how many members have to vote yes on a proposal, such that it is approved. If the acceptance rate is not specified on a proposal, it is set by default to the minimum.
- Review Period (in milliseconds): The review period is the time from proposal endorsement until the voting period starts. In this time voting is not possible. We will set this to zero in the beginning.
- Voting Period (in milliseconds): This determines the time window in which members can vote on a proposal.
- Time lock Period (in milliseconds): This determines the time window in which a proposal cannot be execute after its voting phase.
- Signing threshold ratio for the members multi-sig address: This is a percentage of the total number of members. It determining the threshold of the multi-sig address, e.g., necessary for pausing the contracts.

**Treasury Contract**

- Funders: The addresses and public keys of the funders that are allowed to send tokens to the treasury contract. A funder can be a multi-sig address. On registration all the involved public keys of the multi-sig address are necessary because they will be used in the funders multi-sig address.
- Whitelisted tokens with maximum funding amounts: Funders are only allowed to send whitelisted tokens to the treasury. Each whitelisted token is associated with a maximum funding amount that cannot be exceeded in a proposal.
- Signing threshold ratio for the funders multi-sig address: This is a percentage of the total number of funders (rather, their public keys). It determining the threshold of the multi-sig address, e.g., necessary for draining the treasury’s funds.

**Bridge Adapter Contract**

The `GrantSharesBridgeAdapter` requires the following configuration at deployment:

- Initial Owner: The address with administrative control over the adapter
- GrantSharesGov Contract: The hash of the governance contract (only this contract can invoke the bridge function)
- GrantSharesTreasury Contract: The hash of the treasury contract (can send tokens to the adapter)
- Bridge Contract: The hash of the Neo X Bridge contract to interact with
- Initial Max Fee: The maximum amount of GAS that can remain in the adapter after bridging (to cover variable bridge fees)
- Initial Whitelisted Funder: An address allowed to send GAS to the adapter for bridge fee funding

**Relayer Contract (NeoX)**

The `GrantSharesRelayer` on NeoX requires configuration at initialization:

- Initial Owner: The address with administrative control (for pause, unpause, fee updates, withdrawals)
- Proposal Fee: The amount of ETH required to create a proposal on NeoX
- Execution Fee: The amount of ETH required to execute a proposal on NeoX

Both fee amounts can be updated later by the owner via `setProposalFee` and `setExecutionFee` methods.
