import { Clock, Package, CreditCard } from "lucide-react";

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "One-time Pay",
      description: (
        <ul className="list-disc ml-6 space-y-1">
          <li>Implement a single, upfront payment option for recurring or high-volume API clients.</li>
          <li>This model simplifies the billing experience, moving away from continuous small transactions.</li>
          <li>It ensures a more predictable and stable revenue stream for the API providers.</li>
          <li>Reduce overall payment processing overhead and administrative complexities.</li>
          <li>Offer a straightforward financial arrangement highly valued by long-term users.</li>
        </ul>
      ),
      icon: <CreditCard className="w-5 h-5 text-purple-300" />,
      iconBg: "bg-purple-600/20",
      status: "Planned",
    },
    {
      title: "Builtin Testing",
      description: (
        <ul className="list-disc ml-6 space-y-1">
          <li>Introduce a feature for automated, integrated testing of all public API endpoints.</li>
          <li>Enable users to define comprehensive test cases, covering various inputs and expected outputs.</li>
          <li>Run tests automatically upon deployment and on a scheduled basis to ensure service consistency.</li>
          <li>Proactively identify and resolve potential issues to minimize unexpected service disruptions.</li>
          <li>Streamline the development-to-production workflow with continuous quality assurance.</li>
        </ul>
      ),
      icon: <Package className="w-5 h-5 text-pink-300" />,
      iconBg: "bg-pink-600/20",
      status: "Planned",
    },
    {
      title: "Multi Token Support",
      description: (
        <ul className="list-disc ml-6 space-y-1">
          <li>Expand the platform to support monetization using a wider variety of popular cryptographic tokens.</li>
          <li>Integrate several emerging blockchain assets alongside the currently supported tokens.</li>
          <li>Offer greater flexibility in payment options to cater to a global, diverse user base.</li>
          <li>Broaden market accessibility and increase the potential revenue streams for all API services.</li>
          <li>Establish a more versatile and globally integrated monetization platform for the future.</li>
        </ul>
      ),
      icon: <Clock className="w-5 h-5 text-teal-300" />,
      iconBg: "bg-teal-600/20",
      status: "Future",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e1a] text-white px-4 py-20 relative overflow-hidden flex justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Roadmap</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Accelerate, manage, and dynamically monetize your public API endpoints effortlessly with our advanced platform.
          </p>
        </div>

        {/* Roadmap Items Centered */}
        <div className="space-y-16 flex flex-col items-center">
          {roadmapItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center max-w-2xl p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
            >
              <div className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6`}>{item.icon}</div>

              <h3 className="text-3xl font-bold text-white mb-1">{item.title}</h3>
              <span className="text-gray-500 text-base mb-4">({item.status})</span>

              <div className="text-gray-300 text-lg leading-relaxed">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
