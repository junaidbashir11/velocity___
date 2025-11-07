import { useState} from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Link,FileText, Globe } from 'lucide-react';

import { toast } from "sonner"
import { Toaster } from "sonner"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"


import { Spinner } from "@/components/ui/spinner"


export default function EndpointComponent() {


   const { connected, publicKey } = useWallet();
   const [loading,setLoading]=useState(false)


  
  const [formValues, setFormValues] = useState({
        endpoint: '',
        description: '',
        meta: '',
        amount: '',
    });


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
    });
  };

  




  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=> {
     e.preventDefault();
    try {
      
      setLoading(true);
      const res = await fetch("http://localhost:8001/register_endpoint", {
        method: "POST",
        mode: "cors",
        body:JSON.stringify({

          owner:publicKey?.toBase58(),
          endpoint:formValues.endpoint,
          description:formValues.description,
          meta:formValues.meta
        }),
        "headers":{
          "content-type":"application/json"
        }

      });

      if (!res.ok) throw new Error("Upload failed");

      

        
        toast.success(`your endpoint ${formValues.endpoint} is registered`)
        setLoading(false);

        setFormValues({
            endpoint: '',
            description: '',
            meta: '',
            amount: '',
        });
       

    } catch (err) {
      console.error(err);
    
    } finally {
      console.log("done")
    }
  };



  if (!connected) return <div>Redirecting...</div>;

  
  
  return (
    <main>
      
              
  <div className="w-full max-w-2xl mx-auto p-8 bg-white to-blue-50 rounded-2xl shadow-xl">
    <Toaster position="top-center" />

    {loading ==true ?(
      <Spinner/>
    ):(<section></section>)}
    
  <form onSubmit={handleSubmit}>
    <FieldGroup>
      <FieldSet>
        
        <FieldGroup className="space-y-3">
          <Field>
            <FieldLabel htmlFor="endpoint" className="text-slate-700  font-mono font-semibold text-sm uppercase tracking-wide">
              <Globe className="w-4 h-4" />
              Endpoint
            </FieldLabel>
            <Input
              id="endpoint"
              placeholder="https://api.example.com/"
              name="endpoint"
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-slate-800 placeholder-slate-400"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="description" className="text-slate-700 font-mono font-semibold text-sm uppercase tracking-wide">
              <FileText className="w-4 h-4" />
              Description
            </FieldLabel>
            <Input
              id="description"
              name="description"
              placeholder="Brief description of your endpoint"
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-slate-800 placeholder-slate-400"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="meta" className="text-slate-700 font-mono font-semibold text-sm uppercase tracking-wide">
              
              <Link className="w-4 h-4" />
              Meta
            </FieldLabel>
            <Input
              id="meta"
              name="meta"
              placeholder="Additional metadata"
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-slate-800 placeholder-slate-400"
            />
          </Field>
         
        </FieldGroup>
      </FieldSet>
      <Field className="mt-6">
        <Button 
          type="submit"
           className="w-full justify-start text-white font-mono font-bold data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-lg px-6 py-2 text-sm font-medium transition-all"
        >
          Register Endpoint
        </Button>
      </Field>
    </FieldGroup>
  </form>
</div>
          
          
      
    </main>
  );
}
