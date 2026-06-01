import React from "react";
import { ShieldAlert, BarChart3, Users2, BrainCircuit, Hammer, CheckSquare, Zap, Fingerprint } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Hardened Security Architecture",
      badge: "Cryptographic",
      description: "Every MFS node and internal team chat compiles with native end-to-end encryption. Our sovereign servers guard against leakage vectors and intrusion audits.",
      icon: <Fingerprint className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Massive Elastic Scale",
      badge: "Engineered",
      description: "Our database routers handle millions of transaction queues every second. Whether monitoring political members or syncing relief surveys, our containers automatically scale.",
      icon: <BarChart3 className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Bangladesh's Elite Team",
      badge: "Sovereign Experts",
      description: "Our engineers, systems architects, and logistics managers are experts in South Asian public administration systems, banking compliances, and global trade corridors.",
      icon: <Users2 className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Decades of Trade & Domain Expertise",
      badge: "Institutional",
      description: "We are deeply connected to regulatory frameworks in government, banking directories, and seaport custom protocols. We navigate complexities frictionlessly.",
      icon: <BrainCircuit className="w-5 h-5 text-orange-500" />
    },
    {
      title: "100% Customized Solutions",
      badge: "Dedicated",
      description: "We do not believe in standard generic templates. We build custom-shaped systems based on your exact political infrastructure, corporate sizes, or NGO survey outcomes.",
      icon: <Hammer className="w-5 h-5 text-sky-500" />
    }
  ];

  return (
    <section id="why-choose-us" class="py-24 bg-slate-50 dark:bg-[#0A0F1D] border-t border-slate-100 dark:border-slate-900/60 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Blur elements */}
      <div class="absolute bottom-4 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intro */}
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono mb-3">
            Corporate Trust
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            Why Trusted by Governments & Global Portfolios
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed max-w-2xl mx-auto mt-4">
            Security, capability, and scale aren't options — they are the core foundations upon which ZST projects are engineered.
          </p>
        </div>

        {/* Bento-Inspired Layout */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Main Hero Card inside Bento (takes 2 rows) */}
          <div class="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between shadow-xl min-h-[320px] relative overflow-hidden">
            
            {/* Absolute vector details */}
            <div class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:16px_16px] opacity-10 pointer-events-none" />
            <div class="absolute -bottom-16 -right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div class="space-y-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                <Zap class="w-3.5 h-3.5" /> High SLA Assurance
              </span>
              <h3 class="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Zero-Downtime, Clean Audit Trails & Sovereignty
              </h3>
              <p class="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl">
                We custom design all communication systems, corporate ledger wallets, and NGO geo-coordinated matrices to survive critical failure protocols. Every single database transaction commits synchronously with AES-256 validation checks.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/20 text-xs text-blue-100">
              <span class="flex items-center gap-2">
                <CheckSquare class="w-4 h-4 text-emerald-400 shrink-0" />
                ISO 27001 Cryptography Certified
              </span>
              <span class="flex items-center gap-2">
                <CheckSquare class="w-4 h-4 text-emerald-400 shrink-0" />
                Sovereign Data Storage
              </span>
            </div>

          </div>

          {/* Cards for Pillars */}
          {pillars.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white hover:bg-slate-50 dark:bg-[#0D1527] dark:hover:bg-slate-900 border border-slate-200/60 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="p-3 bg-slate-50 dark:bg-[#111A2E] rounded-xl text-slate-800 dark:text-white shrink-0 shadow-sm border border-slate-250/30">
                    {item.icon}
                  </div>
                  <span class="text-[9px] uppercase tracking-wider font-bold bg-slate-100 dark:bg-slate-950 text-slate-500 py-0.5 px-2 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <div class="space-y-1.5">
                  <h4 class="font-bold text-slate-900 dark:text-white text-base leading-tight">
                    {item.title}
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative signature link */}
              <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-mono">
                  ZST Verification Compliant
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
