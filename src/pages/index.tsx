import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import ProjectPage from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import {
  PageInfo,
  Experience,
  Skill,
  Project,
  Social,
} from "../../typing";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkill";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  project: Project[];
  social: Social[];
};

const Home = ({
  pageInfo,
  experience,
  skills,
  project,
  social,
}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Putra&apos;s Portfolio</title>
      </Head>

      <Header social={social} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section
        id='experience'
        className='snap-center'
      >
        <WorkExperience experience={experience} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section
        id='projects'
        className='snap-start'
      >
        <ProjectPage project={project} />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
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

export const getStaticProps: GetStaticProps<
  Props
> = async () => {
  const pageInfo: PageInfo =
    await fetchPageInfo();
  const experience: Experience[] =
    await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const project: Project[] =
    await fetchProjects();
  const social: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      project,
      social,
    },
    revalidate: 10,
  };
};
