"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className='w-0 h-0 hidden'>Gafar Bagas</h1>
      <div className='flex justify-center p-6'>
        <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image src='logo.svg' className='h-8' alt='Gaabs' width={300} height={300} />
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-7'>
        <h2 className='mb-8 text-center'>Check out my latest updates!</h2>
        <div className='flex flex-col space-y-5 w-full max-w-md'>
          <a href='https://gafarbagas.vercel.app' className='w-full px-6 py-4 flex items-center border border-gray-300 rounded-full' target='_blank'>
            <Image src='/globe.svg' alt='website' className='h-7 w-7 mr-5' width={300} height={300} />
            <span>My Website</span>
          </a>
          <a href='https://instagram.com/gafarbagas' className='w-full px-6 py-4 flex items-center border border-gray-300 rounded-full' target='_blank'>
            <Image src='/instagram.svg' alt='instagram' className='h-7 w-7 mr-5' width={300} height={300} />
            <span>Instagram</span>
          </a>
          <a href='https://linkedin.com/in/gafarbagashabibi' className='w-full px-6 py-4 flex items-center border border-white rounded-full' target='_blank'>
            <Image src='/linkedin.svg' alt='linkedin' className='h-7 w-7 mr-5' width={300} height={300} />
            <span>LinkedIn</span>
          </a>
          <a href='https://x.com/gafarbagas' className='w-full px-6 py-4 flex items-center border border-gray-300 rounded-full' target='_blank'>
            <Image src='/x.svg' alt='x-twitter' className='h-7 w-7 mr-5' width={300} height={300} />
            <span>Twitter / X</span>
          </a>
          <a href='https://github.com/gafarbagas' className='w-full px-6 py-4 flex items-center border border-gray-300 rounded-full' target='_blank'>
            <Image src='/github.svg' alt='github' className='h-7 w-7 mr-5' width={300} height={300} />
            <span>Github</span>
          </a>
          <a href='https://gitlab.com/gafarbagas' className='w-full px-6 py-4 flex items-center border border-gray-300 rounded-full' target='_blank'>
            <Image src='/gitlab.svg' alt='gitlab' className='h-7 w-7 mr-5' width={300} height={300} />
            <span>Gitlab</span>
          </a>
        </div>
      </div>
    </>
  );
}
