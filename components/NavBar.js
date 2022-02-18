import React from 'react'

const NavBar = () => {
  return (
    <nav className="p-4 text-white text-center">
        <ul class="space-y-8 sm:flex sm:justify-center sm:space-x-12 sm:space-y-0">
            <li class="cursor-pointer font-semibold text-5xl hover:text-black"><a href="/">KSA</a></li>
            <li class="cursor-pointer text-3xl hover:text-black"><a href="/about.html">About</a></li>
            <li class="cursor-pointer text-3xl hover:text-black">Contact</li>
        </ul>
    </nav>
  )
}

export default NavBar