'use client'
import React from 'react'

import { motion } from 'framer-motion'

import { services } from '../constants'

import { fadeIn, textVariant } from '../utils/motion'
import ServiceCard from './ServiceCard'

const About = () => {
  return (
    <div className='flex  flex-col justify-center items-center text-center'>
      <motion.div variants={textVariant()}>
        <p className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Introduction
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-left sm:text-center '
      >
        🚀 Tech Alchemist | Code Explorer | Digital Dreamweaver 🌌 Ahoy, fellow
        digital navigators! 🌟 I&apos;m Diyansh Rao, your cybernetic sherpa on a
        quest to decode the matrix and sculpt virtual realms. 🎓 Armed with a
        B.Tech in Computer Science, I&apos;ve journeyed through the labyrinthine
        landscapes of code, conjuring websites, and apps from the ether.
        I&apos;m the one you call when your pixels are in peril! 💻✨ But wait,
        there&apos;s more to me than just coding spells. When I&apos;m not
        unraveling binary mysteries, I&apos;m deciphering the scrolls of tech
        blogs 📚, brainstorming solutions for tomorrow&apos;s challenges 💡, or
        engaging in epic quests in the digital realms 🎮. Let&apos;s embark on
        this odyssey together, where we morph ideas into innovation, pixels into
        poetry, and dreams into digital reality. Connect with me, and let&apos;s
        craft the future! 🚀🔮 #TechAlchemist #DigitalDreams #CodeExplorer
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-5 justify-center items-center'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default About
