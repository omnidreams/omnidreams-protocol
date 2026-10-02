import { calculateSwapOutput, calculateDividends, CONSTANTS } from "../sdk/index.mjs";

console.log("==========================================================================");
console.log("  NVIDIA OmniDreams ($DREAMS) · SDK Integration Preview");
console.log("==========================================================================\n");

console.log("1. CONSTANTS:");
console.log("   - Chain ID:", CONSTANTS.CHAIN_ID);
console.log("   - Total Supply:", CONSTANTS.TOTAL_SUPPLY.toLocaleString(), "DREAMS");
console.log("   - FeeEscrow Tax:", (CONSTANTS.FEE_BPS / 100).toFixed(1) + "%");
console.log("   - Graduation Threshold: $" + CONSTANTS.GRADUATION_MARKET_CAP_USD.toLocaleString(), "MC\n");

console.log("2. SWAP SIMULATION (0.10 ETH Input):");
const swapRes = calculateSwapOutput(0.10);
console.log("   - Tokens Received:", swapRes.tokensReceived.toLocaleString(), "DREAMS");
console.log("   - Supply Share:", swapRes.supplySharePercent + "%");
console.log("   - FeeEscrow Tax ($NVDA Pool):", swapRes.taxEth, "ETH ($" + swapRes.taxUsd + " USD)");
console.log("   - Price Impact:", "< " + swapRes.priceImpactPercent + "%\n");

console.log("3. DIVIDEND PROJECTION ($50,000 24h Volume · 10,000,000 $DREAMS Holding):");
const divRes = calculateDividends(50000, 10_000_000);
console.log("   - 24h Protocol Tax Pool: $" + divRes.dailyTaxPoolUsd);
console.log("   - User Daily $NVDA Yield: $" + divRes.dailyPayoutUsd + " / day");
console.log("   - User Monthly $NVDA Yield: $" + divRes.monthlyPayoutUsd + " / 30 days");
console.log("   - User Annual $NVDA Yield: $" + divRes.annualPayoutUsd + " / year\n");
console.log("==========================================================================");
