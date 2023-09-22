import React from 'react'
import Layout from '../components/layout'


const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row h-[calc(100vh-80px)] text-gray-700 sm:justify-center gap-10 items-center '>
      <div className='h-[160px] w-[160px] lg:h-[320px] lg:w-[320px] md:h-[240px] md:w-[240px] sm:h-[160px] sm:w-[160px] flex justify-center items-center rounded-full
      bg-gradient-to-r from-slate-50 to-blue-200'>
      <div className="h-[145px] w-[145px] lg:h-[305px] lg:w-[305px] md:h-[225px] md:w-[225px] sm:h-[145px] sm:w-[145px] bg-cover bg-center custom-img rounded-full 
      float-left ">
      </div>
      </div>
      <div className='flex flex-col gap-2 items-center sm:items-start px-10 sm:px-0 font-medium'>
        <p className='lg:text-4xl sm:text-xl'>HELLO! </p> 
        <span><span className='lg:text-4xl sm:text-xl'>My name is </span>
        <span className='lg:text-4xl sm:text-xl'>Polina</span> </span>
        <p className='lg:text-xl sm:text-sm text-center'>I am a web-developer currently focused on frontend</p>
      </div>
    </div>
  )
}

export default Home
