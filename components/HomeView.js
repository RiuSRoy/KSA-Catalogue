import React from 'react'

const HomeView = () => {
  return (
    <div className="m-auto py-24 lg:py-24 xl:py-32 h-fit w-fit text-center md:text-left text-black">
        <h4 className="font-bold text-4xl sm:text-4xl lg:text-5xl xl:text-5xl py-5 italic">Travel the world with</h4>
        <h1 className="font-extrabold text-6xl lg:text-7xl xl:text-9xl py-5">American <span className="xl:text-white shadow-black">Tourister</span></h1>
        <h4 className="font-black text-3xl py-5 text-white">TAKE IT OR TAKE IT</h4>
        <button className="btn">
            Browse Catalogue
        </button>
    </div>
  )
}

export default HomeView