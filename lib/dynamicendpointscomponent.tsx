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
import { Network, NotebookPen, XCircle, CheckCircle } from "lucide-react";
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

  const { connected, publicKey } = useWallet();
  const [endpoints, setEndpoints] = useState<EndInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [ploading, setPLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  

  const [formValues, setFormValues] = useState({
    endpoint_linker: "",
    new_endpoint: "",
    new_price: "",
  });

  const isGateEnabled = process.env.NEXT_PUBLIC_CLOSEOFF === "TRUE";
  const [token, hasToken] = useState(false);

  useEffect(() => {
    if (!isGateEnabled) return;
    async function checkToken() {
      const tokenstatus = await TokenGATING(publicKey?.toBase58());
      if (tokenstatus === true) hasToken(true);
    }
    checkToken();
  }, [publicKey, connected]);



  async function checkendpoints(wallet:string|null) {
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
      localStorage.setItem("dynamicendpoints",JSON.stringify(response.dynamicendpoints));
      setEndpoints(response.dynamicendpoints);

    }
    else {
      setEndpoints([]);
    }

  }




  useEffect(() => {

      const cachedWallet = localStorage.getItem("loaded_wallet");
      if(cachedWallet){
        checkendpoints(cachedWallet)
      }
      const endpoints=localStorage.getItem("dynamicendpoints")

      if (endpoints){
        const parsed_endpoints=JSON.parse(endpoints)
        setEndpoints(parsed_endpoints)
      }
    


  }, [connected, publicKey]);





  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handlePChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, tag: string) => {
    e.preventDefault();
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/update_dynamic_endpoint",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: publicKey?.toBase58(),
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
      const cachedWallet=localStorage.getItem("loaded_wallet")
      await checkendpoints(cachedWallet);
    }
  };

  const handleDSubmit = async (e: React.FormEvent<HTMLFormElement>, tag: string) => {
    e.preventDefault();
    setLoading(true);
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/delete_dynamic_endpoint",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: publicKey?.toBase58(),
          endpoint_linker: tag,
        }),
        headers: { "content-type": "application/json" },
      }
    );
    const response = await request.json();
    if (response.status === true) {
      setLoading(false);
      setEndpoints([]);
      const cachedWallet=localStorage.getItem("loaded_wallet")
      await checkendpoints(cachedWallet);
    }
  };

  const handlePriceUpdate = async (e: React.FormEvent<HTMLFormElement>, tag: string) => {
    e.preventDefault();
    setPLoading(true);
    const request = await fetch(
      "https://itsvelocity-velocity.hf.space/update_dynamic_endpoint_price",
      {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: publicKey?.toBase58(),
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
      const cachedWallet=localStorage.getItem("loaded_wallet")
      await checkendpoints(cachedWallet);
    }
  };

  





  if (isGateEnabled && !token) return <NoAccessCard />;

  return (
    <main className="flex justify-center items-start min-h-[85vh] py-10 px-6 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-800">
      <div className="w-full max-w-6xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 shadow-xl transition-all duration-300">
        <Toaster position="top-center" richColors />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">
            Your Dynamic Endpoints
          </h1>
          <div className="flex gap-2">
            {loading && (
              <Badge variant="outline" className="text-fuchsia-300 border-fuchsia-500/40 bg-fuchsia-500/10">
                Deleting Endpoint...
              </Badge>
            )}
            {ploading && (
              <Badge variant="outline" className="text-amber-300 border-amber-500/40 bg-amber-500/10">
                Updating Price...
              </Badge>
            )}
          </div>
        </div>

        <ScrollArea className="max-h-[65vh] pr-3">
          {endpoints.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endpoints.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 border border-slate-700/40 rounded-2xl shadow-sm hover:shadow-md hover:bg-slate-800/60 transition-all duration-300 p-5 flex flex-col justify-between"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-700/50 border border-slate-600/40">
                        <Network className="h-5 w-5 text-teal-400" />
                      </div>
                      <span className="text-sm font-semibold text-slate-200 truncate max-w-[150px]">
                        {item.endpoint_linker}
                      </span>
                    </div>
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                  </div>

                  {/* Endpoint Info */}
                  <div className="space-y-3">
                    <code className="block text-sm font-mono text-slate-200 bg-slate-700/30 px-3 py-2 rounded-md border border-slate-600/30 break-words">
                      {item.endpoint}
                    </code>
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className="bg-slate-700/40 border-slate-600/40 text-slate-300 font-medium px-2 py-1 text-xs"
                      >
                        Price
                      </Badge>
                      <span className="text-teal-300 text-sm font-mono">{item.price}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col mt-4 gap-2">
                    {/* Delete Button */}
                    <form onSubmit={(e) => handleDSubmit(e, item.endpoint_linker)}>
                      <Button
                        type="submit"
                        variant="ghost"
                        className="text-sm bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 w-full"
                      >
                        Delete Endpoint
                      </Button>
                    </form>

                    {/* Accordion Edit */}
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="text-orange-400 text-sm hover:no-underline">
                          <div className="flex items-center gap-2">
                            <NotebookPen className="h-4 w-4" />
                            <span>Edit</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-3 space-y-4">
                          {/* Update Endpoint */}
                          <form
                            onSubmit={(e) => handleSubmit(e, item.endpoint_linker)}
                            className="space-y-3"
                          >
                            <div>
                              <FieldLabel className="text-gray-300 text-xs mb-1 block">
                                New Endpoint
                              </FieldLabel>
                              <Input
                                name="new_endpoint"
                                type="text"
                                className="font-mono bg-slate-800/40 border-slate-700/40 text-white placeholder-gray-400"
                                placeholder="Enter new endpoint"
                                onChange={handleChange}
                              />
                            </div>
                            <Button className="font-mono bg-teal-500/80 hover:bg-teal-600 text-white w-full">
                              Update Endpoint
                            </Button>
                          </form>

                          {/* Update Price */}
                          <form
                            onSubmit={(e) => handlePriceUpdate(e, item.endpoint_linker)}
                            className="space-y-3"
                          >
                            <div>
                              <FieldLabel className="text-gray-300 text-xs mb-1 block">
                                New Price
                              </FieldLabel>
                              <Input
                                name="new_price"
                                type="text"
                                className="font-mono bg-slate-800/40 border-slate-700/40 text-white placeholder-gray-400"
                                placeholder="Enter new price"
                                onChange={handlePChange}
                              />
                            </div>
                            <Button className="font-mono bg-amber-500/80 hover:bg-amber-600 text-white w-full">
                              Update Price
                            </Button>
                          </form>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <section className="flex flex-col items-center justify-center py-16 text-center">
              <XCircle className="h-8 w-8 text-slate-500 mb-3" />
              <p className="text-gray-400 text-sm">
                No dynamic endpoints found for this wallet yet.
              </p>
            </section>
          )}
        </ScrollArea>
      </div>
    </main>
  );
}
