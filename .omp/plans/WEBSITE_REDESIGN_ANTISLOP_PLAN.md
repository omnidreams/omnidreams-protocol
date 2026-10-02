# Implementation Plan: Production Website Redesign for NVIDIA OmniDreams ($DREAMS) (Vamp / Linear / Anti-Slop Aesthetic)

## Context
The goal is a complete, ground-up overhaul of the `$DREAMS` token landing page and interactive terminal (`website/`), eliminating all generic AI-generated slop (blurry radial neon orbs, copy-paste 4-card grids, fake buzzwords, and decorative emojis). The new design adopts the minimalist, high-density, dark engineering aesthetic exemplified by **vamplaunchpad.fun** and **Linear/Raycast** design systems (`DESIGN.md`, `antislop-ui`, Refero, and 21st.dev component patterns).

---

## Approach

### 1. Design System & Tokens (`DESIGN.md` & `website/styles.css`)
* **Color Palette (Strict 2-Color + Accent Scheme):**
  * Base Background: Solid matte dark graphite `#090C0A`
  * Card / Panel Surface: Elevated matte surface `#101412` with subpixel border `1px solid rgba(255, 255, 255, 0.07)`
  * Text Primary: Warm crisp off-white `#F5F7F5`
  * Text Secondary / Muted: Architectural slate `#839188`
  * Primary Accent: Focused electric Nvidia Green `#76B900` (strictly capped at 1 primary focal point per screen)
  * Secondary Border Hover: Subtle green outline `rgba(118, 185, 0, 0.35)`
* **Typography:**
  * UI Text & Headings: Modern geometric sans-serif (Inter / system-ui) with tight tracking (`tracking-tight`)
  * Data, Numbers, Telemetry, and Contract Addresses: Monospaced font (`font-mono`, `font-feature-settings: "tnum"`) to prevent tabular layout shifts
* **Forbidden Elements (Anti-Slop Enforcement):**
  * NO em dashes (`—`) in UI copy (R-02)
  * NO floating radial blurred glow blobs or rainbow gradients (R-01)
  * NO decorative emojis (🚀, 🔥, 📈, 🧠) in headings, buttons, or list items (R-04)
  * NO pill-shaped cards or pill containers (R-11)
  * NO buzzword fluff ("Revolutionary", "AI-Powered", "Seamless") (R-16)

---

