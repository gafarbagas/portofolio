'use client'

import Navbar from "../components/navbar";
import HomeSection from "../components/home";
// import AboutSection from "../components/about";
import ProjectSection from "../components/project";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
        <div className="max-w-screen-xl mx-auto px-4">
          <Navbar />
          <HomeSection />
          {/* <AboutSection /> */}
          <ProjectSection />
          <Footer />
        </div>
    </>
  );
}
