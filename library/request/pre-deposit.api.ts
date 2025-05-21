import { getPreDepositsClient } from "../apollo/client";
import { GET_ACCOUNT_BY_ID } from "../apollo/queries/pre-deposits";

export const PreDepositApi = {
  getAccountById: async (id: string) => {
    try {
      const client = getPreDepositsClient();
      const { data } = await client.query({
        query: GET_ACCOUNT_BY_ID,
        variables: { id },
      });

      return data.account;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
