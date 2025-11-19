import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Link,FileText, Globe ,DollarSign} from 'lucide-react';
import { useEffect, useState } from "react";
import { toast } from "sonner"
import { Toaster } from "sonner"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"


import TokenGATING from "./tokengatingv2";
import NoAccessCard from "./accessdenied";


export default function DynamicEndpointCreationComponent() {


  const { connected, publicKey } = useWallet();
  const [loading,setLoading]=useState(false);
  const [token,hasToken]=useState(false);
  const isGateEnabled=process.env.NEXT_PUBLIC_CLOSEOFF==="TRUE";
  const [isChecking, setIsChecking] = useState(false)
  
  const [formValues, setFormValues] = useState({
        endpoint: '',
        description: '',
        meta: '',
        tag: '',
        price:''
    });



     useEffect(()=>{
     
             if(!isGateEnabled) return ;
             if(token) return ;
              console.log("running")
              //setIsChecking(true); 
             async function checkToken(){
             const tokenstatus=await TokenGATING(publicKey?.toBase58());
             if (tokenstatus==true){
               hasToken(true)
               //setIsChecking(false)
             }
           }
           checkToken()
           
         
           },[publicKey,connected])
  

 


  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
    });
  };

  
 



  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=> {
     e.preventDefault();
     setLoading(true);
    try {
      

      const res = await fetch("https://itsvelocity-velocity.hf.space/register_dynamic_endpoint", {
        method: "POST",
        mode: "cors",
        body:JSON.stringify({

          "owner":publicKey?.toBase58(),
          "endpoint":formValues.endpoint,
          "description":formValues.description,
          "meta":formValues.meta,
          "tag":formValues.tag,
          "price":formValues.price
        }),
        "headers":{
          "content-type":"application/json"
        }

      });

      if (!res.ok) throw new Error("Upload failed");

      const response=await res.json()
      if (response.message=="endpoint already present"){
          toast.success(`the endpoint ${formValues.endpoint} is already registered`)
          setLoading(false);
      }
      else {

      
        toast.success(`your dynamic  endpoint ${formValues.endpoint} is registered`)
        setLoading(false);
        setFormValues({
            endpoint: '',
            description: '',
            meta: '',
            tag: '',
            price:''
        });
       
      }
    } catch (err) {
      console.error(err);
    
    } finally {
      console.log("done")
    }
  };



  //if (!connected) return <div>Redirecting...</div>;

  if (isGateEnabled  && !token) {
   return <NoAccessCard />;
 }
 



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
              Tag
            </FieldLabel>
            <Input
              id="tag"
              name="tag"
              placeholder="Association tag"
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
              placeholder="metadata like is it get/post if post then its body schema"
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 text-slate-800 placeholder-slate-400"
            />
          </Field>


            <Field>
            <FieldLabel htmlFor="meta" className="text-slate-700 font-mono font-semibold text-sm uppercase tracking-wide">
              
              <DollarSign className="w-4 h-4" />
              Price
            </FieldLabel>
            <Input
              id="price"
              name="price"
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
           className="w-full justify-start text-white font-sans font-bold data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-lg px-6 py-2 text-sm font-medium transition-all"
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
