"use client";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-0 py-0 font-sans text-gray-200">
      <div className="w-full max-w-4xl">

        {/* Documentation-style Card */}
        <div className="bg-[#0b1221] rounded-2xl border border-[#1e293b] shadow-2xl p-8 md:p-5">
          <p className="font-mono text-base text-gray-300 mb-4">
            Instantly <span className="text-purple-400 font-semibold">x402</span> your or any public API endpoints
          </p>

          {/* Regular Endpoints Section */}
          <div className="mb-8">
            <h2 className="font-semibold text-lg text-white mb-3">Regular Endpoints:</h2>
            <div className="bg-[#111827] border border-[#1e293b] rounded-md px-4 py-3 font-mono text-sm text-purple-300">
              🔗 
            </div>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm md:text-base">
              Standard API endpoints that maintain a fixed connection to your original API. 
              Ideal for stable, unchanging services that need reliable acceleration.
            </p>
          </div>

          {/* Dynamic Endpoints Section */}
          <div>
            <h2 className="font-semibold text-lg text-white mb-3">Dynamic Endpoints:</h2>
            <div className="bg-[#111827] border border-[#1e293b] rounded-md px-4 py-3 font-mono text-sm text-blue-300">
              ⚡ 
            </div>
            <p className="mt-3 text-gray-400 leading-relaxed text-sm md:text-base">
              Flexible endpoints that let you update where they point to on the fly. 
              Easily switch between APIs or services without creating new endpoints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
