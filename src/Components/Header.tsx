import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 w-full p-4 flex justify-center gap-4 bg-white/80 backdrop-blur-sm z-10">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
        </header>
    )
}