### 2. Information Architecture & Section Flow (`website/index.html`)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ 1. Sticky Navigation Bar (Logo, Symbol, Live Status Dot, CA, Swap CTA)   │
├──────────────────────────────────────────────────────────────────────────┤
│ 2. Hero Section: Asymmetric Split Screen                                 │
│    ├─ Left Column: Hard Tech Thesis, Robinhood Chain, 1-Click CA Box     │
│    └─ Right Column: Interactive Pons v2 Swap Terminal Simulator          │
├──────────────────────────────────────────────────────────────────────────┤
│ 3. Protocol Architecture & Flow (Vamp-style SVG Flow Lines)              │
│    Nvidia Research Lab ➔ Robinhood Chain ($HOOD) ➔ $NVDA Pair ➔ FeeEscrow│
├──────────────────────────────────────────────────────────────────────────┤
│ 4. Live Bonding Curve Telemetry & Milestone Road (2x, 4x, Graduation)   │
├──────────────────────────────────────────────────────────────────────────┤
│ 5. Interactive $NVDA Dividend Matrix (Fluid Spring Kinetics Slider)      │
├──────────────────────────────────────────────────────────────────────────┤
│ 6. Technical Specification & Security Parameters (Developer Table)       │
├──────────────────────────────────────────────────────────────────────────┤
│ 7. No-Fluff Technical FAQ (Interactive Accordion)                        │
├──────────────────────────────────────────────────────────────────────────┤
│ 8. Clean Minimalist Footer (Contract verified link, Explorer, Docs, X)   │
└──────────────────────────────────────────────────────────────────────────┘
```

#### Detailed Section Specifications:

1. **Header (`<header>`):**
   * Left: SVG Vector Logo + Brand Wordmark `OmniDreams` + ticker badge `$DREAMS`
   * Center: Clean text links (`Architecture`, `Terminal`, `Bonding Curve`, `Dividends`, `Docs`)
   * Right: Twitter/X link, Nvidia Research paper link, and high-contrast `Trade on Pons v2` action button

2. **Hero Split Screen:**
   * **Left:** 
     * Network pill: `Robinhood Chain (EVM L2 · Chain ID: 92001)`
     * Headline: *Generative World Models. Onchain Spatial Compute.*
     * Narrative: Bridging Nvidia Research architecture to Robinhood Chain. 100% fair launch on Pons v2, paired natively with tokenized $NVDA.
     * Interactive CA Box with 1-click clipboard copy and toast indicator.
   * **Right (Interactive Pons v2 Swap Terminal Widget):**
     * Input box `You Pay: ETH / NVDA` with quick-fill presets (`0.05`, `0.1`, `0.25`, `0.5 ETH`).
     * Output box `You Receive: $DREAMS` (real-time bonding curve rate calculation).
     * Slippage settings selector (`2.5%`, `3.5%`, `5.0%`).
     * Breakdown row: `1.8% Creator Tax ($NVDA)`, `Gas Est. (<$0.01)`, `Price Impact (<0.1%)`.
     * Action button: `Swap on Pons v2` (opens direct token launchpad URL).

3. **Asset & Value Flow (Matching Vamp's SVG Line Visuals):**
   * Visual pipeline connecting 4 tangible nodes:
     1. `01 / Nvidia Research`: Autonomous physics simulation & closed-loop generative world models.
     2. `02 / Pons v2 Fair Curve`: 1B fixed supply deposited with 5s anti-snipe protection.
     3. `03 / Robinhood Chain`: Instant L2 finality and sub-cent transaction fees.
     4. `04 / FeeEscrow & $NVDA`: 1.8% volume tax automatically routed into tokenized stock dividends.

4. **Bonding Curve Telemetry & Laddered Milestones:**
   * Visual progress bar showing bonding curve migration from `$3,800` start to `$68,000` graduation cap.
   * Milestone indicators:
     * `Start ($3,800 MC)`: Dev allocation (0.15 ETH) secured.
     * `2.0x ($7,600 MC)`: TP1 Trigger - 30% dev sold (100% principal safe).
     * `4.0x ($15,200 MC)`: TP2 Trigger - 30% dev sold (Net profit secured).
     * `Graduation ($68,000 MC)`: 100% Liquidity permanently locked in Uniswap v4 via LaunchLocker.

5. **Interactive $NVDA Dividend Matrix (Kinetics-driven):**
   * Dual input sliders: 24h Trading Volume (`$5,000` to `$250,000`) and User Bag (`1M` to `50M $DREAMS`).
   * Real-time reactive cards with instant tabular calculation:
     * `Total Daily Tax Pool`
     * `Your Daily $NVDA Share`
     * `Your Monthly $NVDA Share`
     * `Estimated Annualized APR`

6. **Technical Specification Table (Stripe/Vercel Developer Format):**
   * Clean 8-row key-value table:
     * `Contract Address`: `0x6a85347687893420e4eb894b0d9345df46511e18`
     * `Standard`: `ERC-20 (Fixed Supply, No Mint Function)`
     * `Network`: `Robinhood Chain L2 (92001)`
     * `Quote Asset`: `NVDA (Tokenized NVIDIA Stock)`
     * `Total Supply`: `1,000,000,000 DREAMS`
     * `Tax Structure`: `1.8% (180 BPS) via Pons FeeEscrow`
     * `Anti-Snipe`: `99% Penalty Decay over 5 Blocks/Seconds`
     * `Liquidity Lock`: `LaunchLocker Permanent Timelock on Uniswap v4`

7. **No-Fluff Technical FAQ:**
   * 4 practical questions with keyboard-navigable accessible accordion panels.

8. **Footer:**
   * Minimal single-line footer with CA snippet, network status, and outbound links.

---

### 3. JavaScript & Reactivity Engine (`website/app.js`)
* **Zero External JS Dependencies:** Pure vanilla JavaScript running high-speed DOM updates.
* **Reactive Swap Terminal Engine:**
  * Calculates exact token return based on bonding curve price slope: $P(s) = k \cdot s$.
  * Updates breakdown lines in real-time as user types or clicks preset buttons.
* **Reactive Dividend Calculator:**
  * Calculates user dividend share: $\text{Daily} = \text{Volume} \times 0.018 \times \frac{\text{Bag}}{1,000,000,000}$.
  * Calculates APR relative to current curve market cap.
* **Clipboard Copy Engine:**
  * Handles navigator.clipboard with fallback for older browsers and displays bottom-right toast notification.
* **Accessible Accordion & Mobile Menu:**
  * Full keyboard support (`Enter`, `Space`, `Tab`) and ARIA expanded state management.

---

## Critical Files & Anchors

1. `C:/Users/deka/Documents/start/DESIGN.md`
   * **Purpose:** Design tokens, palette rules, typography standards, and antislop compliance constraints.
2. `C:/Users/deka/Documents/start/website/index.html`
   * **Purpose:** High-density, semantic HTML5 structure with split-screen hero and interactive widgets.
3. `C:/Users/deka/Documents/start/website/styles.css`
   * **Purpose:** Custom CSS for Linear/Vamp dark aesthetic, custom range sliders, tabular monospaced numbers, and subpixel borders.
4. `C:/Users/deka/Documents/start/website/app.js`
   * **Purpose:** Client-side reactivity for swap simulator, volume dividend calculator, clipboard copy, and accordion states.
5. `C:/Users/deka/Documents/start/website/emblem.svg`
   * **Purpose:** 2D flat minimalist vector logo asset.

---

## Verification & Acceptance Criteria

1. **Anti-Slop Audit Checklist:**
   * Zero em dashes (`—`) across all files.
   * Zero decorative emojis in UI elements.
   * Zero blurred rainbow radial background blobs.
   * Active color palette strictly adheres to dark graphite + electric lime `#76B900` accent.
