# NVIDIA OmniDreams ($DREAMS) Protocol Core

<p align="center">
  <img src="website/emblem.svg" alt="OmniDreams Emblem" width="90" height="90" />
</p>

<p align="center">
  <strong>Generative World Models. Onchain Spatial Compute.</strong><br>
  <em>One transaction. Fixed supply ERC-20. Real Pons v2 bonding curve. Automated $NVDA stock yield.</em>
  <img src="https://img.shields.io/badge/Tests-7%20passed-111111?style=flat-square&logo=github&color=A3E635" alt="Tests">
  <a href="https://omnidreams.xyz"><img src="https://img.shields.io/badge/Website-omnidreams.xyz-111111?style=flat-square&logo=google-chrome&logoColor=A3E635" alt="Website"></a>
  <a href="https://ponsfamily.com/launchpad/create"><img src="https://img.shields.io/badge/Launchpad-Pons%20v2-111111?style=flat-square&logo=ethereum&logoColor=A3E635" alt="Launchpad"></a>
  <img src="https://img.shields.io/badge/Network-Robinhood%20Chain%20(92001)-111111?style=flat-square" alt="Network">
  <img src="https://img.shields.io/badge/License-MIT-111111?style=flat-square" alt="License">
</p>

---

## What Makes It Useful

The open contract engine and developer SDK behind **NVIDIA OmniDreams ($DREAMS)**:
- **Autonomous Spatial Models:** Bridging generative physical world simulations from NVIDIA Research / Toronto AI Lab directly to decentralized execution.
- **Fixed Supply & Fair Curve:** 1,000,000,000 tokens minted once directly into the Pons v2 bonding curve. Zero developer pre-allocation.
- **Anti-Snipe Protection:** 99% penalty decay over 5 blocks / seconds post-deployment to protect organic participants.
- **Automated $NVDA Dividends:** 1.8% (180 BPS) fee collected on every buy/sell trade via Pons `FeeEscrow` and routed into tokenized NVIDIA stock ($NVDA) yield pools.
- **Permanent Liquidity Lock:** 100% reserve liquidity migrated and burned on Uniswap v4 via `LaunchLocker` at $68,000 market cap threshold.

---

## Repository Structure

```text
├── contracts/
│   ├── OmniDreamsToken.sol       # Production ERC-20 fixed-supply token
│   └── FeeEscrowDistributor.sol  # 1.8% volume routing to tokenized $NVDA shares
├── sdk/
│   └── index.mjs                 # Integration toolkit, integer math & fee preview
├── docs/
│   ├── ARCHITECTURE.md           # Mathematical tokenomics & FeeEscrow mechanics
│   └── DEPLOYMENT.md             # Onchain verification & Robinhood Chain L2 parameters
├── examples/
│   └── preview.mjs               # Offline runnable integration preview
├── test/
│   └── sdk.test.mjs              # Automated mathematical & invariant unit tests
├── website/                      # High-density dark engineering landing page
├── foundry.toml                  # Pinned Solidity 0.8.20 compiler configuration
├── CONTRIBUTING.md               # Developer contribution guidelines
├── SECURITY.md                   # Security disclosure policy
└── LICENSE                       # MIT License
```

---

## Architecture & Value Flow

```text
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│    01 / RESEARCH     │      │   02 / PONS CURVE    │      │  03 / HOOD CHAIN L2  │      │   04 / FEE ESCROW    │
├──────────────────────┤      ├──────────────────────┤      ├──────────────────────┤      ├──────────────────────┤
│ NVIDIA Research Lab  │ ───► │ 1B $DREAMS Supply    │ ───► │ Sub-cent Gas Finality│ ───► │ 1.8% Fee Allocation  │
│ World Model Sim      │      │ 5s Anti-Snipe Decay  │      │ Tokenized NVDA Pair  │      │ Direct $NVDA Rewards │
└──────────────────────┘      └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

---

## Quick Start & Integration Toolkit

### Install Dependencies & Run Tests

```bash
git clone https://github.com/omnidreams/omnidreams-protocol.git
cd omnidreams-protocol
bun test
```

### Run SDK Example
```bash
bun examples/preview.mjs
```

---

## Contract Surface & Verifiable Parameters

| Entry point / Parameter | Value / Signature | Purpose |
| :--- | :--- | :--- |
| **Token Name** | `NVIDIA OmniDreams` | Canonical token name |
| **Token Symbol** | `$DREAMS` | Trading ticker |
| **Network** | Robinhood Chain (HOOD) | EVM L2 (Chain ID: `92001`) |
| **Quote Asset** | `NVDA` | Tokenized NVIDIA Stock |
| **Total Supply** | `1,000,000,000 DREAMS` | Fixed, No Mint, No Blacklist |
| **Creator Tax Rate** | `1.8%` (180 BPS) | Automated via Pons FeeEscrow |
| **Starting Market Cap** | `$3,800` | Trench Curve Start |
| **Graduation Market Cap**| `$68,000` | Permanent LP Burn on Uniswap v4 |
| **Contract Address (CA)**| `SOON...` | Revealing on Pons v2 Launch |

---

## Scope & Trust

This repository isolates the contract engine, mathematical models, and integration toolkit for NVIDIA OmniDreams. No private keys, deployer secrets, or hosted RPC credentials are committed.

- **Architecture Details:** See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
- **Audits & Security:** Report issues to `security@omnidreams.xyz`. See [SECURITY.md](SECURITY.md).
- **Contributions:** Pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

Distributed under the [MIT License](LICENSE).
