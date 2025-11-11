
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react"
import { Zap, Clock, CheckCircle } from 'lucide-react';
import { useWallet} from "@solana/wallet-adapter-react";
import { createX402Client , type WalletAdapter} from 'x402-solana/client';
import TokenGATING from "./tokengatingv2";
import NoAccessCard from "./noaccess";
import { useEffect } from "react";


export default function Playground(){



  const [no402, setno402] = useState();
  const [w402, setw402] = useState();
  const [loading402, setLoading402] = useState(false);
  const [loadingVelocity, setLoadingVelocity] = useState(false);
  const [time402, setTime402] = useState(null);
  const [timeVelocity, setTimeVelocity] = useState(null);
  const {connected,publicKey,signAllTransactions,signTransaction}=useWallet()
  const [token,hasToken]=useState(false)
  const isGateEnabled=process.env.NEXT_PUBLIC_CLOSEOFF==="TRUE";
    



  useEffect(()=>{

        if(!isGateEnabled) return ;

        async function checkToken(){
        const  tokenstatus=await TokenGATING(publicKey?.toBase58());
        if (tokenstatus==true){
          hasToken(true)
        }
      }
      checkToken()
    
      },[publicKey,connected])
     


  async function withoutx402(){
    setLoading402(true);
    //const startTime = performance.now();
    
    const  request = await fetch("https://swapi.dev/api/people/1/", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    });
    
    //const endTime = performance.now();
    const  response = await request.json();
    
    if (response) {
      setno402(response.name);
      //setTime402((endTime - startTime).toFixed(2));
    }
    setLoading402(false);
  }

  async function withx402(){
    setLoadingVelocity(true);
    //const startTime = performance.now();



     //if (!connected || !publicKey || !signTransaction || !signAllTransactions) {
     // return null;
    //}
      const wallet = connected && publicKey
    ? {
        publicKey: publicKey.toBase58(),
        signTransaction,
        signAllTransactions,
      }
    : null;

     

      
       const client = createX402Client({
        wallet,
        network: 'solana-devnet',
        maxPaymentAmount:1_000_000n, // Optional: max 10 USDC
    });


    
    const  request = await client.fetch("https://itsvelocity-velocity.hf.space/api/5e339x402", {
      method: "get",
      mode:"cors",
      headers: {
        "x-wallet":"HuzmfCNYeZgnHkcSG3hfsusy9FNKT1THBi3JU7QuMyjq",
        "content-type": "application/json"
      }
    });
    
    const endTime = performance.now();
    const  response = await request.json();
    
    if (response) {
      setw402(response.name);
      //setTimeVelocity((endTime - startTime).toFixed(2));
    }
    setLoadingVelocity(false);
  }

 if (isGateEnabled && !token){
      return (
        <NoAccessCard/>
      )
    }
  
 



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      {/* Header */}
     

      {/* Cards Container */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-start gap-8 w-full max-w-6xl mx-auto">
        
        {/* Without x402 Card */}
        <section className="w-full lg:w-1/2">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl overflow-hidden shadow-2xl hover:border-slate-600 transition-all duration-300">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="font-mono text-xl font-bold text-white">Regular Endpoint</h3>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <p className="font-mono text-xs text-gray-500 mb-1">ENDPOINT</p>
                <p className="font-mono text-sm text-purple-400 break-all">https://swapi.dev/api/people/1/</p>
              </div>

              {no402 && (
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-mono text-xs text-gray-500">RESULT</p>
                    {time402 && (
                      <span className="font-mono text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {time402}ms
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-base text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {no402}
                  </p>
                </div>
              )}

              <Button 
                onClick={withoutx402} 
                disabled={loading402}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-mono py-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading402 ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Running...
                  </div>
                ) : (
                  "Run Request"
                )}
              </Button>
            </div>
          </div>
        </section>

        {/* With x402 Card */}
        <section className="w-full lg:w-1/2">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl hover:border-purple-500/50 transition-all duration-300 relative">
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 pointer-events-none"></div>
            
            <div className="relative bg-gradient-to-r from-purple-900/50 to-blue-900/50 px-6 py-4 border-b border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-bold text-white">Velocity Tuned</h3>
                  <p className="font-mono text-xs text-purple-400">x402 </p>
                </div>
              </div>
            </div>
            
            <div className="relative p-6 space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20">
                <p className="font-mono text-xs text-gray-500 mb-1">Using velocitysdk@1.0.0</p>
                <p className="font-mono text-sm text-purple-400 break-all">Using velocitysdk@1.0.0</p>
              </div>

              {w402 && (
                <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-mono text-xs text-gray-500">RESULT</p>
                    {timeVelocity && (
                      <span className="font-mono text-xs text-purple-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {timeVelocity}ms
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-base text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {w402}
                  </p>
                </div>
              )}

              <Button 
                onClick={withx402}
                disabled={loadingVelocity}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-mono py-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loadingVelocity ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Running...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Run Request
                  </div>
                )}
              </Button>

              <div className="text-center pt-2">
                <p className="font-mono text-xs text-gray-500 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  Earn 1 USDC per request
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}