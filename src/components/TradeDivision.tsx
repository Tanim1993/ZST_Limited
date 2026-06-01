import React, { useState } from "react";
import { 
  Globe, Anchor, Ship, FileCheck, MapPin, 
  ChevronRight, ArrowRight, Award, Compass, Search, HelpCircle, HardHat, ShieldCheck
} from "lucide-react";

interface RegionTrade {
  name: string;
  imports: string[];
  exports: string[];
  majorPartners: string;
  transitActiveTrack: string;
  status: "Optimized" | "Transit Complete" | "Auditing Cargo";
}

export default function TradeDivision() {
  const [activeRegion, setActiveRegion] = useState<string>("asia");

  const regionalTrades: Record<string, RegionTrade> = {
    asia: {
      name: "Asia-Pacific Hub (Primary Sector)",
      imports: ["Commercial electronic components", "Precision engineering machinery & toolkits", "Raw copper and raw solder alloys"],
      exports: ["Agricultural tech arrays", "Handmade custom textiles", "ZST local wallet terminals"],
      majorPartners: "China, Singapore, Japan, Vietnam, India",
      transitActiveTrack: "Carrier: ZST_SHIPPING_CH-2A | Yokohama to Chittagong Port",
      status: "Optimized"
    },
    europe: {
      name: "European Trade Corridors",
      imports: ["High-accuracy server chipsets", "Bio-medical telemetry diagnostics", "Specialized automated sorting machinery"],
      exports: ["Local Bangladesh digital tracking models", "Eco-friendly natural fibers"],
      majorPartners: "Germany, Netherlands, United Kingdom, France",
      transitActiveTrack: "Carrier: MSC_EUROPE_ZST | Rotterdam to Chittagong Port",
      status: "Transit Complete"
    },
    americas: {
      name: "North America Lane",
      imports: ["Cloud telecommunication switchgear", "Software operating frameworks", "Agricultural specialized grains"],
      exports: ["Microservice web layouts", "Eco craft-accessories"],
      majorPartners: "United States, Canada",
      transitActiveTrack: "Carrier: FEDEX_INT_CARGO | NYC to Dhaka International",
      status: "Auditing Cargo"
    },
    mideast: {
      name: "Middle East Logistics Circle",
      imports: ["Chemical refined base stocks", "Industrial lubricants", "Enterprise polymer stocks"],
      exports: ["ConnectHub localized private messengers", "Socioeconomic field models"],
      majorPartners: "United Arab Emirates, Saudi Arabia, Kuwait",
      transitActiveTrack: "Carrier: GULF_LINES_99B | Jebel Ali to Chittagong Port",
      status: "Optimized"
    }
  };

  const activeTradeDetails = regionalTrades[activeRegion] || regionalTrades.asia;

  return (
    <section id="trade" className="py-24 bg-white dark:bg-[#0B0F1D] border-t border-slate-100 dark:border-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Banner header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono">
              Global Mercantile Division
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Export & Import Operations
            </h2>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-base">
              ZST Limited bridges continents. We operate highly integrated supply pipelines, sourcing elite materials, distributing commercial electronics, and establishing trade bonds with core state manufacturers.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-blue-600">
                <Compass className="w-4.5 h-4.5" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-250">Sourcing & Procurement</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">Checking global standards dynamically. We source with clean quality guarantees.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-emerald-500">
                <Anchor className="w-4.5 h-4.5" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-250">Terminal Distribution</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">Deep coordination with Dhaka Airport and Chittagong Maritime Customs hubs.</p>
            </div>
          </div>
        </div>

        {/* Global Partnership Map Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Interactive World Map / Logistics Terminal (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between min-h-[440px]">
            <div>
              {/* Terminal Title */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <Ship className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono tracking-widest text-slate-300">ZST_GLOBAL_LOGISTICS_CONSOLE v4.1</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-slate-500">SYS_CORRIDORS_SYNC_SECURE</span>
                </div>
              </div>

              {/* Geographic Selection Controls */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  { id: "asia", name: "Asia-Pacific Circle" },
                  { id: "europe", name: "European Union Ports" },
                  { id: "americas", name: "US & Canadian Lanes" },
                  { id: "mideast", name: "Middle East Trade Hub" }
                ].map((item) => {
                  const isSelected = activeRegion === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveRegion(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                        isSelected 
                          ? "bg-blue-600 text-white border border-blue-500" 
                          : "bg-slate-900 text-slate-400 hover:text-white border border-transparent hover:border-slate-800"
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Simulated Map Visual representation */}
              <div className="h-44 bg-[#050B15] rounded-xl border border-slate-900 relative overflow-hidden flex items-center justify-center p-4">
                
                {/* Dots representation of World map */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

                {/* Simulated Trade Route Arc Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
                  {activeRegion === "asia" && (
                    <path d="M 50,120 Q 150,30 350,110" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="5" className="animate-pulse" />
                  )}
                  {activeRegion === "europe" && (
                    <path d="M 50,120 Q 200,10 250,110" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5" className="animate-pulse" />
                  )}
                  {activeRegion === "americas" && (
                    <path d="M 50,120 Q 180,50 150,30" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5" className="animate-pulse" />
                  )}
                  {activeRegion === "mideast" && (
                    <path d="M 50,120 Q 100,60 180,120" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5" className="animate-pulse" />
                  )}
                </svg>

                {/* Nodes with pulsing pins */}
                <div className="absolute bottom-10 left-12 flex flex-col items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full ring-4 ring-red-500/20 animate-ping absolute block" />
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full relative block" />
                  <span className="text-[8px] font-mono text-slate-500 mt-1">Chittagong Port (HQ)</span>
                </div>

                {activeRegion === "asia" && (
                  <div className="absolute top-10 right-16 flex flex-col items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping absolute block" />
                    <span className="w-2 h-2 bg-blue-400 rounded-full relative block" />
                    <span className="text-[8px] font-mono text-slate-400 mt-1">Tokyo Node</span>
                  </div>
                )}

                {activeRegion === "europe" && (
                  <div className="absolute top-[30%] left-[45%] flex flex-col items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute block" />
                    <span className="w-2 h-2 bg-emerald-400 rounded-full relative block" />
                    <span className="text-[8px] font-mono text-slate-400 mt-1">Rotterdam Node</span>
                  </div>
                )}

                {activeRegion === "americas" && (
                  <div className="absolute top-[20%] left-24 flex flex-col items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping absolute block" />
                    <span className="w-2 h-2 bg-amber-400 rounded-full relative block" />
                    <span className="text-[8px] font-mono text-slate-400 mt-1">New York Node</span>
                  </div>
                )}

                {activeRegion === "mideast" && (
                  <div className="absolute top-[45%] left-36 flex flex-col items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping absolute block" />
                    <span className="w-2 h-2 bg-indigo-400 rounded-full relative block" />
                    <span className="text-[8px] font-mono text-slate-400 mt-1">Jebel Ali Node</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 bg-slate-900/90 border border-slate-800 rounded px-2 py-1 text-[8px] font-mono text-slate-400 max-w-xs">
                  <strong>Local Sync Indicator:</strong> Dhaka Central router communicates directly to {activeRegion.toUpperCase()}_GATEWAY.
                </div>
              </div>
            </div>

            {/* Simulated Live Transport Tracker Bar */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs bg-slate-900/30 p-3 rounded-lg border border-slate-800/80">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 block font-mono">Ocean Freight Live Tracker</span>
                <span className="font-mono text-slate-200">{activeTradeDetails.transitActiveTrack}</span>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 font-bold font-mono text-[10px]">
                <span className={`p-1 rounded ${
                  activeTradeDetails.status === "Optimized" 
                    ? "bg-blue-950 text-blue-400" 
                    : activeTradeDetails.status === "Transit Complete"
                    ? "bg-emerald-950 text-emerald-400"
                    : "bg-amber-950 text-amber-500"
                }`}>
                  {activeTradeDetails.status}
                </span>
              </div>
            </div>
          </div>

          {/* Sourcing and Operations Metrics details (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0D1527] border border-slate-250 dark:border-slate-800 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Trade Parameters</span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {activeTradeDetails.name}
                </h3>
              </div>

              {/* Major Export Commodities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block font-mono flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-500" /> Major Commodities Dispatched
                </h4>
                <div className="space-y-2">
                  {activeTradeDetails.exports.map((e, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-350 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200/50 dark:border-slate-800">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sourced Imports to Bangladesh */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block font-mono flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-500" /> Sourced Components Imported
                </h4>
                <div className="space-y-2">
                  {activeTradeDetails.imports.map((imp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-350 bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200/50 dark:border-slate-800">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic partnership button */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800 mt-6 flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500">Major Corridors: {activeTradeDetails.majorPartners}</span>
              <a 
                href="#contact" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 shrink-0"
              >
                Inquire Rates <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
