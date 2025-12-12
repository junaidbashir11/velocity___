"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Globe,
  List,
  Zap,
  RefreshCw,
  Play,
  Code,
  LockOpen,
  Lock,
  Home,
  Martini,
  Icon
} from "lucide-react";

import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import EndpointComponent from "@/lib/x402component";
import EndpointLinkerComponent from "@/lib/endpointscomponent";
import DynamicEndpointLinkerComponent from "@/lib/dynamicendpointscomponent";
import DynamicEndpointCreationComponent from "@/lib/createdynamicendpoints";
import OnetimeComponent from "@/lib/onetimelinks";
import Playground from "@/lib/playgroundcomponent";
import SDKLogs from "@/lib/sdklogs";
import Usage from "@/lib/usage";
import Roadmap from "@/lib/roadmap";
import X402Example from "@/lib/codecomponent";
import MCP from "@/lib/mcpcomponent";
import Marketplace from "@/lib/marketplace";
import HomeComponent from "@/lib/homecomponent";
import AuditComponent from "@/lib/audit";
import Link from "next/link";
import { Label } from "@radix-ui/react-label";
import MaintenancePage from "@/lib/underm";
import X401 from "@/lib/x401";

export default function DashboardPage() {
  const router = useRouter();
  const [off, setOff] = useState("");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    const wallet = localStorage.getItem("loadedwallet");
    if (wallet) {
      setWallet(wallet);
    }
    if (!wallet && process.env.NEXT_PUBLIC_BACKDOOR_ACCESS == "YES") {
      return;
    } else if (!wallet) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    const offflag = process.env.NEXT_PUBLIC_OFF;
    if (offflag == "TRUE") {
      setOff("TRUE");
    } else {
      setOff("FALSE");
    }
  }, []);

  if (off == "TRUE") {
    return <MaintenancePage />;
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-90"></div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #06b6d4, #8b5cf6);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #0891b2, #7c3aed);
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                VELOCITY INFRA
              </h1>
            </div>
            <Link 
              href="/" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            >
              Home
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-8 py-12">
          <Tabs defaultValue="home" className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8 overflow-x-auto pb-2 custom-scrollbar">
              <TabsList className="inline-flex justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl gap-1">
                {[
                  { value: "home", label: "Home", icon: Home },
                  {value:"sdklogs",label:"Sdk Logs",icon:Code},
                  { value: "mcp", label: "MCP", icon: Globe },
                  {value:"auth",label:"X401",icon:Lock},
                  { value: "x402ify", label: "Register Endpoints", icon: List },
                  { value: "endpoints", label: "Endpoints", icon: List },
                  { value: "register_dynamic", label: "Dynamic Register", icon: Zap },
                  { value: "dynamicendpoints", label: "Dynamic Endpoints", icon: RefreshCw },
                  { value: "paymenthistory", label: "Payments", icon: LockOpen },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2.5 rounded-xl 
                    transition-all duration-300 whitespace-nowrap
                    text-white/70 hover:text-white
                    hover:bg-white/20
                    data-[state=active]:bg-white
                    data-[state=active]:text-purple-600
                    data-[state=active]:shadow-lg 
                    data-[state=active]:shadow-white/50
                    data-[state=active]:scale-105"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="bg-white/95 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8 min-h-[600px]">
              <TabsContent value="home">
                <HomeComponent />
              </TabsContent>

               <TabsContent value="sdklogs">
                <SDKLogs/>
              </TabsContent>

              <TabsContent value="mcp">
                <MCP />
              </TabsContent>

             <TabsContent value="auth">

              <X401/>

             </TabsContent>
              
              <TabsContent value="x402ify">
                <EndpointComponent />
              </TabsContent>

              <TabsContent value="endpoints">
                <EndpointLinkerComponent />
              </TabsContent>

              <TabsContent value="register_dynamic">
                <DynamicEndpointCreationComponent />
              </TabsContent>

              <TabsContent value="dynamicendpoints">
                <DynamicEndpointLinkerComponent />
              </TabsContent>

              <TabsContent value="paymenthistory">
                <AuditComponent />
              </TabsContent>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  );
}