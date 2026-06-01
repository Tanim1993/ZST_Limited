import React, { useState } from "react";
import { 
  BarChart, Users, Globe2, Briefcase, TrendingUp, CheckCircle, Ship, Landmark 
} from "lucide-react";

interface SubMetric {
  label: string;
  value: string;
  description: string;
}

interface StatCategory {
  id: string;
  categoryTitle: string;
  headlineValue: string;
  headlineLabel: string;
  icon: React.ReactNode;
  accent: string;
  description: string;
  subMetrics: SubMetric[];
}

export default function Statistics() {
  const [activeCategory, setActiveCategory] = useState<string>("users");

  const categories: StatCategory[] = [
    {
      id: "users",
      categoryTitle: "Global Citizen Grid",
      headlineValue: "10,000,000+",
      headlineLabel: "Active Core Citizens Connected",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      accent: "from-emerald-500 to-teal-500",
      description: "Our platforms process sovereign citizen validation credentials, MFS money transactions, and biometric parameters safely across remote districts of Bangladesh.",
      subMetrics: [
        { label: "MFS Payout volume", value: "৳ 240B Annual", description: "Daily disbursements synced with central sovereign ledgers." },
        { label: "District Outlets Supported", value: "140,000+ Agents", description: "Securing commission models in small regional markets." },
        { label: "Peak Load handling capacity", value: "85k req/sec", description: "Ensures no transaction logs or survey results fail." }
      ]
    },
    {
      id: "products",
      categoryTitle: "Software Implementations",
      headlineValue: "24+",
      headlineLabel: "Enterprise Softwares Deployed",
      icon: <BarChart className="w-5 h-5 text-blue-600" />,
      accent: "from-blue-600 to-indigo-600",
      description: "ZST engineers maintain customized private chats, robust video conference channels, NGO GIS field trackers, and corporate BI databases.",
      subMetrics: [
        { label: "ConnectHub active servers", value: "3,800 Active Nodes", description: "Replacing public, insecure messengers for state agencies." },
        { label: "MeetSphere participant capacity", value: "12,000 concurrent", description: "High-latency robust HD sessions with attendance metrics." },
        { label: "Political Registers tracking", value: "6.8M Records", description: "Ensures campaign teams analyze public voter groups." }
      ]
    },
    {
      id: "clients",
      categoryTitle: "Corporate Portfolio",
      headlineValue: "80+",
      headlineLabel: "State Agencies & Corporates",
      icon: <Briefcase className="w-5 h-5 text-[#f59e0b]" />,
      accent: "from-amber-500 to-orange-500",
      description: "From NGO survey directors to general importing managers, we provide customized, dedicated SLAs to key organizational hubs.",
      subMetrics: [
        { label: "Government Ministry portals", value: "14 Portals Deployed", description: "Cooperation with administrative registers." },
        { label: "NGO Survey responses parsed", value: "4.2M Submissions", description: "Clean offline geo-coded survey sets recorded safely." },
        { label: "Support Ticket SLA", value: "99.98% Under 15m", description: "Dedicated systems engineer assigned per corporate portal." }
      ]
    },
    {
      id: "countries",
      categoryTitle: "International Footprint",
      headlineValue: "12+",
      headlineLabel: "Sovereign Trade Channels",
      icon: <Globe2 className="w-5 h-5 text-indigo-500" />,
      accent: "from-indigo-600 to-purple-500",
      description: "Our general trading, sourcing, and distribution lanes bridge Bangladesh with elite manufacturing plants in multiple global economic zones.",
      subMetrics: [
        { label: "Distribution hubs", value: "5 Transcontinental Lanes", description: "Smooth customs processing from Europe to Asia-Pac." },
        { label: "Sourced Components annual", value: "240k Metric Units", description: "Delivering core hardware parts for digital transformation." },
        { label: "Strategic Partners", value: "35 Global Factories", description: "Elite level priority sourcing with ISO standards." }
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="stats" className="py-24 bg-white dark:bg-[#0B0F1D] border-t border-slate-100 dark:border-slate-905/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Simple visual section head */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono mb-3">
            ZST Performance Records
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Our Enterprise Reach in Numbers
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
            Click on any corporate division statistic box below to drill down into custom logs, active node metrics, and regional operational milestones.
          </p>
        </div>

        {/* Master Category Grid Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((c) => {
            const isSelected = activeCategory === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected 
                    ? "bg-gradient-to-br from-slate-900 to-slate-950 text-white border-transparent shadow-xl" 
                    : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border-slate-200/60 dark:border-slate-800/80"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? "bg-white/15 text-white" : "bg-slate-205 dark:bg-slate-850"
                  }`}>
                    {c.icon}
                  </div>
                  <span className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-950 text-slate-500"
                  }`}>
                    Interactive Metrics
                  </span>
                </div>

                <div className="space-y-1">
                  <span className={`text-[10px] uppercase tracking-wide block font-semibold ${
                    isSelected ? "text-slate-300" : "text-slate-400"
                  }`}>
                    {c.categoryTitle}
                  </span>
                  <span className={`text-2xl md:text-3xl font-extrabold font-mono tracking-tight block ${
                    isSelected ? "text-white" : "text-slate-900 dark:text-white"
                  }`}>
                    {c.headlineValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metric Detail Viewer Panel */}
        <div className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-[#0D1527] border border-slate-200/60 dark:border-slate-800 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-colors">
          
          {/* Detailed text (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${currentCategory.accent} bg-clip-text text-transparent block font-mono`}>
                {currentCategory.categoryTitle} Milestone Details
              </span>
              <h3 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                {currentCategory.headlineLabel}
              </h3>
            </div>
            
            <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
              {currentCategory.description}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-xs text-slate-500">
                Data refreshed in real-time. Complies with sovereign transactional audit standard registries.
              </span>
            </div>
          </div>

          {/* Granular Sub-Metrics grid list (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {currentCategory.subMetrics.map((met, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-transform duration-300"
              >
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider font-mono">
                    {met.label}
                  </span>
                  <span className={`text-lg md:text-xl font-extrabold font-mono leading-none bg-gradient-to-r ${currentCategory.accent} bg-clip-text text-transparent`}>
                    {met.value}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-4">
                  {met.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
