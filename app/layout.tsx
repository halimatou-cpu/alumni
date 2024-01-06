import './styles/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/components/header/Header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Alumni ESGI',
    description: 'Le réseau des alumni de L\'ESGI',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <div>
            <Header/>
        </div>
        <div>
            {children}
        </div>
        </body>
        </html>
    )
}
