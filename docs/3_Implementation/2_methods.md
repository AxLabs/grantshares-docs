---
---

# Methods

## Methods to be invoked by Proposals

**Request for Funding**

The main functionality of the GrantShares contracts is the submission of “Request for Funding” proposals. Such a proposal contains an intent that calls the `releaseTokens` method of the `GrantSharesTreasury`. On approval and execution, the proposal will send funds from the treasury to the receiver stated in the proposal intent.

**Add Member**

The `addMember` method on `GrantSharesGov` allows adding a GrantShares member via a proposal. Anyone can apply as a member.

**Remove Member**

The `removeMember` method on `GrantSharesGov` allows removing a GrantShares member via a proposal.

**Add Funder**

The `addFunder` method on `GrantSharesTreasury` allows adding a funder to the treasury via a proposal. Only added funders can send tokens to the treasury. Anyone can apply as a GrantShares funder.

**Remove Funder**

The `removeFunder` method on `GrantSharesTreasury` allows removing a GrantShares funder via a proposal.

**Change Parameter**

The `changeParam` method on `GrantSharesGov` allows changing a parameter value on the governance contract via a proposal. E.g., change the standard duration of the voting period.

**Update Contract**

Both the `GrantSharesGov` and the `GrantSharesTreasury` have `update` methods that allow updating the contracts via a proposal.

**Add whitelisted token**

The `addWhitelistedToken` method on `GrantShraresTreasury` allows whitelisting a token on the treasury via a proposal. Funders can only send whitelisted tokens to the treasury. Each whitelisted comes with a fixed maximum amount that can be released in a proposal.

**Remove whitelisted token**

The `removeWhitelistedToken` method on `GrantShraresTreasury` allows removing a token from the treasury’s whitelist via a proposal. 

**Set funders multi-sig threshold ratio**

The `setFundersMultiSigThresholdRatio` method on `GrantSharesTreasury` allows setting the ratio used when calculating the funders multi-sig threshold. E.g., if it is set to 50, the threshold will be half of the number of funders.

**Bridge Assets to NeoX**

The `bridge` method on `GrantSharesBridgeAdapter` enables transferring tokens from Neo N3 to NeoX via the Neo X Bridge. This method can only be invoked by the `GrantSharesGov` contract as part of a proposal execution. It supports bridging GAS and NEO tokens to specified NeoX addresses.

Parameters:
- `token`: The Hash160 of the token to bridge (GAS or NEO)
- `to`: The recipient address on NeoX
- `amount`: The amount of tokens to bridge

The method automatically handles bridge fees and validates that no excess tokens remain in the adapter after the transfer (except for an allowed `maxFee` amount in GAS).


## Methods to be invoked by the member or funder multi-sig address

Because of security considerations we decided to have several methods that can be called by GrantShares members and funders directly and don’t require a proposal. Of course these methods cannot be executed by single addresses. The authorisation is only given to the multi-sig address made up of all member public keys for `GrantSharesGov` and all funder public keys for `GrantSharesTreasury`. The signing threshold of these multi-sig addresses is determined by parameters set in the contracts’ storages. The methods that can be invoked by the multi-sig addresses are the following.

**Pause Contract**

The `pause` method on `GrantSharesGov` can be called by the members multi-sig and pauses most activity of the governance and the treasury contract. This means that many methods in the two contracts always first check if the `GrantSharesGov` is currently paused, and fail if that is so.

**Unpause Contract**

The `unpause` method on `GrantSharesGov` can be called by the members multi-sig and does the reverse of the `pause` method.

**Drain treasury**

The `drain` method on `GrantShraresTreasury` allows the funders to drain all funds from the treasury contract without a proposal. The method can only be successfully invoked by the funders multi-sig address and only if the GrantSharesGov contract is paused. All tokens of the treasury are sent to the funders multi-sig address.

## Other Methods

Some proposal related methods can be called by anyone: `createProposal` and `execute`. I.e., anyone can create a proposal and execute an accepted proposal.

The rest of the proposal related methods can only be called by the GrantShares members: `endorseProposal` and `vote`.

The method `voteCommitteeMemberWithLeastVotes` on `GrantSharesTreasury` can be called by anyone. Its only effect is that it revotes on the Neo committee member with the least votes.
