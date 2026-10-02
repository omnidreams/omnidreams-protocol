/**
 * @omnidreams/sdk - FeeEscrow Distribution & Claim Estimator
 * Handles 1.8% volume routing, $NVDA stock reward batch projections and claim verification.
 */

export class FeeEscrowEngine {
  constructor(taxBps = 180, quoteAsset = "NVDA") {
    this.taxBps = Number(taxBps);
    this.quoteAsset = quoteAsset;
    this.taxRate = this.taxBps / 10000;
  }

  /**
   * Calculates gross and net fee splits from protocol trading volume
   * @param {number} volumeUsd - Trading volume in USD
   * @param {number} nvdaStockPriceUsd - Tokenized NVDA price in USD
   * @returns {object} Calculated fee distribution metrics
   */
  calculateVolumeSplit(volumeUsd, nvdaStockPriceUsd = 120.0) {
    const vol = Math.max(0, Number(volumeUsd) || 0);
    const stockPrice = Math.max(1, Number(nvdaStockPriceUsd) || 120.0);

    const totalFeeUsd = vol * this.taxRate;
    const holderRewardPoolUsd = totalFeeUsd * 0.70; // 70% of tax directly to active holders
    const devEscrowShareUsd = totalFeeUsd * 0.30;   // 30% to creator operations

    const holderNvdaShares = holderRewardPoolUsd / stockPrice;
    const devNvdaShares = devEscrowShareUsd / stockPrice;

    return {
      taxBps: this.taxBps,
      totalFeeUsd: Number(totalFeeUsd.toFixed(2)),
      holderRewardPoolUsd: Number(holderRewardPoolUsd.toFixed(2)),
      devEscrowShareUsd: Number(devEscrowShareUsd.toFixed(2)),
      estimatedTotalNvdaDistributed: Number((holderNvdaShares + devNvdaShares).toFixed(4)),
      holderNvdaShares: Number(holderNvdaShares.toFixed(4)),
      devNvdaShares: Number(devNvdaShares.toFixed(4))
    };
  }

  /**
   * Estimates individual claimable dividends for a token holder
   * @param {number} userTokenBalance - Number of $DREAMS tokens held
   * @param {number} totalSupply - Total circulating supply (e.g. 1,000,000,000)
   * @param {number} accumulatedPoolUsd - Total accumulated FeeEscrow reward pool in USD
   * @returns {object} Claimable balance projection
   */
  projectUserClaim(userTokenBalance, totalSupply = 1_000_000_000, accumulatedPoolUsd = 10000) {
    const balance = Math.max(0, Number(userTokenBalance) || 0);
    const supply = Math.max(1, Number(totalSupply) || 1_000_000_000);
    const pool = Math.max(0, Number(accumulatedPoolUsd) || 0);

    const shareRatio = balance / supply;
    const claimableUsd = pool * shareRatio;

    return {
      userHoldingSharePercent: Number((shareRatio * 100).toFixed(4)),
      claimableUsd: Number(claimableUsd.toFixed(2)),
      isEligible: balance > 0
    };
  }
}
