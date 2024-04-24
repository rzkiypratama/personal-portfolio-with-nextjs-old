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
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:pl-0">
        About
      </h3>

      <section className="mx-auto w-full pb-[0.5rem] pt-[3rem] md:pb-0 md:pt-0">
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
          src="https://i.ibb.co/gZM0gFT/IMG-3784-3.png"
          className="-mb-20 h-[10rem] w-[100%] flex-shrink-0 rounded-lg object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[700px]"
        />
      </section>

      <div className="space-y-2 px-0 md:space-y-10 md:px-10">
        {/* <h4 className="text-2xl font-semibold md:text-4xl">
          Here is{" "}
          <span className="animate-pulse underline decoration-[#F7AB0A]">
            my
          </span>{" "}
          background
        </h4> */}
        <p className="text-base">
          <span className="text-2xl font-semibold">Hi, I&apos;m Rizky Putra Pratama,</span> a web developer based in Banjarbaru,
          South Kalimantan. I specialize in creating user-friendly interfaces
          and have expertise in ReactJS, NextJS, VueJS for front-end, and NodeJS
          for back-end development. I love javascript and typescript too in development!
        </p>

        <p className="pb-2">
        Currently, I work as a Software Developer at Orion Scope. 
        <span> Let&apos;s work together on your next project!</span>
        </p>
        <a
          className="underline hover:cursor-pointer"
          target="_blank"
          href="https://www.dropbox.com/scl/fi/1rzaszrmwt8ywf2gvsc6c/pratama-cv.pdf?rlkey=eh8rej0g4ui9e6tez2mdcccw1&dl=0"
          download="https://www.dropbox.com/scl/fi/1rzaszrmwt8ywf2gvsc6c/pratama-cv.pdf?rlkey=eh8rej0g4ui9e6tez2mdcccw1&dl=0"
        >
          Click here to download my latest CV
        </a>
      </div>
    </motion.div>
  );
}

export default About;
