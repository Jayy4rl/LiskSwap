import { useCallback } from "react";
import { getReferralTag, submitReferral } from "@divvi/referral-sdk";
import { useWalletClient } from "wagmi";

// Divvi consumer address for LiskSwap
const DIVVI_CONSUMER_ADDRESS = "0x925c164A113D7fbF28D31f4838A39c30Ee881c9e" as const;

/**
 * Hook to integrate with Divvi referral system
 * @returns Functions to get referral tag and submit referrals
 */
export const useDivviReferral = () => {
  const { data: walletClient } = useWalletClient();

  /**
   * Gets the referral tag to append to transaction data
   * @param userAddress - The address of the user making the transaction
   * @returns The referral tag as a hex string (without 0x prefix)
   */
  const getDivviReferralTag = useCallback((userAddress: string) => {
    return getReferralTag({
      user: userAddress as `0x${string}`,
      consumer: DIVVI_CONSUMER_ADDRESS,
    });
  }, []);

  /**
   * Submits a referral to Divvi's attribution tracking API
   * @param txHash - The transaction hash to submit
   * @param chainId - The chain ID where the transaction occurred
   */
  const submitDivviReferral = useCallback(async (txHash: string, chainId: number) => {
    try {
      await submitReferral({
        txHash: txHash as `0x${string}`,
        chainId,
      });
      console.log("Divvi referral submitted successfully:", txHash);
    } catch (error) {
      // Log error but don't throw - referral tracking failure shouldn't break the app
      console.error("Failed to submit Divvi referral:", error);
    }
  }, []);

  /**
   * Gets the data suffix to append to transaction calldata
   * @param userAddress - The address of the user making the transaction
   * @returns The data suffix with 0x prefix
   */
  const getDataSuffix = useCallback(
    (userAddress: string) => {
      return `0x${getDivviReferralTag(userAddress)}`;
    },
    [getDivviReferralTag],
  );

  return {
    getDivviReferralTag,
    submitDivviReferral,
    getDataSuffix,
    consumerAddress: DIVVI_CONSUMER_ADDRESS,
    walletClient,
  };
};
