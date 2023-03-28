import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experience";
import MySkills from "@/components/MySkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, SKill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { urlFor } from "@/sanity";
// const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: SKill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    scrollbar scrollbar-track-gray-400/30 scrollbar-thumb-green-300/40 z-0"
    >
      <Head>
        <title>Shahriar Ahmed Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          className="rounded-full"
          rel="icon"
          href={urlFor(pageInfo?.heroImage).url()}
        />
      </Head>
      {/* Header Start */}

      <Header socials={socials} />

      {/* Header Finished */}

      {/* Hero Start*/}

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* Hero Finished*/}

      {/* About Start*/}

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* About Finished*/}

      {/* Experience Start */}

      <section id="experiences" className="snap-center">
        <Experiences experiences={experiences} />
      </section>

      {/* Experience Finished */}

      {/* Skills Start */}

      <section id="skills" className="snap-start">
        <MySkills skills={skills} />
      </section>

      {/* Skills Finished */}

      {/* Projects Start*/}

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Projects Finished*/}

      {/* Contact Me */}

      <section id="contact" className="snap-center">
        <Contact pageInfo={pageInfo} />
      </section>

      {/* Contact Me Finished */}

      <Link href="#hero">
        <footer className="sticky bottom-4 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              className="h-7 w-7 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/mine.jpg"
              alt="SHAHRIAR AHMED"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: SKill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
