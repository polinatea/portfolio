import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
// import { RxHamburgerMenu } from 'react-icons/Rx';

const navLinks = () =>{
  
}
const Navbar = () => {
 // sm:flex-row gap-10 
 // + ((active || 'sm') ? 'block' : 'hidden'
  const [active, setActive] = useState(false);
  const handleMenu = () => {
    setActive(!active);
  };


  return (
    <header className='sm:h-20 text-md text-gray-700 text-lg'>   
    <button onClick={handleMenu} className='absolute right-0 sm:hidden'>btn</button> 
      <nav className={ `pt-10 flex justify-center ` }>
        <ul className={`flex flex-col gap-10 ${active ? '' : 'hidden sm:block'} sm:flex sm:flex-row sm:gap-10  `}>
          <li onClick={() =>setActive(false)} className='hover:underline underline-offset-4'>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setActive(false)} className='hover:underline underline-offset-4'>
            <Link href="/about">About me</Link>
          </li>
          <li onClick={() => setActive(false)} className='hover:underline underline-offset-4'>
            <Link href="/work">Work</Link>
          </li>
          <li onClick={() => setActive(false)} className='hover:underline underline-offset-4'>
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
     
    </header>
  )
}

export default Navbar
