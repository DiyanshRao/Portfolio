'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-[300px] border-2 border-gray-400  rounded-xl'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon.src}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center bg-gray-400 rounded-xl px-4 py-2'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
export default ServiceCard
