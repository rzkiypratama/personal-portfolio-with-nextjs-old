import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Header({}: Props) {
  return (
    <section className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/rzkiypratama"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/rzkiypratama"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/rzkiypratama"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <div className="flex cursor-pointer flex-row items-center text-gray-300">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex items-center gap-3"
          >
            <EnvelopeIcon className="h-6 w-6 cursor-pointer" />
            <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
              Get in touch
            </p>
          </motion.div>
        </div>
      </Link>
    </section>
  );
}

export default Header;
