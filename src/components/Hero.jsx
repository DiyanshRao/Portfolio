'use client'

import Typewriter from 'typewriter-effect'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className={`relative w-full h-[250px] md:h-[350px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] my-2 `}
          >
            Hi, I&apos;m <span className='text-[#915EFF]'>Diyansh Rao</span>
          </h1>
          <div className='sm:block hidden'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `I am Software Developer on a mission to blend cutting-edge technologies with real-world solutions. With a solid foundation as a full-stack developer, I've navigated the intricacies of both front-end and back-end development. Currently immersed in learning cloud technologies, I'm eager to leverage this knowledge to create scalable and efficient software solutions. My journey in the tech realm reflects a commitment to continuous learning and a drive to craft innovative and impactful solutions.`
                  )
                  .callFunction(() => {
                    console.log('String typed out!')
                  })

                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted')
                  })
                  .start()
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
