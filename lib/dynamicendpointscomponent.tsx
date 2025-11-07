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
import { Network, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EndInfo {
  owner: string;
  endpoint: string;
  endpoint_linker: string;
}

import TokenGATING  from "./tokengatingv2";
import NoAccessCard from "./noaccess";


export default function DynamicEndpointLinkerComponent() {


  const { connected, publicKey } = useWallet();
  const [endpoints, setEndpoints] = useState<EndInfo[]>([]);
  const [loading,setLoading]=useState(false);
  const [formValues, setFormValues] = useState({
    endpoint_linker: "",
    new_endpoint: "",
  });
  const isGateEnabled=process.env.NEXT_PUBLIC_CLOSEOFF==="TRUE";
  const [token,hasToken]=useState(false);

   useEffect(()=>{
      if(!isGateEnabled) return ;
      async function checkToken(){
      let tokenstatus=await TokenGATING(publicKey?.toBase58());
      if (tokenstatus==true){
        hasToken(true)
      }
    }
    checkToken()
  
    },[publicKey,connected])
  




  async function checkendpoints() {
    const request = await fetch("http://localhost:8001/checkdynamicendpoints", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({ owner: publicKey?.toBase58() }),
      headers: { "content-type": "application/json" },
    });
    const response = await request.json();
    if (response.status === true) {
      setEndpoints(response.dynamicendpoints);
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    checkendpoints();
  }, [connected, publicKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, tag: string) => {
    e.preventDefault();
    const request = await fetch("http://localhost:8001/update_dynamic_endpoint", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({
        owner: publicKey?.toBase58(),
        tag,
        newendpoint: formValues.new_endpoint,
      }),
      headers: { "content-type": "application/json" },
    });
    const response = await request.json();
    if (response.status === true) {
      toast.success(`Your endpoint has been updated`);
      setEndpoints([]);
      await checkendpoints();
    }
  };





    const handleDSubmit = async (e: React.FormEvent<HTMLFormElement>, tag: string) => {

    e.preventDefault();
    setLoading(true);
    const request = await fetch("http://localhost:8001/delete_dynamic_endpoint", {
      mode: "cors",
      method: "post",
      body: JSON.stringify({
        "owner": publicKey?.toBase58(),
        "endpoint_linker":tag
      }),
      headers: { "content-type": "application/json" },
    });
    const response = await request.json();
    if (response.status === true) {
      setLoading(false);
      setEndpoints([]);
      await checkendpoints();
    }
  };





 if (isGateEnabled && !token){
     return (
       <NoAccessCard/>
     )
   }
 



  return (
    <main className="flex justify-center items-start min-h-[80vh] py-10 px-6 bg-transparent">
      <div className="w-full max-w-3xl bg-slate-900/70 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-300">
        <Toaster position="top-center" richColors />

    {loading==true?(<Badge variant="outline" className="font-sans text-white">Deleting</Badge>):(<section></section>)}

        {endpoints.length !== 0 ? (
          <section className="divide-y divide-slate-700/50">
            {endpoints.map((item, index) => (
              <div
                key={index}
                className="py-4 px-3 hover:bg-slate-800/50 transition-all rounded-xl"
              >
                <div className="flex flex-wrap items-center gap-4">
                  {/* Network Icon */}
                  <div className="flex-shrink-0 bg-slate-800/60 p-2 rounded-xl border border-slate-700">
                    <Network className="h-5 w-5 text-amber-400" />
                  </div>

                  {/* Primary Endpoint */}
                  <code className="bg-slate-800/50 text-amber-100 rounded px-3 py-1.5 font-mono text-sm font-semibold break-all">
                    {item.endpoint}
                  </code>

                  {/* Endpoint Linker */}
                  <form 
                  onSubmit={(e)=>handleDSubmit(e,item.endpoint_linker)}
                  className="space-y-3"
                  >
                  <Input
                   type="hidden"
                   value={item.endpoint_linker}
                  
                  />
                  <Button type="submit">
                   Delete
                  </Button>

                  </form>
                  <code className="bg-orange-500/10 text-orange-400 rounded px-3 py-1.5 font-mono text-sm font-semibold">
                    {item.endpoint_linker}
                  </code>

                  {/* Accordion Edit Form */}
                  <div className="ml-auto min-w-[250px]">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-0">
                        <AccordionTrigger className="text-orange-400 font-mono py-0 hover:no-underline">
                          <NotebookPen className="h-4 w-4" />
                        </AccordionTrigger>
                        <AccordionContent className="text-orange-400 pt-3">
                          <form
                            onSubmit={(e) => handleSubmit(e, item.endpoint_linker)}
                            className="space-y-3"
                          >
                            <div>
                              <FieldLabel className="text-gray-200">New Endpoint</FieldLabel>
                              <Input
                                name="new_endpoint"
                                type="text"
                                className="font-mono bg-slate-800 text-white border-slate-700 placeholder-gray-400"
                                placeholder="Enter new endpoint"
                                onChange={handleChange}
                              />
                            </div>
                            <Input
                              name="endpoint_linker"
                              type="hidden"
                              value={item.endpoint_linker}
                            />
                            <Button className="font-mono bg-orange-600 hover:bg-orange-700 text-white">
                              Update Endpoint
                            </Button>
                          </form>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="flex justify-center py-16 text-center">
            <Badge
              variant="outline"
              className="bg-slate-800/60 border-slate-700 text-gray-300 px-4 py-2"
            >
              No dynamic endpoints found
            </Badge>
          </section>
        )}
      </div>
    </main>
  );
}
