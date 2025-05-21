import { gql } from "@apollo/client";

export const GET_PRE_DEPOSITS = gql`
  query GetPreDeposits {
    preDeposits {
      id
    }
  }
`;

export const GET_REFERRAL_CODE_BY_ID = gql`
  query GetReferralCodeById($id: ID!) {
    referralCode(id: $id) {
      id
      timesUsed
      creator {
        id
      }
      createdAt
      usedBy {
        id
        timestamp
      }
    }
  }
`;

export const GET_ACCOUNT_BY_ID = gql`
  query GetAccountById($id: ID!) {
    account(id: $id) {
      id
      balances {
        token {
          id
          symbol
          name
        }
        amount
      }
      code {
        id
        timesUsed
        usedBy {
          id
        }
      }
    }
  }
`;
