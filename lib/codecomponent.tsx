"use client";
import { Code2 } from "lucide-react";

export default function X402Example() {
  const exampleCode = `import { useWallet } from "@solana/wallet-adapter-react";
import { createX402Client } from "@payai/x402-solana/client";
export default function PayX402() {

  const handleClick = async () => {
    const client = createX402Client({
      wallet,
      network: "solana-devnet",
      maxPaymentAmount: 1_000_000n,
    });

    // Make a paid request - automatically handles 402 payments
    const response = await client.fetch("https://x402ifyendpoint/{yourtaghere}", {
      method: "GET",
      headers: {
        "x-wallet": publicKey?.toBase58(),
        "content-type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
  };
}`;

  return (
    <div className="min-h-screen flex items-center justify-center px-0 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 animate-pulse"></div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-4xl bg-slate-900/70 backdrop-blur-md border border-emerald-500/20 rounded-2xl shadow-xl p-8">

        <pre className="font-sans text-sm">
          <code>{exampleCode}</code>
        </pre>

        <p className="mt-6 text-gray-400 text-sm font-bold text-center font-sans">
          💡 Copy this snippet to integrate your <span className="text-emerald-400 font-semibold">x402</span>-enabled API in Next.js.
        </p>
      </div>
    </div>
  );
}