import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
 // sm:flex-row gap-10 
 // + ((active || 'sm') ? 'block' : 'hidden'
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };


  return (
    <header className='sm:h-20 text-md text-gray-700 text-lg pb-10'>   
    <button onClick={handleMenu} className='absolute right-3 top-3 sm:hidden'>
      <GiHamburgerMenu size={28}/>
      </button> 
      <nav className={ `pt-10 flex justify-center ` }>
        <ul className={`flex flex-col gap-10 ${active ? '' : 'hidden sm:block'} sm:flex sm:flex-row sm:gap-10  `}>
          <li onClick={() =>setActive(false)} className='hover:underline underline-offset-4 font-normal'>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setActive(false)} className='hover:underline underline-offset-4'>
            <Link href="/about">About me</Link>
          </li>
          <li onClick={() => setActive(false)} className='hover:underline underline-offset-4'>
            <Link href="/work">Work</Link>
          </li>
          <li className='hover:underline underline-offset-4'>
          <a href="mailto:pchainikova@gmail.com">Contact</a>
          </li>
        </ul>
      </nav>
     
    </header>
  )
}

export default Navbar
