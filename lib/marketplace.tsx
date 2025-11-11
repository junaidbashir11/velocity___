"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, CheckCircle, XCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MarketInfo {
  owner: string;
  description: string;
  endpoint_linker: string;
  price: string;
  endpoint_mcp_base: string;
}

export default function EndpointLinkerComponent() {
  const { connected, publicKey } = useWallet();
  const [market, setMarket] = useState<MarketInfo[]>([]);

  async function checkmarket() {
    const request = await fetch("https://itsvelocity-velocity.hf.space/marketdata", {
      mode: "cors",
      method: "get",
      headers: { "content-type": "application/json" },
    });
    const response = await request.json();
    if (response.market) {
      
      setMarket(response.market);
      localStorage.setItem("market",JSON.stringify(response.market));


    }
  }

    useEffect(() => {

      checkmarket()
      
      const market=localStorage.getItem("market")

      if (market){
        const parsed_market=JSON.parse(market)
        setMarket(parsed_market)
      }
    


  }, [connected, publicKey]);




  return (
    <main className="flex justify-center items-start min-h-[85vh] py-10 px-6 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-800">
      <div className="w-full max-w-[95rem] rounded-3xl p-6 transition-all duration-300">
        <h1 className="text-2xl font-semibold text-slate-100 mb-8 tracking-tight">
          Marketplace <span className="text-slate-400 font-normal">— Discover x402-enabled endpoints</span>
        </h1>

        <ScrollArea className="max-h-[70vh] pr-2">
          {market.length ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {market.map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/40 border border-slate-700/40 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-800/60 transition-all duration-300"
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-700/50 border border-slate-600/40">
                        <Network className="h-5 w-5 text-slate-300" />
                      </div>
                      <CardTitle className="text-sm font-medium text-slate-200 truncate max-w-[150px]">
                        {item.endpoint_linker}
                      </CardTitle>
                    </div>
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-slate-300 bg-slate-700/30 px-3 py-2 rounded-md border border-slate-600/30 break-words">
                      {item.description || "No description provided"}
                    </p>

                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className="bg-slate-700/40 border-slate-600/40 text-slate-300 font-medium px-2 py-1 text-xs"
                      >
                        Price
                      </Badge>
                      <span className="text-slate-200 text-sm font-mono">{item.price}</span>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <code className="block text-xs font-mono text-slate-400 bg-slate-700/20 px-3 py-1.5 rounded-md border border-slate-600/20 break-words">
                      MCP enabled
                    </code>
                  </CardFooter>
                </Card>
              ))}
            </section>
          ) : (
            <section className="flex flex-col items-center justify-center py-16 text-center">
              <XCircle className="h-8 w-8 text-slate-500 mb-3" />
              <p className="text-gray-400 text-sm">Nothing Yet</p>
            </section>
          )}
        </ScrollArea>
      </div>
    </main>
  );
}
