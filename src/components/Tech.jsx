'use client'
import React from 'react'

import BallCanvas from './canvas/Ball'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div
          className=' border border-gray-400 p-2 rounded-xl'
          key={technology.name}
        >
          <img src={technology.icon.src} className='w-28 h-28 rounded-xl' />
        </div>
      ))}
    </div>
  )
}

export default Tech
