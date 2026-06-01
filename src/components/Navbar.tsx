import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Landmark, Globe, Hammer, ExternalLink } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About ZST", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Export & Import", href: "#trade" },
    { label: "Why Choose Us", href: "#why-choose-us" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 dark:bg-[#0F172A]/85 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/60 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[2px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-white dark:bg-[#0F172A] rounded-[6px] flex items-center justify-center">
              <span className="text-sm font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-emerald-400 font-sans">
                ZST
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              ZST Limited
            </span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">
              Global Enterprise
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Call to Actions + Theme Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Light / Dark Mode Toggle */}
          <button 
            onClick={toggleTheme}
            id="theme-toggler"
            className="p-2.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 cursor-pointer text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all shadow-sm"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
          </button>

          <a 
            href="#contact"
            id="nav-contact-btn"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 border border-blue-500/20"
          >
            Contact Sales
          </a>
        </div>

        {/* Mobile Hamburger + Theme Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-6 px-6 shadow-xl z-50 animate-fade-in flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-blue-605 dark:text-slate-200 dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-900 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-full bg-blue-600 text-white dark:bg-blue-500 font-bold text-sm hover:bg-blue-700 dark:hover:bg-blue-600 tracking-wide transition block"
          >
            Contact Sales
          </a>
        </div>
      )}
    </header>
  );
}
