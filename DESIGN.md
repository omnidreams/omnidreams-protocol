# DESIGN.md - NVIDIA OmniDreams ($DREAMS) Design System

## Design Read
- **Product:** NVIDIA OmniDreams ($DREAMS) On-Chain World Model & Fair Launch Protocol
- **Audience:** Crypto-native engineers, quant traders, and L2 DeFi participants
- **Visual Language:** High-density dark engineering aesthetic, minimalist data telemetry, matte graphite panels, subpixel borders
- **Dials:** ENERGY 2 / RHYTHM 3 / MOTION 1

---

## 1. Palette & Surface Tokens (Strict 2-Color + Accent)
- **Base Canvas:** `#090C0A` (Solid matte dark graphite, zero radial background glow)
- **Panel Surface:** `#101412` (Elevated matte panel)
- **Panel Inset / Sub-Surface:** `#0C100E` (Deep inset containers for inputs and telemetry)
- **Subpixel Border:** `rgba(255, 255, 255, 0.07)` (1px solid crisp separation)
- **Subpixel Border Hover:** `rgba(118, 185, 0, 0.35)`
- **Text Primary:** `#F5F7F5` (Warm crisp off-white, high-contrast, WCAG AAA)
- **Text Secondary / Muted:** `#839188` (Architectural slate, WCAG AA compliant on dark canvas)
- **Text Dim / Micro:** `#56635B` (Captions, timestamps, secondary labels)
- **Primary Accent:** `#76B900` (Electric Nvidia Green, strictly capped at 1 primary focal point per viewport)
- **Accent Muted / Background:** `rgba(118, 185, 0, 0.10)`
- **Accent Border:** `rgba(118, 185, 0, 0.25)`

---

## 2. Typography
- **Headings & Primary UI:** System geometric sans-serif (`Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`) with tight letter-spacing (`-0.02em` to `-0.03em`)
- **Telemetry, Figures, Contract Addresses, Ratios:** Monospaced stack (`JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `monospace`) with `font-feature-settings: "tnum"` to guarantee zero tabular layout shifts during numeric changes
- **Line Heights:** Compact, high-density (`1.2` for headings, `1.5` for body text)

---

## 3. Elevation, Radius & Geometry
- **Elevation:** Flat matte elevation plane; zero soft floating blurry shadows. Depth is achieved strictly through value contrast (`#090C0A` canvas vs `#101412` panel vs `#0C100E` inset) and 1px crisp subpixel borders.
- **Radii:**
  - Card & Container Radius: `12px` (`rounded-xl`)
  - Input & Micro-Interactive Radius: `8px` (`rounded-lg`)
  - Status Indicators & Micro-Chips: `4px` (`rounded`)
  - **No pill cards or pill containers (R-11).**

---

## 4. Anti-Slop Enforcements
- **R-01 (Color & Gradients):** Zero generic rainbow or blue-purple gradients. Zero radial blurred ambient glow blobs.
- **R-02 (Copywriting):** Zero em dashes (`—`) across all UI copy and documentation. Replaced with commas, colons, or parentheses.
- **R-04 (Icons & Emojis):** Zero decorative emojis (no rockets, fire, brain, charts). Icons must be clean semantic SVG line vectors.
- **R-05 (Layout Rhythm):** Section rhythm is varied (RHYTHM 3): Asymmetric split-screen hero (thesis + live terminal), horizontal SVG architecture pipeline, interactive bonding curve telemetry bar, kinetic dividend matrix slider, and Stripe/Vercel developer key-value specification table.
- **R-10 (Glassmorphism):** Glassmorphism restricted strictly to sticky header bar (`backdrop-filter: blur(12px)`). All content cards are solid matte surfaces.
- **R-11 (Border Radius):** Uniform crisp geometric radii; no pill containers.
- **R-13 (Glow Cap):** Glow is capped strictly at 1 focal point per screen.
- **R-16 (No Buzzwords):** Zero empty marketing buzzwords ("Revolutionary", "AI-Powered", "Seamless", "Next Generation"). Replaced with concrete verifiable engineering parameters.
- **R-26 & R-32 (Functionality & Accessibility):** 100% interactive elements work with keyboard and mouse (real slider computation, real bonding curve math, real clipboard copy with toast, real accordion state).

---

## 5. Major Decision Justifications (R-31 Compliance)
1. **Palette (`#090C0A` + `#76B900`):** Grounded in Nvidia corporate brand identity and Robinhood Chain terminal dark mode.
2. **Asymmetric Hero Split:** Couples the foundational research thesis directly with an interactive Pons v2 swap simulator so users experience the product immediately without scrolling.
3. **Monospaced Figures:** Prevents jitter during fluid slider dragging and live rate recalculation.
4. **Developer Spec Table:** Delivers immediate verifiable on-chain parameters for L2 smart contract verification instead of generic feature marketing cards.
5. **No Em Dashes or Emojis:** Maintains crisp, serious technical engineering tone appropriate for financial and algorithmic world model infrastructure.
