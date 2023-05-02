import { motion } from "framer-motion";
import React from "react";
import { Project } from "../../typing";
import { urlFor } from "../../sanity";

type Props = {
  project: Project[];
};

const Projects = ({ project }: Props) => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {project.map((project, i) => (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={project._id}
          >
            <motion.img
              // initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.1 }}
              // whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              // https://i.ibb.co/GC0LnRz/imaages.png coffeeshop
              // https://i.ibb.co/LPZKGQs/images-1.webp e-wallet
              alt=''
              className='relative w-[100%] md:w-[100%] xl:w-[666px] object-cover'
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl lg:text-4xl md:text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of{" "}
                  {project.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map(
                  (technology) => (
                    <img
                      className='h-10 w-10 rounded-full'
                      key={technology._id}
                      src={urlFor(
                        technology.image,
                      ).url()}
                      alt=''
                    />
                  ),
                )}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project?.summary}
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
