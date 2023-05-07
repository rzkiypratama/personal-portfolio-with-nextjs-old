import { motion } from "framer-motion";
import React from "react";

type Props = {
};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.3,
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pl-5 md:pl-0'>
        About
      </h3>


<div className="w-full mx-auto pt-[3rem] md:pt-0 pb-[0.5rem] md:pb-0">
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        src='https://media.licdn.com/dms/image/D5603AQFahoCGJVPcTw/profile-displayphoto-shrink_400_400/0/1679397025923?e=1688601600&v=beta&t=FZHcxkhSeei2gU_fGs-kByz5_ekixRAhA53blrJoGow'
        className='-mb-20 md:mb-0 flex-shrink-0 w-[100%] h-[7rem] rounded-lg object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />
</div>

      <div className='space-y-2 md:space-y-10 px-0 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-semibold'>
          Here is{" "}
          <span className='underline decoration-[#F7AB0A] animate-pulse'>
            my
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Welcome to my website! I&apos;m Rizky Putra
          Pratama, a full-stack web developer
          based in Banjarbaru, South Kalimantan. I
          specialize in creating engaging and
          user-friendly interfaces, and I&apos;m
          skilled in ReactJS, NextJS, VueJS for
          front-end and NodeJS for back-end. With
          prior experience in design and digital
          marketing, I create visually appealing
          and functional websites and mobile apps.
          {/* I am a full-stack web developer. I can
          turn your figma design into website! I
          have expertise working with Reactjs,
          NextJs, VueJs for frontend and Nodejs
          for backend, oh yeah not forget using
          redux for state-management, one more,
          react native for mobile.  */}
        </p>

        <p>
          Curently i&apos;m working in Emori Creative
          as Frontend Developer. I&apos;m passionate
          about learning and taking on new
          challenges in web development. Let&apos;s
          work together on your next project!
        </p>
        <a href="bronze-oneida-53.tiiny.site" download>
        <p className="underline hover:cursor-pointer">Click here to download my latest CV</p>
        </a>
      </div>
    </motion.div>
  );
}

export default About;
