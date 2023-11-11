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
      } w-full flex items-center py-5 fixed top-0 z-20    ${
        scrolled ? 'bg-gray-400' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center '>
        <a href='/' className='flex items-center gap-2'>
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
              <a href={`/${nav.title}`}>{nav.title}</a>
            </li>
          ))}
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            <a href='/resume.pdf' download='Diyansh_Rao_CV.pdf'>
              Download CV
            </a>
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          >
            Menu
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl text-white`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 bg-black rounded-sm px-2 py-5 text-white'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-gray-400'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`/${nav.title}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
