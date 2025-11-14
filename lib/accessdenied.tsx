import { Lock } from "lucide-react";

export default function NoAccessCard() {
  return (
   <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

  {/* Background effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
  
  {/* Floating orbs */}
  <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

  {/* Card */}
  <div className="relative z-10 w-full max-w-md mx-auto p-10 bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl text-center space-y-8">

    {/* Icon */}
    <div className="w-20 h-20 mx-auto flex items-center justify-center bg-red-500/10 rounded-2xl border border-red-500/20">
      <Lock className="w-10 h-10 text-red-400" />
    </div>

    {/* Title */}
    <h2 className="text-3xl font-extrabold text-white">
      Access Denied
    </h2>

    {/* Description */}
    <p className="text-gray-400 text-lg leading-relaxed">
      You don't have permission to view this resource. Please purchase tokens to continue.
    </p>

    {/* Action button */}
    <button className="w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20">
      <a
       href={process.env.NEXT_PUBLIC_PUMP_ENDPOINT}
      >
      {process.env.NEXT_PUBLIC_PUMP_ENDPOINT}
      </a>
    </button>
  </div>
</div>
  );
}
