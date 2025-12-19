import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const ProtocolCard = ({ title, description, badge, delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay }}
    className="relative p-12 border-l border-white/10 flex flex-col justify-between min-h-[450px] group transition-colors duration-500 hover:bg-white/[0.02]"
  >
    {/* Top Section: Badge & Icon */}
    <div className="flex justify-between items-start">
      <div className="font-mono text-[10px] tracking-[0.4em] text-gray-500 border border-white/20 px-3 py-1 uppercase">
        {badge}
      </div>
      <Cpu className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
    </div>

    {/* Bottom Section: Huge Title & Description */}
    <div className="mt-auto">
      <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
        {title.split(' ')[0]} <br />
        <span className="text-gray-700">{title.split(' ').slice(1).join(' ')}</span>
      </h3>
      <p className="text-xl text-gray-400 font-light leading-relaxed max-w-sm group-hover:text-gray-200 transition-colors">
        {description}
      </p>
    </div>

    {/* Bottom Decorative Index */}
    <div className="absolute bottom-8 right-8 font-mono text-[10px] text-white/10">
      CORE_PRTCL // 0{delay * 10 + 1}
    </div>
  </motion.div>
);

export default function ProtocolGrid() {
  return (
    <div className="bg-[#050505] selection:bg-white selection:text-black">
      <section className="relative py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/10">
        
        {/* Header - Massive & Upright */}
        <header className="mb-32">
          <div className="flex items-center gap-4 mb-4 text-gray-500 font-mono text-xs tracking-[0.4em] uppercase">
            <span>Core_Architectures</span>
            <div className="h-px w-24 bg-white/10"></div>
          </div>
          
          <h2 className="text-[9vw] font-black leading-[0.8] uppercase tracking-tighter text-white">
            The Three <br />
            <span className="text-gray-800">Pillars</span>
          </h2>
        </header>

        {/* The Grid - Vertically Integrated */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-r border-b border-white/10">
          <ProtocolCard
            title="X402"
            description="A secure protocol for API monetization. Developers register endpoints and monetize them via high-frequency routing."
            badge="Infrastructure"
            delay={0}
          />
          <ProtocolCard
            title="X401 Auth"
            description="The standard for private, seamless wallet authentication. Prove ownership without exposing keys or leaking activity."
            badge="Security"
            delay={0.1}
          />
          <ProtocolCard
            title="MCP Context" 
            description="Model Context Protocol capable endpoints from day one. High-reliability data injection for autonomous agents."
            badge="Reliability"
            delay={0.2}
          />
        </div>

        {/* Subtle Bottom Label */}
        <div className="mt-12 flex justify-between font-mono text-[10px] text-gray-600 tracking-[0.4em] uppercase">
          <span>Verifiable Trust Systems</span>
          <span>Status: Verified</span>
        </div>
      </section>
    </div>
  );
}