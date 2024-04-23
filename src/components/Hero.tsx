import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "But also learning about backend",
      "Currently I'm work at Orionscope",
    ],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <section className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircle />
      <img
        src="https://i.ibb.co/dm8Dn7B/imgggggg.png"
        alt=""
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
      />
      <div className="z-20">
        {/* <motion.h2
          initial={{
            y: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="pb-2 pl-5 text-sm uppercase tracking-[15px] text-gray-500 md:pl-0"
        >
          Software Engineer
        </motion.h2> */}
        <motion.h1 className="px-0 text-2xl font-semibold md:text-5xl lg:text-6xl"
        initial={{
          y: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        >
        Hi, I&apos;m Putra
        </motion.h1>
        <h1 className="px-0 text-2xl font-semibold md:text-5xl lg:text-6xl pt-3">
          <span className="mr-3 w-[19rem]"> {text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
         {/* <div className="flex items-center gap-3 flex-wrap pt-5 z-20">
                <a href="https://www.linkedin.com/in/">
                  <button className="flex p-2 rounded-md items-center bg-slate-600">
                    <p>Linkedin</p>
                    <ArrowRightCircleIcon className=" ml-3 w-6 h-6" />
                  </button>
                </a>
                <a href="https://github.com">
                  <button className="flex p-2 rounded-md items-center bg-slate-600">
                    <p>Github</p>
                    <ArrowRightCircleIcon className=" ml-3 w-6 h-6" />
                  </button>
                </a>
                <Link href="/link/create">
                  <button className="flex p-2 rounded-md items-center bg-slate-600">
                    <p>Link Shortener</p>
                    <LinkIcon className=" ml-3 w-5 h-5" />
                  </button>
                </Link>
              </div> */}
    </section>
  );
}

export default Hero;
