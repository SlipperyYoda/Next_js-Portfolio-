import type { NextPage } from "next";
import Head from 'next/head'
import Link from "next/link";
import Header from "../components/Headers";
import Hero  from "../components/Hero";
import About  from "../components/About";
import WorkExperience  from "../components/WorkExperience";
import ExperienceCard from "../components/ExperienceCard";
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe"



export default function Home() {
  

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>LIGMA BALLLLLLLLLLLLLLLLLLLLLLLLLLS</title>
      </Head>

    {/* Header */}
    <Header />
    {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero />
    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About />
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
      <WorkExperience />
    </section>

    {/* Skills */}
    <section id="skills" className="snap-center">
      <Skills />
    </section>

    {/* Projects */}
    <section id="projects" className="snap-center">
      <Projects />
    </section>

    {/* Contact Me */}
    <section id="contactme" className="snap-center">
      <ContactMe />
    </section>
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" 
          src="https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244__480.jpg" 
          alt="" />
        </div>
      </footer>
      </Link>
    </div>
  )
}
