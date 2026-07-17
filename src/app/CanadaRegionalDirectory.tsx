"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Thermometer, Radio } from "lucide-react";

// Geographic data nodes mapped precisely to spatial vectors
const regions = [
  { name: "British Columbia", capital: "Victoria", x: 140, y: 560, color: "#D80621", isTerritory: false },
  { name: "Ontario", capital: "Toronto", x: 620, y: 760, color: "#D80621", isTerritory: false },
  { name: "Quebec", capital: "Quebec City", x: 730, y: 680, color: "#D80621", isTerritory: false },
  { name: "Alberta", capital: "Edmonton", x: 260, y: 580, color: "#D80621", isTerritory: false },
  { name: "Manitoba", capital: "Winnipeg", x: 440, y: 650, color: "#D80621", isTerritory: false },
  { name: "Saskatchewan", capital: "Regina", x: 350, y: 630, color: "#D80621", isTerritory: false },
  { name: "Nova Scotia", capital: "Halifax", x: 880, y: 770, color: "#D80621", isTerritory: false },
  { name: "New Brunswick", capital: "Fredericton", x: 830, y: 740, color: "#D80621", isTerritory: false },
  { name: "Newfoundland and Labrador", capital: "St. John's", x: 920, y: 580, color: "#D80621", isTerritory: false },
  { name: "Prince Edward Island", capital: "Charlottetown", x: 870, y: 720, color: "#D80621", isTerritory: false },
  { name: "Northwest Territories", capital: "Yellowknife", x: 300, y: 350, color: "#cccccc", isTerritory: true },
  { name: "Nunavut", capital: "Iqaluit", x: 550, y: 320, color: "#cccccc", isTerritory: true },
  { name: "Yukon", capital: "Whitehorse", x: 130, y: 320, color: "#cccccc", isTerritory: true },
];

