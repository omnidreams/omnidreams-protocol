# Verification & Deployment Guide

This document outlines the onchain verification parameters for **NVIDIA OmniDreams ($DREAMS)** on Robinhood Chain L2.

## Network Configurations
- **Network Name:** Robinhood Chain
- **EVM Chain ID:** `92001`
- **Native Currency:** ETH (Sub-cent execution)
- **Explorer:** `https://explorer.robinhood.com`
- **RPC Endpoint:** `https://rpc.robinhood.com`

## Contract Verification Invariants
1. **OmniDreamsToken.sol:**
   - Compiler: `v0.8.20+commit.a1b79de6`
   - Optimization: Enabled (200 runs)
   - EVM Version: `paris` / `shanghai`
   - Total Supply: `1000000000000000000000000000` (1B with 18 decimals)

2. **FeeEscrowDistributor.sol:**
   - Tax Rate: `180` Basis Points (1.8%)
   - Routing: Tokenized $NVDA Equity Pair
