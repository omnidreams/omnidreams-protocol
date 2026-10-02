# NVIDIA OmniDreams Protocol Architecture Specification

## 1. Abstract
The OmniDreams Protocol bridges generative world model inference architectures from NVIDIA Research and Toronto AI Lab to onchain spatial compute on **Robinhood Chain (EVM L2 · Chain ID: 92001)**. 

---

## 2. Tokenomics & Mathematical Mechanics

### Fixed Supply Allocation
- **Total Supply:** `1,000,000,000 DREAMS` ($10^9$ units with $18$ decimal precision).
- **Initial Mint Distribution:** 100% deposited into Pons Launchpad v2 bonding curve.
- **Pre-allocation:** Zero team tokens.

### FeeEscrow $NVDA Dividend Routing
Every swap transaction on the bonding curve and subsequent Uniswap v4 liquidity pool applies a 180 BPS (1.8%) protocol fee:
$$\text{Fee} = \text{Trade Volume} \times 0.018$$

The fee is collected atomically by the `FeeEscrowDistributor` smart contract and distributed pro-rata to token holders in tokenized NVIDIA stock ($NVDA):
$$\text{Holder Payout} = \text{Daily Fee Pool} \times \frac{\text{Holdings}}{1,000,000,000}$$

---

## 3. Anti-Snipe Penalty Decay Model
To prevent predatory automated MEV sandwich bots at block zero, Pons v2 executes a 5-second linear decay penalty:
- **$t = 0$:** 99% penalty fee.
- **$t = 1$:** 79.2% penalty fee.
- **$t = 2$:** 59.4% penalty fee.
- **$t = 3$:** 39.6% penalty fee.
- **$t = 4$:** 19.8% penalty fee.
- **$t \ge 5\text{s}$:** 0.0% penalty fee (standard market pricing).

---

## 4. Graduation & Uniswap v4 Permanent Lock
Upon reaching the **$68,000 Market Cap** milestone:
1. 100% of the accumulated reserve ETH / NVDA assets are automatically paired with remaining $DREAMS supply.
2. The liquidity position is minted via `LaunchLocker` on Uniswap v4.
3. The LP position token is permanently burned to `0x000000000000000000000000000000000000dEaD`.
