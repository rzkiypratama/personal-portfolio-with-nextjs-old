import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { caseStudies } from "./dekstopProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the specific icons

type Props = {};

const Projects = ({}: Props) => {
  const mobileProject = [1, 2, 3, 4, 5, 6, 7, 8];

  const [mobileStudyIndex, setMobileStudyIndex] = useState(0);

  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

  const handleNext = () => {
    if (currentStudyIndex < caseStudies.length - 1) {
      setCurrentStudyIndex(currentStudyIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStudyIndex > 0) {
      setCurrentStudyIndex(currentStudyIndex - 1);
    }
  };

  const currentStudy = caseStudies[currentStudyIndex];

  return (
    <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
      <h3 className="absolute top-24 pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:pl-0">
        Projects
      </h3>

      <section className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* dekstop only */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="hidden h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:flex"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src={currentStudy.image}
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {currentStudyIndex + 1} of {caseStudies.length}:
              </span>{" "}
              <a
                target="_blank"
                href={currentStudy.link}
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {currentStudy.title}
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              {currentStudy.description}
            </p>
          </div>
          <button
            onClick={handlePrev}
            className={`absolute left-[25%] top-1/2 hidden -translate-y-1/2 transform bg-[#F7AB0A]/80 p-2 lg:block ${
              currentStudyIndex === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            disabled={currentStudyIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-[25%] top-1/2 hidden -translate-y-1/2 transform bg-[#F7AB0A]/80 p-2 lg:block ${
              currentStudyIndex === caseStudies.length - 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
            }`}
            disabled={currentStudyIndex === caseStudies.length - 1}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </motion.div>

        {/* mobile and table that swipeable */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/nQzw3Gd/booking-system.png"
            alt="Booking System"
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 1} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="booking-system-eight.vercel.app"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Booking System
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              Embark on an unforgettable journey to Labuan Bajo with our Travel
              Website. Seamlessly order and schedule your trip with our
              user-friendly interface. Powered by Next.js, TypeScript, and
              Tailwind for a sleek frontend experience, and Strapi for a robust
              backend.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/KhPHXZQ/bfl.png"
            alt="Breakthrough for Life"
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 2} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://bfl-center.com/"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Breakthrough for Life
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              BFL-center.com is a website developed using a low-code environment
              within the WordPress platform. The site features a blend of
              customized design elements through CSS, offering a unique and
              visually appealing user experience. It serves as the digital
              presence for the BFL Psychology Center, a part of the renowned
              Lippo Group Company, providing valuable insights and information
              related to their psychological services and expertise.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/Tmk6Dvq/pt-ana.png"
            alt="PT. Andalan Nusantara Adyatama"
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 3} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://pt-ana-website.vercel.app/"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                PT. Andalan Nusantara Adyatama
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              Welcome to PT. Andalan Nusantara Adyatam website, where you can
              explore high-quality products, enjoy seamless shopping, and stay
              updated with the latest news—all in one place. Discover diverse
              items, experience effortless shopping, and stay informed with
              engaging content.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/xKkxMPs/imaages.png"
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 4} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://monlight.vercel.app/"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Monlight Cafe
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              The Monlight Cafe application is referer to Monlight Cafe at
              Banjarbaru, offers a range of features for the public, users, and
              admins alike. As a user, you can easily place orders, view product
              details, and complete transactions. As an admin, you can manage
              and update the product catalogue, add new products, and perform a
              range of other tasks to ensure seamless operations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/d7cxQJH/images.png"
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 5} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://monlight-wallet.vercel.app/"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                E-wallet - Fazzpay
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              This digital wallet application allows users to effortlessly send
              and receive transfers, access search features, and manage their
              profiles, among other features. It offers the convenience and
              functionality of leading digital wallets such as GoP** and Dan*,
              making it a reliable and efficient choice for all your digital
              payment needs..
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/X22QjJx/imageeesa.png"
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 6} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://lepisa-fe.vercel.app/"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Movie Ticketing - Tickits
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              Experience the convenience of booking movie tickets online with
              our dedicated cinema ticket booking application. As a user, you
              can easily search for available movies, place orders, manage your
              profile, and access a range of other features designed to
              streamline the booking process. Our admin feature allows movie
              theatre operators to easily add new movies and schedules, ensuring
              the latest information is always available to users.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/S0YgdF8/imageees.png"
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 7} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://rima-project.vercel.app/"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                RIMA Furniture E-commerce
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              This website offers a comprehensive ecommerce platform for
              furniture sales, complete with a range of features to enhance user
              experience. Users can easily upload their furniture products to
              sell, while customers can seamlessly place orders and browse
              available items. In addition, users can access a search function
              to find the perfect pieces, and edit their profiles to ensure
              seamless communication and transaction management.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 lg:hidden"
        >
          <motion.img
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            src="https://i.ibb.co/VqzjCr1/surabayasatu-co-id.png"
            alt=""
            className="relative w-[100%] object-cover md:w-[100%] xl:w-[666px]"
          />

          <div className="max-w-6xl space-y-10 px-0 md:px-10">
            <h4 className="text-center text-xl font-semibold md:text-4xl">
              <span className="underline decoration-[#F7AB0A]/50">
                Case Study {mobileStudyIndex + 8} of {mobileProject.length}:
              </span>{" "}
              <a
                target="_blank"
                href="https://surabayasatu.co.id"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Surabaya Satu Construction
              </a>
            </h4>

            <p className="w-[23rem] text-center text-base md:w-full md:text-left md:text-xl">
              This is official website for Surabaya Satu Construction, made by
              low code wordpress elementor and custom css for better styling. It
              has several pages like blog, gallery, etc.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </div>
  );
};

export default Projects;
