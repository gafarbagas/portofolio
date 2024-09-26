'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 bg-[#000000]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-8 py-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="logo.svg" className="h-8" alt="Gaabs" width={300} height={300} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="mailto:gafarbagas.jobs@gmail.com" className="hidden md:block text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80" target="_blank">
              <div className="flex items-center">
                <span className="mr-2">Send Me Email</span>
                <Image src="/mail.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
              </div>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none "
              aria-controls="navbar-sticky"
              aria-expanded={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className={`transform transition-transform duration-500 ${navbarOpen ? "rotate-90" : ""}`}>
                {navbarOpen ? (
                  <svg className="w-6 h-6 transition duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 transition duration-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" stroke-width="2" stroke="#fff">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                )}
              </div>
            </button>
          </div>
          <div className={`${navbarOpen ? "flex h-[calc(100vh-64px)]" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col mt-4 space-y-8 uppercase md:font-light md:space-x-8 md:space-y-0 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
              <li>
                <Link href="#home" className="block text-white text-lg md:text-sm hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="#about" className="block text-white text-lg md:text-sm hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link href="#experience" className="block text-white text-lg md:text-sm hover:text-gray-300">Experiences</Link>
              </li>
              <li>
                <Link href="#project" className="block text-white text-lg md:text-sm hover:text-gray-300">Projects</Link>
              </li>
              <li>
                <Link href="#skill" className="block text-white text-lg md:text-sm hover:text-gray-300">Skills</Link>
              </li>
              <li className="md:hidden mt-3">
                <a href="mailto:gafarbagas.jobs@gmail.com" className="flex items-center text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:text-gray-300 hover:border-gray-300">
                  <span className="mr-2">Send Me Email</span>
                  <Image src="/mail.svg" alt="mail" className="h-5 w-5" width={300} height={300} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}