import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="p-4 text-white text-center">
        <ul className="space-y-8 sm:flex justify-center sm:space-x-12 sm:space-y-0">
            <li className="cursor-pointer font-semibold text-5xl animate hover:text-black"><Link href="/">KSA</Link></li>
            <li className="cursor-pointer text-3xl animate hover:text-black"><Link href="/contact">Contact</Link></li>
            <li className="cursor-pointer text-3xl animate hover:text-black"><Link href="/catalogue">Catalogue</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar