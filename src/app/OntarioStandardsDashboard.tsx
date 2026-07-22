"use client";

import React, { useState } from "react";
import { FileText, ShieldCheck, Cpu, Ruler, ChevronRight, Activity, Info } from "lucide-react";

// Guidelines and OPSD Specs parsed directly from user input
const guidelines = [
  {
    id: "opsd-2001",
    title: "OPSD 2001 - Sewer Manhole Base",
    category: "Ontario Standards",
    subtitle: "City of Ontario Standard Engineering Drawing",
    status: "Active Spec",
    icon: FileText,
    technicalNotes: [
      "Frame and cover for 48\" I.D. manhole shall be 30\". Covers manufactured with letter 'S' in center.",
      "Non-reinforced pre-cast manholes shall be Class 360-C-3000 per section 201-1 of standard specifications.",
      "Reinforced pre-cast manholes shall be per ASTM C478 specifications.",
      "Depth of the channel shall be equal to the full diameter of the pipe.",
      "The branch shall drop a minimum of 0.05' from its inlet to the outlet elevation.",
      "Mortar Joints: Sufficient mortar shall be applied across entire face of joint so that when precast units are placed, mortar squeezes out both inside and outside wall faces."
    ]
  },
  {
    id: "astm-aisi",
    title: "ASTM & AISI Material Compliance",
    category: "Material Guidelines",
    subtitle: "Raw Material & Mechanical Properties Blueprint",
    status: "Mandatory",
    icon: ShieldCheck,
    technicalNotes: [
      "Ontario foundries frequently adhere to ASTM International and AISI standards for raw materials.",
      "Ensures precise chemical composition requirements for high-tensile casting integrity.",
      "Governs microstructure testing and stress-strain performance configurations under load.",
      "Mandates standardized thermal testing baselines for industrial structural applications."
    ]
  },
  {
    id: "nadca-diecast",
    title: "NADCA Blueprint Integration",
    category: "Production Guidelines",
    subtitle: "North American Die Casting Association Blueprint",
    status: "Die Casting Base",
    icon: Cpu,
    technicalNotes: [
      "Provides the primary blueprint for high-precision custom tooling specifications.",
      "Defines definitive alloy properties and fluid dynamics metrics for molten flows.",
      "Establishes geometric dimensioning and tolerance (GD&T) rules to eliminate variation.",
      "Standardizes thermal fatigue life cycles for mold cavities and heavy tooling cores."
    ]
  }
];

