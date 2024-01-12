// export const contractABI = [];

export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "";

export const tx = process.env.NEXT_PUBLIC_CONTRACT_TRANSACTION_HASH;

// console.log("environment variables : ", process.env.NEXT_PUBLIC_CONTRACT_NETWORK, process.env.NEXT_PUBLIC_INFURA_PROJECT_ID, process.env.NEXT_PUBLIC_INFURA_PROJECT_SECRET);

export const contractNetwork = process.env.NEXT_PUBLIC_CONTRACT_NETWORK ?? "";

export const infuraProjectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID ?? "";

export const infuraProjectSecret = process.env.NEXT_PUBLIC_INFURA_PROJECT_SECRET ?? "";

export const providerChainId = process.env.NEXT_PUBLIC_PROVIDER_CHAIN_ID ?? 5; // 5 is for goerli

// export const privateKey = 'PrivateKey';