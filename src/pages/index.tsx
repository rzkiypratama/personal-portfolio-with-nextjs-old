import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
Skills;

Header;
Hero;

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-scree snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-{#F7AB0A}/80'>
      <Head>
        <title>Putra's Posrtfolio</title>
      </Head>

      <section>
        <Header />
      </section>

      <section
        id='hero'
        className='snap-start max-w-7xl mx-auto'
      >
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center max-w-7xl mx-auto'
      >
        <About />
      </section>

      <section
        id='experience'
        className='snap-center max-w-7xl mx-auto'
      >
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
