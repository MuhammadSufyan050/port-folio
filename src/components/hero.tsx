import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:px-20 max-w-screen-2xl mx-auto'>
      
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0'>
        <h1 className='text-white font-medium md:font-medium lg:font-medium mb-4'>
          Hello, Im Muhammad Sufyan
        </h1>
        <h2 className='text-customBlue text-4xl md:text-6xl lg:text-7xl font-bold'>
          Front End <br /> Developer
        </h2>
        <button className='text-white text-xl md:text-2xl font-extrabold border-customBlue border-b-4 py-2 px-4 mt-6 lg:mt-10'>
          Contact Me
        </button>
      </div>

      <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
        <Image
          src="/main.png"
          alt='Developer'
          width={400}
          height={400} 
          className='w-full h-auto max-w-xs md:max-w-sm lg:max-w-md'
        />
      </div>
    </div>
  )
}

export default Hero
