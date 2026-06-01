import React from "react";
import { 
  Building2, ArrowUpRight, Github, Twitter, Linkedin, 
  Globe, ShieldAlert, CheckCircle, Landmark 
} from "lucide-react";

export default function Footer() {
  const links = {
    solutions: [
      { label: "Fintech Core System", href: "#products" },
      { label: "ConnectHub Chat", href: "#products" },
      { label: "MeetSphere Enterprise", href: "#products" },
      { label: "NGO GIS Survey", href: "#products" },
      { label: "PoliticWise Registry", href: "#products" },
      { label: "Executive BI Dashboard", href: "#products" }
    ],
    services: [
      { label: "Sovereign Development", href: "#services" },
      { label: "Mobile Apps Core", href: "#services" },
      { label: "Cloud Containers", href: "#services" },
      { label: "SLA IT Consulting", href: "#services" },
      { label: "System API Integration", href: "#services" }
    ],
    trade: [
      { label: "Global Procurement", href: "#trade" },
      { label: "Warehousing & Sourcing", href: "#trade" },
      { label: "Port Terminal Logistics", href: "#trade" },
      { label: "Corridor Operations", href: "#trade" }
    ],
    corporation: [
      { label: "About ZST", href: "#about" },
      { label: "SLA Foundations", href: "#why-choose-us" },
      { label: "Dhaka Head Office", href: "#contact" },
      { label: "Authorized Partners", href: "#testimonials" }
    ]
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Split */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px]">
                <div className="w-full h-full bg-[#0F172A] rounded-[7px] flex items-center justify-center">
                  <span className="text-sm font-extrabold text-white">ZST</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-white">ZST Limited</span>
                <span className="text-[9px] uppercase tracking-widest text-[#10B981] font-mono leading-none">Global Partnership</span>
              </div>
            </a>
            
            <p className="text-xs leading-relaxed text-slate-500 max-w-sm">
              Established in Bangladesh, ZST is a leading conglomerate powering fintech ledgers, secured corporate messengers, relief GIS surveys, and logistics supply lines.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-350 hover:text-white transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-350 hover:text-white transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-350 hover:text-white transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Lists */}
          <div>
            <span className="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Solutions</span>
            <div className="space-y-2.5">
              {links.solutions.map((item, idx) => (
                <a key={idx} href={item.href} className="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

          {/* Servs Link lists */}
          <div>
            <span className="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Services</span>
            <div className="space-y-2.5">
              {links.services.map((item, idx) => (
                <a key={idx} href={item.href} className="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

          {/* Trade lists */}
          <div>
            <span className="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Global Trade</span>
            <div className="space-y-2.5">
              {links.trade.map((item, idx) => (
                <a key={idx} href={item.href} className="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

          {/* Company lists */}
          <div>
            <span className="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Corporation</span>
            <div className="space-y-2.5">
              {links.corporation.map((item, idx) => (
                <a key={idx} href={item.href} className="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar Details */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-550 bg-slate-950">
          <div className="space-y-1">
            <span className="block text-slate-500">© 2026 ZST Limited. All rights reserved. Registered in Bangladesh.</span>
            <span className="block text-[10px] text-slate-600">Company registration number: C-148102. Authorized corporate representative of MFS & Import-Export codes.</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap text-slate-500 text-[11px]">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition font-mono">Secured_AES_256</a>
            <span className="text-[9px] uppercase font-bold tracking-widest text-[#10B981] px-2 py-0.5 rounded bg-emerald-950/40">
              ● Server Telemetry Secure
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
