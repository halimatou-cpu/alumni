import './styles/globals.css'
import type {Metadata} from 'next'
import Header from "@/components/header/Header";
// import React from "react";
import {MyDynamicContextProvider} from "@/context/MyDynamicContextProvider";

export const metadata: Metadata = {
    title: 'Alumni ESGI',
    description: 'Le réseau des alumni de L\'ESGI',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <Header/>
        <MyDynamicContextProvider>{children}</MyDynamicContextProvider>
        </body>
        </html>
    );
}
