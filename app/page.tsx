"use client";

import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion } from "framer-motion";
import { Link, Zap, RefreshCw, ArrowRight, Sparkles } from "lucide-react";

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
    name: "One Time Endpoints",
    description: "Pay once for x402 powered endpoint for recurring customers",
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
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64" className="opacity-90">
                <rect x="6" y="6" width="40" height="52" rx="3" ry="3" fill="#8b5cf6" stroke="#8b5cf6" strokeWidth="2"/>
                <path d="M46 6v12h12" fill="#8b5cf6" stroke="#8b5cf6" strokeWidth="2"/>
                <g transform="translate(16,18)">
                  <line x1="10" y1="6" x2="30" y2="6" stroke="#ffffff" strokeWidth="1.8"/>
                  <line x1="20" y1="6" x2="20" y2="22" stroke="#ffffff" strokeWidth="1.8"/>
                  <circle cx="10" cy="6" r="3.3" fill="#ffffff"/>
                  <circle cx="30" cy="6" r="3.3" fill="#ffffff"/>
                  <circle cx="20" cy="22" r="3.3" fill="#ffffff"/>
                </g>
              </svg>
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-40"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">VELOCITY</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400 font-mono">
              CA: {process.env.NEXT_PUBLIC_CA}
            </span>
          </motion.div>
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
              <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">X402 Protocol</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
              <span className="block bg-gradient-to-br from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                VELOCITY
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
              Instantly x402 your or any public API endpoints
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-[#0f1535] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/kol.png"
                alt="about"
                width={1920}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl shadow-purple-500/30 font-bold group transition-all">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <WalletButton />
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
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl px-8 py-4">
              <Zap className="w-5 h-5 text-purple-400" />
              <p className="text-gray-300 text-lg">
                Hold <span className="text-white font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">50k $VC tokens</span> to unlock premium features
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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