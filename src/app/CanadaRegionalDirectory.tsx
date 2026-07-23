"use client";

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Thermometer, Radio } from "lucide-react";

const regions = [
  // Sequence Priority 1: West Operations
  { name: "British Columbia", capital: "Victoria", x: 160, y: 560, color: "#D80621", isTerritory: false },
  { name: "Alberta", capital: "Edmonton", x: 280, y: 580, color: "#D80621", isTerritory: false },
  { name: "Saskatchewan", capital: "Regina", x: 380, y: 620, color: "#D80621", isTerritory: false },
  { name: "Manitoba", capital: "Winnipeg", x: 480, y: 640, color: "#D80621", isTerritory: false },
  // Priority 2: Core/Central Operations
  { name: "Ontario", capital: "Toronto", x: 640, y: 770, color: "#D80621", isTerritory: false },
  // Priority 3: Quebec Operations
  { name: "Quebec", capital: "Quebec City", x: 780, y: 660, color: "#D80621", isTerritory: false },
 
  { name: "Yukon", capital: "Whitehorse", x: 140, y: 250, color: "#000000", isTerritory: true },
  { name: "Northwest Territories", capital: "Yellowknife", x: 300, y: 300, color: "#000000", isTerritory: true },
  { name: "Nunavut", capital: "Iqaluit", x: 620, y: 280, color: "#000000", isTerritory: true },
  { name: "New Brunswick", capital: "Fredericton", x: 885, y: 740, color: "#D80621", isTerritory: false },
  { name: "Nova Scotia", capital: "Halifax", x: 925, y: 775, color: "#D80621", isTerritory: false },
  { name: "Prince Edward Island", capital: "Charlottetown", x: 910, y: 730, color: "#D80621", isTerritory: false },
  { name: "Newfoundland and Labrador", capital: "St. John's", x: 920, y: 540, color: "#D80621", isTerritory: false },
];

