import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useWallet } from "@solana/wallet-adapter-react";
import { Network, Link, XCircle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EndInfo {

  owner: string;
  endpoint: string;
  endpoint_linker: string;
}

export default function EndpointLinkerComponent() {
  const { connected, publicKey } = useWallet();
  const [endpoints, setEndpoints] = useState<EndInfo[]>([]);
  const [loading,setLoading]=useState(false);

   async function checkendpoints() {
      let request = await fetch("https://itsvelocity-velocity.hf.space/checkendpoints", {
        mode: "cors",
        method: "post",
        body: JSON.stringify({
          owner: publicKey?.toBase58(),
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      let response = await request.json();
      if (response.status == true) {
        setEndpoints(response.endpoints);
      } else {
        console.log("error");
      }
    }


  const handleSubmit=async (e: React.FormEvent<HTMLFormElement>, tag: string)=>{

    setLoading(true);
    e.preventDefault();
    let request=await fetch("https://itsvelocity-velocity.hf.space/delete_endpoint",{
      method:"post",
      mode:"cors",
      body:JSON.stringify({
        "owner":publicKey?.toBase58(),
        "endpoint_linker":tag

      }),
      headers:{
        "content-type":"application/json"
      }

    
    })

    let response=await request.json();
    if (response.status==true){
      setEndpoints([]);
      await checkendpoints();
      setLoading(false);
    }

  }


  useEffect(() => {
   
    checkendpoints();
  }, [connected, publicKey]);


  
  return (
    <main className="flex justify-center items-start min-h-[80vh] py-10 px-6 bg-transparent">
      <div className="w-full max-w-3xl bg-slate-900/70 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-300">
        {loading==true?(<Badge variant="outline" className="font-sans text-white">Deleting</Badge>):(<section></section>)}

        {endpoints.length !== 0 ? (
          <section className="divide-y divide-slate-700/50">
            {endpoints.map((item, index) => (
              <div
                key={item.endpoint_linker}
                className="flex flex-wrap items-center gap-4 py-4 px-2 hover:bg-slate-800/60 transition-colors rounded-xl"
              >
                {/* Network Icon */}
                <div className="flex-shrink-0 bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                  <Network className="h-5 w-5 text-amber-400" />
                </div>

                {/* Endpoint */}
                <code className="text-sm font-mono text-amber-100 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700">
                  {item.endpoint}
                </code>

                {/* Linker Info */}
                <div className="flex items-center gap-2 ml-auto">
                  
                      <Badge
                        variant="outline"
                        className="bg-emerald-500/10 border-emerald-500/40 text-emerald-300 text-xs font-semibold px-3 py-1.5"
                      >
                        {item.endpoint_linker}
                      </Badge>
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                       <form
                            onSubmit={(e) => handleSubmit(e, item.endpoint_linker)}
                            className="space-y-3"
                          >
                        <Input
                      type="hidden"
                      value={item.endpoint_linker}
                      />
                        <Button type="submit">Delete</Button>
                          </form>
                   
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="flex flex-col items-center justify-center py-16 text-center">
            <XCircle className="h-8 w-8 text-slate-500 mb-3" />
            <p className="text-gray-400 text-sm mb-4">
              No endpoints found for this wallet yet.
            </p>
          
          </section>
        )}

        
      </div>
    </main>
  );
}
