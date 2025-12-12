"use client";

import { useEffect, useState } from "react";
import { Network, Zap, FileText, Rocket, DollarSign, LogOut, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { useRouter } from 'next/navigation';

export default function HomeComponent() {
  const [endpointCount, setEndpointCount] = useState<number>(0);
  const [dynamicCount, setDynamicCount] = useState<number>(0);
  const [invoiceCount, setInvoiceCount] = useState<number>(0);
  const [wallet, setWallet] = useState("");
  const router = useRouter();

  const Logout = () => {
    localStorage.removeItem("loadedwallet");
    toast.success(`Logged out successfully`);
    router.push('/');
  };

  async function checkEndpoints() {
    const res = await fetch("https://itsvelocity-velocity.hf.space/checkendpoints", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({ owner: wallet }),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    if (data.status === true) setEndpointCount(data.endpoints?.length || 0);
  }

  async function checkDynamicEndpoints() {
    const res = await fetch("https://itsvelocity-velocity.hf.space/checkdynamicendpoints", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({ owner: wallet }),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    if (data.status === true) setDynamicCount(data.dynamicendpoints?.length || 0);
  }

  async function checkInvoices() {
    const res = await fetch("https://itsvelocity-velocity.hf.space/invoices", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({ owner: wallet }),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    const datasize = data.invoices?.length || 0;
    setInvoiceCount(datasize);
  }

  useEffect(() => {
    const wallet = localStorage.getItem("loadedwallet");
    if (wallet) {
      setWallet(wallet);
    }
  }, []);

  useEffect(() => {
    if (wallet) {
      checkEndpoints();
      checkDynamicEndpoints();
      checkInvoices();
    }
  }, [wallet]);

  return (
    <div className="relative text-white bg-gray-900/80 rounded-2xl p-8">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Web3 API Infrastructure
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            X401 WALLET AUTH,
            x402 
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
           Dynamic x402 & Auto MCP 
          </span>
        </h1>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300 font-mono">
            CA: {process.env.NEXT_PUBLIC_TOKEN}
          </span>
        </div>

        <button
          onClick={Logout}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/30 p-6 hover:border-fuchsia-400 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-300 mb-1 font-medium">Endpoints</h3>
              <p className="text-4xl font-black bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                {endpointCount}
              </p>
            </div>
            <div className="p-3 bg-fuchsia-500/20 rounded-xl">
              <Network className="h-7 w-7 text-fuchsia-400" />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-300 mb-1 font-medium">Dynamic Endpoints</h3>
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {dynamicCount}
              </p>
            </div>
            <div className="p-3 bg-cyan-500/20 rounded-xl">
              <Zap className="h-7 w-7 text-cyan-400" />
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30 p-6 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-300 mb-1 font-medium">Invoices</h3>
              <p className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {invoiceCount}
              </p>
            </div>
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <FileText className="h-7 w-7 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Regular Endpoints */}
        <div className="group relative overflow-hidden p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-fuchsia-400 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-fuchsia-500/10 rounded-lg mr-3">
                <Network className="h-6 w-6 text-fuchsia-500" />
              </div>
              <h3 className="text-lg font-bold text-white">Regular Endpoints</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Standard API endpoints that maintain a fixed connection to your original API. Ideal for stable, unchanging services that need reliable acceleration.
            </p>
          </div>
        </div>

        {/* Dynamic Endpoints */}
        <div className="group relative overflow-hidden p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg mr-3">
                <Zap className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-lg font-bold text-white">Dynamic Endpoints</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Flexible endpoints that let you update where they point to on the fly. Easily switch between APIs or services without creating new endpoints.
            </p>
          </div>
        </div>

        {/* Auto MCP */}
        <div className="group relative overflow-hidden p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-rose-400 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-rose-500/10 rounded-lg mr-3">
                <Rocket className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold text-white">Auto MCP</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Automatically exposed as MCP endpoints for seamless integration with your infrastructure.
            </p>
          </div>
        </div>

        {/* Demand-based Pricing */}
        <div className="group relative overflow-hidden p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg mr-3">
                <DollarSign className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-white">On-Demand Pricing</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Update the price per request of your endpoints based on traffic and demand, making your API management cost-efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}