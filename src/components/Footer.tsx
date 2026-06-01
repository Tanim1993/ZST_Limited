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
    <footer class="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 font-sans transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6">
        
        {/* Top Split */}
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Col */}
          <div class="col-span-2 space-y-4">
            <a href="#" class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px]">
                <div class="w-full h-full bg-[#0F172A] rounded-[7px] flex items-center justify-center">
                  <span class="text-sm font-extrabold text-white">ZST</span>
                </div>
              </div>
              <div class="flex flex-col">
                <span class="text-base font-extrabold tracking-tight text-white">ZST Limited</span>
                <span class="text-[9px] uppercase tracking-widest text-[#10B981] font-mono leading-none">Global Partnership</span>
              </div>
            </a>
            
            <p class="text-xs leading-relaxed text-slate-500 max-w-sm">
              Established in Bangladesh, ZST is a leading conglomerate powering fintech ledgers, secured corporate messengers, relief GIS surveys, and logistics supply lines.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <a href="#" class="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-350 hover:text-white transition">
                <Twitter class="w-4 h-4" />
              </a>
              <a href="#" class="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-350 hover:text-white transition">
                <Linkedin class="w-4 h-4" />
              </a>
              <a href="#" class="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-350 hover:text-white transition">
                <Github class="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Lists */}
          <div>
            <span class="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Solutions</span>
            <div class="space-y-2.5">
              {links.solutions.map((item, idx) => (
                <a key={idx} href={item.href} class="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

          {/* Servs Link lists */}
          <div>
            <span class="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Services</span>
            <div class="space-y-2.5">
              {links.services.map((item, idx) => (
                <a key={idx} href={item.href} class="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

          {/* Trade lists */}
          <div>
            <span class="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Global Trade</span>
            <div class="space-y-2.5">
              {links.trade.map((item, idx) => (
                <a key={idx} href={item.href} class="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

          {/* Company lists */}
          <div>
            <span class="text-xs font-bold text-slate-200 mt-1 block uppercase tracking-wider mb-4">Corporation</span>
            <div class="space-y-2.5">
              {links.corporation.map((item, idx) => (
                <a key={idx} href={item.href} class="text-xs hover:text-white transition block">{item.label}</a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar Details */}
        <div class="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-550 bg-slate-950">
          <div class="space-y-1">
            <span class="block text-slate-500">© 2026 ZST Limited. All rights reserved. Registered in Bangladesh.</span>
            <span class="block text-[10px] text-slate-600">Company registration number: C-148102. Authorized corporate representative of MFS & Import-Export codes.</span>
          </div>
          <div class="flex items-center gap-4 flex-wrap text-slate-500 text-[11px]">
            <a href="#" class="hover:text-white transition">Privacy Policy</a>
            <a href="#" class="hover:text-white transition font-mono">Secured_AES_256</a>
            <span class="text-[9px] uppercase font-bold tracking-widest text-[#10B981] px-2 py-0.5 rounded bg-emerald-950/40">
              ● Server Telemetry Secure
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
