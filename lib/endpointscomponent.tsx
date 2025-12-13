"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useWallet } from "@solana/wallet-adapter-react";
import { Network, XCircle, CheckCircle, NotebookPen, Trash2, Edit3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EndInfo {
  owner: string;
  endpoint: string;
  endpoint_linker: string;
  price: string;
}

export default function EndpointLinkerComponent() {
  const [endpoints, setEndpoints] = useState<EndInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ploading, setPLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [wallet, setWallet] = useState("");

  const [formValues, setFormValues] = useState({
    endpoint_linker: "",
    new_price: "",
  });

  const handlePChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const wallet = localStorage.getItem("loadedwallet");
    if (wallet) {
      setWallet(wallet);
    }
  }, []);

  async function checkendpoints(wallet: string | null) {
    setDataLoading(true);
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/checkendpoints",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({ owner: wallet }),
        headers: { "content-type": "application/json" },
      }
    );
    const response = await request.json();

    if (response.status === true) {
      setDataLoading(false);
      localStorage.setItem(`${wallet}_endpoints`, JSON.stringify(response.endpoints));
      setEndpoints(response.endpoints);
    } else {
      setEndpoints([]);
    }
  }

  const handleSubmit = async (tag: string) => {
    setLoading(true);
    const request = await fetch("https://itsvelocity-velocity.hf.space/delete_endpoint", {
      method: "post",
      mode: "cors",
      body: JSON.stringify({ owner: wallet, endpoint_linker: tag }),
      headers: { "content-type": "application/json" },
    });
    const response = await request.json();
    if (response.status === true) {
      setEndpoints([]);
      const cachedWallet = localStorage.getItem(`loadedwallet`);
      await checkendpoints(cachedWallet);
    }
    setLoading(false);
  };

  const handlePriceUpdate = async (tag: string) => {
    setPLoading(true);
    const request = await fetch("https://itsvelocity-velocity.hf.space/update_endpoint_price", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({
        owner: wallet,
        endpoint_linker: tag,
        price: formValues.new_price,
      }),
      headers: { "content-type": "application/json" },
    });
    const response = await request.json();
    if (response.status === true) {
      setEndpoints([]);
      const cachedWallet = localStorage.getItem(`loadedwallet`);
      await checkendpoints(cachedWallet);
    }
    setPLoading(false);
  };

  useEffect(() => {
    const cachedWallet = localStorage.getItem(`loadedwallet`);
    if (cachedWallet) {
      checkendpoints(cachedWallet);
    }
    const endpoints = localStorage.getItem(`${wallet}_endpoints`);

    if (endpoints) {
      const parsed_endpoints = JSON.parse(endpoints);
      setEndpoints(parsed_endpoints);
    }
  }, [wallet]);

  return (
    <main className="w-full rounded-2xl p-8">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-black tracking-tight mb-2">
              Your Endpoints
            </h1>
            <p className="text-gray-400 text-sm">
              Manage and monitor your registered API endpoints
            </p>
          </div>
          <div className="flex gap-2">
            {loading && (
              <Badge className="bg-red-500/20 text-red-300 border-red-500/40 px-4 py-2">
                🗑️ Deleting...
              </Badge>
            )}
            {ploading && (
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/40 px-4 py-2">
                ⚡ Updating...
              </Badge>
            )}
          </div>
        </div>

        {/* Endpoints Grid */}
        <ScrollArea className="max-h-[600px] pr-4">
          {endpoints.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endpoints.map((item, index) => (
                <div
                  key={item.endpoint_linker}
                  className="group relative overflow-hidden   bg-gray-700   border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                          <Network className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white truncate max-w-[140px]">
                            {item.endpoint_linker}
                          </h3>
                          <span className="text-xs text-gray-400">Endpoint ID</span>
                        </div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    </div>

                    {/* Endpoint URL */}
                    <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-3">
                      <code className="block text-xs font-mono text-gray-300 break-all">
                        {item.endpoint}
                      </code>
                    </div>

                    {/* Price Badge */}
                    <div className="flex items-center justify-between bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl px-4 py-2.5">
                      <span className="text-xs font-semibold text-emerald-300">Price per Request</span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">{item.price}</span>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 pt-2">
                      {/* Delete Button */}
                      <Button
                        onClick={() => handleSubmit(item.endpoint_linker)}
                        className="w-full bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 text-red-300 border border-red-500/40 hover:border-red-400"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Endpoint
                      </Button>

                      {/* Edit Accordion */}
                      <Accordion type="single" collapsible>
                        <AccordionItem value={`item-${index}`} className="border-0">
                          <AccordionTrigger className="hover:no-underline bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 border border-amber-500/40 rounded-xl px-4 py-2 text-amber-300">
                            <div className="flex items-center gap-2">
                              <Edit3 className="h-4 w-4" />
                              <span className="text-sm font-semibold">Update Price</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4 px-1">
                            <div className="space-y-3">
                              <div>
                                <FieldLabel className="text-gray-300 text-xs mb-2 block font-semibold">
                                  New Price
                                </FieldLabel>
                                <Input
                                  name="new_price"
                                  type="text"
                                  className="font-mono bg-gray-800/60 border-gray-700 text-white placeholder-gray-500 focus:border-amber-500"
                                  placeholder="0.001"
                                  onChange={handlePChange}
                                />
                              </div>
                              <Button 
                                onClick={() => handlePriceUpdate(item.endpoint_linker)}
                                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/20"
                              >
                                Update Price
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <section className="flex flex-col items-center justify-center py-20 text-center">
              <div className="p-6 bg-gray-800/40 rounded-full mb-4">
                <XCircle className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Endpoints Yet</h3>
              <p className="text-gray-400 text-sm max-w-md">
                You havent registered any endpoints yet. Create your first endpoint to get started!
              </p>
            </section>
          )}
        </ScrollArea>
      </div>
    </main>
  );
}