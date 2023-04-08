import { motion } from "framer-motion";
import React from "react";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 overflow-hidden cursor-pointer'
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://media.licdn.com/dms/image/D5603AQFahoCGJVPcTw/profile-displayphoto-shrink_400_400/0/1679397025923?e=1686182400&v=beta&t=79gYoL8xREV342zltonX98pJtdqksstJTwVVosm6zFQ'
        alt=''
      />

      <div className='px-0 md:px-10'>
        {/* your role */}
        <h4 className='text-4xl font-light'>
          Frontend Developer
        </h4>
        {/* company name */}
        <p className='font-bold text-2xl mt-1'>
          Lucy Teknologi
        </p>
        <div className='flex space-x-2 my-2'>
          {/* tech stack that used */}
          <img
            className='h-10 w-10 rounded-full '
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full '
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full '
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full '
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Javascript-736400_960_720.png/640px-Javascript-736400_960_720.png'
            alt=''
          />
        </div>
        {/* STARTED WORK...- ENDED... */}
        <p className='uppercase py-5 text-gray-300'>
          MON - FEB 13 2023 - PRESENT
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
