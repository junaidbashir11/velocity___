"use client";
import { motion } from "framer-motion";
import { useState ,useEffect} from "react";
import { useWallet } from "@solana/wallet-adapter-react";

import TokenGATING from "./tokengatingv2";
import NoAccessCard from "./accessdenied";





export default function MCP() {

  const [token,hasToken]=useState(false)
  const isGateEnabled=process.env.NEXT_PUBLIC_CLOSEOFF==="TRUE";
  const {connected,publicKey}=useWallet()

    useEffect(()=>{
       
               if(!isGateEnabled) return ;
       
               async function checkToken(){
               const tokenstatus=await TokenGATING(publicKey?.toBase58());
               if (tokenstatus==true){
                 hasToken(true)
               }
             }
             checkToken()
           
             },[publicKey,connected])

    if (isGateEnabled && !token){
          return (
            <NoAccessCard/>
          )
        }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05070d] via-[#0a0f1c] to-[#05070d] flex flex-col items-center justify-center px-4 py-12 font-sans text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Model Context Protocol (MCP)
        </h1>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Every endpoint you register with <span className="text-purple-400 font-semibold">Velocity</span> is automatically exposed 
          as a fully compliant <span className="text-blue-400 font-semibold">MCP Server</span>.  
          This lets Claude and other MCP-enabled systems query your data natively — 
          no wrappers, no SDKs, just instant context access.
        </p>

        
        <div className="mt-12 bg-[#0f172a]/60 border border-[#1e293b] backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-10 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            🚀 Auto-Exposed MCP Endpoints
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            When you register an endpoint, x402 automatically makes it available at:
          </p>

          <div className="bg-[#111827] border border-[#1e293b] rounded-lg p-3 font-mono text-sm text-green-400 mb-6">
            https://mcpv100-production.up.railway.app/mcp     staging phase
          </div>

          <p className="text-gray-400 leading-relaxed">
            This endpoint can be directly used in <span className="text-purple-400 font-semibold">Claude Desktop</span> 
            or any MCP client to fetch structured data, run queries, or manage API actions.
          </p>
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 bg-[#0a1120]/70 border border-[#1e293b] rounded-xl shadow-xl p-5 md:p-7 text-left"
        >
          
          <pre className="overflow-x-auto text-xs md:text-sm text-gray-300 font-mono">
{`

Example: Using an x402 MCP endpoint with Claude SDK
import { connect } from "@anthropic-ai/mcp-sdk";

const mcp = await connect({
  server: "https://mcpv100-production.up.railway.app/mcp",
});


const tools = await mcp.listTools();
console.log("Available tools:", tools);


const res = await mcp.invoke("get-data-from-resource-server_by_get_method", {
  ownerwallet: "devs wallet address who registered the endpoint",
  endpoint: "/api/{yourtaghere}",
  privateKey: "private key of the agent wallet"
});

console.log("MCP Response:", res);
This example covers GET based endpoints

`}
          </pre>
        </motion.div>

        <p className="mt-6 text-gray-500 text-sm">
          💡 Works seamlessly with Claude, Llama-MCP, and any OpenMCP compatible runtime.
        </p>
      </motion.div>
    </div>
  );
}
