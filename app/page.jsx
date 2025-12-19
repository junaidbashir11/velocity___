"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Zap, RefreshCw, ArrowRight, Sparkles, GithubIcon, Martini, Key, Code, Terminal, Server, TrendingUp, Cpu, Users } from "lucide-react";
import Roadmap from '@/lib/roadmap';
import CApp from '@/lib/x403login';
import { useEffect, useState } from "react";
import MaintenancePage from "@/lib/underm";
import AgenticHero from "../lib/heroanimate";
import FeaturesGrid from "../lib/featuresgrid";
import ProtocolGrid from "../lib/protocolgrid";

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
  



    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#050505] border-b border-white/10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        
        {/* LEFT: Logo + Title */}
        <div className="flex items-center gap-6">
          <div className="relative group">
            {/* Minimalist Logo Container */}
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-white/[0.03] transition-colors group-hover:border-white">
              <Image 
                height={32} 
                width={32}
                alt="velocity"
                src="/vvv.ico"
                className="grayscale contrast-125"
              />
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none hidden sm:block">
            Velocity <span className="text-gray-600">Infra</span>
          </span>
        </div>

        {/* RIGHT: Contract + Socials */}
        <div className="flex items-center gap-8">
          
          {/* Contract Address - Minimalist & Large Mono */}
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-1">
              Terminal_Access
            </span>
            <span className="text-sm font-mono text-white/80 border-b border-white/20 pb-0.5">
              CA: {process.env.NEXT_PUBLIC_TOKEN || "0x000...000"}
            </span>
          </div>
          
          {/* Social Icons - Sharp & Simple */}
          <div className="flex items-center gap-1">
            {[
              { href: "https://github.com/VELOCITYINFRA", icon: <GithubIcon className="w-4 h-4" />, label: "GH" },
              { href: process.env.NEXT_PUBLIC_TWITTER, icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              ), label: "X" },
              { href: "https://t.me/velocity_infra", icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.307.02.473z"/>
                </svg>
              ), label: "TG" },
              { href: "https://www.npmjs.com/~itsvelocity", icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
                </svg>
              ), label: "NPM" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  





   <AgenticHero/>


<section>
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

        {/* Dashboard Gate & Login (Original Text) */}
   
      </section>

      
      <ProtocolGrid/>

      <FeaturesGrid/>

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