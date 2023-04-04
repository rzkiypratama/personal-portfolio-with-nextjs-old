import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
Header;
Hero;

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-scree snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Putra's Posrtfolio</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />

      {/* hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experience */}

      {/* skills */}

      {/* projects */}

      {/* contact me */}
    </div>
  );
};

export default Home;
