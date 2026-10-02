/**
 * @omnidreams/sdk - Spatial Neural Telemetry Engine
 * Real-time inference monitoring, frame delivery validation and compute health telemetry.
 */

export class SpatialTelemetryEngine {
  constructor(options = {}) {
    this.targetFps = options.targetFps || 60;
    this.maxLatencyMs = options.maxLatencyMs || 50;
    this.history = [];
    this.maxHistoryLength = options.maxHistoryLength || 100;
  }

  /**
   * Records a spatial simulation frame telemetry snapshot
   * @param {object} frameData - Frame timing and neural compute statistics
   * @returns {object} Aggregated health score and telemetry delta
   */
  recordFrame(frameData) {
    const timestamp = frameData.timestamp || Date.now();
    const latencyMs = Number(frameData.latencyMs) || 0;
    const lossScore = Number(frameData.lossScore) || 0;
    const computeGflops = Number(frameData.computeGflops) || 0;

    const frameRecord = {
      timestamp,
      latencyMs,
      lossScore,
      computeGflops,
      isCompliant: latencyMs <= this.maxLatencyMs && lossScore < 0.15
    };

    this.history.push(frameRecord);
    if (this.history.length > this.maxHistoryLength) {
      this.history.shift();
    }

    return {
      status: frameRecord.isCompliant ? "OPTIMAL" : "DEGRADED",
      currentLatencyMs: latencyMs,
      averageLatencyMs: this.getAverageLatency(),
      stabilityScore: this.calculateStabilityScore(),
      totalFramesSampled: this.history.length
    };
  }

  /**
   * Calculates moving average latency over recorded frame window
   * @returns {number} Average latency in milliseconds
   */
  getAverageLatency() {
    if (this.history.length === 0) return 0;
    const total = this.history.reduce((acc, f) => acc + f.latencyMs, 0);
    return Number((total / this.history.length).toFixed(2));
  }

  /**
   * Calculates overall spatial simulation stability score (0.00 to 1.00)
   * @returns {number} Stability score
   */
  calculateStabilityScore() {
    if (this.history.length === 0) return 1.0;
    const compliantCount = this.history.filter((f) => f.isCompliant).length;
    return Number((compliantCount / this.history.length).toFixed(2));
  }

  /**
   * Resets telemetry history buffer
   */
  reset() {
    this.history = [];
  }
}
