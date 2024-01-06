"use client";
import StudentProfile from "@/components/profile/StudentProfile";
import {EthereumWalletConnectors} from "@dynamic-labs/ethereum";
import {DynamicContextProvider} from "@dynamic-labs/sdk-react-core";

export default function StudentDashboard() {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: "f5ced4ee-d3dc-43a5-b1b9-df14aef07ffd",
                initialAuthenticationMode: "connect-and-sign",
                walletConnectors: [EthereumWalletConnectors],
            }}
        >
            <div className="p-4 w-3/4 mx-auto">
                <h2>Profile</h2>
                <StudentProfile/>
            </div>
        </DynamicContextProvider>
    );
};