import React, { useState } from 'react';
import { Copy, Check, Shield, Eye, EyeOff, Lock, Github, Book, Server, Zap, UserX } from 'lucide-react';

export default function X401ZKP() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm i velocityx401zkp');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { icon: EyeOff, title: "Zero Data Leakage", desc: "Your wallet signature never leaves your device" },
    { icon: Shield, title: "ZK-Proof Verification", desc: "Only cryptographic proofs reach the server" },
    { icon: UserX, title: "True Anonymity", desc: "Login without revealing your identity" }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign Locally",
      desc: "Your wallet signs a message on your device",
      icon: Lock,
      color: "cyan"
    },
    {
      step: "2",
      title: "Generate Proof",
      desc: "ZK-proof is created from your signature",
      icon: Zap,
      color: "purple"
    },
    {
      step: "3",
      title: "Verify Anonymously",
      desc: "Server verifies proof without seeing signature",
      icon: Shield,
      color: "pink"
    }
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
            <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 text-sm font-semibold">Privacy-First Authentication</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                x401 ZKP
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Anonymous wallet authentication powered by Zero-Knowledge Proofs
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-400/30 rounded-xl px-5 py-3 transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-purple-400" />
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
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-75"></div>
                <div className="relative p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                  <EyeOff className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                  Velocity x401 ZKP
                </h2>
                <p className="text-gray-400">
                  Your signature never touches the server. Only the proof.
                </p>
              </div>
            </div>

            {/* How it Works */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                How It Works
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {howItWorks.map((item, idx) => {
                  const colorClasses = {
                    cyan: "border-cyan-400/20 bg-cyan-400/5",
                    purple: "border-purple-400/20 bg-purple-400/5",
                    pink: "border-pink-400/20 bg-pink-400/5"
                  };
                  const iconColors = {
                    cyan: "text-cyan-400",
                    purple: "text-purple-400",
                    pink: "text-pink-400"
                  };
                  return (
                    <div 
                      key={idx}
                      className={`relative bg-black/30 border ${colorClasses[item.color]} rounded-xl p-5 hover:scale-105 transition-all`}
                    >
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg">
                        {item.step}
                      </div>
                      <item.icon className={`w-8 h-8 ${iconColors[item.color]} mb-3`} />
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Difference Highlight */}
            <div className="bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-400/10 border border-purple-400/20 rounded-2xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-red-400" />
                    </div>
                    <h4 className="text-white font-bold">Traditional Auth</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Wallet signature sent to server</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Identity exposed during auth</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>Server can link wallet to user</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <h4 className="text-white font-bold">x401 ZKP</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Only ZK-proof sent to server</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Complete anonymity maintained</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Zero knowledge revealed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 mb-8">
            <h3 className="text-white font-bold text-xl mb-6">Why Zero-Knowledge?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Cryptographic Privacy</p>
                  <p className="text-gray-500 text-sm">Prove you own a wallet without revealing the signature or private key</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">No Data Retention Risk</p>
                  <p className="text-gray-500 text-sm">Servers never store sensitive authentication data—only proofs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Regulatory Compliance</p>
                  <p className="text-gray-500 text-sm">Meet privacy regulations by design—no PII storage required</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Anti-Surveillance</p>
                  <p className="text-gray-500 text-sm">Impossible to track user behavior across sessions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Section */}
          <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-xl">Get Started</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                </button>
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition group">
                  <Book className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                </button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-black/80 border border-white/10 rounded-xl p-6 flex items-center justify-between">
                <code className="text-purple-400 font-mono text-base md:text-lg font-semibold">
                  npm i velocityx401zkp
                </code>
                <button
                  onClick={copyToClipboard}
                  className="ml-4 p-3 bg-purple-400/10 hover:bg-purple-400/20 border border-purple-400/30 rounded-lg transition-all hover:scale-105"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-purple-400" />
                  )}
                </button>
              </div>
            </div>

            <p className="mt-4 text-gray-500 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              Anonymous authentication ready in under 5 minutes
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            
            <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:scale-105">
             <a href="https://velocityinfra-187442e4.mintlify.app/introduction">Documentation</a>
            </button>
          
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              Built with ❤️ by Velocity • Privacy-First • Open Source
            </p>
            <p className="text-gray-700 text-xs">
              ZK-SNARK proofs • No data leakage • Cryptographically secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}