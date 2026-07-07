"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/hero.png", "/hero1.png", "/hero2.png"];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-gray-300 text-black min-h-screen">
      
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image 
              src={images[index]} 
              alt="Hero" 
              fill 
              priority 
              sizes="100vw"
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-white/20" /> 
          </motion.div>
        </AnimatePresence>
        
        <div className="relative z-10 text-center px-6 h-full flex flex-col items-center justify-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <span className="text-[10px] tracking-[0.4em] uppercase text-blue-600 font-bold mb-4 block">Arisys Engineering Division</span>
            
            {/* Optimized Heading Layout */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-black mb-2">
                Blackswon Safety
              </h1>
              <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Services Private Limited
              </h2>
            </div>

            <p className="max-w-xl mx-auto text-gray-600 font-light tracking-wide text-sm md:text-base">
              Elite safety infrastructure. Engineered for high-stakes industrial environments. Precision compliance, absolute protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-black uppercase italic mb-16 tracking-tighter text-black">Core <span className="text-blue-600">Infrastructure.</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-gray-200 p-8 rounded-[2rem] hover:border-blue-600 transition-all duration-300 group shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <span className="text-blue-600 group-hover:text-white font-black italic">0{i}</span>
              </div>
              <h3 className="font-black uppercase tracking-widest text-sm mb-3 text-black">Safety Protocol {i}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">High-performance safety gear integrated into your existing compliance pipelines.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-gray-100 border border-gray-100 p-12 rounded-[2rem] flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">01 / Our Strategic Mandate</h2>
            <h3 className="text-4xl font-black uppercase italic tracking-tight text-black">Architecting Industrial Resilience.</h3>
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                At <strong>Blackswon Safety Services Private Limited</strong>, we recognize that modern industrial safety transcends basic compliance. We view safety as a critical operational asset that safeguards your human capital and drives enterprise productivity.
              </p>
              <p>
                Our methodology is built on <strong>predictive risk mitigation</strong>. We don't just supply equipment; we integrate safety intelligence into your workflow. By analyzing site-specific hazards and regulatory landscapes, we design protocols that protect your workforce while removing bottlenecks in your production chain.
              </p>
              <p>
                Whether navigating complex compliance frameworks or scaling safety infrastructure across multiple geographies, our solutions are engineered for long-term sustainability. We are here to transform your safety posture from a static necessity into a dynamic, <strong>scalable competitive advantage</strong>.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full h-[300px] bg-gray-200 rounded-2xl border border-gray-100 relative overflow-hidden">
            <Image 
              src="/hero1.png" 
              alt="Blackswon About" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase italic mb-12 tracking-tighter text-black">Industry Trust.</h2>
          <blockquote className="text-xl italic text-gray-700">"Blackswon transformed our safety compliance into a streamlined, high-performance asset. Unmatched technical expertise."</blockquote>
          <p className="mt-6 font-bold text-blue-600">— Director, Global Logistics Corp</p>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-black uppercase italic mb-12 tracking-tighter text-gray-400">Trusted By Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-500">LOGO {i}</div>
          ))}
        </div>
      </section>
    </main>
  );
}