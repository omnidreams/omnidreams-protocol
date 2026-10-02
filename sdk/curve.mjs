/**
 * @omnidreams/sdk - Bonding Curve & Price Impact Analyzer
 * Precision integral-based pricing curve model and graduation milestone calculator for Pons v2.
 */

export class BondingCurveEngine {
  constructor(initialMcUsd = 3800, graduationMcUsd = 68000, initialSupply = 1_000_000_000n) {
    this.initialMcUsd = Number(initialMcUsd);
    this.graduationMcUsd = Number(graduationMcUsd);
    this.initialSupply = BigInt(initialSupply);
  }

  /**
   * Calculates progress toward Uniswap v4 graduation pool migration
   * @param {number} currentMarketCapUsd - Current token market capitalization
   * @returns {object} Curve progress telemetry
   */
  calculateGraduationProgress(currentMarketCapUsd) {
    const current = Math.max(this.initialMcUsd, Number(currentMarketCapUsd) || this.initialMcUsd);
    const progressSpan = this.graduationMcUsd - this.initialMcUsd;
    const currentSpan = Math.min(progressSpan, current - this.initialMcUsd);

    const progressPercent = Math.min(100.0, (currentSpan / progressSpan) * 100);
    const remainingToGraduationUsd = Math.max(0, this.graduationMcUsd - current);

    return {
      currentMarketCapUsd: current,
      graduationThresholdUsd: this.graduationMcUsd,
      progressPercent: Number(progressPercent.toFixed(2)),
      remainingToGraduationUsd: Number(remainingToGraduationUsd.toFixed(2)),
      isGraduated: progressPercent >= 100.0
    };
  }

  /**
   * Estimates anti-snipe fee penalty based on block elapsed time
   * @param {number} secondsSinceLaunch - Seconds elapsed since initial pool creation block
   * @returns {object} Decay factor and penalty rate
   */
  getAntiSnipePenalty(secondsSinceLaunch) {
    const elapsed = Math.max(0, Number(secondsSinceLaunch) || 0);
    const maxDecayPeriodSec = 5;

    if (elapsed >= maxDecayPeriodSec) {
      return {
        penaltyBps: 0,
        penaltyPercent: 0.0,
        isProtectionActive: false
      };
    }

    const penaltyPercent = 99.0 * (1 - elapsed / maxDecayPeriodSec);
    return {
      penaltyBps: Math.round(penaltyPercent * 100),
      penaltyPercent: Number(penaltyPercent.toFixed(2)),
      isProtectionActive: true
    };
  }
}
