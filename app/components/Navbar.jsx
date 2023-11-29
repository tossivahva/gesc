'use client'

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

   const [animateHeader, setAnimateHeader] = useState(false);
   useEffect(() => {
      const listener = () => {
         if (window.scrollY > 200) {
            setAnimateHeader(true);
         } else setAnimateHeader(false);
      };
      window.addEventListener('scroll', listener);
      return () => {
         window.removeEventListener('scroll', listener);
      };
   }, []);

   return (
      <nav className={`fixed flex w-full h-20 bg-navy-main/[.1] place-content-center' +
   ' border-b-blue-400/[.5] border-b z-50 transition ease-in-out duration-500 ${animateHeader && 'bg-[#0d4c84]' +
      ' backdrop-blur-3xl'}`}>
         <div className='flex justify-between items-center w-full h-full px-4 max-w-screen-2xl'>
            <Link href='/'>
               <Image src='gesc-logo-light.svg'
                      alt='GES Computer Logo'
                      width={220}
                      height={50}/>
            </Link>
            <div>
               <ul className='hidden sm:flex text-white text-lg font-semibold'>
                  <Link href='#'>
                     <li className='ml-10'>Компания</li>
                  </Link>
                  <Link href='#'>
                     <li className='ml-10'>Продукция</li>
                  </Link>
                  <Link href='#'>
                     <li className='ml-10'>Гарантия</li>
                  </Link>
                  <Link href='#'>
                     <li className='ml-10'>Контакты</li>
                  </Link>
               </ul>
            </div>
            <div>
               <button className='bg-orange-500 hover:bg-yellow-500 text-lg text-white hover:text-black font-medium py-3 px-8 rounded-xl'>
                  Стать партнером
               </button>
            </div>
         </div>
      </nav>
   );
};