export default function CanadaFoundriesMap() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<(typeof regions)[0]>(regions[0]);
  const [hoveredRegion, setHoveredRegion] = useState<(typeof regions)[0] | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    // Macro structural logistics lines across nodes
    const connections = [
      [12, 10], [10, 11], [0, 3], [3, 5], [5, 4], 
      [4, 1], [1, 2], [2, 7], [7, 6], [7, 9], [2, 8]
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const cw = canvas.width / window.devicePixelRatio;
      const ch = canvas.height / window.devicePixelRatio;
      
      // Clean high-contrast white background canvas
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, cw, ch);

      // Render 3D industrial mapping grid layout
      ctx.strokeStyle = "rgba(204, 204, 204, 0.4)";
      ctx.lineWidth = 1;
      for (let i = 0; i < cw; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ch);
        ctx.stroke();
      }
      for (let j = 0; j < ch; j += 40) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(cw, j);
        ctx.stroke();
      }

      // Project coordinates scaled into the viewport box layout
      const mapScaleX = (x: number) => 20 + (x / 1000) * (cw - 120);
      const mapScaleY = (y: number) => 20 + ((y - 280) / 520) * (ch - 40);

      angle += 0.025;

      // Draw primary logistical path connections
      connections.forEach(([startIdx, endIdx]) => {
        const start = regions[startIdx];
        const end = regions[endIdx];
        const sx = mapScaleX(start.x);
        const sy = mapScaleY(start.y);
        const ex = mapScaleX(end.x);
        const ey = mapScaleY(end.y);

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = "rgba(216, 6, 33, 0.25)";
        ctx.lineWidth = 4;
        ctx.stroke();

        // Moving structural energy point along pipeline channels
        const pulse = (Math.sin(angle + startIdx) + 1) / 2;
        const px = sx + (ex - sx) * pulse;
        const py = sy + (ey - sy) * pulse;

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#D80621";
        ctx.fill();
      });

      // Render structural layout nodes
      regions.forEach((r) => {
        const rx = mapScaleX(r.x);
        const ry = mapScaleY(r.y);
        const isSelected = selectedRegion.name === r.name;
        const isHovered = hoveredRegion?.name === r.name;

        // Large high-impact industrial target rings
        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(rx, ry, 32 + Math.sin(angle * 2.5) * 6, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(216, 6, 33, 0.2)";
          ctx.lineWidth = 4;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(rx, ry, 22 + Math.sin(angle * 2.5) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = r.color;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Substantial high-visibility macro dot cores
        ctx.beginPath();
        ctx.arc(rx, ry, isSelected ? 16 : 12, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? "#ffffff" : r.color;
        ctx.strokeStyle = "#D80621";
        ctx.lineWidth = isSelected ? 6 : 2;
        ctx.shadowBlur = isSelected ? 24 : 8;
        ctx.shadowColor = "rgba(216, 6, 33, 0.4)";
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Dynamic typography tracking tags
        ctx.fillStyle = isSelected ? "#000000" : "#666666";
        ctx.font = isSelected ? "bold 16px monospace" : "14px monospace";
        ctx.fillText(r.name.toUpperCase(), rx + 24, ry + 6);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse spatial vector range calculation
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const cw = canvas.width / window.devicePixelRatio;
      const ch = canvas.height / window.devicePixelRatio;
      const mapScaleX = (x: number) => 20 + (x / 1000) * (cw - 120);
      const mapScaleY = (y: number) => 20 + ((y - 280) / 520) * (ch - 40);

      let found: typeof regions[0] | null = null;
      for (const r of regions) {
        const rx = mapScaleX(r.x);
        const ry = mapScaleY(r.y);
        const dist = Math.hypot(mx - rx, my - ry);
        if (dist < 32) {
          found = r;
          break;
        }
      }
      setHoveredRegion(found);
    };

    const handleMouseClick = () => {
      if (hoveredRegion) setSelectedRegion(hoveredRegion);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleMouseClick);
    };
  }, [selectedRegion, hoveredRegion]);

  return (
    <div ref={containerRef} className="w-full px-4 sm:px-6 lg:px-10 py-10 bg-[#D80621] text-[#ffffff] selection:bg-[#ffffff] selection:text-[#D80621]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Minimal Typography Heading Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#ffffff]/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-[#ffffff]">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Interactive Operations Network</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mt-2 text-[#ffffff]">
              CANADA FOUNDRIES
            </h1>
          </div>
          <p className="text-xs text-[#ffffff]/80 max-w-sm leading-relaxed font-mono">
            Interactive macro-matrix displaying structural operations, foundry grid centers, and territorial boundary telemetry maps.
          </p>
        </div>

        {/* Combined Matrix Viewport Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#ffffff] border border-[#cccccc] rounded-xl overflow-hidden p-3 lg:p-6 shadow-sm">
          
          {/* Interactive Simulation Map Viewport (Left Side) */}
          <div className="lg:col-span-8 relative rounded-lg border border-[#cccccc] bg-[#ffffff] overflow-hidden group">
            <canvas ref={canvasRef} className="w-full h-[540px] block cursor-crosshair" />
            
            <div className="absolute top-4 left-4 bg-[#ffffff]/90 backdrop-blur border border-[#cccccc] px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase text-[#D80621] font-bold">
              Active Foundry Nodes: <span>{regions.length}</span>
            </div>
          </div>

          {/* Real-time Telemetry Data Window Panel (Right Side) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-[#ffffff] border border-[#cccccc] p-6 rounded-lg shadow-sm">
            
            {/* Dynamic Telemetry Reading Box */}
            <div className="space-y-6">
              <div className="border-b border-[#cccccc] pb-4">
                <span className="text-[10px] font-mono text-[#666666] uppercase tracking-widest block mb-1">
                  Selected Node Telemetry
                </span>
                <h2 className="text-3xl font-black tracking-tight text-[#D80621] uppercase">
                  {selectedRegion.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="bg-[#ffffff] p-3 rounded border border-[#cccccc]">
                  <div className="flex items-center gap-1.5 text-[#666666] text-[10px] uppercase mb-1">
                    <MapPin className="w-3 h-3 text-[#D80621]" />
                    <span>Capital Hub</span>
                  </div>
                  <span className="text-sm font-bold text-[#000000] block truncate">
                    {selectedRegion.capital}
                  </span>
                </div>

                <div className="bg-[#ffffff] p-3 rounded border border-[#cccccc]">
                  <div className="flex items-center gap-1.5 text-[#666666] text-[10px] uppercase mb-1">
                    <Thermometer className="w-3 h-3 text-[#D80621]" />
                    <span>Classification</span>
                  </div>
                  <span className="text-sm font-bold text-[#000000] block">
                    {selectedRegion.isTerritory ? "Territory" : "Province"}
                  </span>
                </div>
              </div>

              {/* Simulated Hardware Status Graphs */}
              <div className="space-y-3 font-mono text-xs">
                <span className="text-[10px] text-[#666666] uppercase tracking-wider block">Solidification Structural Vector</span>
                <div className="space-y-2 bg-[#ffffff] p-3 rounded border border-[#cccccc]">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#666666]">Alloy Density Factor</span>
                    <span className="text-[#D80621] font-bold">98.42%</span>
                  </div>
                  <div className="w-full bg-[#cccccc] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#D80621] h-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick-Jump Node Selector Matrix */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block">
                Directory Quick Access Matrix
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {regions.map((r) => (
                  <button
                    key={r.name}
                    onClick={() => setSelectedRegion(r)}
                    className={`py-2 px-2 text-[10px] font-mono uppercase rounded border transition-all text-center tracking-tighter truncate ${
                      selectedRegion.name === r.name
                        ? "bg-[#D80621] text-[#ffffff] border-[#D80621] font-bold"
                        : "bg-[#ffffff] text-[#000000] border-[#cccccc] hover:border-[#D80621] hover:text-[#D80621]"
                    }`}
                  >
                    {r.name.substring(0, 8)}..
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}