'use client'

import Navbar from "../components/home/navbar";
import HomeSection from "../components/home/home";
import AboutSection from "../components/home/about";
import ProjectSection from "../components/home/project";
import ExperienceSection from "../components/home/experience";
import Footer from "../components/home/footer";

export default function Home() {
  return (
    <>
        <div className="max-w-screen-xl mx-auto px-8">
          <Navbar />
          <HomeSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectSection />
          <Footer />
        </div>
    </>
  );
}
