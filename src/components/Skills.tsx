import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = ({}: Props) => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for currency
        profienciency
      </h3>

      <motion.div 
       initial={{
        x: -200,
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 justify-center'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </div>
  );
};

export default Skills;
