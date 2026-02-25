---
---
 
# Proposing a Project

The most important functionality of GrantShrares is explained here: **How to create a successful project proposal?**

## Prerequisites

### GitHub Authentication

Authentication with your GitHub account is required to create a GrantShares proposal. In the upper right corner of the
GrantShares [web app](https://grantshares.io/app/proposals), you'll find the button *"Connect to GitHub"*. Clicking it
will take you through the authentication process. Your account is needed for the proposal discussion that happens on
GitHub and serves as the first barrier to spam.

### Wallet

For putting a proposal on-chain and executing it, you will need a Neo N3 mainnet wallet and an appropriate wallet
software to connect with the web app. The supported wallets are NeoLine, Neon, or any WalletConnect-enabled wallet. You
will need some GAS to put your proposal on-chain and execute it after voting. The transaction fees for those actions
will be less than one tenth of one GAS. Furthermore, the first proposal creation step doesn't require any GAS.

## Phase 1: Proposal Creation

Go the GrantShares [web app](https://grantshares.io/app/proposals) and click on *"Create a Proposal"*. If you haven't
authenticated yourself with your GitHub account yet, click on *"Connect to GitHub"* in the upper right corner. This will
initiate the authentication process. Authentication with your GitHub account is requried to create a proposal.

By default the proposal form will be set to the *"Request for funding"* proposal type. You can leave that as is. Fill
out the *"Title"* and *"Proposal details"* fields. Make sure that the title captures the gist of your proposal, and the
details should be as extensive as possible. Below the text box you'll find a guide on how to write a successful
proposal. The template in the *"Proposal details"* serves as a guideline but is not mandatory.

Then, input the desired amount of funding and the receiver address in the funding request details section. This
information must be congruent with the numbers you present in the proposal details. If your proposal gets accepted, it
is exacly this information that is used to transfer tokens on-chain. If you already connected your wallet with the app,
the receiving address field will be filled with your wallet address automatically. 

Now, click on *"Submit Proposal"*. If you are logged-in with GitHub and all fields are correctly filled, you're proposal
will now be created. You will get redirected, and you'll see two links. One leads to the proposal details in the web
app, and the other to the issue on GitHub where the discussion will take place. Make sure to follow the discussion on
GitHub closely. Feel free to spread the information about your proposal on other channels, e.g., the Neo Discord
channel. 

Note that the proposal is not yet on-chain. You can still edit it when you're logged in with the same GitHub you created
it with. To do so, go to the proposal details page and click on the *"Edit Proposal"* button. 


### A Note on Discussions

GrantShares is a community effort. GrantShares members are passioned about Neo but not financially rewarded for
reviewing and voting on proposals. The discussion of your proposal will take a while, and you will need to be patient.
Don't be frustrated by scrutinizing questions and objections about your proposal. The goal is to find the most promising
projects and get them of the ground with a grant.

## Phase 2: Moving on-chain 

Once the the discussion reveals that a GrantShares member is willing to endorse your proposal, you can put it on-chain.
This is necessary because after all GrantShares is a blockchain-based application where voting and execution of the
proposal happen on-chain. 

Find your proposal in the GrantShares app and go to the details page. If you are logged-in with your GitHub account, you
will see a "Put Proposal on-chain" button (only on proposals created by you). At this point you also need to be
connected with a wallet that owns some GAS (less than 0.1 with the current Neo mainnet configuration). Click the button
and interact with your wallet to send the creation transaction.

The status of your proposal will update, and the GrantShares GitHub bot will post a comment on the discussion issue. The
proposal is now ready to be endorsed by one of the GrantShares members. In this state a proposal is valid for 30 days.
After that period it expires and becomes useless, i.e., no voting will take place, and it cannot be executed nor
renewed.

## Phase 3: Voting and Execution

For the voting period to start, a GrantShares member has to endorse your proposal. As soon as that happens the voting
period starts and lasts for seven days. If you don't see enough engagement of the members, don't hesitate to remind them
to vote on your proposal. You will see the status of the vote in the details page of your proposal. Note that you not
only need a simple majority to vote yes, but also at least half of the members have to cast any vote. This is called the
quorum. It is the minimum number of members necessary to participate. Half of the participating members must vote yes
for the proposal to pass.

After a week of voting - and if the proposal is accepted - the state changes to what we call *time lock*. This is a
three day period in which no voting happens, and the proposal is not executable. This phase exists for security reasons.

After the time lock is over, you can execute the proposal. The appropriate button will show up on the proposal's detail
page if you are logged-in with your GitHub account. Again you have to be connected with a wallet and require some GAS to
pay for transaction fees. The fees depend on the actions of the proposal. Note that you have to execute the proposal in
30 days after the time lock period ends. After that time, the proposal expires even if it was accepted, and you will not
be able to execute it anymore. This is a security mechanism.
