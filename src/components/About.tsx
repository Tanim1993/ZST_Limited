import React from "react";
import { 
  Building2, Users, Compass, Eye, Cpu, Coins, ShieldAlert,
  ArrowRight, Globe, Target, Flame 
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Sovereign Engineering Core",
      subtitle: "Enterprise-grade digital self-sufficiency",
      badge: "Structure",
      description: "We are committed to building mission-critical national security software, Fintech rails, and communication channels that operate wholly on independent, cloud-hardened infrastructure.",
      icon: <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Innovation-Driven Culture",
      subtitle: "Iterating on high-capacity architectures",
      badge: "Innovation",
      description: "Our engineering hubs prioritize modern full-stack development, GIS coordinates verification systems, biometric authentication, and resilient local data redundancy pipelines.",
      icon: <Flame className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Global Partnership Mindset",
      subtitle: "Expanding procurement & trade lines",
      badge: "Reach",
      description: "ZST extends beyond software. We serve as a trusted international importer, exporter, and general trading distributor, linking Bangladesh's commercial hubs to elite global vendors.",
      icon: <Globe className="w-5 h-5 text-emerald-500" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B0F1D] border-t border-slate-100 dark:border-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Top/Left Section: Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono">
                Corporate Foundations
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                Driving Sovereign Tech & Secure Global Trade
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-base">
              ZST Limited is a Bangladesh-based technology conglomerate. We stand at the crossroads of enterprise software, socioeconomic survey metrics, and high-volume global trading lanes.
            </p>
            <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm">
              From our digital finance core that manages wallets to deep-set political systems that monitor constituencies, our services support major administrative, community, and merchant networks across the nation.
            </p>

            {/* Mission & Vision Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Our Mission</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To build sovereign, robust digital infrastructure that connects governments, enterprises, and citizens cleanly and secure from tracking threats.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Our Vision</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  To establish Bangladesh as a key player in high-throughput financial, collaborative, and logistic solutions on the global stage.
                </p>
              </div>

            </div>

          </div>

          {/* Right Section: Cultural Pillars Grid */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white block">
                ZST Operational Philosophy
              </h3>
              <p className="text-xs text-slate-500">
                How our teams design software systems and configure supply logistics globally.
              </p>
            </div>

            <div className="space-y-4">
              {pillars.map((p, idx) => (
                <div 
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-slate-50 hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-850/60 border border-slate-200/50 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm tracking-tight text-center shrink-0">
                      {p.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-905 dark:text-white text-sm md:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-slate-150 dark:bg-slate-800 text-slate-500 py-0.5 px-2 rounded-full">
                          {p.badge}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                        {p.subtitle}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal pt-1.5">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
