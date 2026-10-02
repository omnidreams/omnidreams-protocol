# Changelog

All notable changes to the NVIDIA OmniDreams ($DREAMS) Protocol will be documented in this file.

## [1.0.0] - 2026-10-02

### Added
- Canonical fixed-supply ERC-20 smart contract (`OmniDreamsToken.sol`).
- Autonomous 1.8% FeeEscrow dividend distributor (`FeeEscrowDistributor.sol`).
- Complete integration SDK (`@omnidreams/sdk`) with integer bonding curve mathematics.
- Architectural mathematical specifications for 5-second anti-snipe linear decay (`docs/ARCHITECTURE.md`).
- Deployment invariants and Robinhood Chain L2 parameters (`docs/DEPLOYMENT.md`).
- Automated mathematical invariant unit test suite (`test/sdk.test.mjs`).
- Minimalist production web interface (`website/`).
