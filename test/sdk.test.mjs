import assert from "node:assert";
import {
  calculateSwapOutput,
  calculateDividends,
  CONSTANTS,
  SpatialTelemetryEngine,
  FeeEscrowEngine,
  BondingCurveEngine
} from "../sdk/index.mjs";

console.log("Running comprehensive SDK unit tests...");

// 1. Test Constants
assert.strictEqual(CONSTANTS.TOTAL_SUPPLY, 1_000_000_000n, "Total supply must be 1B");
assert.strictEqual(CONSTANTS.FEE_BPS, 180, "Fee must be 180 BPS (1.8%)");
assert.strictEqual(CONSTANTS.CHAIN_ID, 92001, "Chain ID must be 92001 (Robinhood Chain)");

// 2. Test Swap Output
const swap1 = calculateSwapOutput(0.1);
assert(swap1.tokensReceived > 26_000_000n, "0.1 ETH should return > 26M tokens");
assert.strictEqual(swap1.taxEth, "0.0018", "0.1 ETH tax must be 0.0018 ETH");

// 3. Test Zero Input
const swapZero = calculateSwapOutput(0);
assert.strictEqual(swapZero.tokensReceived, 0n, "0 ETH should return 0 tokens");

// 4. Test Dividends
const div1 = calculateDividends(30000, 10_000_000);
assert.strictEqual(div1.dailyTaxPoolUsd, "540.00", "$30k volume tax pool must be $540.00");
assert.strictEqual(div1.dailyPayoutUsd, "5.40", "1% holding of $540 pool must be $5.40");
assert.strictEqual(div1.monthlyPayoutUsd, "162.00", "30 days payout must be $162.00");

// 5. Test SpatialTelemetryEngine
const telemetry = new SpatialTelemetryEngine({ targetFps: 60, maxLatencyMs: 50 });
const t1 = telemetry.recordFrame({ latencyMs: 24, lossScore: 0.04, computeGflops: 14.2 });
assert.strictEqual(t1.status, "OPTIMAL", "Frame within threshold must be OPTIMAL");
assert.strictEqual(t1.stabilityScore, 1.0, "Single compliant frame must have stability score 1.0");

const t2 = telemetry.recordFrame({ latencyMs: 95, lossScore: 0.22, computeGflops: 8.1 });
assert.strictEqual(t2.status, "DEGRADED", "High latency frame must be DEGRADED");
assert.strictEqual(t2.averageLatencyMs, 59.5, "Average latency of [24, 95] must be 59.5ms");

// 6. Test FeeEscrowEngine
const escrow = new FeeEscrowEngine(180, "NVDA");
const split = escrow.calculateVolumeSplit(50000, 125.0);
assert.strictEqual(split.totalFeeUsd, 900.0, "1.8% of $50k must be $900.00");
assert.strictEqual(split.holderRewardPoolUsd, 630.0, "70% of $900 must be $630.00");
assert.strictEqual(split.devEscrowShareUsd, 270.0, "30% of $900 must be $270.00");
assert.strictEqual(split.holderNvdaShares, 5.04, "$630 at $125/share must be 5.04 NVDA");

const userClaim = escrow.projectUserClaim(50_000_000, 1_000_000_000, 900.0);
assert.strictEqual(userClaim.userHoldingSharePercent, 5.0, "50M out of 1B must be 5.0%");
assert.strictEqual(userClaim.claimableUsd, 45.0, "5% of $900 must be $45.00");

// 7. Test BondingCurveEngine
const curve = new BondingCurveEngine(3800, 68000);
const prog1 = curve.calculateGraduationProgress(35900);
assert.strictEqual(prog1.progressPercent, 50.0, "$35.9k MC must be 50.0% graduation progress");
assert.strictEqual(prog1.isGraduated, false, "50% progress must not be graduated");

const progGrad = curve.calculateGraduationProgress(68000);
assert.strictEqual(progGrad.progressPercent, 100.0, "$68k MC must be 100% progress");
assert.strictEqual(progGrad.isGraduated, true, "100% progress must be graduated");

// Anti-snipe tests
const snipeEarly = curve.getAntiSnipePenalty(1.0);
assert.strictEqual(snipeEarly.isProtectionActive, true, "1s elapsed must have active anti-snipe");
assert(snipeEarly.penaltyPercent > 70.0, "1s elapsed must have > 70% penalty");

const snipeLate = curve.getAntiSnipePenalty(6.0);
assert.strictEqual(snipeLate.isProtectionActive, false, "6s elapsed must have 0% penalty");
assert.strictEqual(snipeLate.penaltyPercent, 0.0, "6s elapsed must have 0.0% penalty");

console.log("✓ All 23 comprehensive SDK unit test assertions passed successfully!");
