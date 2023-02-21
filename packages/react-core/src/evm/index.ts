// constants
export { __DEV__ } from "../core/constants/runtime";

// wallet hooks
export {
  useActiveChainId,
  useActiveWallet,
  useConnect,
  useConnectingToWallet,
  useCreateWalletInstance,
  useDisconnect,
  useSwitchChain,
  useWallets,
  useAccountAddress,
} from "../core/hooks/wallet-hooks";
export {
  useDeviceWalletStorage,
  useThirdwebWallet,
} from "../core/providers/thirdweb-wallet-provider";

// ThirdwebProvider
export { ThirdwebProvider } from "../core/providers/thirdweb-provider";
export type { ThirdwebProviderProps } from "../core/providers/thirdweb-provider";

// Utilities and Others
export { shouldNeverPersistQuery } from "../core/query-utils/query-key";
export type { RequiredParam } from "../core/query-utils/required-param";
export type { SupportedWallet } from "../core/types/wallet";

// auth
export {
  ThirdwebAuthProvider,
  useThirdwebAuthContext,
} from "./contexts/thirdweb-auth";
export type { ThirdwebAuthConfig } from "./contexts/thirdweb-auth";

// config
export {
  ThirdwebConfigProvider,
  useThirdwebConfigContext,
} from "./contexts/thirdweb-config";

// connected wallet provider
export {
  ThirdwebConnectedWalletProvider,
  useThirdwebConnectedWalletContext,
} from "./contexts/thirdweb-wallet";

// claim conditions
export type {
  ClaimIneligibilityParams,
  SetClaimConditionsParams,
} from "./hooks/async/claim-conditions";
export {
  useActiveClaimCondition,
  useClaimerProofs,
  useClaimConditions,
  useClaimIneligibilityReasons,
  useActiveClaimConditionForWallet,
  useSetClaimConditions,
  useResetClaimConditions,
} from "./hooks/async/claim-conditions";

// contract settings
export {
  usePrimarySaleRecipient,
  useUpdatePrimarySaleRecipient,
  useRoyaltySettings,
  useUpdateRoyaltySettings,
  usePlatformFees,
  useUpdatePlatformFees,
  useMetadata,
  useUpdateMetadata,
} from "./hooks/async/contract-settings";

// contracts
export {
  useContractType,
  contractType,
  useCompilerMetadata,
  compilerMetadata,
  useContract,
  useContractMetadata,
  useContractMetadataUpdate,
  useContractEvents,
  useContractRead,
  useContractWrite,
} from "./hooks/async/contracts";
export type { UseContractResult } from "./hooks/async/contracts";

// drop
export {
  useUnclaimedNFTs,
  useClaimedNFTs,
  useUnclaimedNFTSupply,
  useClaimedNFTSupply,
  useBatchesToReveal,
  useClaimNFT,
  useLazyMint,
  useDelayedRevealLazyMint,
  useRevealLazyMint,
} from "./hooks/async/drop";

// marketplace
export {
  useListing,
  useDirectListing,
  useEnglishAuction,
  useListings,
  useDirectListings,
  useValidDirectListings,
  useEnglishAuctions,
  useValidEnglishAuctions,
  useListingsCount,
  useDirectListingsCount,
  useEnglishAuctionsCount,
  useActiveListings,
  useWinningBid,
  useEnglishAuctionWinningBid,
  useAuctionWinner,
  useBidBuffer,
  useMinimumNextBid,
  useCreateDirectListing,
  useCreateAuctionListing,
  useCancelListing,
  useCancelDirectListing,
  useCancelEnglishAuction,
  useMakeBid,
  useMakeOffer,
  useAcceptDirectListingOffer,
  useExecuteAuctionSale,
  useOffers,
  useBuyNow,
} from "./hooks/async/marketplace";

// nft
export {
  useNFT,
  useNFTs,
  useTotalCount,
  useTotalCirculatingSupply,
  useOwnedNFTs,
  useNFTBalance,
  useMintNFT,
  useMintNFTSupply,
  useTransferNFT,
  useAirdropNFT,
  useBurnNFT,
} from "./hooks/async/nft";

// roles
export {
  useAllRoleMembers,
  useRoleMembers,
  useIsAddressRole,
  useSetAllRoleMembers,
  useGrantRole,
  useRevokeRole,
} from "./hooks/async/roles";
export type { ContractWithRoles, RolesForContract } from "./hooks/async/roles";

// token
export {
  useTokenSupply,
  useTokenBalance,
  useTokenDecimals,
  useMintToken,
  useClaimToken,
  useTransferToken,
  useTransferBatchToken,
  useBurnToken,
} from "./hooks/async/token";

// thirdweb hooks (work as long as at least `<ThirdwebSdkProvider>` is used)

// auth hooks
export { useLogin, useLogout, useUser, useAuth } from "./hooks/auth";
export type { UserWithData } from "./hooks/auth";

// contract hooks
export {
  useEditionDrop,
  useEdition,
  useNFTDrop,
  useMarketplace,
  useNFTCollection,
  usePack,
  useToken,
  useTokenDrop,
  useVote,
  useSplit,
  useMultiwrap,
  useSignatureDrop,
} from "./hooks/contracts";

// connected wallet hooks
export {
  useBalance,
  useConnectedWallet,
  useAddress,
  useChainId,
} from "./hooks/wallet";

export { useStorageUpload, useStorage } from "./hooks/storage";
export { useNetworkMismatch } from "./hooks/useNetworkMismatch";
export { useReadonlySDK } from "./hooks/useReadonlySDK";
export { useSigner } from "./hooks/useSigner";
export { useSupportedChains } from "./hooks/useSupportedChains";

// sdk provider
export {
  ThirdwebSDKProvider,
  useSDK,
  useSDKChainId,
} from "./providers/thirdweb-sdk-provider";
export type { ThirdwebSDKProviderProps } from "./providers/thirdweb-sdk-provider";

// types
export type {
  Chain,
  WalletAddress,
  TokenParams,
  TokenBurnParams,
  NFTContract,
  TokenContract,
  Erc721OrErc1155,
  TransferNFTParams,
  AirdropNFTParams,
  MintNFTSupplyParams,
  MintNFTParams,
  MintNFTReturnType,
  BurnNFTParams,
  DropContract,
  RevealableContract,
  DelayedRevealLazyMintInput,
  RevealLazyMintInput,
  ClaimNFTParams,
  ClaimNFTReturnType,
  MakeBidParams,
  MakeOfferParams,
  AcceptDirectOffer,
  ExecuteAuctionSale,
  BuyNowParams,
  ClaimTokenParams,
} from "./types";
export { getErcs, getErc1155, getErc721, getErc20 } from "./types";
