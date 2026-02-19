# GrantShares Proposal Types

GrantShares is a platform where DAO members can submit, review, and vote on a range of proposals affecting the DAO’s governance, membership, and treasury. This page describes each proposal type and its specific, required parameters (“Specific Fields”).  
*All proposal types require a Title and Description.*

## List of Proposal Types

| Proposal Type                 | Specific Fields<sup>†</sup>                  |
|-------------------------------|----------------------------------------------|
| **Request for Funding**       | Token, Recipient, Amount                     |
| **Add Member**                | Member Address                               |
| **Remove Member**             | Member Address                               |
| **Set Parameter**             | Parameter Key, Value                         |
| **Update Contract**           | Contract Name/ID, New Contract Hash/Address  |
| **Add Funder**                | Funder Address                               |
| **Remove Funder**             | Funder Address                               |
| **Add Token**                 | Token Hash  , Name, Decimals, Spending Limit |
| **Remove Token**              | Token Hash                                   |
| **Change Token Spending Limit**| Token Hash, New Spending Limit               |

<sup>†</sup>*All types also accept “linked proposal”/related proposal references where applicable.*

### Proposal Type Details

- **Request for Funding:**  
  Request NEO or GAS (or other whitelisted token) from the DAO treasury for a specified recipient address and amount.  
  **Fields:** *Token, Recipient, Amount*

- **Add/Remove Member:**  
  Propose to add or remove a member from the DAO.  
  **Fields:** *Member Address*

- **Set Parameter:**  
  Change the value of a DAO parameter or setting.  
  **Fields:** *Parameter Key, Value*

- **Update Contract:**  
  Propose an upgrade or change to a DAO contract.  
  **Fields:** *Contract Name/ID, New Contract Hash*

- **Add/Remove Funder:**  
  Propose to add or remove a funder (treasury manager).  
  **Fields:** *Funder Address*

- **Add/Remove Token:**  
  Add or remove a token from the treasury whitelist.  
  **Fields (Add):** *Token Hash, Name, Decimals, Spending Limit*  
  **Fields (Remove):** *Token Hash*

- **Change Token Spending Limit:**  
  Update the spending limit for an already whitelisted token.  
  **Fields:** *Token Hash, New Limit*

### Notes

- “Title” and “Description” are required for every proposal.
- All proposals include a “proposal type” and may include a related proposal or linked proposal URI.
- The GrantShares app may prompt for additional optional fields or structured content for easier review, but the above are the contract-required minimums.
