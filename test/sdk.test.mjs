import assert from "node:assert";
import { calculateSwapOutput, calculateDividends, CONSTANTS } from "../sdk/index.mjs";

console.log("Running SDK unit tests...");

// Test Constants
assert.strictEqual(CONSTANTS.TOTAL_SUPPLY, 1_000_000_000n, "Total supply must be 1B");
assert.strictEqual(CONSTANTS.FEE_BPS, 180, "Fee must be 180 BPS (1.8%)");
assert.strictEqual(CONSTANTS.CHAIN_ID, 92001, "Chain ID must be 92001 (Robinhood Chain)");

// Test Swap Output
const swap1 = calculateSwapOutput(0.1);
assert(swap1.tokensReceived > 26_000_000n, "0.1 ETH should return > 26M tokens");
assert.strictEqual(swap1.taxEth, "0.0018", "0.1 ETH tax must be 0.0018 ETH");

// Test Zero Input
const swapZero = calculateSwapOutput(0);
assert.strictEqual(swapZero.tokensReceived, 0n, "0 ETH should return 0 tokens");

// Test Dividends
const div1 = calculateDividends(30000, 10_000_000);
assert.strictEqual(div1.dailyTaxPoolUsd, "540.00", "$30k volume tax pool must be $540.00");
assert.strictEqual(div1.dailyPayoutUsd, "5.40", "1% holding of $540 pool must be $5.40");
assert.strictEqual(div1.monthlyPayoutUsd, "162.00", "30 days payout must be $162.00");

console.log("✓ All 7 SDK unit test assertions passed successfully!");
