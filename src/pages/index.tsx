import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import ProjectPage from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Putra&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" >
        <Hero />
      </section>

      <section id="projects" >
        <ProjectPage />
      </section>

      <section id="about" >
        <About />
      </section>

      <section id="experience" >
        <WorkExperience />
      </section>

      <section id="skills" >
        <Skills />
      </section>

      <section id="contact" >
        <ContactMe />
      </section>

      {/* <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://media.licdn.com/dms/image/D5603AQFahoCGJVPcTw/profile-displayphoto-shrink_400_400/0/1679397025923?e=1686182400&v=beta&t=79gYoL8xREV342zltonX98pJtdqksstJTwVVosm6zFQ'
              alt=''
            />
          </div>
        </footer>
      </Link> */}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600, // reload in an hour
  };
}
