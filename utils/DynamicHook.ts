import {useEffect, useState} from 'react';
import {useDynamicContext} from "@dynamic-labs/sdk-react-core";

export default function usePrimaryWalletAddress() {
    const {primaryWallet} = useDynamicContext();

    const [primaryWalletAddress, setPrimaryWalletAddress] = useState<string>();

    useEffect(() => {
        if (primaryWallet) {
            setPrimaryWalletAddress(primaryWallet.address);
        }
    }, [primaryWallet]);

    return primaryWalletAddress;
};
