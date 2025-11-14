import { motion } from "framer-motion";

export default function Usage() {
  const codestring=`
import FetchVelocity from "velocitysdk";
import { createX402Client } from "x402-solana";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Velocity(){

    const { publicKey, signTransaction, connected } = useWallet();
    const wallet = {
        publicKey,
        signTransaction,
        address: publicKey.toBase58(),
    }
    const client = createX402Client({
      wallet,
      network: 'network here', || solana
      maxPaymentAmount: BigInt(1_000_000) , same as your registered price
    });

      let fetchvelocityconfig_post={
            x402client:client,
            dev_address:"address of the wallet that registered the endpoint",
            tag:"endpoint tag",
            method:"POST", //here post endpoint is used 
            body:{"key1":"value1"}
        }

    const result = await FetchVelocity(fetchvelocityconfig_post);
    const response=await result.json();
    console.log(response);
    let fetchvelocityconfig_get={

            x402client:client,
            dev_address:"address of the wallet that registered the endpoint",
            tag:"endpoint tag",
            method:"GET", //here get endpoint is used 
            body:{} //empty body

        }
    const result = await FetchVelocity(fetchvelocityconfig_get);
    const response=await result.json();
    console.log(response);
  
  `
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div>

       <div className="">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 bg-[#0a1120]/70 border border-[#1e293b] rounded-xl shadow-xl p-5 md:p-7 text-left"
        >

        <p className="text-purple-400 mb-3 font-mono">Example: Using your registered endpoint with Velocity SDK (npm i velocitysdk@1.0.0)</p>
          <pre className="overflow-x-auto text-xs md:text-sm text-gray-300 font-mono">

           {`${codestring}`}

          </pre>


        </motion.div>
       


       </div>
         

    
      </div>

    
  );
}