2. **Interactive Functionality Verification:**
   * Swap simulator: changing input ETH value (e.g. `0.1 ETH`) dynamically recalculates estimated `$DREAMS` output and fee breakdown.
   * Dividend calculator: dragging volume slider to `$50,000` and bag slider to `10M` calculates `$9.00/day` ($270.00/mo) in $NVDA rewards.
   * Copy CA button: copies `0x6a85347687893420e4eb894b0d9345df46511e18` and triggers toast notification.
   * Accordion: toggles smoothly without layout jumps.
3. **Syntax & Code Quality:**
   * HTML parses validly without unclosed tags.
   * CSS validates without syntax errors.
   * JS passes syntax validation via Node/Bun kernel without runtime exceptions.
4. **Responsive Integrity:**
   * Split-screen hero cleanly stacks on mobile screens (< 768px) with zero horizontal scroll overflow.

---

## Assumptions & Contingencies
* **Assumption 1:** The user intends to use the website as a lightweight static client-side bundle (HTML/CSS/JS) runnable on any static host (Vercel, Netlify, GitHub Pages, or local browser).
  * *Contingency:* If a React/Next.js framework is requested later, the HTML/CSS components are modular and directly portable to Tailwind/React JSX.
* **Assumption 2:** The contract address `0x6a85347687893420e4eb894b0d9345df46511e18` serves as the initial placeholder until live deployment on Pons v2.
  * *Contingency:* `config.json` and `index.html` have the address anchored in a single DOM element for instant 1-click updates upon live launch.
