import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductsSection from "./components/Products";
import Services from "./components/Services";
import TradeDivision from "./components/TradeDivision";
import WhyChooseUs from "./components/WhyChooseZST";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProductsSection />
          <Services />
          <TradeDivision />
          <WhyChooseUs />
          <Statistics />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
