import { Clock, Package, CreditCard } from "lucide-react";

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "One-time Pay",
      description: "Single pay per user for recurring clients (coming soon)",
      icon: <CreditCard className="w-5 h-5 text-purple-400" />,
      iconBg: "bg-purple-600/20",
      status: "Planned",
    },
     {
      title: "Builtin Testing",
      description: "Automated builtin testing for your endpoints",
      icon: <Package className="w-5 h-5 text-blue-400" />,
      iconBg: "bg-blue-600/20",
      status: "Planned",
    },
    {
      title: "Other Enhancements",
      description: "Additional roadmap items to improve developer experience",
      icon: <Clock className="w-5 h-5 text-green-400" />,
      iconBg: "bg-green-600/20",
      status: "Future",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-16 relative overflow-hidden flex flex-col items-center">
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>

      {/* Glow */}
     
      <div className="relative z-10 w-full max-w-3xl space-y-10">

        <div className="space-y-6">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-2xl  hover:bg-slate-800/70 transition-colors"
            >
              <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-mono text-white text-base md:text-lg font-semibold">
                  {item.title} <span className="text-gray-400 text-sm">({item.status})</span>
                </h3>
                <p className="font-mono text-sm md:text-base text-gray-300 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
