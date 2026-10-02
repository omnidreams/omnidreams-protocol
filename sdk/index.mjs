/**
 * @omnidreams/sdk - Integration Toolkit & Mathematical Engine
 * Core pricing, FeeEscrow tax routing and bonding curve telemetry.
 */

export const CONSTANTS = {
  TOTAL_SUPPLY: 1_000_000_000n,
  DECIMALS: 18,
  FEE_BPS: 180, // 1.8%
  CHAIN_ID: 92001,
  INITIAL_MARKET_CAP_USD: 3800,
  GRADUATION_MARKET_CAP_USD: 68000,
  BASE_TOKENS_PER_ETH: 263_157_890n
};

/**
 * Calculates estimated tokens received along the bonding curve
 * @param {number} ethAmountIn - Input amount in ETH
 * @returns {object} Calculated execution parameters
 */
export function calculateSwapOutput(ethAmountIn) {
  const eth = Number(ethAmountIn);
  if (isNaN(eth) || eth <= 0) {
    return {
      tokensReceived: 0n,
      supplySharePercent: "0.00",
      taxEth: "0.0000",
      taxUsd: "0.00",
      priceImpactPercent: "0.00"
    };
  }

  const priceImpactFactor = Math.max(0.75, 1 - (eth * 0.015));
  const effectiveRate = Number(CONSTANTS.BASE_TOKENS_PER_ETH) * priceImpactFactor;
  const tokensReceived = BigInt(Math.round(eth * effectiveRate));
  
  const supplySharePercent = ((Number(tokensReceived) / Number(CONSTANTS.TOTAL_SUPPLY)) * 100).toFixed(2);
  const taxEth = (eth * (CONSTANTS.FEE_BPS / 10000)).toFixed(4);
  const taxUsd = (eth * (CONSTANTS.FEE_BPS / 10000) * 3000).toFixed(2);
  const priceImpactPercent = Math.min(12, eth * 1.2).toFixed(2);

  return {
    tokensReceived,
    supplySharePercent,
    taxEth,
    taxUsd,
    priceImpactPercent
  };
}

/**
 * Calculates user's pro-rata $NVDA dividend share based on 24h trading volume
 * @param {number} volumeUsd24h - 24-hour trading volume in USD
 * @param {number} holdingTokenAmount - Number of $DREAMS held
 * @returns {object} Projected dividend payout
 */
export function calculateDividends(volumeUsd24h, holdingTokenAmount) {
  const dailyTaxPoolUsd = Number(volumeUsd24h) * (CONSTANTS.FEE_BPS / 10000);
  const userRatio = Number(holdingTokenAmount) / Number(CONSTANTS.TOTAL_SUPPLY);
  
  const dailyPayoutUsd = dailyTaxPoolUsd * userRatio;
  const monthlyPayoutUsd = dailyPayoutUsd * 30;
  const annualPayoutUsd = dailyPayoutUsd * 365;

  return {
    dailyTaxPoolUsd: dailyTaxPoolUsd.toFixed(2),
    dailyPayoutUsd: dailyPayoutUsd.toFixed(2),
    monthlyPayoutUsd: monthlyPayoutUsd.toFixed(2),
    annualPayoutUsd: annualPayoutUsd.toFixed(2)
  };
}
