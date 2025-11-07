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
} from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NavigationMenuD from "@/lib/navcomponent";

import EndpointComponent from "@/lib/x402component";
import EndpointLinkerComponent from "@/lib/endpointscomponent";
import DynamicEndpointLinkerComponent from "@/lib/dynamicendpointscomponent";
import DynamicEndpointCreationComponent from "@/lib/createdynamicendpoints";
import OnetimeComponent from "@/lib/onetimelinks";
import Playground from "@/lib/playgroundcomponent";
import Usage from "@/lib/usage";
import Roadmap from "@/lib/roadmap";
import X402Example from "@/lib/codecomponent";
import About from "@/lib/aboutcomponent";

export default function DashboardPage() {
  const { connected, publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connected && !publicKey) {
      router.push("/");
    }
  }, [connected, router, publicKey]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300">
      {/* Navbar */}

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Tabs with Top Navigation */}
        <Tabs defaultValue="about" className="w-full">
          {/* Top-centered Tabs */}
          <div className="flex justify-center">
            <TabsList className="flex justify-center bg-slate-900/80 backdrop-blur-md border border-slate-700/40 rounded-2xl px-3 py-2 shadow-lg">
              {[
                { value: "about", label: "About", icon: Globe },
                { value: "usage", label: "Usage", icon: Globe },
                { value: "x402ify", label: "Register Endpoints", icon: List },
                { value: "endpoints", label: "Endpoints", icon: List },
                { value: "register_dynamic", label: "Dynamic Register", icon: Zap },
                { value: "dynamicendpoints", label: "Dynamic Endpoints", icon: RefreshCw },
                { value: "onetimepayable", label: "One Time Links", icon: LockOpen },
                { value: "playground", label: "Playground", icon: Play },
                { value: "client", label: "Client Integration", icon: Code },
                { value: "roadmap", label: "Roadmap", icon: Code },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2 mx-1 rounded-xl 
                  transition-all duration-300 
                  text-gray-400 hover:text-white
                  hover:bg-slate-800/60
                  data-[state=active]:bg-gradient-to-r 
                  data-[state=active]:from-indigo-600 
                  data-[state=active]:to-red-600
                  data-[state=active]:text-white
                  data-[state=active]:shadow-md 
                  data-[state=active]:shadow-indigo-600/30"
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Content Section */}
          <div className="mt-10 bg-slate-900/60 backdrop-blur-md border border-slate-800/50 rounded-2xl shadow-xl p-8">
            <TabsContent value="about">
              <About />
            </TabsContent>

            <TabsContent value="usage">
              <Usage />
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

            <TabsContent value="onetimepayable">
              <OnetimeComponent />
            </TabsContent>

            <TabsContent value="playground">
              <Playground />
            </TabsContent>

            <TabsContent value="client">
              <X402Example />
            </TabsContent>

            <TabsContent value="roadmap">
              <Roadmap />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
