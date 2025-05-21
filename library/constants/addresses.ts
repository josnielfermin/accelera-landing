import ChainToAddressMap from "../types/chain-to-address-map";
import SupportedChainIds from "../types/supported-chain-ids.enum";

export const PREDEPOSIT_VAULT_ADDRESS: ChainToAddressMap = {
  [SupportedChainIds.BLAST_SEPOLIA]:
    "0x8AD3b2d670272a620C271F37a2b1142f0c35D7E5",
};

export const USDE_ADDRESS: ChainToAddressMap = {
  [SupportedChainIds.BLAST_SEPOLIA]:
    "0x73a53A8cbAaf13F6Bb9Ec887772737Bc89071173",
};
export const NATIVE_CURRENCY_ADDRESS: ChainToAddressMap = {
  [SupportedChainIds.BLAST_SEPOLIA]:
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
};
