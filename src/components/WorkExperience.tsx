import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {
};

const WorkExperience = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-[5rem] md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-5 md:pl-0'>
        Experience
      </h3>

      <div className='w-[24rem] md:w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard
          companyImages='https://i.ibb.co/8D6FgPv/315365548-1332739860915960-254522410530346543-n.jpg'
          role = 'Software Engineer'
          companyName = "Emori Creative"
          skill= "https://res.cloudinary.com/practicaldev/image/fetch/s--8sx8IYNE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i2.wp.com/blogreact.com/wp-content/uploads/2020/10/1_htbUdWgFQ3a94PMEvBr_hQ.png%3Fresize%3D750%252C428%26ssl%3D1"
          skill2='https://i.ibb.co/mzsvQFP/Tailwind-CSS-Logo-svg.png'
          skill3="https://www.svgrepo.com/download/12244/wordpress-logo.svg"
          skill4="https://i.ibb.co/72WMfHp/Typescript-logo-2020-svg.png"
          dateIn='25 Des 2022'
          dateEnded=""
          currentlyWork= 'Present'
          summary1='Build frontend & backend side.'
          summary2='Build a few company profile website.'
          summary3="Build a few landing page website."
          summary4="Work with code & no code environment in development."
        />

        <ExperienceCard 
         companyImages='https://i.ibb.co/gSG8vN3/1663853843660.jpg'
         role = 'Frontend Developer'
         companyName = "CV. Lucy Teknology"
         skill='https://i.ibb.co/Cvx0M9D/Vue-js-Logo-2-svg.png'
         skill2='https://i.ibb.co/mzsvQFP/Tailwind-CSS-Logo-svg.png'
         skill3="https://i.ibb.co/72WMfHp/Typescript-logo-2020-svg.png"
         skill4="https://www.pngrepo.com/png/354119/512/nodejs-icon.png"
         dateIn='18 January 2022'
         dateEnded="30 April 2023"
         currentlyWork= ''
         summary1='Improve company website.'
         summary2='Improve company code.'
         summary3="Manage company website."
         summary4="Working with backend team to deliver project into frontend side."
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
