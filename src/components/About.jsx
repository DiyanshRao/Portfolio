'use client'
import React from 'react'
import { services } from '../constants'
import ServiceCard from './ServiceCard'

const About = () => {
  return (
    <div className='flex  flex-col justify-center items-center text-center'>
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
