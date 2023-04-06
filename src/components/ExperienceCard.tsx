import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img 
      initial={{
        y: -100,
        opacity: 0
      }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="https://media.licdn.com/dms/image/D5603AQFahoCGJVPcTw/profile-displayphoto-shrink_400_400/0/1679397025923?e=1686182400&v=beta&t=79gYoL8xREV342zltonX98pJtdqksstJTwVVosm6zFQ" alt="" />

      <div className='px-0 md:px-10'>
        {/* your role */}
        <h4 className='text-4xl font-light'>Frontend Developer</h4>
        {/* company name */}
        <p className='font-bold text-2xl mt-1'>Emori Creative</p>
        <div className='flex space-x-2 my-2'>
          {/* tech stack that used */}
        </div>
        {/* STARTED WORK...- ENDED... */}
        <p>Started work FEB 13 2023 - PRESENT</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard