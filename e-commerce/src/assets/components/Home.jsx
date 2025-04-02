import React from 'react'
import Card from './Card'
import Navbar from './navbar'
import Banner from './banner'
function Home() {
  return (
    <div className='bg-[url("/src/assets/images/main.webp")] bg-cover bg-center h-screen'>

      <Banner/>
      <div className='flex flex-row-reverse bg-emerald-200 font-bold text-2xl '>
    <Navbar />
    </div>

    <h1 className='text-8xl flex items-center h-screen justify-center text-blue-200'>welcome to coursera</h1>
</div>
  )
}

export default Home