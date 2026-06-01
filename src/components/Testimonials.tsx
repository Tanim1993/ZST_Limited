import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { TestimonialItem } from "../types";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const partners = [
    { name: "Bangladesh PSP Authority", role: "Auditing Partner" },
    { name: "Sovereign Logistics Corridor", role: "Maritime Procurement" },
    { name: "Dhaka Central Bank", role: "MFS Compliance Node" },
    { name: "NGO relief survey board", role: "Data Recipient" },
    { name: "Ministry of Digital Affairs", role: "E-Pension Hub" },
    { name: "Asian Trade Federation", role: "Global distribution partner" }
  ];

  const reviews: TestimonialItem[] = [
    {
      quote: "ZST Limited's ConnectHub and MeetSphere suites completely revolutionized our internal team mechanics. As a state administrative bureau, we had strict sovereign privacy guidelines, and no other agency could match ZST's local server deployment speeds and biometric audit security.",
      author: "Barrister Rafiqul Islam",
      role: "Deputy Director of Infrastructure Projects",
      company: "Bangladesh Ministry of ICT Systems",
      avatarSeed: "rafiq",
      rating: 5
    },
    {
      quote: "Sourcing core container micro-chipsets from German factories used to take our importing division three months of regulatory filings. ZST's Global Trading team resolved ocean freight permits in five days. Truly an elite global operations specialist.",
      author: "Hassan Al-Mansoori",
      role: "Procurement Lead & Managing Director",
      company: "Gulf Logistics Sourcing Hub",
      avatarSeed: "hassan",
      rating: 5
    },
    {
      quote: "Our field operators collect remote household statistics on climate relief across dynamic river circles. ZST's offline GIS survey application captured precise координат coordinates without a cell network, prompting immediate grant releases. Impeccable engineering workmanship.",
      author: "Dr. Tasnim Chowdhury",
      role: "Lead Field Evaluator & Policy Advisor",
      company: "Southern NGO Relief Coalition",
      avatarSeed: "tasnim",
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[activeIndex] || reviews[0];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#0A0F1D] border-t border-slate-100 dark:border-slate-905/60 transition-colors duration-300 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Partners & Clients section (Section 9) */}
        <div className="mb-24 text-center">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block font-mono mb-4">
            Authorized Integration Partners & Networks
          </span>
          
          {/* Logo Marquee Simulator */}
          <div className="w-full relative overflow-hidden py-6 border-y border-slate-200/50 dark:border-slate-800/60 max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              {partners.map((p, idx) => (
                <div key={idx} className="flex flex-col items-center group transition">
                  <span className="text-sm md:text-base font-extrabold text-slate-800 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight font-sans">
                    {p.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 block mt-0.5">
                    {p.role}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Soft borders on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#0A0F1D] pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#0A0F1D] pointer-events-none" />
          </div>
        </div>

        {/* Testimonials Review Deck Carousel (Section 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Core Message (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono">
                Industry Endorsements
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
                What Administrative Officers Say About ZST
              </h2>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
              We deploy software solutions directly into critical government ministries, NGO regional offices, and global sourcing networks. Here are direct audits of our execution reliability.
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 cursor-pointer text-slate-600 dark:text-slate-400 transition hover:border-slate-350 dark:hover:border-slate-700"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-slate-400">
                0{activeIndex + 1} / 0{reviews.length}
              </span>
              <button 
                onClick={handleNext}
                className="p-3 rounded-xl border border-slate-205 dark:border-slate-800 bg-white hover:bg-slate-50 dark:bg-slate-900 cursor-pointer text-slate-600 dark:text-slate-400 transition hover:border-slate-350 dark:hover:border-slate-700"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Block: Active Slider Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl transition-all duration-300">
              {/* Decorative Large Quote Indicator */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-100 dark:text-slate-900 pointer-events-none z-0" />

              <div className="relative z-10 space-y-6">
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-lg text-slate-755 dark:text-slate-200 italic leading-relaxed font-sans">
                  "{activeReview.quote}"
                </p>

                {/* Divider */}
                <div className="w-12 h-1 bg-blue-600 rounded" />

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-2">
                  {/* Decorative High-Contrast Abbreviation initials for Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                    {activeReview.author.split(" ").filter(Boolean).slice(-2).map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                      {activeReview.author}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                      {activeReview.role}
                    </span>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block mt-1">
                      {activeReview.company}
                    </span>
                  </div>
                </div>

              </div>

              {/* Secure partner seal */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                This review represents verified enterprise SLA confirmation.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
