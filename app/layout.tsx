import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WalletProviderWrapper } from "@/lib/walletadapter";
import { WalletRedirectHandler } from "@/lib/wallerredirecthandler";
import '@solana/wallet-adapter-react-ui/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VELOCITY",
  description: "VELOCITY",
  openGraph: {
    title: "VELOCITY",
    description: "The official VELOCITY project page.",
    url: "xvelocity.dev",
    
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        

          
          
                {children}
          
          
      </body>
    </html>
  );
}
