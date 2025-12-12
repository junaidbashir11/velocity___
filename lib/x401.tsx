"use client";
import { motion } from "framer-motion";






export default function X401() {



  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05070d] via-[#0a0f1c] to-[#05070d] flex flex-col items-center justify-center px-4 py-12 font-sans text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          x401
        </h1>
       
         <div className="rounded-lg p-3 font-mono text-md text-white mb-6">
            <p>Wallet Based</p> <br/>
            <p>No backend sdk or integration</p> <br/>
            <p>Device Credentials baked in  such as Fingerprint,pin,password</p><br/>
            <p>Geographic Restriction</p><br/>
            <p>Token Gating </p><br/>  
            <p>ZkProof powered anonymous logins </p><br />          
          </div>
        
        <div className="mt-12 bg-[#0f172a]/60 border border-[#1e293b] backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-10 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Velocity Tuned x401
          </h2>
         

         

          <p className="text-gray-400 leading-relaxed">
             Velocity <br />

            <span className="font-mono bg-[#111827] border border-[#1e293b] rounded px-2 py-1 text-green-400">
              x401 Auth
            </span>
            <br />
           The standard for private, seamless wallet authentication. 
          </p>
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 bg-[#0a1120]/70 border border-[#1e293b] rounded-xl shadow-xl p-5 md:p-7 text-left"
        >
          
          <pre className="overflow-x-auto text-xs md:text-sm text-gray-300 font-mono">
{`
npm i velocitytunedx401
`}
          </pre>
        </motion.div>

        <p className="mt-6 text-gray-500 text-sm">
          💡 Enhanced auth with device credentials(fingerprint,face,id) and ZkProofs 
        </p>
      </motion.div>
    </div>
  );
}