const detailedCanadaMap = {
  Yukon: {
    paths: [[{ x: 50, y: 260 }, { x: 80, y: 200 }, { x: 200, y: 160 }, { x: 200, y: 440 }, { x: 90, y: 460 }]]
  },
  "Northwest Territories": {
    paths: [[{ x: 200, y: 160 }, { x: 340, y: 220 }, { x: 400, y: 480 }, { x: 200, y: 440 }]]
  },
  Nunavut: {
    paths: [
      [{ x: 340, y: 220 }, { x: 440, y: 360 }, { x: 490, y: 450 }, { x: 500, y: 520 }, { x: 400, y: 480 }],
      [{ x: 580, y: 220 }, { x: 630, y: 160 }, { x: 690, y: 150 }, { x: 740, y: 200 }, { x: 760, y: 260 }, { x: 720, y: 340 }, { x: 660, y: 350 }, { x: 560, y: 260 }],
      [{ x: 280, y: 160 }, { x: 340, y: 150 }, { x: 390, y: 180 }, { x: 380, y: 230 }, { x: 320, y: 240 }],
      [{ x: 450, y: 40 }, { x: 500, y: 30 }, { x: 560, y: 50 }, { x: 480, y: 110 }]
    ]
  },
  "British Columbia": {
    paths: [
      [{ x: 90, y: 460 }, { x: 200, y: 440 }, { x: 230, y: 600 }, { x: 160, y: 710 }, { x: 100, y: 680 }, { x: 60, y: 460 }],
      [{ x: 80, y: 640 }, { x: 95, y: 650 }, { x: 115, y: 675 }, { x: 100, y: 685 }]
    ]
  },
  Alberta: {
    paths: [[{ x: 200, y: 440 }, { x: 290, y: 440 }, { x: 290, y: 710 }, { x: 230, y: 600 }]]
  },
  Saskatchewan: {
    paths: [[{ x: 290, y: 440 }, { x: 380, y: 440 }, { x: 380, y: 710 }, { x: 290, y: 710 }]]
  },
  Manitoba: {
    paths: [[{ x: 380, y: 440 }, { x: 500, y: 440 }, { x: 480, y: 710 }, { x: 380, y: 710 }]]
  },
  Ontario: {
    paths: [[{ x: 500, y: 440 }, { x: 540, y: 540 }, { x: 640, y: 590 }, { x: 650, y: 840 }, { x: 610, y: 820 }, { x: 480, y: 710 }]]
  },
  Quebec: {
    paths: [[{ x: 640, y: 590 }, { x: 690, y: 580 }, { x: 780, y: 550 }, { x: 800, y: 640 }, { x: 740, y: 740 }, { x: 650, y: 840 }]]
  },
  "New Brunswick": {
    paths: [[{ x: 800, y: 640 }, { x: 840, y: 620 }, { x: 870, y: 700 }, { x: 825, y: 730 }]]
  },
  "Nova Scotia": {
    paths: [[{ x: 870, y: 700 }, { x: 875, y: 730 }, { x: 925, y: 775 }, { x: 860, y: 745 }]]
  },
  "Prince Edward Island": {
    paths: [[{ x: 860, y: 710 }, { x: 890, y: 710 }, { x: 880, y: 725 }]]
  },
  "Newfoundland and Labrador": {
    paths: [
      [{ x: 780, y: 550 }, { x: 820, y: 570 }, { x: 840, y: 620 }, { x: 800, y: 640 }],
      [{ x: 880, y: 600 }, { x: 920, y: 580 }, { x: 950, y: 610 }, { x: 890, y: 640 }]
    ]
  }
};

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

    // Connections matrix rebuilt to prioritize BC start, then Western flow, Core, Quebec, and logistical links.
    const connections = [
      // BC START -> West Pipeline
      [0, 1], [1, 2], [2, 3],
      // West -> Ontario Core
      [3, 4],
      // Ontario Core -> Quebec Operations
      [4, 5],
      // QC -> Atlantic/Logistical links
      [5, 9], [9, 10], [9, 11], [5, 12],
      // Northern logistical routes
      [6, 7], [7, 8]
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const drawRopePath = (
      points: { x: number; y: number }[], 
      scaleX: (x: number) => number, 
      scaleY: (y: number) => number,
      renderDots: boolean
    ) => {
      if (points.length < 2) return;
      
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        const px = scaleX(pt.x);
        const py = scaleY(pt.y);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = renderDots ? "#D80621" : "rgba(0, 0, 0, 0.2)";
      ctx.lineWidth = renderDots ? 3 : 1.5;
      ctx.stroke();

      if (renderDots) {
        for (let i = 0; i < points.length; i++) {
          const nextPt = points[(i + 1) % points.length];
          const currX = scaleX(points[i].x);
          const currY = scaleY(points[i].y);
          const nextX = scaleX(nextPt.x);
          const nextY = scaleY(nextPt.y);

          const dist = Math.hypot(nextX - currX, nextY - currY);
          const dotDensity = Math.max(4, Math.floor(dist / 8));

          for (let j = 0; j < dotDensity; j++) {
            const t = j / dotDensity;
            const px = currX + (nextX - currX) * t;
            const py = currY + (nextY - currY) * t;
            const wave = Math.sin(angle * 2.5 + (px * 0.08)) * 1.5;

            ctx.beginPath();
            ctx.arc(px + wave, py + wave, 3, 0, Math.PI * 2);
            ctx.fillStyle = "#D80621";
            ctx.fill();
          }
        }
      }
    };

    const render = () => {
      const cw = canvas.width / window.devicePixelRatio;
      const ch = canvas.height / window.devicePixelRatio;
      
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, cw, ch);

      // Technical background reference grid line patterns
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      ctx.lineWidth = 1;
      for (let i = 0; i < cw; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ch);
        ctx.stroke();
      }
      for (let j = 0; j < ch; j += 50) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(cw, j);
        ctx.stroke();
      }

      const mapScaleX = (x: number) => 40 + (x / 1000) * (cw - 80);
      const mapScaleY = (y: number) => 20 + (y / 900) * (ch - 40);

      angle += 0.04;

      // 1. Plot regional geographic boundary strings
      Object.entries(detailedCanadaMap).forEach(([name, regionData]) => {
        const isSelected = selectedRegion.name === name;
        const isHovered = hoveredRegion?.name === name;
        
        regionData.paths.forEach((path) => {
          drawRopePath(path, mapScaleX, mapScaleY, isSelected || isHovered);
        });
      });

      // 2. Continuous dynamic data flow pipelines
      connections.forEach(([startIdx, endIdx]) => {
        const start = regions[startIdx];
        const end = regions[endIdx];
        const sx = mapScaleX(start.x);
        const sy = mapScaleY(start.y);
        const ex = mapScaleX(end.x);
        const ey = mapScaleY(end.y);

        // Subdued static vector pathway link paths
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = "rgba(216, 6, 33, 0.15)";
        ctx.lineWidth = 3;
        ctx.stroke();

        // High-velocity flowing telemetry link dots travelling continuously from core to core
        const pulse = (Math.sin(angle + startIdx) + 1) / 2;
        const px = sx + (ex - sx) * pulse;
        const py = sy + (ey - sy) * pulse;

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#D80621";
        ctx.fill();
      });

      // 3. Render node indicator anchors
      regions.forEach((r) => {
        const rx = mapScaleX(r.x);
        const ry = mapScaleY(r.y);
        const isSelected = selectedRegion.name === r.name;
        const isHovered = hoveredRegion?.name === r.name;

        if (isSelected || isHovered) {
          ctx.beginPath();
          ctx.arc(rx, ry, 26 + Math.sin(angle * 2) * 4, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(216, 6, 33, 0.15)";
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(rx, ry, isSelected ? 14 : 10, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? "#ffffff" : r.color;
        ctx.strokeStyle = "#D80621";
        ctx.lineWidth = isSelected ? 5 : 2;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isSelected ? "#ffffff" : "#666666";
        ctx.font = isSelected ? "bold 13px monospace" : "11px monospace";
        ctx.fillText(r.name.toUpperCase(), rx + 20, ry + 4);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      const cw = canvas.width / window.devicePixelRatio;
      const ch = canvas.height / window.devicePixelRatio;
      const mapScaleX = (x: number) => 40 + (x / 1000) * (cw - 80);
      const mapScaleY = (y: number) => 20 + (y / 900) * (ch - 40);

      let found: typeof regions[0] | null = null;
      for (const r of regions) {
        const rx = mapScaleX(r.x);
        const ry = mapScaleY(r.y);
        if (Math.hypot(mx - rx, my - ry) < 26) {
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
    <div ref={containerRef} className="w-full px-4 sm:px-6 lg:px-10 py-10 bg-[#D80621] text-white selection:bg-white selection:text-[#D80621]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Minimal Typography Heading Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-white">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Priority Sequential Topologies</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mt-2 text-white">
              CANADA FOUNDRIES
            </h1>
          </div>
          <p className="text-xs text-white/80 max-w-sm leading-relaxed font-mono">
            High-fidelity map featuring isolated boundary selection strings combined with continuous dynamic data flow pipelines, prioritize Western, Core, and Quebec sequential data links.
          </p>
        </div>

        {/* Combined Matrix Viewport Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-[#000000] rounded-xl overflow-hidden p-3 lg:p-6 shadow-sm">
          
          {/* Interactive Map Viewport */}
          <div className="lg:col-span-8 relative rounded-lg border border-[#000000] bg-white overflow-hidden group">
            <canvas ref={canvasRef} className="w-full h-[600px] block cursor-crosshair" />
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur border border-[#000000] px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase text-[#D80621] font-bold">
              Active Foundry Nodes: <span>{regions.length}</span>
            </div>
          </div>

          {/* Real-time Telemetry Control Window */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-white border border-[#000000] p-6 rounded-lg shadow-sm">
            
            <div className="space-y-6">
              <div className="border-b border-[#000000] pb-4">
                <span className="text-[10px] font-mono text-[#000000] uppercase tracking-widest block mb-1">
                  Selected Node Telemetry
                </span>
                <h2 className="text-3xl font-black tracking-tight text-[#D80621] uppercase">
                  {selectedRegion.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="bg-white p-3 rounded border border-[#000000]">
                  <div className="flex items-center gap-1.5 text-[#000000] text-[10px] uppercase mb-1">
                    <MapPin className="w-3 h-3 text-[#D80621]" />
                    <span>Capital Hub</span>
                  </div>
                  <span className="text-sm font-bold text-[#D80621] block truncate">
                    {selectedRegion.capital}
                  </span>
                </div>

                <div className="bg-white p-3 rounded border border-[#000000]">
                  <div className="flex items-center gap-1.5 text-[#000000] text-[10px] uppercase mb-1">
                    <Thermometer className="w-3 h-3 text-[#D80621]" />
                    <span>Classification</span>
                  </div>
                  <span className="text-sm font-bold text-[#D80621] block">
                    {selectedRegion.isTerritory ? "Territory" : "Province"}
                  </span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <span className="text-[10px] text-[#000000] uppercase tracking-wider block">Solidification Structural Vector</span>
                <div className="space-y-2 bg-white p-3 rounded border border-[#000000]">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#000000]">Alloy Density Factor</span>
                    <span className="text-[#D80621] font-bold">98.42%</span>
                  </div>
                  <div className="w-full bg-[#ffffff] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#D80621] h-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#000000] uppercase tracking-wider block">
                Directory Quick Access Matrix
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {regions.map((r) => (
                  <button
                    key={r.name}
                    onClick={() => setSelectedRegion(r)}
                    className={`py-2 px-2 text-[10px] font-mono uppercase rounded border transition-all text-center tracking-tighter truncate ${
                      selectedRegion.name === r.name
                        ? "bg-[#D80621] text-white border-[#D80621] font-bold"
                        : "bg-white text-[#D80621] border-[#000000] hover:border-[#D80621] hover:text-[#D80621]"
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
