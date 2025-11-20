"use client";

import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Zap, RefreshCw, ArrowRight, Sparkles ,GithubIcon,TwitterIcon} from "lucide-react";
import Roadmap from '@/lib/roadmap';
import CApp from '@/lib/x403login';

const WalletButton = dynamic(
  () => import('@/lib/solanawalletbutton').then(mod => mod.SolanaWalletButton),
  { 
    ssr: false,
    loading: () => <div className="p-2 text-sm text-gray-400">Loading wallet...</div>,
  }
);

const features = [
  {
    name: "Endpoints",
    description: "Register any personal or public endpoint to instantly make it X402",
    icon: Link,
    gradient: "from-purple-500 to-violet-500"
  },
  {
    name: "Dynamic Endpoints",
    description: "Register any personal or public endpoint to make it X402 with pointing updates",
    icon: RefreshCw,
    gradient: "from-blue-500 to-cyan-500"
  },

   {
    name: "MCP Capable",
    description: "Registered endpoints are instanty MCP able and can be called by any MCP client",
    icon: RefreshCw,
    gradient: "from-blue-500 to-cyan-500"
  },

  {
    name: "One Time Endpoints",
    description: "Pay once for x402 powered endpoint for recurring customers (coming soon)",
    icon: Zap,
    gradient: "from-pink-500 to-rose-500"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white overflow-hidden">
      
      {/* Animated background */}
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-[700px] h-[700px] bg-pink-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.03)_2px,transparent_2px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-2xl border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500 blur-xl opacity-40"></div>
      </div>
      <span className="text-2xl font-bold tracking-tight text-white">VELOCITY</span>
    </div>

    {/* Right Aligned + Super Tight */}
    <div className="flex items-center gap-3 ml-auto">
      {/* Contract */}
      <div className="hidden md:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] text-gray-400 font-mono">
          CA: {process.env.NEXT_PUBLIC_TOKEN}
        </span>
      </div>

      {/* Wallet */}
      <div className="scale-90">
        <CApp/>
      </div>
      
      {/* GitHub */}
      <a href="https://github.com/x402VELOCITY" className="text-gray-400 hover:text-white transition">
        <GithubIcon className="w-4 h-4" />
      </a>

      {/* Twitter */}
      <a href={process.env.NEXT_PUBLIC_TWITTER} className="text-gray-400 hover:text-white transition">
        <TwitterIcon className="w-4 h-4" />
      </a>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">X402 Protocol (Entirely Open Source)</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              <span className="block bg-gradient-to-br from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                VELOCITY
              </span>
               <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">Sessionless Auth Powered by X403</span>
            </h1>
            
            <p className="text-xl font-mono md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
              Instantly x402, Dynamic x402 & MCP Your API Endpoints
            </p>

         

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-3xl blur-2xl opacity-30">
            </div>

 

        <div className="flex justify-center w-full py-8">
  {/* The container centers the entire image block */}
 
</div>


          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
           
           
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black mb-4 text-center tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Core Features
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Powerful tools to accelerate your API infrastructure
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0f1535] to-[#0a0e27] border border-white/10 hover:border-white/20 transition-all h-full">
                    <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
           
          </motion.div>
        </div>

       

      </section>

      <Roadmap/>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VELOCITY. Powered by Solana.
          </p>
          
        </div>
      </footer>
    </main>
  );
}