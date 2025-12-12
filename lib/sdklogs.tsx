"use client";

import { useState, useEffect } from "react";
import { Network, FileSignature, CheckCircle, XCircle, Globe, MapPin, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
// Assuming you have a Label component or similar utility from your UI library
import { Label } from "@/components/ui/label"; 


interface SimpleInvoice {
      signer:string,
      challange:string,
      token_amount:string
      required_mint:string,
      sign_verification:boolean
      token_verification:boolean
      geo_code:boolean,
      restricted_loc:string
}

// Helper function to get status badge style
const getStatusBadge = (value: boolean) => {
  return value
    ? { icon: CheckCircle, style: "bg-green-800/50 border-green-600 text-green-300", label: "PASSED" }
    : { icon: XCircle, style: "bg-red-800/50 border-red-600 text-red-300", label: "FAILED" };
};


export default function SDKLogs() {

  const [invoices, setInvoices] = useState<SimpleInvoice[]>([]);
  const [selectedSignature, setSelectedSignature] = useState<string | null>(null);
  // Initialized as null, and set to string once loaded from local storage
  const [wallet,setWallet]=useState<string|null>(null); 
  const [dataLoading,setDataLoading]=useState(false);
  
  // 1. Load wallet from localStorage once on mount
  useEffect(()=>{
    const loadedWallet = localStorage.getItem("loadedwallet")
    if (loadedWallet){
      setWallet(loadedWallet)
    }
  },[])
  

  // Function to fetch invoices
   async function getInvoices(currentWallet:string) {

      setDataLoading(true)
      
      try {
        const res = await fetch(`https://itsvelocity-velocity.hf.space/sdklogs/${currentWallet}`, {
          mode: "cors",
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        
        if (data.details) {

          setDataLoading(false);
          // Use the currentWallet parameter for consistent caching
          localStorage.setItem(`${currentWallet}_logs`,JSON.stringify(data.details));
          setInvoices(data.details);
        } else {
            setDataLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch invoices:", err);
        setDataLoading(false);
      }
    }
  

  // 2. Handle wallet change, load cache, and fetch
  useEffect(() => {
    // Only proceed if wallet is loaded and is not null
    if (!wallet) return; 

    // A. Check for cached invoices first
    const cachedlogs = localStorage.getItem(`${wallet}_logs`)

    if (cachedlogs){
      try {
        const parsed_logs = JSON.parse(cachedlogs)
        setInvoices(parsed_logs)
      } catch (e) {
        console.error("Error parsing cached invoices:", e);
      }
    }
    
    // B. Fetch fresh data 
    getInvoices(wallet) 

  }, [wallet]); // Re-run when 'wallet' state changes


  return (
    <main className="flex flex-col items-center min-h-[80vh] py-10 px-4 bg-gray-900">
      <h1 className="text-mono text-white text-4xl md:text-4xl font-black tracking-tighter mb-8 leading-none text-center">
        SDK Logs for x401 auth 
      </h1>
      <div className="w-full max-w-4xl bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-xl transition-all duration-300">
        {/* Show spinner/loading state */}
        {dataLoading && invoices.length === 0 && (
            <p className="text-center text-blue-400 py-10">Loading logs</p>
        )}

        {invoices.length > 0 ? (
          <ScrollArea className="h-[500px] overflow-auto rounded-lg border border-gray-700 p-2">
            <section className="divide-y divide-gray-700">
              {invoices.map((item, index) => {
                const signBadge = getStatusBadge(item.sign_verification);
                const tokenBadge = getStatusBadge(item.token_verification);
                const geoBadge = getStatusBadge(item.geo_code);

                return (
                  <motion.div
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex flex-col gap-3 py-4 px-3 hover:bg-gray-700/50 transition-colors rounded-lg"
                  >
                    {/* ROW 1: Signer, Amount, Mint */}
                    <div className="flex flex-wrap items-center gap-4">
                      
                      {/* Signer (Client Wallet) */}
                      <div className="flex-1 min-w-0">
                        <Label className="text-xs text-gray-400">Signer (Client Wallet)</Label>
                        <code
                          className="block text-sm font-mono text-gray-200 bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-600 truncate"
                          title={item.signer}
                        >
                          {item.signer}
                        </code>
                    </div>

                    {/* Token Amount */}
                    <div className="flex-shrink-0">
                      <Label className="text-xs text-gray-400">Amount Paid</Label>
                      <Badge
                        className="bg-blue-800/50 border-blue-600 text-blue-300 text-sm font-semibold px-3 py-1.5 flex items-center gap-1"
                      >
                        <DollarSign className="h-4 w-4" />
                        {item.token_amount}
                      </Badge>
                    </div>
                    
                    {/* Required Mint */}
                    <div className="flex-shrink-0">
                      <Label className="text-xs text-gray-400">Required Mint</Label>
                      <code
                        className="block text-sm font-mono text-gray-200 bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-600 truncate max-w-[150px]"
                        title={item.required_mint}
                      >
                        {item.required_mint}
                      </code>
                    </div>
                  </div>

                  {/* ROW 2: Verification Details */}
                  <div className="flex flex-wrap items-center gap-4 border-t border-gray-700 pt-3 mt-2">
                    {/* Signature Verification */}
                    <div className="flex items-center gap-2">
                      <FileSignature className="h-4 w-4 text-gray-500" />
                      <Label className="text-xs text-gray-400">Sign Check:</Label>
                      <Badge className={`${signBadge.style} text-xs font-semibold`}>
                        <signBadge.icon className="h-3 w-3 mr-1" />
                        {signBadge.label}
                      </Badge>
                    </div>

                    {/* Token Verification */}
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <Label className="text-xs text-gray-400">Token Check:</Label>
                      <Badge className={`${tokenBadge.style} text-xs font-semibold`}>
                        <tokenBadge.icon className="h-3 w-3 mr-1" />
                        {tokenBadge.label}
                      </Badge>
                    </div>

                    {/* Geo-Code Verification */}
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <Label className="text-xs text-gray-400">Geo Check:</Label>
                      <Badge className={`${geoBadge.style} text-xs font-semibold`}>
                        <geoBadge.icon className="h-3 w-3 mr-1" />
                        {geoBadge.label}
                      </Badge>
                    </div>

                    {/* Restricted Location */}
                    <div className="flex items-center gap-2 ml-auto">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <Label className="text-xs text-gray-400">Restricted Location:</Label>
                      <Badge 
                        variant="outline" 
                        className="bg-purple-800/50 border-purple-600 text-purple-300 text-xs font-medium px-3 py-1.5"
                      >
                        {item.restricted_loc || "N/A"}
                      </Badge>
                    </div>
                  </div>

                  {/* ROW 3: Challenge & Signature Trigger */}
                  <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-gray-700/50">
                    {/* Challenge */}
                    <div className="flex-1 min-w-0">
                      <Label className="text-xs text-gray-400">Challenge Hash</Label>
                      <code
                        className="block text-sm font-mono text-amber-400 bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-600 truncate"
                        title={item.challange}
                      >
                        {item.challange}
                      </code>
                    </div>

                    {/* Signature dialog trigger */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => setSelectedSignature(item.signer)} 
                          className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 hover:underline flex-shrink-0"
                        >
                          <FileSignature className="h-4 w-4" />
                          View Full Signer
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800/90 border border-gray-700 text-gray-200 max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="text-base font-semibold text-gray-100">
                            Invoice Signature/Signer
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
                  </motion.div>
                ); // <-- Correctly closing the return statement
              })}
            </section>
          </ScrollArea>
        ) : (
          <section className="flex flex-col items-center justify-center py-20 text-center">
            <Network className="h-10 w-10 text-gray-500 mb-3" />
            <p className="text-gray-400 text-sm">
              {dataLoading && wallet ? "Fetching data from server..." : "No invoices found for this wallet yet."}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}