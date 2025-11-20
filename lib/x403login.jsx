import { useState, useEffect } from 'react';
import { OpenKit403Client, detectWallets } from '@openkitx403/client';
import { useRouter } from 'next/navigation';
import {Ghost} from "lucide-react"
import Image from 'next/image';

function CApp() {
    const [client] = useState(() => new OpenKit403Client());
    const [wallets, setWallets] = useState([]);
    const [address, setAddress] = useState(null);
    const router = useRouter();

    useEffect(() => {
    detectWallets().then(setWallets);
    }, []);


    const authenticate = async (wallet) => {


        await client.connect(wallet);
        {console.log(wallet.wallet)}
        const response = await client.authenticate({
            resource: 'https://itsvelocity-velocity.hf.space/accountlogin'
        });


        if (response.ok) {
            const data = await response.json();
            setAddress(client.getAddress());
            localStorage.setItem("loadedwallet",client.getAddress())
            alert('✅ Authenticated successfully!');
            router.push('/dashboard');

        } else {
            alert('❌ Failed: ' + response.status);
        }
    };

    return (
        <div>
            {address ? (
                <p>✅ Connected as: {address}</p>
                ) : (
                wallets.map(wallet => (
                
                <button key={wallet} onClick={() => authenticate(wallet)}
                 className="text-bg text-mono text-white hover:bg-rose-500/20 w-full"
                
                >
                   {wallet=="phantom"?<section><Ghost/></section>:
                   <section className='text-mono'>{wallet}
                   </section>}
                </button>
                ))
            )}
        </div>
    );
}

export default CApp;