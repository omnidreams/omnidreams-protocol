#!/usr/bin/env python3
"""
take_profit_calculator.py

Simulation and execution tool for:
1. Laddered dev bag exits (30% at 2x, 30% at 4x, 40% moonbag hold) using true Bonding Curve integral dynamics
2. Cumulative Creator Tax (1.8%) revenue projection across volume tiers

Usage:
    python scripts/take_profit_calculator.py
    python scripts/take_profit_calculator.py --eth-buy 0.15 --tax 1.8 --volume 30000
"""

import argparse
import sys

def calculate_laddered_exit(
    initial_eth_buy: float = 0.15,
    eth_price_usd: float = 2600.0,
    initial_mc_usd: float = 3800.0,
    tp1_mult: float = 2.0,
    tp1_pct: float = 30.0,
    tp2_mult: float = 4.0,
    tp2_pct: float = 30.0,
    graduation_mc_usd: float = 68000.0,
    hold_pct: float = 40.0
):
    """
    Simulates bonding curve dev allocation returns using integral reserve pricing:
    Reserve curve: R(s) = (1/2) * k * s^2
    Initial dev buy from 0 to s0 costs R(s0) = (1/2) * k * s0^2 = initial_eth_buy
    Spot price P(s) = k * s.
    
    When market cap / spot price reaches multiplier M, state s_M = M * s0.
    Selling delta_s = (pct / 100) * s0 returns:
    Delta_R = R(s_M) - R(s_M - delta_s) = (1/2) * k * [ s_M^2 - (s_M - delta_s)^2 ]
            = initial_eth_buy * [ M^2 - (M - pct/100)^2 ]
    """
    dev_buy_usd = initial_eth_buy * eth_price_usd
    dev_share_pct = (dev_buy_usd / initial_mc_usd) * 100.0
    
    # TP 1 at 2x:
    mc_tp1 = initial_mc_usd * tp1_mult
    f_tp1 = tp1_pct / 100.0
    factor_tp1 = (tp1_mult ** 2) - ((tp1_mult - f_tp1) ** 2)
    cashout_tp1_eth = initial_eth_buy * factor_tp1
    cashout_tp1_usd = cashout_tp1_eth * eth_price_usd
    
    # TP 2 at 4x:
    mc_tp2 = initial_mc_usd * tp2_mult
    f_tp2 = tp2_pct / 100.0
    factor_tp2 = (tp2_mult ** 2) - ((tp2_mult - f_tp2) ** 2)
    cashout_tp2_eth = initial_eth_buy * factor_tp2
    cashout_tp2_usd = cashout_tp2_eth * eth_price_usd
    
    # Net realized profit from TP1 + TP2:
    total_realized_eth = cashout_tp1_eth + cashout_tp2_eth
    total_realized_usd = total_realized_eth * eth_price_usd
    net_realized_eth = total_realized_eth - initial_eth_buy
    net_realized_usd = net_realized_eth * eth_price_usd
    
    # Moonbag at Graduation (~$68K MC):
    grad_mult = graduation_mc_usd / initial_mc_usd
    f_hold = hold_pct / 100.0
    factor_grad = (grad_mult ** 2) - ((grad_mult - f_hold) ** 2)
    moonbag_val_eth = initial_eth_buy * factor_grad
    moonbag_val_usd = moonbag_val_eth * eth_price_usd
    
    return {
        "dev_buy_eth": initial_eth_buy,
        "dev_buy_usd": dev_buy_usd,
        "dev_share_pct": dev_share_pct,
        "tp1": {
            "multiplier": tp1_mult,
            "mc_usd": mc_tp1,
            "sell_pct": tp1_pct,
            "cashout_usd": cashout_tp1_usd,
            "cashout_eth": cashout_tp1_eth
        },
        "tp2": {
            "multiplier": tp2_mult,
            "mc_usd": mc_tp2,
            "sell_pct": tp2_pct,
            "cashout_usd": cashout_tp2_usd,
            "cashout_eth": cashout_tp2_eth
        },
        "total_realized_eth": total_realized_eth,
        "total_realized_usd": total_realized_usd,
        "net_realized_eth": net_realized_eth,
        "net_realized_usd": net_realized_usd,
        "moonbag_graduation": {
            "mc_usd": graduation_mc_usd,
            "multiplier": grad_mult,
            "held_pct": hold_pct,
            "val_usd": moonbag_val_usd,
            "val_eth": moonbag_val_eth
        }
    }

