import React from "react";
import { motion } from "framer-motion";
import { Link, Zap, RefreshCw, ArrowRight, Sparkles, GithubIcon, Martini, Key, Code, Terminal, Server, TrendingUp, Cpu, Users } from "lucide-react";
// Massive typography settings
const bigTitle = "text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white";
const featureBox = "relative p-10 border border-white/10 flex flex-col justify-between min-h-[320px] transition-colors duration-500 hover:bg-white/[0.02]";

export default function FeaturesGrid() {




const features = [
  {
    name: "X402 Endpoints",
    description: "Register any personal or public endpoint to instantly make it X402 (fee-for-service).",
    icon: Server,
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "Dynamic X402",
    description: "Automatically update your X402 endpoints using dynamic pointers without manual redeployment.",
    icon: RefreshCw,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "MCP Capable",
    description: "All registered endpoints are Auto mcp  capapable",
    icon: Code, 
    gradient: "from-green-500 to-teal-500"
  },
  {
    name: "One Time Endpoints",
    description: "Pay once for a perpetual X402 endpoint service for recurring customers (coming soon).",
    icon: Sparkles,
    gradient: "from-pink-500 to-rose-500"
  },
   {
    name: "API Marketplace",
    description: "All registered endpoints are hosted in the marketplace, connecting developers to decentralized API services.",
    icon: TrendingUp, 
    gradient: "from-amber-500 to-orange-500"
  },
   {
    name: "X401 Wallet Auth",
    description: "Implement seamless and easy wallet authentication without leaking private user data.",
    icon: Key,
    gradient: "from-indigo-500 to-fuchsia-500"
  },
];



  return (
    <section className="bg-[#050505] py-32 px-6 md:px-20 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header - Massive & Left Aligned to match Roadmap */}
        <header className="mb-32 border-l-4 border-white/20 pl-8">
           <div className="flex items-center gap-4 mb-4 text-gray-500 font-mono text-xs tracking-[0.4em] uppercase">
            <span>Core_Modules</span>
            <div className="h-px w-12 bg-white/20"></div>
          </div>
          
          <h2 className="text-[10vw] font-black leading-[0.85] uppercase tracking-tighter text-white">
            Infra <br />
            <span className="text-gray-700">Modules</span>
          </h2>
          
          <p className="mt-8 max-w-xl text-xl text-gray-500 font-light leading-relaxed uppercase tracking-wide">
            Foundational protocols for sovereign agent identity and verifiable execution.
          </p>
        </header>

        {/* Features Grid - Clean & Structural */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-collapse"
              >
                <div className={featureBox}>
                  {/* Top: Icon & Meta */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 border border-white/10 group-hover:border-white transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
                      mod_{index + 1}
                    </span>
                  </div>

                  {/* Bottom: Big Text */}
                  <div className="mt-12">
                    <h3 className={bigTitle}>
                      {feature.name}
                    </h3>
                    <p className="text-gray-500 font-mono text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Decoration: Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Grid Footer */}
        <div className="mt-20 flex justify-between items-center opacity-20">
             <div className="h-px flex-1 bg-white/10"></div>
             <span className="px-6 font-mono text-[10px] tracking-widest text-white uppercase">End_Transmission</span>
             <div className="h-px flex-1 bg-white/10"></div>
        </div>
      </div>
    </section>
  );
}