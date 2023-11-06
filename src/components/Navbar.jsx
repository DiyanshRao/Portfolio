'use client'
import React, { useEffect, useState } from 'react'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close, resume } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20  rounded-xl  ${
        scrolled ? 'bg-gray-400' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center '>
        <a
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img
            src={logo.src}
            alt='logo'
            className='w-9 h-9 object-contain rounded-full'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Diyansh Rao &nbsp;
            <span className='sm:block hidden'> | Software Developer</span>
          </p>
        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            <a href={resume} download>
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