export default function OntarioStandardsDashboard() {
  const [selectedSpec, setSelectedSpec] = useState(guidelines[0]);
  const [activeNoteIndex, setActiveNoteIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10 bg-[#ffffff] text-[#ffffff] selection:bg-[#D80621] selection:text-[#ffffff] font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Minimal Typography Heading Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#cccccc] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-[#D80621]">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Engineering Matrix & Quality Control</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mt-2 text-[#D80621]">
              ONTARIO STANDARDS &mdash; OPSD
            </h1>
          </div>
          <p className="text-xs text-[#666666] max-w-sm leading-relaxed font-mono">
            Material production blueprints, ASTM/AISI raw material inputs, and NADCA geometric dimensioning rule systems.
          </p>
        </div>

        {/* Combined Matrix Viewport Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#ffffff] border border-[#cccccc] rounded-xl overflow-hidden p-3 lg:p-6 shadow-sm">
          
          {/* Navigation Matrix Menu Layout (Left Side) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block mb-1">
              Select Standard Framework
            </span>
            <div className="space-y-2.5">
              {guidelines.map((spec) => {
                const IconComponent = spec.icon;
                const isSelected = selectedSpec.id === spec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => {
                      setSelectedSpec(spec);
                      setActiveNoteIndex(null);
                    }}
                    className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group ${
                      isSelected
                        ? "bg-[#D80621] border-[#D80621] text-[#ffffff]"
                        : "bg-[#ffffff] border-[#cccccc] text-[#ffffff] hover:border-[#D80621]"
                    }`}
                  >
                    <div className="flex items-start gap-3.5 max-w-[90%]">
                      <div className={`p-2 rounded mt-0.5 border ${
                        isSelected ? "bg-white/10 border-white/20 text-white" : "bg-[#ffffff] border-[#cccccc] text-[#D80621]"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5 truncate">
                        <span className={`text-[10px] font-mono uppercase tracking-wider block ${
                          isSelected ? "text-white/80" : "text-[#666666]"
                        }`}>
                          {spec.category}
                        </span>
                        <h3 className="font-bold text-sm tracking-tight truncate">
                          {spec.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "translate-x-1 text-white" : "text-[#cccccc] group-hover:text-[#D80621]"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Simulated Drawing Engineering Context */}
            <div className="hidden lg:block bg-[#ffffff] border border-[#cccccc] rounded-lg p-4 mt-auto space-y-3 font-mono">
              <div className="flex items-center gap-2 text-[10px] text-[#666666] uppercase border-b border-[#cccccc] pb-2">
                <Ruler className="w-3.5 h-3.5 text-[#D80621]" />
                <span>OPSD Technical Blueprint Matrix</span>
              </div>
              <div className="text-[11px] text-[#ffffff] space-y-1.5 leading-relaxed">
                <div><span className="text-[#666666]">Standard Drawing:</span> № 2001</div>
                <div><span className="text-[#666666]">Approved By:</span> John P. Sullivan (City Eng.)</div>
                <div><span className="text-[#666666]">Geometrics:</span> NADCA Compliant Baseline</div>
              </div>
            </div>
          </div>

          {/* Interactive Specification Viewport (Right Side) */}
          <div className="lg:col-span-7 flex flex-col bg-[#ffffff] border border-[#cccccc] p-6 rounded-lg shadow-sm justify-between min-h-[480px]">
            <div className="space-y-6">
              {/* Header Telemetry Metadata Area */}
              <div className="border-b border-[#cccccc] pb-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#666666] uppercase tracking-widest block">
                    Active Blueprint Matrix Reference
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-[#D80621] uppercase">
                    {selectedSpec.title}
                  </h2>
                  <p className="text-xs text-[#666666] font-mono">
                    {selectedSpec.subtitle}
                  </p>
                </div>
                <span className="font-mono text-[10px] font-bold bg-[#ffffff] text-[#D80621] border border-[#D80621] px-2.5 py-1 rounded tracking-wider uppercase shrink-0">
                  {selectedSpec.status}
                </span>
              </div>

              {/* Technical Specifications Clauses List */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block mb-1">
                  Compliance Directives & Code Notes
                </span>
                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                  {selectedSpec.technicalNotes.map((note, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveNoteIndex(activeNoteIndex === index ? null : index)}
                      className={`p-3 rounded border text-xs leading-relaxed transition-all cursor-pointer flex gap-3 ${
                        activeNoteIndex === index
                          ? "bg-[#ffffff] border-[#D80621] shadow-sm"
                          : "bg-[#ffffff] border-[#cccccc] hover:border-[#999999]"
                      }`}
                    >
                      <span className={`font-mono font-bold text-[11px] shrink-0 ${
                        activeNoteIndex === index ? "text-[#D80621]" : "text-[#666666]"
                      }`}>
                        [{index + 1}]
                      </span>
                      <p className={activeNoteIndex === index ? "text-[#ffffff] font-medium" : "text-[#333333]"}>
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lower Telemetry Summary Message */}
            <div className="mt-6 pt-4 border-t border-[#cccccc] flex items-center gap-2.5 text-[10px] font-mono text-[#666666] uppercase">
              <Info className="w-3.5 h-3.5 text-[#D80621] shrink-0" />
              <span>Click any code clause note row item to cross-reference with production validation.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}