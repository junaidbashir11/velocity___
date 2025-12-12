"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useWallet } from "@solana/wallet-adapter-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FieldLabel } from "@/components/ui/field";
import { toast, Toaster } from "sonner";
import { Network, NotebookPen, XCircle, CheckCircle, Zap, Trash2, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import TokenGATING from "./tokengatingv2";
import NoAccessCard from "./accessdenied";

interface EndInfo {
  owner: string;
  endpoint: string;
  endpoint_linker: string;
  price: string;
}

export default function DynamicEndpointLinkerComponent() {
  const [endpoints, setEndpoints] = useState<EndInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ploading, setPLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [wallet, setWallet] = useState("");

  const [formValues, setFormValues] = useState({
    endpoint_linker: "",
    new_endpoint: "",
    new_price: "",
  });

  const isGateEnabled = process.env.NEXT_PUBLIC_CLOSEOFF === "TRUE";
  const [token, hasToken] = useState(false);

  useEffect(() => {
    const wallet = localStorage.getItem("loadedwallet");
    if (wallet) {
      setWallet(wallet);
    }
  }, []);

  async function checkendpoints(wallet: string | null) {
    setDataLoading(true);
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/checkdynamicendpoints",
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
      if (wallet) {
        localStorage.setItem(`${wallet}_dynamicendpoints`, JSON.stringify(response.dynamicendpoints));
      }
      setEndpoints(response.dynamicendpoints);
    } else {
      setEndpoints([]);
    }
  }

  useEffect(() => {
    const cachedWallet = localStorage.getItem(`loadedwallet`);
    if (cachedWallet) {
      checkendpoints(cachedWallet);
    }
    const endpoints = localStorage.getItem(`${wallet}_dynamicendpoints`);

    if (endpoints) {
      const parsed_endpoints = JSON.parse(endpoints);
      setEndpoints(parsed_endpoints);
    }
  }, [wallet]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handlePChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = async (tag: string) => {
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/update_dynamic_endpoint",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: wallet,
          tag,
          newendpoint: formValues.new_endpoint,
        }),
        headers: { "content-type": "application/json" },
      }
    );
    const response = await request.json();
    if (response.status === true) {
      toast.success(`Your endpoint has been updated`);
      setEndpoints([]);
      const cachedWallet = localStorage.getItem(`loadedwallet`);
      await checkendpoints(cachedWallet);
    }
  };

  const handleDSubmit = async (tag: string) => {
    setLoading(true);
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/delete_dynamic_endpoint",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: wallet,
          endpoint_linker: tag,
        }),
        headers: { "content-type": "application/json" },
      }
    );
    const response = await request.json();
    if (response.status === true) {
      setLoading(false);
      setEndpoints([]);
      const cachedWallet = localStorage.getItem(`loadedwallet`);
      await checkendpoints(cachedWallet);
    }
  };

  const handlePriceUpdate = async (tag: string) => {
    setPLoading(true);
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/update_dynamic_endpoint_price",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: wallet,
          endpoint_linker: tag,
          price: formValues.new_price,
        }),
        headers: { "content-type": "application/json" },
      }
    );
    const response = await request.json();
    if (response.status === true) {
      setPLoading(false);
      setEndpoints([]);
      const cachedWallet = localStorage.getItem(`loadedwallet`);
      await checkendpoints(cachedWallet);
    }
  };

  return (
    <main className="w-full bg-gray-900/80 rounded-2xl p-8">
      <div className="w-full">
        <Toaster position="top-center" richColors />

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">
              Dynamic Endpoints
            </h1>
            <p className="text-gray-400 text-sm">
              Flexible endpoints you can update on the fly
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
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                          <Zap className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white truncate max-w-[140px]">
                            {item.endpoint_linker}
                          </h3>
                          <span className="text-xs text-gray-400">Dynamic ID</span>
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
                        onClick={() => handleDSubmit(item.endpoint_linker)}
                        className="w-full bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 text-red-300 border border-red-500/40 hover:border-red-400"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Endpoint
                      </Button>

                      {/* Edit Accordion */}
                      <Accordion type="single" collapsible>
                        <AccordionItem value={`item-${index}`} className="border-0">
                          <AccordionTrigger className="hover:no-underline bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-500/40 rounded-xl px-4 py-2 text-purple-300">
                            <div className="flex items-center gap-2">
                              <Edit3 className="h-4 w-4" />
                              <span className="text-sm font-semibold">Edit Endpoint</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4 px-1">
                            <div className="space-y-4">
                              {/* Update Endpoint URL */}
                              <div className="space-y-3">
                                <div>
                                  <FieldLabel className="text-gray-300 text-xs mb-2 block font-semibold">
                                    New Endpoint URL
                                  </FieldLabel>
                                  <Input
                                    name="new_endpoint"
                                    type="text"
                                    className="font-mono bg-gray-800/60 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                                    placeholder="https://api.example.com/endpoint"
                                    onChange={handleChange}
                                  />
                                </div>
                                <Button
                                  onClick={() => handleSubmit(item.endpoint_linker)}
                                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/20"
                                >
                                  Update Endpoint
                                </Button>
                              </div>

                              {/* Divider */}
                              <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                  <div className="w-full border-t border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                  <span className="bg-gray-900 px-2 text-gray-500">OR</span>
                                </div>
                              </div>

                              {/* Update Price */}
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
              <h3 className="text-xl font-bold text-white mb-2">No Dynamic Endpoints Yet</h3>
              <p className="text-gray-400 text-sm max-w-md">
                You havent created any dynamic endpoints yet. Create one to get started!
              </p>
            </section>
          )}
        </ScrollArea>
      </div>
    </main>
  );
}