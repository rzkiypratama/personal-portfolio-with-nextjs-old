import { motion } from "framer-motion";
import React from "react";

type Props = {};

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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

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
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        src='https://media.licdn.com/dms/image/D5603AQFahoCGJVPcTw/profile-displayphoto-shrink_400_400/0/1679397025923?e=1686182400&v=beta&t=79gYoL8xREV342zltonX98pJtdqksstJTwVVosm6zFQ'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10 pt-[55px]'>
        <h4 className='text-4xl font-semibold'>
          Here is{" "}
          <span className='underline decoration-[#F7AB0A] animate-pulse'>
            my
          </span>{" "}
          background
        </h4>
        <p>
          Welcome to my website! I'm Rizky Putra
          Pratama, a full-stack web developer
          based in Banjarbaru, South Kalimantan. I
          specialize in creating engaging and
          user-friendly interfaces, and I'm
          skilled in ReactJS, NextJS, VueJS for
          front-end and NodeJS for back-end. With
          prior experience in design and digital
          marketing, I create visually appealing
          and functional websites.
          {/* I am a full-stack web developer. I can
          turn your figma design into website! I
          have expertise working with Reactjs,
          NextJs, VueJs for frontend and Nodejs
          for backend, oh yeah not forget using
          redux for state-management, one more,
          react native for mobile.  */}
        </p>

        <p>
          Curently i'm working in Emori Creative
          as Frontend Developer. I'm passionate
          about learning and taking on new
          challenges in web development. Let's
          work together on your next project!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
