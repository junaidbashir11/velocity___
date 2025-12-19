import React from "react";
import { Activity, Terminal, Shield } from "lucide-react";

// --- Clean, Spacious Utility Classes ---
const roadmapSection = "relative py-16 md:py-24 border-b border-white/10 group";
const bigTitle = "text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6";
const bigDescription = "text-xl md:text-2xl text-gray-400 leading-relaxed font-light";

export default function StructuralGridRoadmap() {
  const roadmapItems = [
    {
      phase: "01",
      title: "Multi-Chain & Cross-System Expansion",
      description:`
      Multi-Chain Signature Mesh
      Universal authentication and signature routing across zkSync, Ethereum L2s, Polygon, and ZK rollups.
      Cross-Network Identity Federation
      A single agent or user identity that works across every supported chain.
      Unified Capability Graph
      All APIs, tools, and agent functions become globally discoverable.
      Agents compose multi-chain capabilities with zero manual configuration. 
      Enterprise Policy Modes
      Compliance templates for healthcare, finance, and government workloads.
      
      `,
      icon: <Activity className="w-8 h-8 text-white" />,
      status: "In Progress",
    },
    {
      phase: "02",
      title: "Secure Compute & Verifying Pipelines",
      description: `
    Encrypted Compute Capsules
    Isolated execution environments for sensitive agent operations.
    Provenance tied directly to verified code artifacts.
    Self-Attesting Pipelines
    Every artifact (from build to deploy to execute) is cryptographically provable.
    Deterministic Agent Actions
    All agent behavior is reproducible and verifiable end-to-end.
      
      `,
      icon: <Shield className="w-8 h-8 text-white" />,
      status: "Planned",
    },
    {
      phase: "03",
      title: "The Autonomy Layer for Software",
      description:`
      
A world where AI agents operate independently but safely.
Permissions and identity are enforced by math, not trust.
APIs become composable building blocks in a global agent economy.
Multi-chain identity is seamless and universal.
Every action is verifiable and policy-bound.
This infrastructure becomes the foundation for the next era of autonomous software, secure AI operations, and cryptographically enforced access control.`,
      icon: <Terminal className="w-8 h-8 text-white" />,
      status: "Vision",
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-white p-6 md:p-20 font-sans selection:bg-white selection:text-black">
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header Section - Massive & Upright */}
        <header className="mb-40">
          <div className="flex items-center gap-6 mb-8 text-gray-500 font-mono text-sm tracking-[0.4em] uppercase">
            <span>Core Protocol</span>
            <div className="h-px flex-1 bg-white/10"></div>
            <span>V.2025</span>
          </div>
          
          <h1 className="text-[12vw] font-black leading-[0.85] uppercase tracking-tighter">
            Velocity <br />
            <span className="text-gray-600">Roadmap</span>
          </h1>
          
          <p className="mt-12 max-w-2xl text-2xl text-gray-400 font-light leading-snug">
            Architecting high-scale infrastructure for verifiable autonomous systems and secure AI operations.
          </p>
        </header>

        {/* Roadmap Sections - Huge & Subtle */}
        <div className="flex flex-col">
          {roadmapItems.map((item, idx) => (
            <div key={idx} className={roadmapSection}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Meta Info (Phase/Status) */}
                <div className="lg:col-span-3">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-lg text-white/30 tracking-widest uppercase">
                      [{item.phase}]
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1 border border-white/20 w-fit">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-7">
                  <h3 className={bigTitle}>{item.title}</h3>
                  <p className={bigDescription}>{item.description}</p>
                </div>

                {/* Icon - Minimalist */}
                <div className="lg:col-span-2 flex lg:justify-end">
                  <div className="p-4 border border-white/10 opacity-50">
                    {item.icon}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Technical Footer */}
        <footer className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-[10px] text-gray-600 uppercase tracking-[0.5em]">
          <div className="flex flex-col gap-2">
            <div>Status: Operational</div>
            <div>Auth: Verified_Node_771</div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-white hover:opacity-50 transition-opacity">Whitepaper</a>
            <a href="#" className="text-white hover:opacity-50 transition-opacity">Github</a>
            <a href="#" className="text-white hover:opacity-50 transition-opacity">Network</a>
          </div>
        </footer>

      </div>
    </div>
  );
}