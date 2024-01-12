import { useEffect, useState } from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
// import { ContractRunner, ethers } from 'ethers';

// export default function usePrimaryWalletAddress() {
//     const { primaryWallet } = useDynamicContext();

//     return primaryWallet?.address ?? "";
// };

// export function usePrimaryWalletAddress() {
//     const { primaryWallet } = useDynamicContext();
//     const [address, setAddress] = useState<string>("");

//     useEffect(() => {
//         setAddress(primaryWallet?.address ?? "");
//     }, [primaryWallet]);

//     return address;
// }

// export async function useSigner(walletAddress: string): Promise<ContractRunner | null | undefined> {
//     // const currentUserAddress = usePrimaryWalletAddress();

//     const provider = new ethers.InfuraProvider(process.env.CONTRACT_NETWORK, process.env.INFURA_PROJECT_ID, process.env.INFURA_PROJECT_SECRET);

//     const signer = await provider.getSigner(walletAddress);

//     return signer;
// }

// export function useSigner() {
//     const [signer, setSigner] = useState<ContractRunner | null | undefined>(null);
//     const currentUserAddress = usePrimaryWalletAddress();

//     useEffect(() => {
//         async function getSigner() {
//             const provider = new ethers.InfuraProvider(process.env.CONTRACT_NETWORK, process.env.INFURA_PROJECT_ID, process.env.INFURA_PROJECT_SECRET);
//             const signer = await provider.getSigner(currentUserAddress);
//             setSigner(signer);
//         }

//         getSigner();
//     }, [currentUserAddress]);

//     return signer;
// }