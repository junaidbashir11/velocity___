"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Zap, RefreshCw, ArrowRight, Sparkles, GithubIcon, Martini, Key, Code, Terminal, Server, TrendingUp, Cpu, Users } from "lucide-react";
import Roadmap from '@/lib/roadmap';
import CApp from '@/lib/x403login';
import { useEffect, useState } from "react";
import MaintenancePage from "@/lib/underm";

// --- Neo-Brutalist Utility Classes ---
const brutalBg = "bg-[#000000]"; // Pure Black
const brutalText = "text-white"; 
const brutalAccent = "text-[#6200ff]"; // Deep Purple Accent
const brutalBorder = "border-[#333333]"; // High contrast gray border
const brutalCard = "bg-[#111111] border border-[#333333]"; // Structural dark card

const primaryButtonClasses = 
  "inline-flex items-center justify-center h-12 px-8 text-lg font-bold rounded-none text-black bg-gradient-to-r from-[#6200ff] to-[#00d4ff] hover:from-[#8a00ff] hover:to-[#00f8ff] transition-all shadow-lg shadow-purple-900/50 focus:outline-none focus:ring-4 focus:ring-purple-600/40 uppercase tracking-wider border-2 border-black";

const secondaryButtonClasses = 
  "inline-flex items-center justify-center h-12 px-8 text-base font-semibold rounded-none border-2 border-white text-white hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-4 focus:ring-white/40 uppercase";


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

// --- Simulated Data Terminal (Brutalist style) - Data kept original ---

// --- Protocol Card (Structural Block) - Data kept original ---
const ProtocolCard = ({ title, description, badge, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay: delay }}
    className={`p-8 ${brutalCard} rounded-none transition-all hover:shadow-2xl hover:shadow-cyan-400/20 h-full relative overflow-hidden`}
  >
    {/* Accent Line */}
    <div className="absolute top-0 left-0 w-full h-1" style={{ background: color }}></div>
    
    <div className="flex items-center mb-4 relative z-10">
      <Cpu className="w-6 h-6 mr-3" style={{color: color}} />
      <div className={`px-3 py-1 text-xs font-semibold rounded-none text-black`} style={{backgroundColor: color}}>
        {badge}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white relative z-10">{title}</h3>
    <p className="text-gray-400 relative z-10">{description}</p>
  </motion.div>
);


export default function Home() {
  const [off,setOff]=useState("")

  useEffect(()=>{
    const offflag=process.env.NEXT_PUBLIC_OFF
    if (offflag=='TRUE'){
      setOff("TRUE")
    }
    else {
      setOff("FALSE")
    }
  },[])

  if(off=="TRUE"){
    return (
      <MaintenancePage/>
    )
  }

  return (
    <main className={`min-h-screen ${brutalBg} ${brutalText} overflow-hidden font-sans`}>
      
      {/* Background - Sparse Grid/Data Flow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="fixed inset-0 bg-[linear-gradient(rgba(51,51,51,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(51,51,51,0.2)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>
      </div>

      {/* Navbar - Fixed, High-Contrast (All original links restored) */}
  
        <nav className={`sticky top-0 left-0 right-0 z-50 ${brutalBg} border-b-4 ${brutalBorder}`}>
    {/* Main container uses full width, tighter padding (py-2) */}
    <div className="mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">
      
      {/* LEFT BLOCK: Logo + Title (Main Identity) */}
      <div className="flex items-center gap-3">
        <Image 
          height={28} 
          width={28}
          alt="Velocity Logo"
          src="/vvv.ico"
          className={`border border-white`} 
        />
        <span className={`text-xl sm:text-2xl font-black tracking-widest ${brutalText}`}>VELOCITY INFRA</span>
      </div>

      {/* RIGHT BLOCK: Status and Socials (Functional Data Block) */}
      <div className="flex items-center">
        
        {/* 1. Contract Status - BOLD and SHARP Block */}
        <div className={`flex items-center gap-2 px-3 py-1 text-xs font-mono mr-4`}>
          <span className={`text-[11px] font-bold text-cyan-400 hidden sm:inline`}>
            CA: {process.env.NEXT_PUBLIC_TOKEN}
          </span>
        </div>
        
        {/* 2. Socials & Developer Links - TIGHT, High Contrast */}
        <div className="flex items-center gap-3 border-l-2 border-gray-700 pl-4 h-6 hidden md:flex"> 
          <a href="https://github.com/VELOCITYINFRA" className={`text-white hover:text-cyan-400 transition`}>
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={process.env.NEXT_PUBLIC_TWITTER} className={`text-white hover:text-cyan-400 transition`}>
            <Image alt="X Logo" width={20} height={20} src="/x1.jpg" className="rounded-none" /> {/* Ensure sharp corners */}
          </a>
          <a href="https://t.me/velocity_infra" className={`text-white hover:text-cyan-400 transition`}>
            <Image width={20} height={20} src="/telegram.svg" alt="Telegram" />
          </a>
          <a href="https://www.npmjs.com/~itsvelocity" className={`text-white hover:text-cyan-400 transition`}>
            <Image width={25} height={25} src="/npm.png" alt="NPM" />
          </a>
        </div>
      </div>
    </div>
  </nav>

   
      {/* Hero Section - Centered Focus Block */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            {/* Headline (Original Text) */}
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter border-1   bg-gradient-to-r from-cyan-400 to-purple-400                       mb-4 leading-none">
              <span className="block text-white">A web3 + agentic Infra</span>
            <CApp/>
            </h1>

            {/* Sub-Headline / Pitch (Original Text) */}
            <p className={`text-xl font-medium text-gray-300 max-w-4xl mx-auto mb-12 border-b border-gray-700 pb-4`}>
              Entirely Open Source built on Solana.
            </p>

            {/* Primary CTAs (Original Links) */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
             
              <a href="https://github.com/VELOCITYINFRA" 
                className={secondaryButtonClasses}
              >
                GITHUB REPO
              </a>
            </div>
        </motion.div>

        {/* Dashboard Gate & Login (Original Text) */}
   
      </section>

      {/* Protocols Explanation Section - Structural Pillars (Original Data Corrected) */}
      <section className={`relative py-20 px-6 max-w-7xl mx-auto border-t-4 border-b-4 border-white`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight">
            <span className={`bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent`}>
              THE THREE CORE PROTOCOLS
            </span>
          </h2>
          <p className={`text-center text-gray-300 mb-16 text-lg max-w-3xl mx-auto`}>
            The foundational pillars for decentralized trust and service distribution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProtocolCard
            title="X402 Protocol"
            description="A secure  protocol  for API monetization. Developers register endpoints and monetize them via x402."
            badge="MONETIZATION"
            color="#00d4ff" // Cyan
            delay={0}
          />
          <ProtocolCard
            title="X401 Protocol"
            description="The standard for private, seamless wallet authentication. Users can prove ownership and identity without exposing their private key or leaking sensitive on-chain activity."
            badge="AUTHENTICATION"
            color="#6200ff" // Purple
            delay={0.15}
          />
          <ProtocolCard
            title="MCP (Model Context Protocol)" 
            description="MCP capable Endpoints from day one"
            badge="RELIABILITY"
            color="#ffff00" // Yellow
            delay={0.3}
          />
        </div>
        
      </section>

      {/* Features Grid - Now "Modules" (Original Data) */}
      <section className={`relative py-20 px-6 max-w-7xl mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight">
            <span className={`bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent`}>
              INFRASTRUCTURE MODULES
            </span>
          </h2>
          <p className={`text-center text-gray-400 mb-16 text-lg`}>
            Key features accessible to builders using the VELOCITY protocols.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* The card itself is structural, hover is gradient */}
                  <div className={`relative p-8 ${brutalCard} rounded-none group-hover:border-white transition-all h-full`}>
                    <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-none group-hover:scale-105 transition-all`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.name}
                    </h3>
                    <p className={`font-mono text-gray-400`}>
                      <section>{feature.description}</section>
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </section>

      {/* Roadmap Section (External Component) */}
      <Roadmap/>

      {/* Footer (Original Text) */}
      <footer className={`relative py-12 px-6 border-t-2 border-white mt-20`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`text-gray-500 text-sm font-mono`}>
            VELOCITY INFRA // DECENTRALIZED INFRASTRUCTURE // © 2025 // POWERED BY SOLANA
          </p>
        </div>
      </footer>
    </main>
  );
}