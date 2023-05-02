import { motion } from "framer-motion";
import React from "react";


type Props = {
};

const ExperienceCard = ({}: Props) => {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col rounded-[1rem] items-center space-y-7 flex-shrink-0 w-[390px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-[3.5rem] md:mt-0 overflow-hidden cursor-pointer'
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
        src='https://i.ibb.co/8D6FgPv/315365548-1332739860915960-254522410530346543-n.jpg'
        alt=''
      />

      <div className='px-0 md:px-10'>
        {/* your role */}
        <h4 className='text-[2rem] xl:text-4xl lg:text-4xl md:text-4xl font-light'>
          Software Engineer
        </h4>
        {/* company name */}
        <p className='font-bold text-2xl mt-1'>
          Emori Creative
        </p>
        <div className='flex space-x-2 my-2 max-w-56'>
          {/* tech stack that used */}
            <img
              className='h-10 w-10 rounded-full'
              src='https://i.ibb.co/Cvx0M9D/Vue-js-Logo-2-svg.png'
              alt=''
            />
              <img
              className='h-10 w-10 rounded-full'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/600px-Wordpress_Blue_logo.png'
              alt=''
            />
        </div>
        {/* STARTED WORK...- ENDED... */}
        <p className='uppercase py-5 text-gray-300'>
          22 Dec 2022 - Present
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96'>
          <li>Build frontend & backend side.</li>
          <li>Build a few company profile website.</li>
          <li>Build a few landing page website.</li>
          <li>Work with code & no code environment in development.</li>
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
