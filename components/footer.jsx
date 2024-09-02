import Link from "next/link";

export default function Footer() {
    return (
      <footer className="h-36 flex flex-col justify-between">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse mb-6 md:mb-0">
            <img src="logo.svg" className="h-8" alt="Gaabs" />
          </Link>
          <div className="flex flex-wrap justify-center space-x-3 md:space-x-5 mb-6 md:mb-0">
            <a href="https://linkedin.com/in/gafarbagashabibi" className="text-center" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
            </a>
            <a href="https://github.com/gafarbagas" className="text-center" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="h-7 w-7" />
            </a>
            <a href="https://gitlab.com/gafarbagas" className="text-center" target="_blank" rel="noopener noreferrer">
              <img src="/gitlab.svg" alt="GitLab" className="h-7 w-7" />
            </a>
            <a href="https://instagram.com/gafarbagas" className="text-center" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="h-7 w-7" />
            </a>
            <a href="https://x.com/gafarbagas" className="text-center" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="X" className="h-7 w-7" />
            </a>
          </div>
          {/* <div className="flex flex-col items-center md:items-start">
            <a href="mailto:gafarbagas.jobs@gmail.com" className="text-gray-300">gafarbagas.jobs@gmail.com</a>
          </div> */}
        </div>
        <div className="font-light pb-8">
          © 2024 - ALL RIGHT RESERVED
        </div>
      </footer>
    );
  }