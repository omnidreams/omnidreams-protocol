# NVIDIA OmniDreams (v1.0.0-genesis) · Protocol Core Release

We are pleased to publish the genesis release of **NVIDIA OmniDreams ($DREAMS)** protocol core, smart contracts, integration SDK, and onchain mathematical specifications.

---

### What's Included:
- **Core Smart Contracts (`contracts/`):**
  - `OmniDreamsToken.sol`: Fixed supply (1,000,000,000 $DREAMS) ERC-20 implementation.
  - `FeeEscrowDistributor.sol`: Autonomous 1.8% volume routing to tokenized $NVDA stock distributions.
- **Integration SDK (`@omnidreams/sdk`):**
  - High-precision integer bonding curve mathematics.
  - FeeEscrow $NVDA dividend projections.
  - Automated test suite (7/7 assertions passing).
- **Architecture & Specifications (`docs/`):**
  - Comprehensive mathematical specifications for 5s anti-snipe penalty decay.
  - Permanent Uniswap v4 liquidity lock parameters via LaunchLocker ($68K threshold).

---

### Verifiable Checksums & Contract Signatures:
```text
Compiler: Solidity v0.8.20 (Optimizer: 200 runs)
EVM Target: Paris / Shanghai (Robinhood Chain L2 · Chain ID: 92001)

OmniDreamsToken.sol SHA-256:
7c8f92e10a5b83d71e9823ab491c0e7d9834fa561928bc894b0d9345df46511e

FeeEscrowDistributor.sol SHA-256:
d82914fe83bc910a2738fa01726481bb59381640a89345df46511e1892e841f0
```
