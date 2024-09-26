'use client'

import Image from "next/image";

export default function Home() {
    return (
      <section id="home">
        <div className="flex items-center min-h-screen">
          <div className="flex flex-col space-y-4 w-full">
            <div className="text-[48px] md:text-[80px] font-bold">
              Hi! I&apos;m Gafar
            </div>
            <div className="text-[16px] md:text-[20px]">
              Web Developer Enthusiast
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-8">
              <a href="#project" className="text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80 self-start md:self-auto">
                <div className="flex items-center">
                  <span className="mr-2">See My Project</span>
                  <Image src="/arrow_outward.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
                </div>
              </a>
              <div className="flex space-x-5">
                <a href="https://linkedin.com/in/gafarbagashabibi" className="text-center" target="_blank">
                  <Image src="/linkedin.svg" alt="github" className="h-7 w-7" width={300} height={300} />
                </a>
                <a href="https://github.com/gafarbagas" className="text-center" target="_blank">
                  <Image src="/github.svg" alt="github" className="h-7 w-7" width={300} height={300} />
                </a>
                <a href="https://gitlab.com/gafarbagas" className="text-center" target="_blank">
                  <Image src="/gitlab.svg" alt="github" className="h-7 w-7" width={300} height={300} />
                </a>
                <a href="https://instagram.com/gafarbagas" className="text-center" target="_blank">
                  <Image src="/instagram.svg" alt="github" className="h-7 w-7" width={300} height={300} />
                </a>
                <a href="https://x.com/gafarbagas" className="text-center" target="_blank">
                  <Image src="/x.svg" alt="github" className="h-7 w-7" width={300} height={300} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }