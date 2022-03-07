import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="p-4 text-white text-center">
        <ul className="space-y-8 sm:flex sm:justify-center sm:space-x-12 sm:space-y-0">
            <li className="cursor-pointer font-semibold text-5xl hover:text-black active:text-black"><Link href="/">KSA</Link></li>
            <li className="cursor-pointer text-3xl hover:text-black hover:underline active:text-black"><Link href="/contact">Contact</Link></li>
            <li className="cursor-pointer text-3xl hover:text-black hover:underline active:text-black decoration-pink-500"><Link href="/catalogue">Catalogue</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar