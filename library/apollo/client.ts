import { createApolloClient } from "./utils";

export function getPreDepositsClient() {
  return createApolloClient(
    "https://api.goldsky.com/api/public/project_cm8d4huxt3xno01vsbom86jil/subgraphs/points-erc20/latest/gn"
  );
}
