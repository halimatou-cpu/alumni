"use client";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Auth from "@/public/components/Auth";

export default function Home() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "f5ced4ee-d3dc-43a5-b1b9-df14aef07ffd",
        initialAuthenticationMode: "connect-and-sign",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <Auth />
    </DynamicContextProvider>
  );
}
