import React from 'react'
import Layout from '../components/layout'


const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row h-[calc(100vh-110px)] text-gray-700 justify-center gap-10 items-center'>
      <div className="h-40 w-40 lg:h-80 lg:w-80 md:h-60 md:w-60 sm:h-40 sm:w-40 bg-cover bg-center custom-img rounded-full float-left shadow-xl">
      </div>

      <div className='flex flex-col gap-2 items-center sm:items-start'>
        <p className='lg:text-4xl sm:text-xl'>HELLO! </p> 
        <span><span className='lg:text-4xl sm:text-xl'>My name is </span>
        <span className='lg:text-4xl sm:text-xl'>Polina</span> </span>
        <p className='lg:text-xl sm:text-sm'>I am a web-developer currently focused on frontend &#127802;</p>
      </div>
    </div>
  )
}

export default Home
