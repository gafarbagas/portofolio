'use client'

import Image from "next/image";

export default function About() {
    return (
      <section id="about">
        <div className="flex items-center min-h-screen">
          <div className="flex flex-col items-center space-y-4 md:flex-row">
            <div className="md:w-2/5 xl:w-1/3 flex justify-center">
              <Image
                src="/avatar.svg"
                alt="Gafar Bagas Habibi"
                title="Gafar Bagas Habibi"
                className="w-50 h-full rounded-xl object-cover object-top"
                width={300}
                height={300}
              />
            </div>
            <div className="md:w-3/5 xl:w-2/3 md:ml-12 xl:ml-24 mt-4 md:mt-0">
              <div className="text-[28px] md:text-[36px] font-bold mb-4 text-center md:text-left">
                ABOUT ME
              </div>
              <div className="text-lg">
                I am a passionate learner who thrives on challenges and is eager to grow as a Frontend Developer. With 2 years of experience as a Fullstack Web Developer, I'm actively seeking opportunities to apply and expand my skills in the field.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }