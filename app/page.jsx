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
  
      <nav className="sticky top-0 left-0 right-0 z-50 bg-gray-900">
     <div className="mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        
        {/* LEFT: Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/40 flex items-center justify-center">
        <span className="text-2xl font-bold tracking-tight text-white">
                <Image 
        height={50} 
        width={50}
        alt="velocity"
        src="/vvv.ico"
        />
        </span>
          </div>
          <span className="text-xl sm:text-2xl font-sans font-bold tracking-wider text-white drop-shadow-md">
            VELOCITY INFRA
          </span>
        </div>

        {/* RIGHT: Contract + Socials */}
        <div className="flex items-center gap-4">
          
          {/* Contract Address */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30">
            <span className="text-xs font-mono font-semibold text-white">
              CA: {process.env.NEXT_PUBLIC_TOKEN}
            </span>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/VELOCITYINFRA" 
              className="w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 text-white" />
            </a>
            <a 
              href={process.env.NEXT_PUBLIC_TWITTER}
              className="w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Twitter/X"
            >
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a 
              href="https://t.me/velocity_infra" 
              className="w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.307.02.473z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.npmjs.com/~itsvelocity" 
              className="w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/20 transition-all hover:scale-110"
              aria-label="NPM"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
              </svg>
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