import React, { useState } from 'react';
import { Copy, Check, Shield, Lock, Zap, Github, Book, Fingerprint, MapPin, Server, Key } from 'lucide-react';

export default function X401() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm i velocitytunedx401');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { 
      icon: Shield, 
      title: "Wallet Based", 
      desc: "Secure authentication via wallet signatures",
      color: "cyan"
    },
    { 
      icon: Server, 
      title: "No Backend SDK", 
      desc: "Zero infrastructure, zero integration hassle",
      color: "purple"
    },
    { 
      icon: Fingerprint, 
      title: "Device Credentials", 
      desc: "Biometrics: fingerprint, face ID, PIN, password",
      color: "pink"
    },
    { 
      icon: MapPin, 
      title: "Geographic Restriction", 
      desc: "Location-based access control",
      color: "blue"
    },
    { 
      icon: Lock, 
      title: "Token Gating", 
      desc: "Control access with token ownership",
      color: "cyan"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: {
        border: "border-cyan-400/20",
        hoverBorder: "hover:border-cyan-400/40",
        icon: "text-cyan-400",
        bg: "bg-cyan-400/5"
      },
      purple: {
        border: "border-purple-400/20",
        hoverBorder: "hover:border-purple-400/40",
        icon: "text-purple-400",
        bg: "bg-purple-400/5"
      },
      pink: {
        border: "border-pink-400/20",
        hoverBorder: "hover:border-pink-400/40",
        icon: "text-pink-400",
        bg: "bg-pink-400/5"
      },
      blue: {
        border: "border-blue-400/20",
        hoverBorder: "hover:border-blue-400/40",
        icon: "text-blue-400",
        bg: "bg-blue-400/5"
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-semibold">Production-Ready Authentication</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                x401
              </span>
            </h1>
            
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
              The standard for private, seamless wallet authentication
            </p>
            
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12">
              Enhanced auth with device credentials (fingerprint, face ID) and ZK-Proofs
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <p className="text-3xl font-black text-cyan-400">0</p>
                <p className="text-gray-500 text-sm">Backend Setup</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-purple-400">100%</p>
                <p className="text-gray-500 text-sm">Client-Side</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-pink-400">6</p>
                <p className="text-gray-500 text-sm">Auth Methods</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {features.map((feature, idx) => {
              const colors = getColorClasses(feature.color);
              return (
                <div 
                  key={idx}
                  className={`group ${colors.bg} backdrop-blur-xl border ${colors.border} ${colors.hoverBorder} rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-xl`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-black/30 rounded-xl ${colors.border} border`}>
                      <feature.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Card */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-75"></div>
                <div className="relative p-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl">
                  <Key className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                  Velocity Tuned x401
                </h2>
                <p className="text-gray-400 text-lg">
                  Built by <span className="text-cyan-400 font-semibold">Velocity</span> • Zero backend complexity
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/5 to-purple-400/5 border border-cyan-400/20 rounded-2xl p-6 mb-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="font-mono text-cyan-400 font-bold text-xl">x401 Auth</span> eliminates 
                backend complexity while providing enterprise-grade authentication. Integrate wallet-based auth 
                with device biometrics, geographic restrictions, and zero-knowledge proofs in minutes, not weeks.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Zero Infrastructure</p>
                  <p className="text-gray-500 text-sm">No servers, no databases, no maintenance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Privacy First</p>
                  <p className="text-gray-500 text-sm">ZK-proofs ensure anonymous authentication</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Multi-Factor Security</p>
                  <p className="text-gray-500 text-sm">Combine wallet + biometrics + location</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Token-Gated Access</p>
                  <p className="text-gray-500 text-sm">NFT and token-based permissions built-in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Section */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-xl">Quick Start</h3>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-black/80 border border-white/10 rounded-xl p-6 flex items-center justify-between">
                <code className="text-cyan-400 font-mono text-base md:text-lg font-semibold">
                  npm i velocitytunedx401
                </code>
                <button
                  onClick={copyToClipboard}
                  className="ml-4 p-3 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 rounded-lg transition-all hover:scale-105"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
              </div>
            </div>
          </div>
    

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
         
            <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:scale-105">
              <a href="https://velocityinfra-187442e4.mintlify.app/essentials/about401">Documentation</a>
            </button>
           
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Built with ❤️ by Velocity • Open Source • Production Ready
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}