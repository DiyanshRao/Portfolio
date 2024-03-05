'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import Works from '@/components/Works'
import StarsCanvas from '@/components/canvas/Stars'
import Contact from '@/components/Contact'
import { useState } from 'react'
import Loading from '@/components/loader/loading'

export default function Home() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading ? (
        <Loading setLoading={() => setLoading(false)} />
      ) : (
        <main className='w-screen px-5 '>
          <div className='relative z-0 bg-black'>
            <Navbar />
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Contact />
            <StarsCanvas />
          </div>
        </main>
      )}
    </>
  )
}
