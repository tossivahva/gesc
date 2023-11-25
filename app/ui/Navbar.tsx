import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className='fixed flex w-full h-20 bg-navy-main/[.1] backdrop-blur-xl place-content-center border-b-cyan-700 border-b z-50'>
         <div className='flex justify-between items-center w-full h-full px-4 max-w-screen-2xl'>
            <Link href='/'>
               <Image src='gesc-logo-light.svg'
                      alt='GES Computer Logo'
                      width={220}
                      height={50}
               />
            </Link>
            <div>
               <ul className='hidden sm:flex text-white'>
                  <Link href='#'>
                     <li className='ml-10 text-lg'>Компания</li>
                  </Link>
                  <Link href='#'>
                     <li className='ml-10 text-lg'>Продукция</li>
                  </Link>
                  <Link href='#'>
                     <li className='ml-10 text-lg'>Гарантия</li>
                  </Link>
                  <Link href='#'>
                     <li className='ml-10 text-lg'>Контакты</li>
                  </Link>
               </ul>
            </div>
            <div>
               <button
                  className='bg-orange-500 hover:bg-orange-600 text-lg text-white font-medium py-2 px-4 rounded-lg'>
                  Стать партнером
               </button>
            </div>
         </div>
      </nav>
   );
};
