import { Clock, Package, CreditCard, Gift, Users } from "lucide-react"; 

// --- New Brutalist Utility Classes for Grid ---
// Strong, dark card with bold white border, sharp corners
const brutalGridCard = "bg-[#111111] border-2 border-white shadow-xl shadow-cyan-400/30"; 
const brutalText = "text-white"; 

export default function StructuralGridRoadmap() {
  const roadmapItems = [
    // --- ITEMS remain the same ---
    {
      title: "Token Incentives (Reward)",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>We believe in rewarding those who build the platform. **VELOCITY** is the exclusive reward mechanism for community contributions.</li>
          <li>**Contributor Rewards:** Developers, technical writers, security researchers, and community managers who contribute high-quality, merged code or documentation will be rewarded with an allocation of **VELOCITY** tokens.</li>
        </ul>
      ),
      icon: <Gift className="w-6 h-6 text-yellow-300" />,
      iconBg: "bg-yellow-800",
      status: "Planned",
    },
    {
      title: "One-time Pay",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>Implement a single, upfront payment option for recurring or high-volume API clients.</li>
          <li>Simplify the billing experience, reducing continuous small transactions.</li>
          <li>Ensure a predictable and stable revenue stream for API providers.</li>
        </ul>
      ),
      icon: <CreditCard className="w-6 h-6 text-fuchsia-300" />,
      iconBg: "bg-fuchsia-800",
      status: "Planned",
    },
    {
      title: "Builtin Testing",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>Introduce a feature for automated, integrated testing of all public API endpoints.</li>
          <li>Enable users to define comprehensive test cases for various inputs and expected outputs.</li>
          <li>Run tests automatically upon deployment and on a scheduled basis for service consistency.</li>
        </ul>
      ),
      icon: <Package className="w-6 h-6 text-purple-300" />,
      iconBg: "bg-purple-800",
      status: "Planned",
    },
    {
      title: "Multi Token Support",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>Expand the platform to support monetization using a wider variety of popular cryptographic tokens.</li>
          <li>Integrate several emerging blockchain assets alongside the currently supported tokens.</li>
          <li>Offer greater flexibility in payment options to cater to a global, diverse user base.</li>
        </ul>
      ),
      icon: <Clock className="w-6 h-6 text-sky-300" />,
      iconBg: "bg-sky-800",
      status: "Future",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Planned":
        return "text-green-300 bg-green-900 border-green-500 border"; 
      case "Future":
        return "text-gray-300 bg-gray-900 border-gray-500 border"; 
      default:
        return "text-gray-400 bg-gray-700/40 border-gray-600 border";
    }
  };

  return (
    // Outer container remains backgroundless, using standard padding
    <div className={`${brutalText} px-4 py-20 relative overflow-hidden flex justify-center`}>
      
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Header - Brutalist Font and Contrast */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
            <span className={`bg-gradient-to-r from-[#6200ff] to-[#00d4ff] bg-clip-text text-transparent`}>
              VELOCITY ROADMAP
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto border-t border-b border-gray-600 py-3">
            Structural goals for decentralized API infrastructure.
          </p>
        </div>

        {/* NEW: Roadmap Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 ${brutalGridCard} rounded-none transition-all duration-300`}
            >
              
              {/* Title, Icon, and Status Block */}
              <div className="flex items-start justify-between mb-4">
                
                {/* Title & Status */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <span
                    className={`inline-block px-2 py-0.5 text-xs font-mono font-semibold ${getStatusColor(
                      item.status
                    )}`}
                  >
                    STATUS: {item.status.toUpperCase()}
                  </span>
                </div>
                
                {/* Icon - Solid, square block */}
                <div
                  className={`w-12 h-12 ${item.iconBg} flex items-center justify-center rounded-none border-2 border-white`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Description */}
              <div className="text-gray-300 leading-relaxed mt-4">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}