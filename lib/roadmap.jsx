import { Clock, Package, CreditCard, Gift } from "lucide-react"; // Imported Gift icon

export default function Roadmap() {
  const roadmapItems = [
    // --- NEW FEATURE ADDED HERE ---
    {
      title: "Token Incentives (Reward)",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm md:text-base">
          <li>We believe in rewarding those who build the platform. **VELOCITY** is the exclusive reward mechanism for community contributions.</li>
          <li>**Contributor Rewards:** Developers, technical writers, security researchers, and community managers who contribute high-quality, merged code or documentation will be rewarded with an allocation of **VELOCITY** tokens.</li>
          <li>Fosters a strong, decentralized development environment and encourages high-quality, continuous improvement.</li>
        </ul>
      ),
      icon: <Gift className="w-6 h-6 text-yellow-300" />, // Using Gift for reward theme
      iconBg: "bg-yellow-700/30",
      status: "Planned",
      borderColor: "border-yellow-500",
    },
    // --- EXISTING FEATURES FOLLOW ---
    {
      title: "One-time Pay",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm md:text-base">
          <li>Implement a single, upfront payment option for recurring or high-volume API clients.</li>
          <li>Simplify the billing experience, reducing continuous small transactions.</li>
          <li>Ensure a predictable and stable revenue stream for API providers.</li>
          <li>Reduce overall payment processing overhead and administrative complexities.</li>
          <li>Offer a straightforward financial arrangement valued by long-term users.</li>
        </ul>
      ),
      icon: <CreditCard className="w-6 h-6 text-fuchsia-300" />,
      iconBg: "bg-fuchsia-700/30",
      status: "Planned",
      borderColor: "border-fuchsia-500",
    },
    {
      title: "Builtin Testing",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm md:text-base">
          <li>Introduce a feature for automated, integrated testing of all public API endpoints.</li>
          <li>Enable users to define comprehensive test cases for various inputs and expected outputs.</li>
          <li>Run tests automatically upon deployment and on a scheduled basis for service consistency.</li>
          <li>Proactively identify and resolve potential issues to minimize service disruptions.</li>
          <li>Streamline the development-to-production workflow with continuous quality assurance.</li>
        </ul>
      ),
      icon: <Package className="w-6 h-6 text-purple-300" />,
      iconBg: "bg-purple-700/30",
      status: "Planned",
      borderColor: "border-purple-500",
    },
    {
      title: "Multi Token Support",
      description: (
        <ul className="list-disc ml-6 space-y-1 text-sm md:text-base">
          <li>Expand the platform to support monetization using a wider variety of popular cryptographic tokens.</li>
          <li>Integrate several emerging blockchain assets alongside the currently supported tokens.</li>
          <li>Offer greater flexibility in payment options to cater to a global, diverse user base.</li>
          <li>Broaden market accessibility and increase potential revenue streams for all API services.</li>
          <li>Establish a more versatile and globally integrated monetization platform for the future.</li>
        </ul>
      ),
      icon: <Clock className="w-6 h-6 text-sky-300" />,
      iconBg: "bg-sky-700/30",
      status: "Future",
      borderColor: "border-sky-500",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Planned":
        // Adjusted Planned color scheme for better contrast with the new yellow item
        return "text-pink-400 bg-pink-900/40 border-pink-700";
      case "Future":
        return "text-teal-400 bg-teal-900/40 border-teal-700";
      default:
        return "text-gray-400 bg-gray-700/40 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#06001a] text-white px-4 py-20 relative overflow-hidden flex justify-center">
      {/* Background Gradients and Grid for the Velocity feel */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(150,0,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom,rgba(0,100,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Header - Bolder text */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
            Velocity Roadmap
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Our commitment to evolving **Velocity** and delivering superior API infrastructure features.
          </p>
        </div>

        {/* Roadmap Items Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-700/0 via-purple-500 to-purple-700/0 hidden md:block" />

          <div className="space-y-16 flex flex-col items-center">
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative w-full md:w-[70%] lg:w-[60%] flex ${
                  idx % 2 === 0 ? "md:self-start md:text-left" : "md:self-end md:text-right md:flex-row-reverse"
                }`}
              >
                {/* Connector Dot & Line for Mobile/Start of the item */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-0 md:static md:translate-x-0 ${item.iconBg} ${item.borderColor} border-2 md:order-2`}
                >
                  {/* Dot to cover the timeline line */}
                  <div className={`w-3 h-3 rounded-full ${item.iconBg}`} />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-grow p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${item.borderColor}/50 shadow-2xl transition-all duration-300 hover:shadow-fuchsia-500/30 w-full md:w-auto md:order-1 ${
                    idx % 2 === 0 ? "md:mr-10" : "md:ml-10"
                  }`}
                >
                  {/* Icon and Title */}
                  <div
                    className={`flex ${
                      idx % 2 === 0 ? "justify-start" : "justify-end"
                    } items-center mb-3 md:justify-start ${
                      idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center ${
                        idx % 2 === 0 ? "mr-3" : "ml-3"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Status Badge */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-4 ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                  <div className="text-gray-300 leading-relaxed text-left">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}