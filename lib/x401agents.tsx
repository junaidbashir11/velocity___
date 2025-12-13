import React, { useState } from 'react';
import { Copy, Check, Shield, Lock, Zap, Github, Book } from 'lucide-react';

export default function X401Agents() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm i velocitytunedagenticx401');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { icon: Shield, title: "Wallet Based", desc: "Secure authentication via wallet signatures" },
    { icon: Lock, title: "Token Gating", desc: "Control access with token ownership" },
    { icon: Zap, title: "ZK-Proof Powered", desc: "Anonymous logins with zero-knowledge proofs" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-semibold">Next-Gen Authentication</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                x401
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              The standard for private, seamless agentic wallet authentication
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 rounded-xl px-5 py-3 transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-white font-semibold text-sm">{feature.title}</p>
                      <p className="text-gray-500 text-xs hidden md:block">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Velocity Tuned Agentic x401
                </h2>
                <p className="text-gray-400">
                  Built by <span className="text-cyan-400 font-semibold">Velocity</span> for the next generation of web3
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/30 border border-cyan-400/20 rounded-xl p-4">
                <Shield className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-bold mb-1">Wallet Based</h3>
                <p className="text-gray-500 text-sm">Secure authentication via wallet signatures</p>
              </div>
              
              <div className="bg-black/30 border border-purple-400/20 rounded-xl p-4">
                <Lock className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-bold mb-1">Token Gating</h3>
                <p className="text-gray-500 text-sm">Control access with token ownership</p>
              </div>
              
              <div className="bg-black/30 border border-pink-400/20 rounded-xl p-4">
                <Zap className="w-8 h-8 text-pink-400 mb-3" />
                <h3 className="text-white font-bold mb-1">ZK-Proof Powered</h3>
                <p className="text-gray-500 text-sm">Anonymous logins with zero-knowledge proofs</p>
              </div>
            </div>

            <div className="bg-cyan-400/5 border border-cyan-400/20 rounded-xl p-4">
              <p className="text-gray-300 leading-relaxed">
                <span className="font-mono text-cyan-400 font-semibold">x401 Agentic Auth</span> provides 
                the infrastructure for private, seamless wallet authentication. Built with modern web3 standards 
                and optimized for agentic workflows.
              </p>
            </div>
          </div>

          {/* Installation Section */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-lg">Quick Installation</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition">
                  <Github className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition">
                  <Book className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-black/80 border border-white/10 rounded-xl p-5 flex items-center justify-between">
                <code className="text-cyan-400 font-mono text-sm md:text-base">
                  npm i velocitytunedagenticx401
                </code>
                <button
                  onClick={copyToClipboard}
                  className="ml-4 p-2 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg transition-all hover:scale-105"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>
            </div>

            <p className="mt-4 text-gray-500 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Enhanced agentic auth ready in seconds
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
         
            <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:scale-105">
              <a href="https://velocityinfra-187442e4.mintlify.app/introduction">Documentation</a>
            </button>
      
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Built with ❤️ by Velocity • Open Source • Web3 Native
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}