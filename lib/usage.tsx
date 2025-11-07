export default function Usage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 relative overflow-hidden">

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>

      {/* Central purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto pt-10 pb-16 text-center space-y-10">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold font-sans text-white">
          After Registering Endpoints
        </h1>

        {/* Base URL */}
        <div className="bg-slate-800/60 p-6 rounded-xl shadow-lg space-y-6 text-left font-sans">
          <h5 className="text-white font-mono text-lg mb-2">
            BASE URL: <span className="text-purple-400">https://itsvelocity-velocity.hf.space</span>
          </h5>

          {/* Simple GET */}
          <div className="space-y-2">
            <p className="text-gray-300 text-lg">
              <strong>Simple GET endpoints:</strong>
            </p>
            <code className="block bg-slate-900/50 px-2 py-1 rounded font-mono text-sm text-purple-300">
              /api/your-endpoint-tag
            </code>
            <p className="text-gray-400 text-sm">
              Also pass <code className="font-mono">x-wallet</code> header (your wallet/creator wallet)
            </p>
          </div>

         

          {/* POST endpoints */}
          <div className="space-y-2">
            <p className="text-gray-300 text-lg">
              <strong>POST endpoints:</strong>
            </p>
            <code className="block bg-slate-900/50 px-2 py-1 rounded font-mono text-sm text-purple-300">
              /api
            </code>
            <p className="text-gray-400 text-sm">
              Send your data in the request body and include <code className="font-mono">x-wallet</code> header
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
