"use client";

import {EthereumWalletConnectors} from "@dynamic-labs/ethereum";
import {DynamicContextProvider} from "@dynamic-labs/sdk-react-core";

export const MyDynamicContextProvider = ({children,}: { children: React.ReactNode; }) => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: "f5ced4ee-d3dc-43a5-b1b9-df14aef07ffd",
                initialAuthenticationMode: "connect-and-sign",
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
            {children}
        </DynamicContextProvider>
    );
};