import React from "react";
import { 
  ArrowRight, Shield, TrendingUp, Zap, Globe, MessageSquare, 
  Video, Database, Sparkles, CheckCircle, Smartphone 
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-[#0B0F1D] transition-colors duration-300">
      
      {/* Immersive Background Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-10 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay for Tech Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content (6 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-semibold text-blue-600 dark:text-blue-400 w-fit tracking-wider uppercase">
              <span className="flex h-2 w-2 rounded-full bg-blue-505 animate-pulse"></span>
              GLOBAL DIGITAL TRANSFORMATION
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-950 dark:text-white tracking-tight font-display">
              Building Products for <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-emerald-400">Governments & Enterprises</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-650 dark:text-slate-350 leading-relaxed max-w-xl">
              From enterprise-grade Fintech platforms and secure communication systems to real-time Business Intelligence and global trade operations. Established in Bangladesh, empowering operational ecosystems worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#products"
                id="hero-products-btn"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.01] duration-200 group cursor-pointer text-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                id="hero-contact-btn"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/80 transition-all font-semibold cursor-pointer text-sm"
              >
                Request Demo
              </a>
            </div>

            {/* Statistics Bar mimicking the sleek theme */}
            <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">24+</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-550 uppercase font-mono tracking-wider">Products</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">10M+</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-550 uppercase font-mono tracking-wider">Active Users</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">12+</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-550 uppercase font-mono tracking-wider">Countries</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight font-mono">80+</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-550 uppercase font-mono tracking-wider">Ministries</p>
              </div>
            </div>

          </div>

          {/* Hero Right Visuals: Modern Dashboard Mockup + Floating Widgets (5 cols, offset 1) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 xl:pl-6">
            <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none">
              
              {/* Main Simulated Tablet Mockup */}
              <div className="relative bg-slate-100 dark:bg-[#111A2E] border border-slate-300 dark:border-slate-800 rounded-2xl shadow-2xl p-4 overflow-hidden transition-all duration-300">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[9px] font-mono text-slate-400 dark:text-slate-550 ml-1">bi_dashboard_active_v1</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[8px] font-mono font-bold uppercase">
                    SYS_OK
                  </div>
                </div>

                {/* Dashboard body mockup */}
                <div className="pt-3 space-y-4">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-[#070D1A] p-2.5 rounded-lg border border-slate-200 dark:border-slate-800/80">
                      <span className="text-[8px] uppercase font-bold text-slate-500 block">System Transactions</span>
                      <span className="text-sm font-extrabold font-mono text-slate-950 dark:text-white">12.8M Core/sec</span>
                    </div>
                    <div className="bg-white dark:bg-[#070D1A] p-2.5 rounded-lg border border-slate-205 dark:border-slate-800/80">
                      <span className="text-[8px] uppercase font-bold text-slate-500 block">SLA Network uptime</span>
                      <span className="text-sm font-extrabold font-mono text-blue-505">99.982%</span>
                    </div>
                  </div>

                  {/* Micro Chart Area */}
                  <div className="bg-[#050B14] p-3 rounded-lg border border-slate-800 flex flex-col justify-between h-[120px]">
                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono">
                      <span>FINTECH LEDGER PERFORMANCE</span>
                      <span className="text-[#10B981] flex items-center gap-0.5">● SECURE</span>
                    </div>
                    {/* Simulated Wave Lines */}
                    <div className="flex items-end justify-between h-14 gap-1 pt-2">
                      {[30, 45, 60, 40, 75, 45, 90, 110, 80, 115, 130, 140, 95, 110, 120].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-600 via-indigo-600 to-emerald-500 rounded-t" 
                            style={{ height: `${(h / 140) * 44}px` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[7px] text-slate-600 font-mono">
                      <span>00:00 UTC</span>
                      <span>12:00 UTC</span>
                      <span>24:00 UTC</span>
                    </div>
                  </div>

                  {/* Detailed Table Matrix Mock */}
                  <div className="bg-white dark:bg-[#070D1A] rounded-lg border border-slate-200 dark:border-slate-800/80 p-2.5">
                    <span className="text-[8px] uppercase font-bold text-slate-400 block mb-1.5">Connected Sovereign Nodes</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Dhaka Division Bank Gateway
                        </span>
                        <span className="font-mono text-slate-500">22ms • ACTIVE</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Chittagong Port Trade Ledger
                        </span>
                        <span className="font-mono text-slate-500">18ms • ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: ConnectHub Chat Alert (Bobs Gently) */}
              <div className="absolute -top-6 -right-6 md:-right-8 bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-[float_6s_ease-in-out_infinite] z-20 w-52 pointer-events-none">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/60 rounded-lg text-blue-600 dark:text-blue-300 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">ConnectHub</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">Hasan sent approval file</p>
                  <span className="text-[8px] text-slate-500">Encrypted AES_256</span>
                </div>
              </div>

              {/* Floating Widget 2: MFS Success Payment */}
              <div className="absolute -bottom-6 -left-6 md:-left-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-[float_6s_ease-in-out_infinite_2s] z-20 w-48 pointer-events-none">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-950/60 rounded-lg text-emerald-600 dark:text-emerald-400 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">ZST Fintech Wallet</span>
                  <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100">৳ 250,000 Transferred</p>
                  <span className="text-[8px] text-emerald-500">MFS Ledger Sync Complete</span>
                </div>
              </div>

              {/* Floating Widget 3: Live Video Meeting Badge */}
              <div className="absolute top-[40%] -right-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-1.5 px-3 rounded-lg shadow-lg flex items-center gap-2 animate-[float_6s_ease-in-out_infinite_4s] z-10 pointer-events-none">
                <Video className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-[10px] font-medium text-slate-800 dark:text-slate-350">MeetSphere: 34 Active</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
