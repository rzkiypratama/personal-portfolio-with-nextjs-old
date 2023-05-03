import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src='https://i.ibb.co/xKkxMPs/imaages.png'
            alt=''
            className='relative w-[100%] md:w-[100%] xl:w-[666px] object-cover'
          />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl md:text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                Case Study 1 of 4:
              </span>{" "}
              <a
                target='_blank'
                href='https://monlight.vercel.app/'
                rel='noopener noreferrer'
                className='cursor-pointer'
              >
                Monlight Cafe
              </a>
            </h4>

            {/* <div className='flex items-center space-x-2 justify-center'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://i.ibb.co/xKkxMPs/imaages.png'
                alt=''
              />
            </div> */}

            <p className='text-lg text-center md:text-left'>
              Application for monlight cafe which
              has features for the public, users,
              and admin. As users we can place
              orders, check product details and
              make purchases. As admins we can
              edit products, add new products and
              every admin-side do!
            </p>
          </div>
        </motion.div>

        {/* project 2 */}

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src='https://i.ibb.co/d7cxQJH/images.png'
            alt=''
            className='relative w-[100%] md:w-[100%] xl:w-[666px] object-cover'
          />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl md:text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                Case Study 2 of 4:
              </span>{" "}
              <a
                target='_blank'
                href='https://monlight-wallet.vercel.app/'
                rel='noopener noreferrer'
                className='cursor-pointer'
              >
                E-wallet - Fazzpay
              </a>
            </h4>

            {/* <div className='flex items-center space-x-2 justify-center'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://i.ibb.co/xKkxMPs/imaages.png'
                alt=''
              />
            </div> */}

            <p className='text-lg text-center md:text-left'>
              Digital wallet application that you
              can make transfers and receive
              transfers, search features, profiles
              etc like gop**, dan*, etc!
            </p>
          </div>
        </motion.div>

        {/* project 3 */}

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src='https://i.ibb.co/S0YgdF8/imageees.png'
            alt=''
            className='relative w-[100%] md:w-[100%] xl:w-[666px] object-cover'
          />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl md:text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                Case Study 3 of 4:
              </span>{" "}
              <a
                target='_blank'
                href='https://rima-project.vercel.app/'
                rel='noopener noreferrer'
                className='cursor-pointer'
              >
              RIMA Furniture E-commerce
              </a>
            </h4>

            {/* <div className='flex items-center space-x-2 justify-center'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://i.ibb.co/xKkxMPs/imaages.png'
                alt=''
              />
            </div> */}

            <p className='text-lg text-center md:text-left'>
              Website for furniture ecommerce,
              there are many features likes
              ecommerce in general. User can
              upload their products to sell it,
              while other users can place orders
              to bought it, search products and
              edit their profile too.
            </p>
          </div>
        </motion.div>

        {/* project 4 */}

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src='https://i.ibb.co/X22QjJx/imageeesa.png'
            alt=''
            className='relative w-[100%] md:w-[100%] xl:w-[666px] object-cover'
          />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-xl lg:text-4xl md:text-4xl font-semibold text-center'>
              <span className='underline decoration-[#F7AB0A]/50'>
                Case Study 4 of 4:
              </span>{" "}
              <a
                target='_blank'
                href='https://lepisa-fe.vercel.app/'
                rel='noopener noreferrer'
                className='cursor-pointer'
              >
                Movie Ticketing - Tickits
              </a>
            </h4>

            {/* <div className='flex items-center space-x-2 justify-center'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://i.ibb.co/xKkxMPs/imaages.png'
                alt=''
              />
            </div> */}

            <p className='text-lg text-center md:text-left'>
              Have you ever try booking movie
              tickets through online? Try this!
              Cinema ticket booking application.
              As user you can search, order, edit
              your profile, etc. There is an admin
              feature that can add movies and
              schedules.
            </p>
          </div>
        </motion.div>

        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
};

export default Projects;
