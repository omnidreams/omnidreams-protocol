/**
 * NVIDIA OmniDreams ($DREAMS) : Client Reactivity & Telemetry Engine
 * Zero external libraries; lightweight vanilla DOM reactivity.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Contract Address 1-Click Clipboard Engine
  const copyBtn = document.getElementById("copy-ca-btn");
  const caTextElem = document.getElementById("ca-address-display");
  const toast = document.getElementById("copy-toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    const toastText = toast.querySelector(".toast-text");
    if (toastText) {
      toastText.textContent = message;
    }
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  if (copyBtn && caTextElem) {
    copyBtn.addEventListener("click", async () => {
      const address = caTextElem.textContent.trim();
      if (address.includes("SOON")) {
        showToast("Official CA will be published upon Pons v2 launch!");
        return;
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(address);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = address;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
        showToast("Contract address copied to clipboard!");
      } catch (err) {
        showToast("Address: " + address.substring(0, 10) + "...");
      }
    });
  }

  // 2. Interactive Pons v2 Swap Terminal Engine
  const swapInput = document.getElementById("swap-input-amount");
  const swapOutput = document.getElementById("swap-output-amount");
  const swapShareVal = document.getElementById("swap-share-val");
  const breakdownRate = document.getElementById("breakdown-rate");
  const breakdownTax = document.getElementById("breakdown-tax");
  const breakdownImpact = document.getElementById("breakdown-impact");
  const presetChips = document.querySelectorAll(".preset-btn");
  const slipButtons = document.querySelectorAll(".slip-btn");

  const TOTAL_SUPPLY = 1_000_000_000;
  const ETH_PRICE_USD = 3000; // Reference price for estimations
  const BASE_TOKENS_PER_ETH = 263_157_890; // Initial curve rate (~$3,800 starting cap)

  function updateSwapCalculations() {
    if (!swapInput || !swapOutput) return;

    let ethVal = parseFloat(swapInput.value);
    if (isNaN(ethVal) || ethVal <= 0) {
      ethVal = 0;
    }

    // Dynamic bonding curve output with slight price impact curve
    const priceImpactFactor = 1 - (ethVal * 0.015);
    const effectiveRate = BASE_TOKENS_PER_ETH * Math.max(0.75, priceImpactFactor);
    const tokensReceived = Math.round(ethVal * effectiveRate);

    // Share of total supply
    const supplySharePercent = ((tokensReceived / TOTAL_SUPPLY) * 100).toFixed(2);

    // 1.8% Tax in ETH & USD
    const taxEth = (ethVal * 0.018).toFixed(4);
    const taxUsd = (ethVal * 0.018 * ETH_PRICE_USD).toFixed(2);

    // Estimated Price Impact
    const impactPercent = Math.min(12, (ethVal * 1.2)).toFixed(2);

    // Format numbers with commas
    swapOutput.value = tokensReceived.toLocaleString("en-US");
    if (swapShareVal) swapShareVal.textContent = supplySharePercent + "%";
    if (breakdownRate) breakdownRate.textContent = "1 ETH ≈ " + Math.round(effectiveRate).toLocaleString("en-US") + " DREAMS";
    if (breakdownTax) breakdownTax.textContent = taxEth + " ETH ($" + taxUsd + ")";
    if (breakdownImpact) breakdownImpact.textContent = "< " + impactPercent + "%";
  }

  if (swapInput) {
    swapInput.addEventListener("input", () => {
      // Clear active preset state if manually typed
      presetChips.forEach(chip => chip.classList.remove("active"));
      updateSwapCalculations();
    });
  }

  presetChips.forEach(chip => {
    chip.addEventListener("click", () => {
      presetChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const val = chip.getAttribute("data-val");
      if (swapInput && val) {
        swapInput.value = val;
        updateSwapCalculations();
      }
    });
  });

  slipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      slipButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // 3. Generative Spatial Canvas Matrix Visualizer (4D Torus Projection)
  const spatialCanvas = document.getElementById("spatial-canvas");
  const spatialCoords = document.getElementById("spatial-coords");
  if (spatialCanvas && spatialCanvas.getContext) {
    const ctx = spatialCanvas.getContext("2d");
    let animationFrameId;
    let t = 0;
    
    // Resize handler for crisp retina rendering
    function resizeSpatialCanvas() {
      const rect = spatialCanvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      spatialCanvas.width = rect.width * dpr;
      spatialCanvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }
    resizeSpatialCanvas();
    window.addEventListener("resize", resizeSpatialCanvas);

    // Particle nodes in spatial field
    const numPoints = 28;
    
    function drawSpatialField() {
      const rect = spatialCanvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      
      ctx.clearRect(0, 0, w, h);
      
      // Draw faint grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;
      const gridStep = 32;
      for (let x = 0; x < w; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      t += 0.02;
      const points = [];
      const cx = w / 2;
      const cy = h / 2;
      
      // Generate synthetic spatial torus projection
      for (let i = 0; i < numPoints; i++) {
        const u = (i / numPoints) * Math.PI * 2 + t * 0.4;
        const r1 = 50 + 15 * Math.sin(t * 0.8 + u);
        const r2 = 25 * Math.cos(t * 0.5 + u * 2);
        
        const px = cx + (r1 + r2 * Math.cos(u * 3)) * Math.cos(u) * 1.6;
        const py = cy + (r1 + r2 * Math.cos(u * 3)) * Math.sin(u) * 0.7;
        const z = Math.sin(u * 2 + t);
        
        points.push({ x: px, y: py, z: z });
      }

      // Draw vector connector links
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 75) {
            const alpha = (1 - dist / 75) * 0.35;
            ctx.strokeStyle = `rgba(118, 185, 0, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw vector vertices
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const radius = p.z > 0 ? 2.5 : 1.5;
        const alpha = p.z > 0 ? 0.9 : 0.4;
        
        ctx.fillStyle = `rgba(118, 185, 0, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        if (i === 0 && p.z > 0) {
          // Highlight primary vector focus
          ctx.strokeStyle = "rgba(245, 247, 245, 0.8)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Update telemetry text coords
      if (spatialCoords && Math.floor(t * 10) % 5 === 0) {
        const xVal = (Math.sin(t * 0.7) * 0.8).toFixed(3);
        const yVal = (Math.cos(t * 0.9) * 0.6).toFixed(3);
        const zVal = (Math.sin(t * 1.2) * 0.95).toFixed(3);
        spatialCoords.textContent = `ψ(t): [${xVal}, ${yVal}, ${zVal}]`;
      }

      animationFrameId = requestAnimationFrame(drawSpatialField);
    }
    
    drawSpatialField();
  }

  // 4. Interactive Dynamic Bonding Curve Chart
  const curveCanvas = document.getElementById("bonding-curve-canvas");
  const curveHoverInfo = document.getElementById("curve-hover-info");
  
  if (curveCanvas && curveCanvas.getContext) {
    const cCtx = curveCanvas.getContext("2d");
    let mouseX = -1;

    function resizeCurveCanvas() {
      const rect = curveCanvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      curveCanvas.width = rect.width * dpr;
      curveCanvas.height = rect.height * dpr;
      cCtx.scale(dpr, dpr);
      drawCurve();
    }

    function drawCurve() {
      const rect = curveCanvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      cCtx.clearRect(0, 0, w, h);

      // Margins
      const padLeft = 45;
      const padRight = 30;
      const padTop = 20;
      const padBottom = 30;
      const plotW = w - padLeft - padRight;
      const plotH = h - padTop - padBottom;

      // Draw grid lines
      cCtx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      cCtx.lineWidth = 1;

      // Horizontal grid
      for (let i = 0; i <= 4; i++) {
        const y = padTop + (plotH / 4) * i;
        cCtx.beginPath();
        cCtx.moveTo(padLeft, y);
        cCtx.lineTo(w - padRight, y);
        cCtx.stroke();
        
        // Y-axis labels
        const mcLabel = "$" + ((4 - i) * 17000).toLocaleString("en-US");
        cCtx.fillStyle = "rgba(131, 145, 136, 0.7)";
        cCtx.font = "9px 'JetBrains Mono', monospace";
        cCtx.textAlign = "right";
        cCtx.fillText(mcLabel, padLeft - 6, y + 3);
      }

      // Curve path: P(s) = k * s^1.8
      cCtx.beginPath();
      const currentProgressRatio = 0.183; // 18.3% current progress
      const points = [];

      for (let i = 0; i <= 100; i++) {
        const s = i / 100;
        const priceRatio = Math.pow(s, 1.75);
        const x = padLeft + s * plotW;
        const y = padTop + plotH - (priceRatio * plotH);
        points.push({ x, y, s });
        if (i === 0) {
          cCtx.moveTo(x, y);
        } else {
          cCtx.lineTo(x, y);
        }
      }

      // Draw gradient under the curve
      const grad = cCtx.createLinearGradient(0, padTop, 0, padTop + plotH);
      grad.addColorStop(0, "rgba(118, 185, 0, 0.25)");
      grad.addColorStop(1, "rgba(118, 185, 0, 0.0)");
      
      cCtx.save();
      cCtx.lineTo(padLeft + plotW, padTop + plotH);
      cCtx.lineTo(padLeft, padTop + plotH);
      cCtx.closePath();
      cCtx.fillStyle = grad;
      cCtx.fill();
      cCtx.restore();

      // Stroke curve line
      cCtx.strokeStyle = "#76B900";
      cCtx.lineWidth = 2.5;
      cCtx.stroke();

      // Draw Current Progress Marker
      const currentX = padLeft + currentProgressRatio * plotW;
      const currentY = padTop + plotH - (Math.pow(currentProgressRatio, 1.75) * plotH);
      
      cCtx.fillStyle = "#76B900";
      cCtx.beginPath();
      cCtx.arc(currentX, currentY, 5, 0, Math.PI * 2);
      cCtx.fill();
      cCtx.strokeStyle = "#FFFFFF";
      cCtx.lineWidth = 1.5;
      cCtx.stroke();

      // Current Point Marker Pulsing Ring
      cCtx.strokeStyle = "rgba(118, 185, 0, 0.5)";
      cCtx.beginPath();
      cCtx.arc(currentX, currentY, 10, 0, Math.PI * 2);
      cCtx.stroke();

      // Draw Graduation Cap Marker at 100%
      const gradX = padLeft + plotW;
      const gradY = padTop;
      cCtx.fillStyle = "#FFFFFF";
      cCtx.beginPath();
      cCtx.arc(gradX, gradY, 4, 0, Math.PI * 2);
      cCtx.fill();

      // Mouse Hover Inspection Crosshair
      if (mouseX >= padLeft && mouseX <= padLeft + plotW) {
        const hoverS = (mouseX - padLeft) / plotW;
        const hoverPriceRatio = Math.pow(hoverS, 1.75);
        const hoverY = padTop + plotH - (hoverPriceRatio * plotH);
        const hoverMC = Math.round(3800 + hoverPriceRatio * (68000 - 3800));
        const hoverTokensSold = Math.round(hoverS * 1_000_000_000);

        // Draw crosshair vertical line
        cCtx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        cCtx.lineWidth = 1;
        cCtx.setLineDash([3, 3]);
        cCtx.beginPath();
        cCtx.moveTo(mouseX, padTop);
        cCtx.lineTo(mouseX, padTop + plotH);
        cCtx.stroke();
        cCtx.setLineDash([]);

        // Hover point circle
        cCtx.fillStyle = "#FFFFFF";
        cCtx.beginPath();
        cCtx.arc(mouseX, hoverY, 4, 0, Math.PI * 2);
        cCtx.fill();

        // Update hover text
        if (curveHoverInfo) {
          curveHoverInfo.textContent = `Supply: ${(hoverS * 100).toFixed(1)}% (${hoverTokensSold.toLocaleString()} DREAMS) · MC: $${hoverMC.toLocaleString()}`;
        }
      } else {
        if (curveHoverInfo) {
          curveHoverInfo.textContent = "Hover along curve to inspect price points";
        }
      }
    }

    curveCanvas.addEventListener("mousemove", (e) => {
      const rect = curveCanvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      drawCurve();
    });

    curveCanvas.addEventListener("mouseleave", () => {
      mouseX = -1;
      drawCurve();
    });

    resizeCurveCanvas();
    window.addEventListener("resize", resizeCurveCanvas);
  }

  // 5. Live Simulated On-Chain Transaction Feed HUD
  const feedList = document.getElementById("activity-feed-list");
  const hudTaxPool = document.getElementById("hud-tax-pool");
  const hudHolders = document.getElementById("hud-holders-count");

  if (feedList) {
    let accumulatedTax = 2184.40;
    let holdersCount = 184;

    const dummyWallets = [
      "0x89f2...41a2", "0x3bc1...e981", "0xfa42...883c", 
      "0x110e...bb74", "0x7892...2310", "0x442c...e19f",
      "0xde81...001a", "0x992b...3f71", "0x00c4...77d3"
    ];

    function createFeedRow(type, wallet, ethAmt, dreamsAmt, timeStr) {
      const row = document.createElement("div");
      row.className = "activity-row";
      row.innerHTML = `
        <span class="activity-type ${type.toLowerCase()} font-mono">${type}</span>
        <span class="activity-wallet font-mono">${wallet}</span>
        <span class="activity-amount font-mono">${ethAmt} ETH <span class="text-dim">(${dreamsAmt} DREAMS)</span></span>
        <span class="activity-time font-mono">${timeStr}</span>
      `;
      return row;
    }

    // Seed initial rows
    const initialTrades = [
      { type: "BUY", wallet: "0x89f2...41a2", eth: "0.25", dreams: "65.5M", time: "3s ago" },
      { type: "BUY", wallet: "0x3bc1...e981", eth: "0.10", dreams: "26.3M", time: "18s ago" },
      { type: "BUY", wallet: "0xfa42...883c", eth: "0.50", dreams: "130.5M", time: "42s ago" },
      { type: "SELL", wallet: "0x110e...bb74", eth: "0.08", dreams: "21.0M", time: "1m ago" },
      { type: "BUY", wallet: "0x7892...2310", eth: "0.15", dreams: "39.4M", time: "2m ago" }
    ];

    initialTrades.forEach(t => {
      feedList.appendChild(createFeedRow(t.type, t.wallet, t.eth, t.dreams, t.time));
    });

    // Stream new live blocks periodically
    setInterval(() => {
      const isBuy = Math.random() > 0.25;
      const type = isBuy ? "BUY" : "SELL";
      const wallet = dummyWallets[Math.floor(Math.random() * dummyWallets.length)];
      const ethNum = isBuy ? (0.05 + Math.random() * 0.45) : (0.04 + Math.random() * 0.20);
      const ethAmt = ethNum.toFixed(2);
      const dreamsNum = (ethNum * 260).toFixed(1);
      const dreamsAmt = dreamsNum + "M";

      // Increment tax pool on buys & sells (1.8%)
      const taxAdd = ethNum * ETH_PRICE_USD * 0.018;
      accumulatedTax += taxAdd;
      if (isBuy && Math.random() > 0.6) {
        holdersCount += 1;
      }

      if (hudTaxPool) {
        hudTaxPool.textContent = "$" + accumulatedTax.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      if (hudHolders) {
        hudHolders.textContent = holdersCount.toString();
      }

      const newRow = createFeedRow(type, wallet, ethAmt, dreamsAmt, "just now");
      feedList.insertBefore(newRow, feedList.firstChild);

      // Keep maximum 6 rows in DOM
      if (feedList.children.length > 6) {
        feedList.removeChild(feedList.lastChild);
      }
    }, 4500);
  }

  // 6. Interactive $NVDA Dividend Matrix Engine
  const volumeSlider = document.getElementById("slider-volume");
  const volumeValDisplay = document.getElementById("val-volume");
  const bagSlider = document.getElementById("slider-bag");
  const bagValDisplay = document.getElementById("val-bag");

  const totalTaxDisplay = document.getElementById("out-total-tax");
  const dailyPayoutDisplay = document.getElementById("out-daily-payout");
  const monthlyPayoutDisplay = document.getElementById("out-monthly-payout");
  const apyDisplay = document.getElementById("out-projected-apy");

  function updateDividendMatrix() {
    if (!volumeSlider || !bagSlider) return;

    const volume = parseFloat(volumeSlider.value);
    const bagMillions = parseFloat(bagSlider.value);

    // Format slider live label values
    if (volumeValDisplay) {
      volumeValDisplay.textContent = "$" + volume.toLocaleString("en-US");
    }

    const bagCount = bagMillions * 1_000_000;
    const bagPercent = (bagMillions / 10).toFixed(2); // 10M = 1.00% of 1B supply
    if (bagValDisplay) {
      bagValDisplay.textContent = bagCount.toLocaleString("en-US") + " (" + bagPercent + "%)";
    }

    // Financial calculations
    const dailyTaxPool = volume * 0.018;
    const userDailyYield = dailyTaxPool * (bagCount / TOTAL_SUPPLY);
    const userMonthlyYield = userDailyYield * 30;

    // Projected APR based on current market cap ($12,450 reference)
    const currentMarketCap = 12450;
    const userBagValue = (bagCount / TOTAL_SUPPLY) * currentMarketCap;
    const userAnnualYield = userDailyYield * 365;
    const apr = userBagValue > 0 ? ((userAnnualYield / userBagValue) * 100).toFixed(1) : 0;

    // DOM Updates
    if (totalTaxDisplay) {
      totalTaxDisplay.textContent = "$" + dailyTaxPool.toFixed(2);
    }
    if (dailyPayoutDisplay) {
      dailyPayoutDisplay.textContent = "$" + userDailyYield.toFixed(2);
    }
    if (monthlyPayoutDisplay) {
      monthlyPayoutDisplay.textContent = "$" + userMonthlyYield.toFixed(2);
    }
    if (apyDisplay) {
      apyDisplay.textContent = "+" + parseFloat(apr).toLocaleString("en-US") + "% APR";
    }
  }

  if (volumeSlider && bagSlider) {
    volumeSlider.addEventListener("input", updateDividendMatrix);
    bagSlider.addEventListener("input", updateDividendMatrix);
  }

  // 7. Accessible FAQ Accordion Engine
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close other open accordions
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove("active");
        const otherHeader = otherItem.querySelector(".accordion-header");
        if (otherHeader) otherHeader.setAttribute("aria-expanded", "false");
      });

      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
      }
    });

    // Keyboard navigation (Enter / Space)
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });

  // 8. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = !mobileNav.classList.contains("hidden");
      if (isOpen) {
        mobileNav.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.classList.remove("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close mobile nav when clicking a link
    const mobileLinks = mobileNav.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 9. Smooth Anchor Scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || !targetId) return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Initial runs
  updateSwapCalculations();
  updateDividendMatrix();
});
