"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Network, Zap, FileText, Rocket, DollarSign } from "lucide-react";
import { toast } from "sonner"
import { Toaster } from "sonner"
import { useRouter } from 'next/navigation';


export default function HomeComponent() {
  const [endpointCount, setEndpointCount] = useState<number>(0);
  const [dynamicCount, setDynamicCount] = useState<number>(0);
  const [invoiceCount, setInvoiceCount] = useState<number>(0);
  const [wallet,setWallet]=useState("");
  const router = useRouter();

  //const { connected, publicKey } = useWallet();


  const Logout=()=>{
    localStorage.removeItem("loadedwallet")
    toast.success(`cleared`)
    router.push('/');
  }


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
      body: JSON.stringify({ owner: wallet}),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    const datasize = data.invoices?.length || 0;
    setInvoiceCount(datasize);
  }

   useEffect(()=>{

    const wallet=localStorage.getItem("loadedwallet")
    if (wallet){
      setWallet(wallet)
    }

  },[])

  useEffect(() => {
    if (wallet) {
      checkEndpoints();
      checkDynamicEndpoints();
      checkInvoices();
    }
  }, [wallet]);

  return (
    <div className="px-10 py-10 text-gray-200 bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <Toaster position="top-center" />
      <div className="text-center mb-10">
        
        <h1 className="text-4xl md:text-4xl font-black tracking-tighter mb-5 leading-none">
         
                
          </h1>
          <h1 className="text-4xl md:text-4xl font-black tracking-tighter mb-5 leading-none">
              <span className="block bg-gradient-to-br from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Instantly x402, Dynamic x402 & MCP Your API Endpoints <pre></pre>
                
              </span>
            </h1>

        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-400 font-mono">
              CA: {process.env.NEXT_PUBLIC_TOKEN} 
        </span><br/>
        <button
        className="w-full justify-start text-white font-sans font-bold data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-lg px-6 py-2 text-sm font-medium transition-all"
        onClick={Logout}>Logout</button>
      </div>

      {/* Stats Grid */}
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl border border-fuchsia-600/30 bg-white/5 backdrop-blur-sm p-6 flex items-center justify-between transition-all hover:border-fuchsia-500/50">
          <div>
            <h3 className="text-sm text-gray-400">Endpoints</h3>
            <p className="text-3xl font-bold text-white">{endpointCount}</p>
          </div>
          <Network className="h-7 w-7 text-fuchsia-400" />
        </div>

        <div className="rounded-2xl border border-cyan-600/30 bg-white/5 backdrop-blur-sm p-6 flex items-center justify-between transition-all hover:border-cyan-500/50">
          <div>
            <h3 className="text-sm text-gray-400">Dynamic Endpoints</h3>
            <p className="text-3xl font-bold text-white">{dynamicCount}</p>
          </div>
          <Zap className="h-7 w-7 text-cyan-400" />
        </div>

        <div className="rounded-2xl border border-emerald-600/30 bg-white/5 backdrop-blur-sm p-6 flex items-center justify-between transition-all hover:border-emerald-500/50">
          <div>
            <h3 className="text-sm text-gray-400">Invoices</h3>
            <p className="text-3xl font-bold text-white">{invoiceCount}</p>
          </div>
          <FileText className="h-7 w-7 text-emerald-400" />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Regular Endpoints */}
        <div className="p-6 bg-gray-800/70 rounded-2xl border border-gray-700 transition hover:bg-gray-700">
          <div className="flex items-center mb-4">
            <Network className="h-6 w-6 text-fuchsia-400 mr-3" />
            <h3 className="text-lg font-semibold text-white">Regular Endpoints </h3>
          </div>
          <p className="text-gray-300">
            Standard API endpoints that maintain a fixed connection to your original API. Ideal for stable, unchanging services that need reliable acceleration.
          </p>
        </div>

        {/* Dynamic Endpoints */}
        <div className="p-6 bg-gray-800/70 rounded-2xl border border-gray-700 transition hover:bg-gray-700">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-cyan-400 mr-3" />
            <h3 className="text-lg font-semibold text-white">Dynamic Endpoints </h3>
          </div>
          <p className="text-gray-300">
            Flexible endpoints that let you update where they point to on the fly. Easily switch between APIs or services without creating new endpoints.
          </p>
        </div>

        {/* Auto MCP */}
        <div className="p-6 bg-gray-800/70 rounded-2xl border border-gray-700 transition hover:bg-gray-700">
          <div className="flex items-center mb-4">
            <Rocket className="h-6 w-6 text-rose-400 mr-3" />
            <h3 className="text-lg font-semibold text-white">Auto MCP </h3>
          </div>
          <p className="text-gray-300">
            Automatically exposed as  MCP endpoints
          </p>
        </div>

        {/* Demand-based Pricing */}
        <div className="p-6 bg-gray-800/70 rounded-2xl border border-gray-700 transition hover:bg-gray-700">
          <div className="flex items-center mb-4">
            <DollarSign className="h-6 w-6 text-emerald-400 mr-3" />
            <h3 className="text-lg font-semibold text-white">On-Demand Pricing</h3>
          </div>
          <p className="text-gray-300">
            Update the price per request of your endpoints  based on traffic and demand, making your API management cost-efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
