import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../../typing";
import { urlFor } from "../../sanity";
import { Fragment } from "react"

type Props = {
  experience: Experience
};

const ExperienceCard = ({experience}: Props) => {
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
        src={urlFor(experience?.companyImage).url()}
        alt=''
      />

      <div className='px-0 md:px-10'>
        {/* your role */}
        <h4 className='text-[2rem] xl:text-4xl lg:text-4xl md:text-4xl font-light'>
          {experience.jobTitle}
        </h4>
        {/* company name */}
        <p className='font-bold text-2xl mt-1'>
          {experience.company}
        </p>
        <div className='flex space-x-2 my-2 max-w-56'>
          {/* tech stack that used */}
          {experience.technologies.map((technology) => (
            <img
              className='h-10 w-10 rounded-full'
              src={urlFor(technology.image).url()}
              alt=''
              key={technology._id}
            />
          
          ))}
        </div>
        {/* STARTED WORK...- ENDED... */}
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96'>
         {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
         ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
