import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { caseStudies } from "./static/portfolio";
import StackComponent from "./elements/Stack";
import LinkIcon from "@heroicons/react/24/solid/LinkIcon";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {};

const Projects = ({}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image: string) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative z-0 mx-auto flex flex-col items-center justify-evenly text-left md:flex-row">
      <h3 className="absolute -top-20 pl-5 text-2xl uppercase tracking-[20px] text-gray-500 md:pl-0">
        portfolios
      </h3>

      <section className="flex">
        {/* dekstop only */}
        <div className="z-30 grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((currentStudy, index) => (
            <motion.div
              key={index}
              initial={{
                y: -100,
                opacity: 1,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 rounded-xl border border-[#4f4f4f] bg-[#282828] p-4 text-white transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10"
            >
              <img
                src={currentStudy.image}
                alt="image"
                className="w-[100%] cursor-pointer object-cover md:w-[100%] z-10"
                onClick={() => openModal(currentStudy.image)}
              />

              <div className="px-0">
                <h4 className="text-xl font-semibold">
                  <a
                    target="_blank"
                    href={currentStudy.link}
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center hover:text-cyan-500/50"
                  >
                    {currentStudy.title} <span><LinkIcon className="ml-1 w-3 h-3" /></span>
                  </a>
                </h4>

                <StackComponent stack={currentStudy.stack} />

                <p className="w-auto text-sm md:w-full md:text-left">
                  {currentStudy.description.length > 90
                    ? `${currentStudy.description.slice(0, 90)}...`
                    : currentStudy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {showModal && (
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
            <div
              className="absolute h-full w-full bg-black opacity-70"
              onClick={closeModal}
            />
            <div className="relative z-10 px-5 lg:px-0">
              <img
                src={selectedImage}
                alt="Selected Image"
                className="max-h-full max-w-full"
              />
              <button
                className="absolute text-2xl text-white"
                onClick={closeModal}
              >
                &#215;
              </button>
            </div>
          </div>
        )}
      </section>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </div>
  );
};

export default Projects;
