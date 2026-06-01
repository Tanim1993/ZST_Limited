import React, { useState } from "react";
import { 
  Code, Smartphone, Globe, Cloud, HelpCircle, 
  Cpu, Zap, Puzzle, FileText, CheckCircle, Calculator, PhoneCall, ChevronRight, Settings, ServerCrash
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["software", "cloud"]);
  const [tier, setTier] = useState<"standard" | "enterprise" | "sovereign">("enterprise");
  const [submittedName, setSubmittedName] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services: ServiceItem[] = [
    {
      id: "software",
      title: "Enterprise Software Development",
      icon: <Code className="w-5 h-5" />,
      description: "Sovereign, scalable ledger architectures, dynamic workflow portals, and backend clusters designed to scale to millions of active nodes.",
      details: ["High-throughput load limits", "Secure microservice isolation", "Comprehensive audit trails"]
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Low-latency, secure native iOS & Android financial platforms, communication apps, and field GIS data collections.",
      details: ["Offline-first operational capability", "Full biometric screen locks", "Encrypted cache databases"]
    },
    {
      id: "web",
      title: "Web Platform Development",
      icon: <Globe className="w-5 h-5" />,
      description: "Fast-loading corporate dashboards, real-time analytics panels, tracking matrices, and public survey forms.",
      details: ["SEO-optimized architecture", "Accessible desktop dashboards", "Fluid responsive layout design"]
    },
    {
      id: "cloud",
      title: "Cloud Solutions & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      description: "Sovereign cloud setups, container orchestration, automatic failsafe configurations, and continuous security audits.",
      details: ["Automated container recovery", "Military data redundancy", "Load balance balancing"]
    },
    {
      id: "consulting",
      title: "IT Consulting & Digital Pivot",
      icon: <HelpCircle className="w-5 h-5" />,
      description: "Audit existing business loops, evaluate security vectors, identify technical bottlenecks, and map modernization targets.",
      details: ["Legacy transition risk mitigation", "Regulatory security mapping", "Hardware sourcing analysis"]
    },
    {
      id: "integration",
      title: "System Integration Core",
      icon: <Puzzle className="w-5 h-5" />,
      description: "Link siloed database systems, legacy bank gateways, CRM solutions, and sovereign hardware together securely.",
      details: ["High-speed secure API bridges", "Legacy protocol conversion", "Automated synchronization checks"]
    },
    {
      id: "ai",
      title: "AI & Business Intelligence Solutions",
      icon: <Cpu className="w-5 h-5" />,
      description: "Train custom modeling engines, parse satellite geo-files, flag fintech transaction anomalies, and predict performance shifts.",
      details: ["Local data center modeling", "Large-scale OCR & registry processing", "Anomalous payment detection"]
    },
    {
      id: "engineering",
      title: "Full Product Engineering",
      icon: <Settings className="w-5 h-5" />,
      description: "From research prototyping to full commercial launch. Continuous support lifecycle contracts.",
      details: ["UX Wireframing & rapid prototypes", "Penetration stress testing", "Sustained maintenance agreements"]
    }
  ];

  const toggleSelectService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const getEstimatedTimeline = () => {
    const factor = selectedServices.length;
    if (factor === 0) return "0 weeks";
    let base = factor * 3;
    if (tier === "enterprise") base *= 1.2;
    if (tier === "sovereign") base *= 1.5;
    return `${Math.round(base)}—${Math.round(base + 4)} Weeks`;
  };

  const currentEstimatedPriceLevel = () => {
    let cost = selectedServices.length * 9000;
    if (tier === "enterprise") cost *= 1.4;
    if (tier === "sovereign") cost *= 1.9;
    if (cost === 0) return "$0";
    return `$${Math.round(cost).toLocaleString()}`;
  };

  const handleEstimateQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  return (
    <section id="services" class="py-24 bg-slate-50 dark:bg-[#0A0F1D] border-t border-slate-100 dark:border-slate-900/60 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono mb-3">
            Service Capabilities
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-6">
            Enterprise Solutions & System Integration
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-350 leading-relaxed">
            From specialized web development to AI anomalies detection and custom cloud containers, ZST Limited provides structured delivery.
          </p>
        </div>

        {/* Master Row Slider Layout */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Services Matrix (7 cols) */}
          <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((serv) => {
              const isSelected = selectedServices.includes(serv.id);
              return (
                <div 
                  key={serv.id}
                  onClick={() => toggleSelectService(serv.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 select-none cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? "bg-white dark:bg-slate-900 border-blue-500 ring-1 ring-blue-500/25 shadow-md shadow-blue-500/5 translate-y-[-2px]" 
                      : "bg-slate-100/60 hover:bg-white dark:bg-slate-900/40 dark:hover:bg-slate-900/90 border-slate-205 dark:border-slate-800/80 hover:border-slate-350 dark:hover:border-slate-700"
                  }`}
                >
                  <div class="space-y-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected 
                        ? "bg-blue-600 text-white dark:bg-blue-500" 
                        : "bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}>
                      {serv.icon}
                    </div>

                    <div class="space-y-1.5">
                      <h3 class="font-bold text-slate-900 dark:text-white text-sm md:text-base">
                        {serv.title}
                      </h3>
                      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {serv.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullet checklist for visual weight */}
                  <div class="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 space-y-1.5">
                    {serv.details.map((det, idx) => (
                      <span key={idx} class="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                        <CheckCircle class="w-3 h-3 text-emerald-500 shrink-0" />
                        {det}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Project Estimator Tool (5 cols) */}
          <div class="lg:col-span-5 relative">
            <div class="sticky top-28 bg-white dark:bg-[#0D1527] border border-slate-250 dark:border-slate-800 rounded-2xl p-6 shadow-xl transition-all duration-300">
              
              {/* Box Title */}
              <div class="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <Calculator class="w-5 h-5 text-blue-500" />
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-base">
                    Architecture Proposal Builder
                  </h4>
                  <p class="text-[10px] text-slate-400">
                    Select capabilities on the left to configure budget estimate
                  </p>
                </div>
              </div>

              {/* Estimate Details */}
              <div class="space-y-6">
                
                {/* Deployment Tier Selection */}
                <div class="space-y-2.5">
                  <span class="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                    Choose Deployment Tier
                  </span>
                  <div class="grid grid-cols-3 gap-2">
                    {[
                      { id: "standard", name: "SaaS Dev", note: "Standard Cloud" },
                      { id: "enterprise", name: "Enterprise", note: "Dual Redundant" },
                      { id: "sovereign", name: "Sovereign", note: "Isolated Cluster" }
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTier(t.id as any)}
                        className={`p-2.5 rounded-lg border text-left flex flex-col justify-between cursor-pointer transition ${
                          tier === t.id 
                            ? "bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-600 dark:text-blue-300" 
                            : "bg-slate-50 dark:bg-[#0A0F1D] border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        <span class="text-xs font-bold">{t.name}</span>
                        <span class="text-[8px] text-slate-400 mt-1">{t.note}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Modules Counter */}
                <div class="bg-slate-50 dark:bg-[#0A0F1D] p-4 rounded-xl border border-slate-100 dark:border-slate-900/60 space-y-3">
                  <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                    Configured Solutions Core ({selectedServices.length})
                  </span>
                  
                  {selectedServices.length === 0 ? (
                    <p class="text-xs text-slate-500 italic">No services selected. Click elements on the left menu.</p>
                  ) : (
                    <div class="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto pr-1">
                      {selectedServices.map((id) => {
                        const name = services.find(s => s.id === id)?.title.split(" ")[0] || id;
                        return (
                          <span key={id} class="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle class="w-2.5 h-2.5 text-emerald-500" /> {name}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  <div class="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs text-slate-800 dark:text-slate-200">
                    <span class="font-medium text-slate-500">Compliance Standard:</span>
                    <span class="font-bold text-slate-700 dark:text-white font-mono">
                      {tier === "sovereign" ? "ISO 27001 + GovAudit" : "ISO 27001 Basic"}
                    </span>
                  </div>
                </div>

                {/* Matrix Price & Timeline Estimates */}
                <div class="grid grid-cols-2 gap-4 pt-2">
                  <div class="space-y-1">
                    <span class="text-[10px] uppercase text-slate-400 font-bold">Projected Timeline</span>
                    <span class="text-lg md:text-xl font-bold font-mono text-slate-900 dark:text-white block">
                      {getEstimatedTimeline()}
                    </span>
                  </div>
                  <div class="space-y-1">
                    <span class="text-[10px] uppercase text-slate-400 font-bold">Estimated Cost (USD)</span>
                    <span class="text-lg md:text-xl font-bold font-mono text-blue-600 dark:text-blue-400 block">
                      {currentEstimatedPriceLevel()}
                    </span>
                  </div>
                </div>

                {/* Simulated Lead Gen Form */}
                <form onSubmit={handleEstimateQuerySubmit} class="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div>
                    <input 
                      type="text" 
                      required
                      value={submittedName}
                      onChange={(e) => setSubmittedName(e.target.value)}
                      placeholder="Your Corporate Email Address"
                      className="w-full text-xs px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={selectedServices.length === 0}
                    className="w-full py-2.5 bg-blue-650 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40"
                  >
                    Generate Custom SLA Blueprint Proposal <ChevronRight class="w-3.5 h-3.5" />
                  </button>
                </form>

                {submitSuccess && (
                  <p class="text-[10px] text-emerald-500 font-medium text-center bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-lg border border-emerald-100 dark:border-emerald-900/60 animate-fade-in">
                    ✓ Proposal generated! A custom corporate layout draft will reach your inbox shortly.
                  </p>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
