import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Send, HelpCircle, 
  MessageSquare, User, Building, Landmark, ChevronDown, CheckCircle2, Bot 
} from "lucide-react";
import { FAQItem } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Chat Bot Simulator State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "assistant", text: "Welcome to ZST Global Support. Pick a sector query below for immediate telemetry insights." }
  ]);
  const [botIsTyping, setBotIsTyping] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: "Where is ZST Limited based, and where are sovereign servers located?",
      answer: "ZST Limited is proud to be headquartered in Dhaka, Bangladesh, with direct logistical operations in major regional circles (Chittagong, Sylhet, and Rangpur). Our database nodes run on cloud-hardened sovereign server arrays locally, ensuring compliance with state registries."
    },
    {
      question: "Are your Fintech frameworks compliant with central bank standards?",
      answer: "Yes. ZST Fintech Pay complies with major Mobile Financial Services (MFS), Payment Service Provider (PSP) frameworks, and global ISO 27001 cryptographic ledger specifications. Every settlement triggers synchronous transaction checks."
    },
    {
      question: "Can we request custom system modules for political campaigns or surveys?",
      answer: "Absolutely. We specialize in custom software engineering. Outlines of your local party registries (ZST PoliticWise) or NGO survey coordinates can be fully mapped onto a custom-shaped database cluster based on your operational boundaries."
    },
    {
      question: "What commodities does the Import/Export division primarily trade?",
      answer: "Our mercantile trading lanes primarily source elite cloud telecommunications infrastructure machinery, server chipsets, and industrial refined polymer bases, exporting agricultural tech terminal setups and natural textiles to global partner corridors."
    }
  ];

  const botQueries = [
    { id: "sec", label: "Security & Sovereignty Specs", reply: "All ZST platforms compile with standard AES-256-GCM symmetric encryption. No tracking metadata is leaked to third-party public cloud providers." },
    { id: "proc", label: "Custom Procurement & SLA", reply: "SLA contracts feature high priority 24/7 dedicated engineering teams. Lead delivery budgets average 9 to 18 weeks depending on integration parameters." },
    { id: "demos", label: "Book Video Conference Demo", reply: "Please complete the contact form on your left! A representative from our Dhaka corporate office will dispatch a premium MeetSphere video demo invite within 2 hours." }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1000);
  };

  const handleBotQueryClick = (replyText: string, label: string) => {
    if (botIsTyping) return;
    
    // Add user question
    const userMsg = { id: Date.now(), sender: "user", text: label };
    setChatMessages(prev => [...prev, userMsg]);
    setBotIsTyping(true);

    setTimeout(() => {
      const assistantMsg = { id: Date.now() + 1, sender: "assistant", text: replyText };
      setChatMessages(prev => [...prev, assistantMsg]);
      setBotIsTyping(false);
    }, 850);
  };

  return (
    <section id="contact" class="py-24 bg-white dark:bg-[#0B0F1D] border-t border-slate-100 dark:border-slate-900/60 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div class="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-mono mb-3">
            Contact & Advisory
          </span>
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            Initiate Dynamic Partnership Hub
          </h2>
          <p class="text-slate-650 dark:text-slate-350 text-base leading-relaxed mt-4">
            Connect directly with ZST Limited's Dhaka headquarters to explore high-capacity software licensing or global distribution contracts.
          </p>
        </div>

        {/* Master Column Split: Contact Form (Left) vs Interactive ChatBot & FAQs (Right) */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Form & HQ Coordinates (5 cols) */}
          <div class="lg:col-span-5 space-y-8">
            
            <div class="bg-slate-50 dark:bg-[#0D1527] border border-slate-205 dark:border-slate-800 rounded-3xl p-6 shadow-md">
              <h3 class="text-lg font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Landmark class="w-5 h-5 text-blue-500" />
                Dhaka Corporate Headquarters
              </h3>

              <div class="space-y-4">
                <div class="flex items-start gap-3 text-xs md:text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                  <MapPin class="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <strong class="text-slate-900 dark:text-white block font-semibold mb-1">Corporate Office</strong>
                    <span>ZST Tower, Level 14—16, Gulshan Commercial District, Dhaka-1212, Bangladesh</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 text-xs md:text-sm text-slate-650 dark:text-slate-350">
                  <Phone class="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <strong class="text-slate-900 dark:text-white block font-semibold mb-0.5">Commercial Advisory</strong>
                    <span>+880 2-9840240</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 text-xs md:text-sm text-slate-650 dark:text-slate-350">
                  <Mail class="w-5 h-5 text-indigo-500 shrink-0" />
                  <div>
                    <strong class="text-slate-900 dark:text-white block font-semibold mb-0.5">Sovereign Sales</strong>
                    <span>info@zst-bd.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Form */}
            <div class="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm">
              <h4 class="font-bold text-slate-950 dark:text-white text-base mb-4 block">
                Sovereign Inquiry Form
              </h4>
              <form onSubmit={handleFormSubmit} class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] text-slate-500 uppercase tracking-wider block font-mono mb-1">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label class="text-[10px] text-slate-500 uppercase tracking-wider block font-mono mb-1">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tanvir@ministry.gov"
                      className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label class="text-[10px] text-slate-500 uppercase tracking-wider block font-mono mb-1">Corporation or Ministry</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Ministry of Finance"
                    className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label class="text-[10px] text-slate-500 uppercase tracking-wider block font-mono mb-1">Scope Parameters / Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe custom features required (MFS endpoints, survey GIS requirements...)"
                    className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white-850 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-bold text-white rounded-lg text-xs tracking-wider transition uppercase cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Syncing Proposal..." : "Secure Dispatch Proposal"}
                </button>
              </form>

              {formSuccess && (
                <div class="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 rounded-lg text-emerald-800 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 class="w-4 h-4 text-emerald-500" />
                  Your partnership proposal has committed to our Gulshan routing ledger. A team director will follow up with you shortly.
                </div>
              )}
            </div>

          </div>

          {/* Column 2: Interactive Advisor Chat & Accordion FAQs (7 cols) */}
          <div class="lg:col-span-7 space-y-8">
            
            {/* Interactive Support Chatbot Simulation */}
            <div class="bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between h-[280px]">
              <div>
                <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div class="flex items-center gap-2">
                    <Bot class="w-4 h-4 text-emerald-400" />
                    <span class="text-xs font-mono text-slate-350 uppercase tracking-wider">ZST SLA Support Telemetry Bot</span>
                  </div>
                  <span class="text-[9px] bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                    Online
                  </span>
                </div>

                {/* Messages Container */}
                <div class="space-y-3.5 max-h-[145px] overflow-y-auto pr-1">
                  {chatMessages.map(msg => (
                    <div key={msg.id} class={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div class={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-normal ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none font-medium"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {botIsTyping && (
                    <p class="text-[10px] text-slate-500 font-mono italic animate-pulse">Syncing encrypted advisory logs...</p>
                  )}
                </div>
              </div>

              {/* Prefabricated Queries Selector bottom bar */}
              <div class="pt-3 border-t border-slate-800 space-y-2.5">
                <span class="text-[9px] text-slate-500 uppercase font-bold block font-mono">Select Query for Instant Analytics Response</span>
                <div class="flex flex-wrap gap-2">
                  {botQueries.map(q => (
                    <button
                      key={q.id}
                      onClick={() => handleBotQueryClick(q.reply, q.label)}
                      className="px-2.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-[10px] text-slate-300 transition shrink-0 cursor-pointer text-left"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Accordion FAQs */}
            <div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-950 dark:text-white block mb-2">
                Frequently Asked Corporate Inquiries
              </h3>

              <div class="space-y-2.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="border border-slate-200 dark:border-slate-800/80 rounded-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left font-bold text-xs md:text-sm text-slate-900 dark:text-white flex items-center justify-between bg-slate-50 dark:bg-slate-900/30 hover:bg-slate-100/50 dark:hover:bg-slate-900/80 cursor-pointer transition"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
                      </button>
                      
                      {isOpen && (
                        <div class="p-4 pt-3 text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed bg-white dark:bg-[#0B0F1D] border-t border-slate-150 dark:border-slate-850/80 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
