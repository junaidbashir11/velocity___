import { useWallet } from "@solana/wallet-adapter-react";
import { Link, FileText, Globe } from "lucide-react";



export default function OnetimeComponent() {

  const { connected ,publicKey} = useWallet();
  

  if (!connected)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-mono text-white text-lg">Redirecting...</p>
        </div>
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-start px-4 relative overflow-hidden pt-20 pb-16">

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>

      {/* Central purple glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-6 bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 rounded-3xl shadow-2xl space-y-8">

        {/* Subtitle */}
        <p className="font-mono text-base md:text-lg text-gray-300 text-center leading-relaxed">
          Enabling one-time pay per <span className="text-purple-400 font-bold">x402</span> request for repeating clients
        </p>

        {/* Feature highlights */}
        <div className="space-y-5">
          <FeatureCard
            icon={<Globe className="w-5 h-5 text-purple-400" />}
            iconBg="bg-purple-600/20"
            text="Pay once, use unlimited times"
          />
          <FeatureCard
            icon={<Link className="w-5 h-5 text-blue-400" />}
            iconBg="bg-blue-600/20"
            text="Perfect for recurring integrations"
          />
          <FeatureCard
            icon={<FileText className="w-5 h-5 text-green-400" />}
            iconBg="bg-green-600/20"
            text="Automatic client authentication"
          />
        </div>

        {/* Status badge */}
        <div className="flex justify-center mt-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="font-mono text-sm text-purple-300">Stay Tuned</span>
          </div>
        </div>
      </div>
    </main>
  );
}

// Reusable feature card component
function FeatureCard({ icon, iconBg, text }: { icon: React.ReactNode; iconBg: string; text: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-purple-500/20 hover:bg-slate-800/70 transition-colors">
      <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <p className="font-mono text-sm md:text-base text-gray-300">{text}</p>
    </div>
  );
}
