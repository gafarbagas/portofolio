'use client'

import Link from 'next/link';
import { useState } from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 bg-[#000000]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="logo.svg" className="h-8" alt="Gaabs" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="mailto:gafarbagas.jobs@gmail.com" className="hidden md:block text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:opacity-80" target="_blank">
              <div className="flex items-center">
                <span className="mr-2">Send Me Email</span>
                <img src="/mail.svg" alt="mail" className="h-5 w-5" />
              </div>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`${navbarOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 bg-gray-700 font-light uppercase rounded-xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent">
              <li>
                <Link href="/" className="block py-2 px-3 text-white text-sm md:p-0 hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="#about" className="block py-2 px-3 text-white text-sm md:p-0 hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link href="#project" className="block py-2 px-3 text-white text-sm md:p-0 hover:text-gray-300">Project</Link>
              </li>
              <li>
                <Link href="#skill" className="block py-2 px-3 text-white text-sm md:p-0 hover:text-gray-300">Skill</Link>
              </li>
              <li>
                <Link href="#experience" className="block py-2 px-3 text-white text-sm md:p-0 hover:text-gray-300">Experience</Link>
              </li>
              <li>
                <Link href="#contact" className="block py-2 px-3 text-white text-sm md:p-0 hover:text-gray-300">Contact</Link>
              </li>
              <li className="md:hidden mt-3">
                <a href="mailto:gafarbagas.jobs@gmail.com" className="flex items-center text-white font-light rounded-full text-sm px-4 py-2 text-center border border-white hover:text-gray-300 hover:border-gray-300">
                  <span className="mr-2">Send Me Email</span>
                  <img src="/mail.svg" alt="mail" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}