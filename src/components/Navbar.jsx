import { React, useEffect, useState, setActive } from 'react'

import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo2, menu, close } from '../assets';

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0);}}>
            <img src={logo2} alt="logo2" className='w-12 h-12 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer'> Jerome <span className='sm:block hidden'>| Personal Portfolio</span></p>
          </Link>
          <p className='text-red-500'>asdsa</p>
        </div>
    </nav>
  )
}

export default Navbar