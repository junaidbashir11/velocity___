import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const AgenticHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center bg-[#050505] overflow-visible selection:bg-blue-500 selection:text-white">
      
      {/* --- Left Side: Neural Processing Block (Original Blue Colors) --- */}
     

      {/* --- Main Headline (Original Structure & Colors, Architectural Font) --- */}
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase">
          <div className="relative inline-flex items-center justify-center gap-4">
            
            {/* Left Decorative Bracket - Original Blue */}
            
            
            <div className="flex flex-col">
              <span className="block text-4xl md:text-6xl font-black uppercase tracking-tighter">
                A web3 <span className="text-white-500">+</span> agentic 
              </span>
              <span className="block text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-400">
                Infrastructure
              </span>
            </div>

          
          </div>
        </h1>
      </div>

      {/* --- Right Side: The "Ledger" Grid (Original Blue Colors) --- */}
     
      {/* Subtext - Subtle Blue Tint */}
      <p className="mt-12 text-blue-200/30 font-mono text-xs tracking-[0.5em] uppercase border-t border-white/10 pt-8 inline-block">
        Verifiable Intelligence // Decentralized Backbone
      </p>

    </section>
  );
};

export default AgenticHero;