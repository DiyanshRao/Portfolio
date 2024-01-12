'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import Works from '@/components/Works'
import StarsCanvas from '@/components/canvas/Stars'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className=' w-screen px-5 '>
      <div className='relative z-0 bg-primary'>
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
  )
}