def calculate_creator_tax(
    volume_usd: float,
    tax_rate_pct: float = 1.8,
    eth_price_usd: float = 2600.0
):
    """
    Calculates Creator Tax fee accumulation from secondary trading volume.
    """
    tax_usd = volume_usd * (tax_rate_pct / 100.0)
    tax_eth = tax_usd / eth_price_usd
    return {
        "volume_usd": volume_usd,
        "tax_rate_pct": tax_rate_pct,
        "tax_usd": tax_usd,
        "tax_eth": tax_eth
    }

def run_simulation(eth_buy=0.15, tax_rate=1.8, volume=30000.0, eth_price=2600.0):
    print("=" * 75)
    print("  🚀 NVIDIA OmniDreams ($DREAMS) — PONS v2 EXIT & REVENUE SIMULATION")
    print("=" * 75)
    
    ladder = calculate_laddered_exit(initial_eth_buy=eth_buy, eth_price_usd=eth_price)
    
    print("\n[1] INITIAL DEV ALLOCATION")
    print(f"  • Initial Dev Buy:       {ladder['dev_buy_eth']:.3f} ETH (${ladder['dev_buy_usd']:.2f} @ ${eth_price:,.0f}/ETH)")
    print(f"  • Initial Market Cap:    $3,800.00")
    print(f"  • Est. Supply Acquired:  {ladder['dev_share_pct']:.2f}% (Lowest bonding curve price tier)")
    
    print("\n[2] LADDERED EXIT EXECUTION ON BONDING CURVE")
    tp1 = ladder["tp1"]
    print(f"  • Step 1 (TP 1 @ {tp1['multiplier']:.1f}x / ${tp1['mc_usd']:,.0f} MC):")
    print(f"      - Action: Sell {tp1['sell_pct']:.0f}% of dev bag")
    print(f"      - Proceeds: {tp1['cashout_eth']:.4f} ETH (${tp1['cashout_usd']:,.2f})")
    print(f"      - Capital Status: 100% of initial principal ({eth_buy:.3f} ETH) FULLY RECOVERED (+{tp1['cashout_eth']-eth_buy:.4f} ETH surplus)")
    
    tp2 = ladder["tp2"]
    print(f"\n  • Step 2 (TP 2 @ {tp2['multiplier']:.1f}x / ${tp2['mc_usd']:,.0f} MC):")
    print(f"      - Action: Sell {tp2['sell_pct']:.0f}% of initial dev bag")
    print(f"      - Proceeds: {tp2['cashout_eth']:.4f} ETH (${tp2['cashout_usd']:,.2f})")
    print(f"      - Capital Status: Pure profit locked directly to creator wallet")
    
    print(f"\n  >>> TOTAL REALIZED FROM 2x + 4x SELLS:")
    print(f"      - Gross Proceeds: {ladder['total_realized_eth']:.4f} ETH (${ladder['total_realized_usd']:,.2f})")
    print(f"      - Initial Cost:   {ladder['dev_buy_eth']:.4f} ETH")
    print(f"      - Net Profit:     +{ladder['net_realized_eth']:.4f} ETH (+${ladder['net_realized_usd']:,.2f})")
    
    mb = ladder["moonbag_graduation"]
    print(f"\n  • Step 3 (Graduation Hold - {mb['held_pct']:.0f}% Moonbag @ ${mb['mc_usd']:,.0f} MC):")
    print(f"      - Curve Multiple: {mb['multiplier']:.1f}x")
    print(f"      - Moonbag Value:  {mb['val_eth']:.4f} ETH (${mb['val_usd']:,.2f})")
    print(f"      - Liquidity: Permanently locked into Uniswap v4 via LaunchLocker")

    print("\n" + "-" * 75)
    print(f"[3] CREATOR TAX ACCUMULATION (Fee Escrow @ {tax_rate}%)")
    volumes = [10000.0, 20000.0, volume, 50000.0, 80000.0, 100000.0]
    volumes = sorted(list(set(volumes)))
    
    print(f"{'Volume (USD)':<16} | {'Creator Tax (USD)':<20} | {'Creator Tax (ETH)':<18}")
    print("-" * 65)
    for v in volumes:
        tax_res = calculate_creator_tax(v, tax_rate_pct=tax_rate, eth_price_usd=eth_price)
        highlight = " <== (Target Volume)" if v == volume else ""
        print(f"${v:<15,.0f} | ${tax_res['tax_usd']:<19,.2f} | {tax_res['tax_eth']:<17.4f} ETH{highlight}")
        
    tax_target = calculate_creator_tax(volume, tax_rate_pct=tax_rate, eth_price_usd=eth_price)
    
    print("\n" + "=" * 75)
    print(f"[4] COMBINED LAUNCH PROJECTIONS AT TARGET VOLUME (${volume:,.0f}):")
    combined_eth = ladder['total_realized_eth'] + tax_target['tax_eth']
    combined_usd = ladder['total_realized_usd'] + tax_target['tax_usd']
    net_combined_eth = combined_eth - ladder['dev_buy_eth']
    net_combined_usd = combined_usd - ladder['dev_buy_usd']
    
    print(f"  • Realized Dev Bag Exit:  {ladder['total_realized_eth']:.4f} ETH (${ladder['total_realized_usd']:,.2f}) [Net: +{ladder['net_realized_eth']:.4f} ETH]")
    print(f"  • Creator Tax Revenue:    {tax_target['tax_eth']:.4f} ETH (${tax_target['tax_usd']:,.2f})")
    print(f"  • TOTAL GROSS REVENUE:    {combined_eth:.4f} ETH (${combined_usd:,.2f})")
    print(f"  • NET REVENUE (MINUS BUY):+{net_combined_eth:.4f} ETH (+${net_combined_usd:,.2f})")
    print(f"  • + RETAINED MOONBAG:     {mb['val_eth']:.4f} ETH (${mb['val_usd']:,.2f}) at graduation")
    print("=" * 75)
    
    # Verification Gate:
    # 0.15 ETH buy with 30%/30%/40% ladder exit at 2x/4x returns >= 0.35 ETH net
    # and >= $500 in tax revenue on $30K volume.
    net_exit_ok = ladder['net_realized_eth'] >= 0.35
    tax_ok = tax_target['tax_usd'] >= 500.0
    
    print("\n[VERIFICATION GATE RESULTS]")
    print(f"  ✓ Dev Bag 2x/4x Net Realized Exit >= 0.35 ETH: {ladder['net_realized_eth']:.4f} ETH -> {'PASS' if net_exit_ok else 'FAIL'}")
    print(f"  ✓ Creator Tax @ $30K Volume >= $500:          ${tax_target['tax_usd']:.2f} -> {'PASS' if tax_ok else 'FAIL'}")
    
    if net_exit_ok and tax_ok:
        print("  >>> STATUS: ALL VERIFICATION CRITERIA PASSED.")
        return 0
    else:
        print("  >>> STATUS: CRITERIA CHECK FAILED.")
        return 1

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Pons v2 Take-Profit & Tax Calculator")
    parser.add_argument("--eth-buy", type=float, default=0.15, help="Dev buy in ETH (default: 0.15)")
    parser.add_argument("--tax", type=float, default=1.8, help="Creator tax percent (default: 1.8)")
    parser.add_argument("--volume", type=float, default=30000.0, help="Volume in USD (default: 30000.0)")
    parser.add_argument("--eth-price", type=float, default=2600.0, help="ETH price in USD (default: 2600.0)")
    args = parser.parse_args()
    
    sys.exit(run_simulation(
        eth_buy=args.eth_buy,
        tax_rate=args.tax,
        volume=args.volume,
        eth_price=args.eth_price
    ))
