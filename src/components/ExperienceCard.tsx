import { motion } from "framer-motion";
import React from "react";


type Props = {
  companyImages: string;
  role: string;
  companyName: string;
  skill: string;
  skill2: string;
  skill3: string;
  skill4: string;
  dateIn: string;
  dateEnded: string;
  summary1: string;
  summary2: string;
  summary3: string;
  summary4: string;
  currentlyWork: string;
};

const ExperienceCard = ({companyImages, role, companyName, skill, skill2, skill3, skill4, dateIn, dateEnded, summary1, summary2, summary3, summary4, currentlyWork}: Props) => {
  return (
    <motion.article
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col rounded-[1rem] items-center space-y-0 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-[5rem] mb-8 md:mt-0 md:mb-0 overflow-hidden cursor-pointer'
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-[6rem] h-[6rem] rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={companyImages}
        alt=''
      />

      <div className='px-0 md:px-10'>
        {/* your role */}
        <h4 className='text-[1.7rem] xl:text-4xl lg:text-4xl md:text-4xl font-light'>
          {role}
        </h4>
        {/* company name */}
        <p className='font-bold text-xl mt-1'>
          {companyName}
        </p>
        <div className='flex space-x-2 my-2 max-w-56'>
          {/* tech stack that used */}
            <img
              className='h-10 w-10 rounded-full'
              src={skill}
              alt=''
            />
             <img
              className='h-10 w-10 rounded-full'
              src={skill2}
              alt=''
            />
             <img
              className='h-10 w-10 rounded-full'
              src={skill3}
              alt=''
            />
             <img
              className='h-10 w-10 rounded-full'
              src={skill4}
              alt=''
            />
        </div>
        {/* STARTED WORK...- ENDED... */}
        <p className='uppercase py-5 text-gray-300'>
          {dateIn} - {dateEnded} {currentlyWork}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96'>
          <li>{summary1}</li>
          <li>{summary2}</li>
          <li>{summary3}</li>
          <li>{summary4}</li>

        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
