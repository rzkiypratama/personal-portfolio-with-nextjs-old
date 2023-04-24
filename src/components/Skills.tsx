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

      <div className='grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-1 xl:gap-5 lg:gap-5 md:gap-5 justify-center'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
