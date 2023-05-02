import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../../typing";
import { Fragment } from "react"

type Props = {
  skills: SkillType[];
};

const Skills = ({skills}: Props) => {
  return (
    <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current
        profienciency
      </h3>

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 justify-center'
      >
        {skills?.map((skills) => (
          <Skill
          key={skills._id}
          skill={skills}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
