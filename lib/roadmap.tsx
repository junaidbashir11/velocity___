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
      title: "Multi Token Support",
      description: "support for more tokens ",
      icon: <Clock className="w-5 h-5 text-green-400" />,
      iconBg: "bg-green-600/20",
      status: "Future",
    },
  ];

  return (
 <div className="min-h-screen bg-black text-white px-4 py-16 relative overflow-hidden">
      
  {/* Background effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.15),transparent_50%)]" />
  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
  
  {/* Floating orbs */}
  <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Roadmap</h1>
      <p className="text-gray-400 text-lg">
        Accelerate, manage, and dynamically monetize your public API endpoints effortlessly with our advanced platform.
      </p>
    </div>

    {/* Roadmap Items */}
    <div className="space-y-12">
      {roadmapItems.map((item, idx) => (
        <div key={idx} className="flex items-start gap-6">
          
          {/* Icon */}
          <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            {item.icon}
          </div>
          
          {/* Content */}
          <div className="flex-1 pt-1">
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {item.title}
              </h3>
              <span className="text-gray-500 text-base">({item.status})</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>
  );
}
