//"use client";
import {DynamicWidget, useDynamicContext, WalletConnector} from "@dynamic-labs/sdk-react-core";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Auth() {
    const router = useRouter();
    const {primaryWallet} = useDynamicContext();
    const [primaryWalletAddress, setPrimaryWalletAddress] = useState<string>("");
    const [connector, setConnector] = useState<WalletConnector>();
    const [signer, setSigner] = useState<any>();

    useEffect(() => {
        const getSigner = async () => {
            if (connector) {
                const signer = await connector.getSigner();
                setSigner(signer);
            }
        };
        if (primaryWallet) {
            // console.log("primaryWallet", primaryWallet);
            // console.log("primaryWallet.address", primaryWallet.address);
            // console.log("primaryWallet.connector", primaryWallet.connector);
            // console.log("primaryWallet.connector.getSigner()", primaryWallet.connector.getSigner());
            setPrimaryWalletAddress(primaryWallet.address);
            setConnector(primaryWallet.connector);
            getSigner();
            // router.push("/dashboard");
        }
    }, [primaryWallet, connector, router]);

    const onButtonClick = () => {
        router.push("/dashboard");
    };

    return (
        <div className="
        flex
		flex-col
		items-center
		justify-between
		p-24">
            <DynamicWidget/>
            {/*<button onClick={onButtonClick}>Sign Message</button>*/}
        </div>
    );
}