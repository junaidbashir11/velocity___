import { useState, useEffect } from 'react';
import { OpenKit403Client, detectWallets } from '@openkitx403/client';
import { useRouter } from 'next/navigation';
// Importing icons for Phantom and Solflare for better visual representation
import { Ghost, CircleDollarSign, X } from "lucide-react"; 
import Image from 'next/image';
import bs58 from "bs58";

function CApp() {
    // 1. Initialize client and state variables
    const [client] = useState(() => new OpenKit403Client());
    const [wallets, setWallets] = useState([]);
    const [address, setAddress] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
    const router = useRouter();

    // 2. Detect wallets on component mount
    useEffect(() => {
        // Filter and map wallets to ensure we only get the relevant wallet objects 
        detectWallets().then(setWallets);
    }, []);

        const url ="https://itsvelocity-velocity.hf.space/custom_account_login"
        const path=new URL("https://itsvelocity-velocity.hf.space/custom_account_login").pathname;

        async function getNonce() {

                const res = await fetch(url,{
                    mode:"cors",
                    method:"get",
                    cache:"no-cache",

                    headers:{
                        "content-type":"application/json"  // ✅ Fixed: was "application.json"
                    }
                });
      
                const data = await res.json();  // ✅ Uncommented this
  
                const nonce = res.headers.get("X-401-Nonce") || "";
                const mechanism = res.headers.get("X-401-Mechanism");
      
                console.log("Nonce:", nonce, "Mechanism:", mechanism);
                console.log("Initial response:", data);
  
                return nonce;


            }
    
        function buildSigningPayload(nonce) {

            //const requestUrl = url; // exact request URL
                const secretDomain = "JUNAID"; // must match server
                return `CHALLENGE::${nonce}::${path}::${secretDomain}`;

        }


        async function signPayload(payload,wallet) {

            if (wallet=="phantom"){

                await window.phantom.solana.connect()

                const encoded = new TextEncoder().encode(payload);

                const signed = await (window).phantom.solana.signMessage(encoded, "utf8");

                return {
                    signature: signed.signature,  // Uint8Array
                    publicKey: signed.publicKey.toString()  // Base58
            };
            
            }
           else if (wallet=="solflare"){


                await window.solflare.solana.connect()

                const encoded = new TextEncoder().encode(payload);

                const signed = await (window).solflare.solana.signMessage(encoded, "utf8");

                return {
                    signature: signed.signature,  // Uint8Array
                    publicKey: signed.publicKey.toString()  // Base58
            };
            
            }



           } 


    async function authenticate2(wallet) {

        console.log("Starting authentication...");
      
        const nonce = await getNonce();
        console.log("Got nonce:", nonce);
        if (!nonce) {
            console.error("Failed to get nonce!");
            return;
        }

        console.log("Building payload...");
        const payload = buildSigningPayload(nonce);

        console.log("Requesting signature from wallet...");
        const { signature, publicKey } = await signPayload(payload,wallet);


        const signatureBase58 = bs58.encode(signature);
        console.log("Signature:", signatureBase58);
        console.log("Public Key:", publicKey);

        console.log("Sending authenticated request...");
        const res = await fetch(url, {
            mode:"cors",
            method:"get",
            cache:"no-store",

        
            headers: {
                "X-401-Nonce": nonce,
                "X-401-Signature": signatureBase58,
                "X-401-Addr": publicKey
        }
        });

        const data = await res.json();
        if(res.status==500){
            alert("Auth Failed , You need 100000 tokens to access the platform")
        }
        else {

        console.log("Server response", data);

        router.push('/dashboard');
        localStorage.setItem("loadedwallet", data.address)
        alert('✅ Authenticated successfully!');


    }

}
    





    



    // 3. Authentication logic
    const authenticate = async (wallet) => {
        setShowPopup(false); // Close popup upon selection

        try {
            await client.connect(wallet);
            console.log(wallet.wallet);

            const response = await client.authenticate({
                // Ensure this resource URL is correct for your x402 setup
                resource: 'https://itsvelocity-velocity.hf.space/accountlogin'
            });

            if (response.ok) {
                await response.json(); 
                const connectedAddress = client.getAddress();
                setAddress(connectedAddress);

                router.push('/dashboard');
                localStorage.setItem("loadedwallet", connectedAddress);
                alert('✅ Authenticated successfully!');
                //router.push('/dashboard');
            } else {
                alert('❌ Authentication Failed');
            }
        } catch (error) {
            console.error("Authentication error:", error);
            alert('❌ An error occurred during connection/authentication.');
        }
    };

    // Helper to render the correct icon
    const getWalletIcon = (walletName) => {
    const icons = {
        metamask: "",
        phantom: "/plogo.png",
        solflare:"/solflare.svg"
      
    };

    // Return the specific icon or a default placeholder
    return icons[walletName] || "https://via.placeholder.com/40?text=W";
};

    return (
        <div className="items-center justify-center p-20"
             // Applying a deep, dark gradient background for the Velocity look
             style={{ 
                 background: '',
                 minHeight: '90vh',
             }}>

            {/* --- CONNECT BUTTON OR STATUS DISPLAY --- */}
            {address ? (
                <div className="p-2 rounded-xl shadow-2xl text-white backdrop-blur-sm border border-green-500/50">
                    <p className="text-sm font-semibold text-green-300">Wallet Connected</p>
                    <p className="text-md font-mono break-all mt-1">{address}</p>
                </div>
            ) : (
                <button
                    onClick={() => setShowPopup(true)}
                    className="
                        px-10 py-3
                        text-lg font-bold 
                        uppercase tracking-widest 
                        rounded-lg 
                        transition duration-300 ease-in-out
                        // Transparent/Frosted Glass Effect
                        bg-white/10 backdrop-blur-md 
                        border border-purple-500/50
                        // Velocity Theme Colors
                        text-white 
                        shadow-[0_0_15px_rgba(168,85,247,0.7)] 
                        hover:bg-white/20 hover:border-fuchsia-500/70
                        transform hover:scale-[1.02]
                    "
                >
                    Connect Wallet
                </button>
            )}

            {/* --- WALLET SELECTION MODAL/POPUP --- */}
            {showPopup && (
                // Modal Overlay: Full screen, semi-transparent black
                <div 
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-2 backdrop-blur-sm"
                    onClick={() => setShowPopup(false)} // Close when clicking outside
                >
                    {/* Modal Content: Sleek dark box with vibrant border */}
                    <div 
                        className="bg-gray-900/95 p-6 rounded-xl shadow-[0_0_40px_rgba(124,58,237,0.9)] w-full max-w-sm border border-purple-700/70"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-bold text-white tracking-wide">
                                Connect Wallet 
                            </h2>
                            <button 
                                onClick={() => setShowPopup(false)}
                                className="text-gray-400 hover:text-white transition duration-200 p-1"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Map over detected wallets */}
                        <div className="space-y-3">
                           {wallets.map(wallet => (
    <button
        key={wallet.address}
        onClick={() => authenticate2(wallet)}
        className="
            flex items-center justify-start gap-3
            w-full p-3
            rounded-lg 
            transition duration-200 
            bg-gray-800/80 
            border border-transparent
            hover:bg-purple-600/30 
            hover:border-fuchsia-500 
            shadow-md
            hover:scale-[1.02]
        "
    >
        {/* Wallet Icon/Image */}
        <img 
            src={getWalletIcon(wallet)} 
            alt={`${wallet.wallet} icon`}
            className="w-8 h-8 rounded-md"
        />
        
        {/* Wallet Name */}
        <span className="text-lg font-semibold text-white font-mono">
            {wallet=="phantom"?("PHANTOM"):("SOLFLARE")}
        </span>
    </button>
))}
                        </div>

                        {wallets.length === 0 && (
                            <p className="text-center text-gray-400 pt-4">No wallets detected. Please install a Solana wallet extension (e.g., Phantom or Solflare).</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CApp;