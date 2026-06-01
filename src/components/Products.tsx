import React, { useState, useEffect } from "react";
import { 
  Wallet, MessageSquare, Video, Shield, ClipboardCheck, LayoutDashboard,
  Send, Phone, Volume2, ShieldCheck, Plus, Check, QrCode, ArrowUpRight,
  Mic, MicOff, VideoOff, Users, Play, BarChart3, HelpCircle,
  MapPin, Award, Search, CheckCircle2, TrendingUp, RefreshCcw, Landmark,
  CheckSquare, Globe
} from "lucide-react";
import { ProductData } from "../types";
import { motion, AnimatePresence } from "motion/react";

const PRODUCTS: ProductData[] = [
  {
    id: "fintech",
    name: "ZST Fintech Pay",
    tagline: "Enterprise Digital Payments & MFS Solution",
    altText: "Fintech Platform",
    description: "A complete white-label Mobile Financial Services (MFS), PSP, and digital merchant ecosystem engineered for governments, telecom providers, and financial institutions.",
    accentColor: "from-blue-600 to-emerald-500",
    interactiveType: "fintech",
    features: [
      { title: "Mobile Financial Services (MFS)", description: "High-throughput cash-in, cash-out, and P2P transfers built on a secure ledger.", icon: "Wallet" },
      { title: "PSP & Digital Wallet Core", description: "Multi-currency digital wallets featuring robust compliance pipelines and instant settlements.", icon: "Landmark" },
      { title: "Merchant & Agent Management", description: "Comprehensive dynamic QR-code generators and commission distribution portals.", icon: "QrCode" }
    ]
  },
  {
    id: "connecthub",
    name: "ConnectHub",
    tagline: "Secure Workplace Messaging & Announcements",
    altText: "Secure Internal Collaboration Platform",
    description: "A highly secure, sovereign alternative to public messengers. Custom built for enterprises and civil service institutions requiring ultimate privacy, server-control, and real-time chat.",
    accentColor: "from-blue-500 to-indigo-600",
    interactiveType: "connecthub",
    features: [
      { title: "Localized Messaging", description: "Sovereign end-to-end encrypted chats, announcement flags, and central search logs.", icon: "MessageSquare" },
      { title: "Corporate Channels", description: "Topic-centric public or invitation-only rooms equipped with rich role-based controls.", icon: "Users" },
      { title: "File Security & Vaults", description: "Enterprise-grade media sharing backed by active threat checks and auditing.", icon: "Shield" }
    ]
  },
  {
    id: "meetsphere",
    name: "MeetSphere",
    tagline: "Ultra-HD Virtual Video Meetings & Polling",
    altText: "High Definition enterprise video platform",
    description: "A robust alternative to video conference limits. Includes high-capacity secure rooms, zero-latency screen shares, dynamic attendee list controls, live state-audits, and integrated biometric polling.",
    accentColor: "from-indigo-600 to-purple-600",
    interactiveType: "meetsphere",
    features: [
      { title: "Secure HD Conference Engine", description: "Crystal-clear real-time communication that operates robustly on minimal latency.", icon: "Video" },
      { title: "Interactive Polling & Casting", description: "Bypass manual Tallies with verifiable interactive voting grids embedded inside the call.", icon: "CheckCircle2" },
      { title: "Attendance & AI Automated Logs", description: "Track instant check-ins, record highlights, and compile minutes with server convenience.", icon: "ClipboardCheck" }
    ]
  },
  {
    id: "political",
    name: "ZST PoliticWise",
    tagline: "Sovereign Political & Constituency Optimizer",
    altText: "Political and campaign management hub",
    description: "A secure organizational suite for large scale party logistics, member verification, volunteer networks, local development tracking, and analytics dashboards.",
    accentColor: "from-blue-700 to-sky-500",
    interactiveType: "political",
    features: [
      { title: "Party & Member Registers", description: "Enlist millions of members securely with offline verification, smart ID support, and regional matrices.", icon: "Users" },
      { title: "Campaign Operations Core", description: "Deploy localized goals, field tasking grids, and real-time campaign results.", icon: "TrendingUp" },
      { title: "Strategic Regional View", description: "Visualized polling statistics, demographic grids, and public response metrics.", icon: "MapPin" }
    ]
  },
  {
    id: "ngo",
    name: "NGO Survey & Field-Track",
    tagline: "Socioeconomic Surveying & GIS Mapping",
    altText: "NGO field data collector and mapping portal",
    description: "Build, distribute, and collect quantitative data on field indicators. Fully capable of offline tracking, localized smart GIS routing, and impact report collation.",
    accentColor: "from-emerald-500 to-teal-600",
    interactiveType: "ngo",
    features: [
      { title: "Dynamic Survey Builder", description: "Build and deploy validation-heavy forms capable of nested conditional logic.", icon: "ClipboardCheck" },
      { title: "GIS & Precision Coordinates", description: "Verify respondents with precise offline coordinates and geo-fenced capture parameters.", icon: "MapPin" },
      { title: "Impact & Outcome Dashboard", description: "Track relief metrics, household surveys, and grant disbursement milestones immediately.", icon: "Award" }
    ]
  },
  {
    id: "bi",
    name: "ZST Enterprise BI",
    tagline: "Real-Time Corporate Intelligence Portal",
    altText: "Sleek business intelligence dashboards",
    description: "Empower boardrooms with data. ZST BI integrates stream sources into clean unified metrics, automated reports, KPI trackers, and ML anomaly indicators.",
    accentColor: "from-slate-700 to-slate-900 dark:from-slate-300 dark:to-white",
    interactiveType: "bi",
    features: [
      { title: "Executive-Level Summaries", description: "Extract micro-KPI values and project benchmarks onto high-density dashboard layouts.", icon: "LayoutDashboard" },
      { title: "Infinite System Connectors", description: "Synchronize database logs, legacy ERPs, and cloud storage systems with speed.", icon: "RefreshCcw" },
      { title: "Anomaly & Warning Feeds", description: "Proactively alert executives on unexpected drop-offs or operational resource limits.", icon: "Shield" }
    ]
  }
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("fintech");
  
  // Fintech Interactive State
  const [walletBalance, setWalletBalance] = useState(4850020);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Received", from: "Merchant Hub #4", amount: 152000, date: "Just now", status: "Completed" },
    { id: 2, type: "Disbursement", from: "E-Pension Registry", amount: 24500, date: "10m ago", status: "Completed" },
    { id: 3, type: "Payout", from: "ZST Agent Dhaka East", amount: -40000, date: "1h ago", status: "Completed" }
  ]);
  const [sendAmount, setSendAmount] = useState("5000");
  const [sendTarget, setSendTarget] = useState("ZST Agent Chittagong");
  
  // ConnectHub Interactive State
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "Mahmud Hasan (MD)", text: "Team, the central bank PSP audit successfully passed today!", stamp: "09:40 AM", isSelf: false },
    { id: 2, sender: "Tasnim Ara (Product Coordinator)", text: "Outstanding! MeetSphere integration files are also loaded on ConnectHub server.", stamp: "09:42 AM", isSelf: false },
    { id: 3, sender: "You", text: "Ready to launch ZST PoliticWise live server next Monday.", stamp: "09:44 AM", isSelf: true }
  ]);
  const [chatInput, setChatInput] = useState("");

  // MeetSphere Interactive State
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [activePoll, setActivePoll] = useState({
    title: "Approve ConnectHub E2E security audit?",
    totalVotes: 34,
    yesVotes: 28,
    noVotes: 6
  });
  const [hasVoted, setHasVoted] = useState(false);

  // NGO Survey State
  const [surveySubmissions, setSurveySubmissions] = useState(382);
  const [newSurveyName, setNewSurveyName] = useState("");
  const [newSurveyArea, setNewSurveyArea] = useState("Sylhet Relief Zone C");
  const [surveys, setSurveys] = useState([
    { name: "Socioeconomic Status Index", responders: 140, area: "Rangpur Division" },
    { name: "Agricultural Technology Survey", responders: 242, area: "Barisal Coastal Circle" }
  ]);

  // BI Dashboard State
  const [biRevenue, setBiRevenue] = useState(8429000);
  const [biActiveEngagements, setBiActiveEngagements] = useState(128200);
  const [biPerformanceIndex, setBiPerformanceIndex] = useState(99.4);
  const [isRefreshingBi, setIsRefreshingBi] = useState(false);

  const triggerBiRefresh = () => {
    setIsRefreshingBi(true);
    setTimeout(() => {
      setBiRevenue(prev => Math.floor(prev + (Math.random() * 50000 - 20000)));
      setBiActiveEngagements(prev => Math.floor(prev + (Math.random() * 400 - 150)));
      setBiPerformanceIndex(parseFloat((98.5 + Math.random() * 1.4).toFixed(1)));
      setIsRefreshingBi(false);
    }, 700);
  };

  const handleSendMoney = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(sendAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return;
    
    setWalletBalance(prev => prev - parsedAmount);
    setTransactions([
      {
        id: Date.now(),
        type: "Sent",
        from: sendTarget || "External Account",
        amount: -parsedAmount,
        date: "Just now",
        status: "Completed"
      },
      ...transactions
    ]);
    setSendAmount("");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages([
      ...chatMessages,
      {
        id: Date.now(),
        sender: "You",
        text: chatInput,
        stamp: "09:55 AM",
        isSelf: true
      }
    ]);
    setChatInput("");

    // Simple simulated reply from coordinator after 1.5 seconds
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "Tasnim Ara (Product Coordinator)",
          text: `Roger that message. Confirming that updates look stable!`,
          stamp: "09:56 AM",
          isSelf: false
        }
      ]);
    }, 1200);
  };

  const handleCastVote = (vote: "yes" | "no") => {
    if (hasVoted) return;
    setActivePoll(prev => ({
      ...prev,
      totalVotes: prev.totalVotes + 1,
      yesVotes: vote === "yes" ? prev.yesVotes + 1 : prev.yesVotes,
      noVotes: vote === "no" ? prev.noVotes + 1 : prev.noVotes
    }));
    setHasVoted(true);
  };

  const handleAddSurvey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSurveyName.trim()) return;

    setSurveys([
      { name: newSurveyName, responders: 0, area: newSurveyArea },
      ...surveys
    ]);
    setSurveySubmissions(prev => prev + 1);
    setNewSurveyName("");
  };

  const currentProduct = PRODUCTS.find(p => p.id === activeTab) || PRODUCTS[0];

  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-[#0A0F1D] relative overflow-hidden transition-colors duration-300">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Software Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-6">
            Pioneering Enterprise Software <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-emerald-400">At National Scale</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            ZST Limited designs and deploys custom-architected platforms used by governments, massive party structures, NGOs, and global corporations.
          </p>
        </div>

        {/* Tab System Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {PRODUCTS.map(p => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                id={`tab-btn-${p.id}`}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 text-sm font-medium border cursor-pointer ${
                  isActive 
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-blue-500/30 shadow-lg shadow-blue-500/5 translate-y-[-1px]" 
                    : "bg-slate-100/80 dark:bg-slate-900/50 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-slate-800"
                }`}
              >
                {p.id === "fintech" && <Wallet className="w-4 h-4 text-emerald-500" />}
                {p.id === "connecthub" && <MessageSquare className="w-4 h-4 text-blue-500" />}
                {p.id === "meetsphere" && <Video className="w-4 h-4 text-indigo-500" />}
                {p.id === "political" && <Shield className="w-4 h-4 text-sky-500" />}
                {p.id === "ngo" && <ClipboardCheck className="w-4 h-4 text-emerald-600" />}
                {p.id === "bi" && <LayoutDashboard className="w-4 h-4 text-slate-500 dark:text-slate-200" />}
                <span>{p.name.split(" ")[1] || p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[580px]">
          
          {/* Left Block: Product Details (Covers 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className={`text-sm font-semibold tracking-wide bg-gradient-to-r ${currentProduct.accentColor} bg-clip-text text-transparent uppercase`}>
                    {currentProduct.tagline}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-950 dark:text-white tracking-tight">
                    {currentProduct.name}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {currentProduct.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 pt-2">
                  {currentProduct.features.map((feat, idx) => {
                    return (
                      <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-900/60 transition-all duration-300 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-800/40">
                        <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                          {feat.icon === "Wallet" && <Wallet className="w-4 h-4" />}
                          {feat.icon === "Landmark" && <Landmark className="w-4 h-4" />}
                          {feat.icon === "QrCode" && <QrCode className="w-4 h-4" />}
                          {feat.icon === "MessageSquare" && <MessageSquare className="w-4 h-4" />}
                          {feat.icon === "Users" && <Users className="w-4 h-4" />}
                          {feat.icon === "Shield" && <Shield className="w-4 h-4" />}
                          {feat.icon === "Video" && <Video className="w-4 h-4" />}
                          {feat.icon === "CheckCircle2" && <CheckCircle2 className="w-4 h-4" />}
                          {feat.icon === "ClipboardCheck" && <ClipboardCheck className="w-4 h-4" />}
                          {feat.icon === "TrendingUp" && <TrendingUp className="w-4 h-4" />}
                          {feat.icon === "MapPin" && <MapPin className="w-4 h-4" />}
                          {feat.icon === "Award" && <Award className="w-4 h-4" />}
                          {feat.icon === "LayoutDashboard" && <LayoutDashboard className="w-4 h-4" />}
                          {feat.icon === "RefreshCcw" && <RefreshCcw className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a 
                    href="#contact" 
                    id={`btn-quote-${currentProduct.id}`}
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/10 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all text-sm"
                  >
                    Request Live Demo
                  </a>
                  <a 
                    href="#contact" 
                    className="px-5 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-all text-sm flex items-center gap-1.5"
                  >
                    Read Technical Docs <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Block: Interactive Live Simulator Frame (Covers 7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Ambient Backglow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-15 dark:opacity-20 percent pointer-events-none" />
            
            <div className="relative bg-white dark:bg-[#0D1527] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col h-[520px]">
              
              {/* Simulator Header / Topbar */}
              <div className="bg-slate-50 dark:bg-slate-900/80 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 ml-2 tracking-wider">
                    {currentProduct.id.toUpperCase()}_SYSTEM_DEMO.zst
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center gap-1 animate-pulse-slow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> LIVE SIMULATOR
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Panel Body */}
              <div className="flex-1 overflow-y-auto p-5 font-sans relative">
                
                {activeTab === "fintech" && (
                  <div className="space-y-4">
                    {/* Fake Phone Screen Frame Header */}
                    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl flex items-center justify-between border border-slate-200/60 dark:border-slate-800/65">
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Available Core Capital</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                            ৳ {walletBalance.toLocaleString()}
                          </span>
                          <span className="text-xs text-emerald-500 font-semibold flex items-center gap-0.5">
                            +12.4% <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/60 rounded-xl text-blue-600 dark:text-blue-300">
                        <Wallet className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Interactive Send Money Form */}
                      <div className="bg-white dark:bg-slate-900/40 p-4 rounded-xl border border-slate-250 dark:border-slate-800/70">
                        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                          <QrCode className="w-3.5 h-3.5 text-emerald-500" />
                          Simulate MFS Payout
                        </h4>
                        <form onSubmit={handleSendMoney} className="space-y-3">
                          <div>
                            <label className="text-[10px] text-slate-500 block mb-1">Target Account/Agent</label>
                            <input 
                              type="text" 
                              value={sendTarget}
                              onChange={(e) => setSendTarget(e.target.value)}
                              placeholder="e.g. Dhaka Central Depot"
                              className="w-full text-xs px-2.5 py-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-slate-500 block mb-1">Disbursement Amount (৳)</label>
                            <div className="relative">
                              <span className="absolute left-2.5 top-1.5 text-xs text-slate-500 font-mono">৳</span>
                              <input 
                                type="number" 
                                value={sendAmount}
                                onChange={(e) => setSendAmount(e.target.value)}
                                placeholder="5000"
                                className="w-full text-xs pl-6 pr-2 py-1.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-blue-500 font-mono"
                              />
                            </div>
                          </div>
                          <button 
                            type="submit"
                            className="w-full bg-emerald-600 text-white py-1.5 px-3 rounded text-xs font-semibold hover:bg-emerald-700 transition cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            Execute Real-time Ledger Pay <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </form>
                      </div>

                      {/* Transaction Logs */}
                      <div className="bg-white dark:bg-slate-900/45 p-4 rounded-xl border border-slate-200 dark:border-slate-800/70 overflow-hidden flex flex-col justify-between">
                        <h4 className="text-xs font-bold text-slate-700 dark:text-slate-400 mb-2 uppercase tracking-wider">
                          Ledger Audit Logs
                        </h4>
                        <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                          {transactions.map((t) => (
                            <div key={t.id} className="flex items-center justify-between text-[11px] py-1 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
                              <div>
                                <span className="font-medium text-slate-800 dark:text-slate-200 block">{t.from}</span>
                                <span className="text-[9px] text-slate-500">{t.date} • {t.type}</span>
                              </div>
                              <div className="text-right">
                                <span className={`font-mono font-bold ${t.amount > 0 ? "text-emerald-500" : "text-amber-500"}`}>
                                  {t.amount > 0 ? "+" : ""}{t.amount.toLocaleString()} ৳
                                </span>
                                <span className="text-[8px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded px-1 ml-1 block w-max ml-auto">
                                  {t.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "connecthub" && (
                  <div className="flex flex-col h-full bg-slate-100 dark:bg-[#070D1A] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800/90">
                    {/* Chat channel title */}
                    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500 font-extrabold font-mono">#</span>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">announcements_and_dev_operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Phone className="w-3.5 h-3.5 hover:text-blue-500 cursor-pointer" />
                        <Users className="w-3.5 h-3.5 hover:text-blue-500 cursor-pointer" />
                      </div>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[220px]">
                      {chatMessages.map((msg) => (
                        <div key={msg.id} className={`flex flex-col ${msg.isSelf ? "items-end" : "items-start"}`}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">{msg.sender}</span>
                            <span className="text-[8px] text-slate-400">{msg.stamp}</span>
                          </div>
                          <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-normal shadow-sm ${
                            msg.isSelf 
                              ? "bg-blue-600 text-white rounded-tr-none" 
                              : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-850"
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat Form */}
                    <form onSubmit={handleSendMessage} className="bg-white dark:bg-slate-900 p-2.5 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                      <input 
                        type="text" 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder="Type encrypted message securely..."
                        className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button 
                        type="submit" 
                        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition shrink-0 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === "meetsphere" && (
                  <div className="space-y-4">
                    {/* Video Grid Simulation */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-slate-900 rounded-lg overflow-hidden h-[120px] relative border border-slate-800 flex flex-col justify-between p-2">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                        <span className="absolute top-2 right-2 bg-red-600 w-1.5 h-1.5 rounded-full animate-pulse z-10" />
                        <div className="relative z-10 mt-auto flex items-center justify-between text-white text-[10px] w-full font-semibold">
                          <span>MD: Mahmud Hasan</span>
                          <Mic className="w-3 h-3 text-emerald-400" />
                        </div>
                        {/* Static video representation: glowing grid */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-950/60 to-slate-950">
                          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400">MD_CAM</span>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg overflow-hidden h-[120px] relative border border-slate-800 flex flex-col justify-between p-2">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                        <div className="relative z-10 mt-auto flex items-center justify-between text-white text-[10px] w-full font-semibold">
                          <span>PM: Tasnim Ara</span>
                          <Mic className="w-3 h-3 text-emerald-400" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0F2625] to-slate-950">
                          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400">PM_CAM</span>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-lg overflow-hidden h-[120px] relative border border-slate-800 flex flex-col justify-between p-2">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                        <div className="relative z-10 mt-auto flex items-center justify-between text-white text-[10px] w-full font-semibold">
                          <span>User (You)</span>
                          {isMuted ? <MicOff className="w-3 h-3 text-red-400" /> : <Mic className="w-3 h-3 text-emerald-400" />}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-950/60 to-slate-950">
                          {isVideoOn ? (
                            <span className="text-xs font-mono font-bold tracking-widest text-blue-400">YOUR_FEED</span>
                          ) : (
                            <VideoOff className="w-5 h-5 text-slate-600" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Integrated Meeting Poll Widget */}
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 uppercase">
                          <CheckSquare className="w-4 h-4 text-indigo-500" />
                          Biometric Attendance & Polling
                        </h4>
                        <span className="text-[9px] bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded">
                          Active Cast
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mb-3">
                        {activePoll.title}
                      </p>

                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-700 dark:text-slate-300">
                            <span>YES (Approve / Confirm)</span>
                            <span>{activePoll.yesVotes} of {activePoll.totalVotes} ({Math.round(activePoll.yesVotes / activePoll.totalVotes * 100)}%)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-indigo-500 transition-all duration-500"
                              style={{ width: `${activePoll.yesVotes / activePoll.totalVotes * 100}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] mb-1 font-semibold text-slate-700 dark:text-slate-300">
                            <span>NO (Dissent / Reject)</span>
                            <span>{activePoll.noVotes} of {activePoll.totalVotes} ({Math.round(activePoll.noVotes / activePoll.totalVotes * 100)}%)</span>
                          </div>
                          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-400 transition-all duration-500"
                              style={{ width: `${activePoll.noVotes / activePoll.totalVotes * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {!hasVoted ? (
                        <div className="flex gap-2.5 mt-4">
                          <button 
                            onClick={() => handleCastVote("yes")}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs py-1.5 font-bold transition cursor-pointer"
                          >
                            Cast YES
                          </button>
                          <button 
                            onClick={() => handleCastVote("no")}
                            className="flex-1 bg-slate-250 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 hover:bg-slate-300 rounded text-xs py-1.5 font-bold transition cursor-pointer"
                          >
                            Cast NO
                          </button>
                        </div>
                      ) : (
                        <p className="text-[10px] text-center text-emerald-500 dark:text-emerald-400 font-medium mt-3.5 flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Your biometric token has registered vote audit successfully.
                        </p>
                      )}
                    </div>

                    {/* Video room shortcuts */}
                    <div className="flex justify-center gap-4 py-1 border-t border-slate-100 dark:border-slate-800">
                      <button 
                        onClick={() => setIsMuted(!isMuted)} 
                        className={`p-2 rounded-full cursor-pointer transition ${isMuted ? "bg-red-500 text-white" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"}`}
                      >
                        {isMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                      <button 
                        onClick={() => setIsVideoOn(!isVideoOn)} 
                        className={`p-2 rounded-full cursor-pointer transition ${!isVideoOn ? "bg-red-500 text-white" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"}`}
                      >
                        {isVideoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                      </button>
                      <button className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-red-700 cursor-pointer">
                        Disconnect Meet
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "political" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-blue-50 dark:bg-blue-950/45 p-3 rounded-lg border border-blue-100 dark:border-blue-900/40">
                        <span className="text-[9px] uppercase tracking-wider font-bold block text-blue-600 dark:text-blue-300">Registered Party Members</span>
                        <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">4,821,490</span>
                      </div>
                      <div className="bg-sky-50 dark:bg-sky-950/45 p-3 rounded-lg border border-sky-100 dark:border-[#0F355C]">
                        <span className="text-[9px] uppercase tracking-wider font-bold block text-sky-600 dark:text-sky-300 font-semibold">Active Districts</span>
                        <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">64 / 64</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <span className="text-[9px] uppercase tracking-wider font-bold block text-slate-500">Global Campaign Audits</span>
                        <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">100.0% SECURE</span>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 mb-3 flex items-center justify-between">
                        <span>Constituency Metric Map</span>
                        <span className="text-[9px] text-slate-400">Verifying live results across Bangladesh</span>
                      </h4>
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-700 dark:text-slate-400">Dhaka Division (Central HQ)</span>
                          <span className="font-mono text-slate-900 dark:text-white font-bold">1,402,400 Members Verified</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-400 w-[85%]" />
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-700 dark:text-slate-400">Chittagong Division</span>
                          <span className="font-mono text-slate-900 dark:text-white font-bold">983,000 Members Verified</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-[68%]" />
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-700 dark:text-slate-400">Rajshahi Division</span>
                          <span className="font-mono text-slate-900 dark:text-white font-bold text-emerald-500">624,900 Members (Sync Complete)</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[95%]" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-[#0E203B] p-3.5 rounded-lg border border-indigo-100 dark:border-indigo-950 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span className="text-xs text-indigo-900 dark:text-indigo-200">
                          <strong>Sovereign Compliance:</strong> Built dedicated servers with strict offline biometric identity backups.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "ngo" && (
                  <div className="space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-150 dark:border-emerald-900/40 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold block">Live NGO Survey Forms Dispatched</span>
                        <span className="text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-300">
                          {surveySubmissions} Surveys Listed
                        </span>
                      </div>
                      <Globe className="w-10 h-10 text-emerald-500/70" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Interactive Builder */}
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 mb-2 uppercase">Create Active Field Dispatch</h4>
                        <form onSubmit={handleAddSurvey} className="space-y-2">
                          <div>
                            <input 
                              type="text" 
                              value={newSurveyName}
                              onChange={(e) => setNewSurveyName(e.target.value)}
                              placeholder="Survey Name (e.g. Relief Audit)"
                              className="w-full text-xs px-2.5 py-1.5 rounded bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-white"
                            />
                          </div>
                          <div>
                            <input 
                              type="text" 
                              value={newSurveyArea}
                              onChange={(e) => setNewSurveyArea(e.target.value)}
                              placeholder="Regional Boundary"
                              className="w-full text-xs px-2.5 py-1.5 rounded bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500 text-slate-800 dark:text-white"
                            />
                          </div>
                          <button 
                            type="submit" 
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs py-1.5 font-bold cursor-pointer transition flex items-center justify-center gap-1"
                          >
                            <Plus className="w-3.5 h-3.5" /> Deploy Live GIS Survey Form
                          </button>
                        </form>
                      </div>

                      {/* Surveys List */}
                      <div className="bg-white dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-400 block mb-2">Live Survey Indices</span>
                        <div className="space-y-2 max-h-[120px] overflow-y-auto">
                          {surveys.map((s, i) => (
                            <div key={i} className="text-[11px] bg-slate-50 dark:bg-slate-900/80 p-2 rounded border border-slate-150 dark:border-slate-800/80">
                              <div className="flex justify-between font-semibold text-slate-800 dark:text-slate-200">
                                <span>{s.name}</span>
                                <span className="font-mono text-emerald-500">Live</span>
                              </div>
                              <div className="flex justify-between text-[9px] text-slate-500 mt-0.5">
                                <span>Area: {s.area}</span>
                                <span>{Math.floor(s.responders + Math.random() * 5)} submissions</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "bi" && (
                  <div className="space-y-4">
                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
                        <span className="text-[9px] text-slate-500 block uppercase font-bold">Annual Volume (USD)</span>
                        <span className="text-sm md:text-lg font-bold font-mono text-blue-600 dark:text-blue-400">
                          ${(biRevenue / 1000000).toFixed(2)}M
                        </span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
                        <span className="text-[9px] text-slate-500 block uppercase font-bold">Active API Consumers</span>
                        <span className="text-sm md:text-lg font-bold font-mono text-slate-800 dark:text-white">
                          {biActiveEngagements.toLocaleString()}
                        </span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
                        <span className="text-[9px] text-slate-500 block uppercase font-bold">ZST Cloud SLA</span>
                        <span className="text-sm md:text-lg font-bold font-mono text-emerald-500">
                          {biPerformanceIndex}%
                        </span>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between h-[210px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Enterprise High-Capacity Core System Load</span>
                        <button 
                          onClick={triggerBiRefresh}
                          className="p-1 px-2.5 rounded bg-slate-800 text-slate-300 hover:text-white text-[10px] cursor-pointer inline-flex items-center gap-1 transition"
                        >
                          <RefreshCcw className={`w-2.5 h-2.5 ${isRefreshingBi ? "animate-spin" : ""}`} /> 
                          {isRefreshingBi ? "Refreshing State..." : "Reload Metrics"}
                        </button>
                      </div>

                      {/* Mock bars */}
                      <div className="flex items-end justify-between gap-2.5 h-32 pt-4">
                        {[50, 82, 38, 92, 110, 88, 140, 115, 155, 120, 134, 160].map((h, i) => {
                          const noise = isRefreshingBi ? Math.floor(Math.random() * 20 - 10) : 0;
                          const calculatedHeight = Math.max(15, h + noise);
                          return (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div 
                                className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 dark:from-blue-500 dark:to-emerald-400 rounded-t transition-all duration-500" 
                                style={{ height: `${(calculatedHeight / 190) * 110}px` }}
                              />
                              <span className="text-[8px] text-slate-600 font-mono mt-1">Q{Math.ceil((i+1)/3)}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-500 flex justify-between items-center shrink-0">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  E2E Encryption Standard : AES_256_GCM
                </span>
                <span>Telemetry Status: SECURE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
