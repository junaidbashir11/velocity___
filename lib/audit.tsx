"use client";

import { useState, useEffect } from "react";
import { Network, FileSignature } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import TokenGATING from "./tokengatingv2";
import NoAccessCard from "./accessdenied";


interface SimpleInvoice {
  owner: string;
  endpoint_linker: string;
  endpoint: string;
  signature: string;
  payTo: string;
  asset: string;
  Amount: string;
}

export default function AuditComponent() {
  const [invoices, setInvoices] = useState<SimpleInvoice[]>([]);
  const [selectedSignature, setSelectedSignature] = useState<string | null>(null);
  const { connected, publicKey } = useWallet();
  const [dataLoading,setDataLoading]=useState(false);
  const [token,hasToken]=useState(false)
  const isGateEnabled=process.env.NEXT_PUBLIC_CLOSEOFF==="TRUE";



  useEffect(()=>{
     
             if(!isGateEnabled) return ;
             if(token) return ;
     
             async function checkToken(){
             const tokenstatus=await TokenGATING(publicKey?.toBase58());
             if (tokenstatus==true){
               hasToken(true)
             }
           }
           checkToken()
         
           },[publicKey,connected])


   async function getInvoices(wallet:string|null) {

      setDataLoading(true)
      if (!publicKey) return;
      try {
        const res = await fetch("https://itsvelocity-velocity.hf.space/invoices", {
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ owner: wallet }),
        });
        const data = await res.json();
        if (data.invoices) {

          setDataLoading(false);
          localStorage.setItem(`${publicKey?.toBase58()}_invoices`,JSON.stringify(data.invoices));
          setInvoices(data.invoices);

        }
      } catch (err) {
        console.error("Failed to fetch invoices:", err);
      }
    }
  

  useEffect(() => {

      const cachedWallet = localStorage.getItem(`${publicKey?.toBase58()}_wallet`);
      if(cachedWallet){
        getInvoices(cachedWallet)
      }
      const endpoints=localStorage.getItem(`${publicKey?.toBase58()}_invoices`)

      if (endpoints){

        const parsed_endpoints=JSON.parse(endpoints)
        //setInvoices(parsed_endpoints)
      
        
        setInvoices(parsed_endpoints)

        
      }
    


  }, [connected, publicKey]);




  if (isGateEnabled && !token){
        return (
          <NoAccessCard/>
        )
      }
 

  return (
    <main className="flex justify-center items-start min-h-[80vh] py-10 px-6 bg-gray-900">
      <div className="w-full max-w-3xl bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-lg transition-all duration-300">
        {invoices.length > 0 ? (
          <ScrollArea className="h-[500px] overflow-auto rounded-lg border border-gray-700 p-2">
            <section className="divide-y divide-gray-700">
              {invoices.map((item) => (
                <motion.div
                  key={item.signature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3 py-4 px-3 hover:bg-gray-700 transition-colors rounded-xl"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Network Icon */}
                    <div className="flex-shrink-0 bg-gray-700 p-2 rounded-xl border border-gray-600 shadow-sm">
                      <Network className="h-5 w-5 text-amber-400" />
                    </div>

                    {/* Endpoint URL */}
                    <code
                      className="text-sm font-mono text-gray-200 bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-600 truncate max-w-xs md:max-w-md"
                      title={item.endpoint}
                    >
                      {item.endpoint}
                    </code>

                    {/* Right side info */}
                    <div className="flex items-center gap-4 ml-auto">
                      {/* PayTo */}
                      <div className="text-xs text-gray-400 hidden sm:block" title={item.payTo}>
                        <span className="font-semibold text-gray-300">To:</span>
                        <span className="font-mono text-gray-200 ml-1 inline-block truncate max-w-[120px]">
                          {item.payTo}
                        </span>
                      </div>

                      {/* Amount */}
                      <div className="text-xs text-gray-400">
                        <span className="font-semibold text-gray-300">Amount:</span>
                        <span className="font-mono text-gray-200 ml-1 inline-flex items-center">
                          {item.Amount}
                          <Badge className="ml-1 bg-gray-700 text-gray-200 text-[10px] h-4">
                            <span className="truncate max-w-[50px]" title={item.asset}>
                              {item.asset}
                            </span>
                          </Badge>
                        </span>
                      </div>

                      {/* Linker */}
                      <Badge
                        variant="outline"
                        className="bg-emerald-800/50 border-emerald-600 text-emerald-300 text-xs font-medium px-3 py-1.5 max-w-[100px] truncate"
                        title={item.endpoint_linker}
                      >
                        {item.endpoint_linker}
                      </Badge>

                      {/* Signature dialog trigger */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            onClick={() => setSelectedSignature(item.signature)}
                            className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline"
                          >
                            <FileSignature className="h-4 w-4" />
                            View Signature
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-800/90 border border-gray-700 text-gray-200 max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="text-base font-semibold text-gray-100">
                              Invoice Signature
                            </DialogTitle>
                          </DialogHeader>
                          <div className="p-3">
                            <code className="block text-sm text-blue-300 bg-gray-700 border border-gray-600 p-3 rounded-lg break-all">
                              {selectedSignature}
                            </code>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </motion.div>
              ))}
            </section>
          </ScrollArea>
        ) : (
          <section className="flex flex-col items-center justify-center py-20 text-center">
            <Network className="h-10 w-10 text-gray-500 mb-3" />
            <p className="text-gray-400 text-sm">
              No invoices found for this wallet yet.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
