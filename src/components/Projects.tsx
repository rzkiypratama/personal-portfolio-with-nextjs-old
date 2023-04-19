import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://i.ibb.co/LPZKGQs/images-1.webp'

              // https://i.ibb.co/GC0LnRz/imaages.png coffeeshop
              // https://i.ibb.co/LPZKGQs/images-1.webp e-wallet
              alt=''

              className="w-[666px] h-[375px] object-cover"
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of{" "}
                  {projects.length}:
                </span>{" "}
                Coffee Shop
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Rem
                ab, quas, porro numquam voluptate
                eos tempora odit commodi eius
                similique laudantium iste esse!
                Aliquid iusto asperiores quidem
                soluta dolor! Quibusdam vel
                molestias nam earum soluta ea at
                aut dolorem repellat sequi, sed
                dolorum itaque modi eos incidunt
                labore veniam maiores.
              </p>
            </div>
          </motion.div>
        ))}
        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
};

export default Projects;
