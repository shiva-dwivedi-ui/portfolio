import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Shiva Dwivedi - Experienced Frontend Developer',
    description: 'Your professional portfolio',
    manifest: '/manifest.json',
    themeColor: '#000000',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Shiva Dwivedi - Experienced Frontend Developer',
    },
    icons: {
        apple: '/icons/image.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
} 