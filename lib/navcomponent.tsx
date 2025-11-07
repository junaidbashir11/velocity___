"use client"
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
const WalletButton = dynamic(
  () => import('@/lib/solanawalletbutton').then(mod => mod.SolanaWalletButton),
  { 
    ssr: false,
    loading: () => <div className="p-2 text-sm">Loading wallet...</div>,
  }
);



export default function NavigationMenuD() {
  

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-2xl border-b border-white/10">
       
      </nav>

    
  )
}

