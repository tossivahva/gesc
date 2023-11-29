import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
   return (
      <footer className='bg-navy-main w-full h-full pt-20 pb-10 border-t-blue-400/[.5] border-t'>
         <div className='w-full h-full m-auto max-w-screen-xl'>
            <div className='flex w-full h-full justify-center gap-5'>
               <div className='w-full relative'>
                  <div className='text-4xl text-white font-semibold pb-5'>Адреса</div>
                  <div>
                     <div className='text-amber-100 text-lg font-semibold pb-3'>
                        GES Computers Головной офис
                     </div>
                     <div className='text-white text-[16px] font-normal pb-3'>
                        <div className='pb-3'>Санкт-Петербург, Выборская набережная,
                           д.43
                        </div>
                        <div className='hover:underline pb-3'>
                           <a href='tel:+78124956555'>
                              <div>+7 (812) 495-65-55</div>
                           </a>
                        </div>
                        <div className='hover:underline text-orange-500 pb-3'>
                           <a href='mailto:info@gescomputers.ru'>
                              <div>info@gescomputers.ru</div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className='absolute bottom-0 left-0'>
                     <Link href='/'>
                        <Image src='gesc-logo-light.svg'
                               alt='GES Computer Logo'
                               width={180}
                               height={50}/>
                     </Link>
                  </div>
               </div>
               <div className='w-full'>
                  <div className='text-4xl text-white font-semibold pb-5'>Оставьте заявку</div>
                  <div className='mt-4'>
                     <input type='text'
                            placeholder='Имя'
                            className='block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm placeholder:text-navy-main font-medium focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-lg'/>
                  </div>
                  <div className='mt-4'>
                     <input type='email'
                            placeholder='Email'
                            className='block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm placeholder:text-navy-main font-medium focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-lg'/>
                  </div>
                  <div className='flex justify-between gap-2 mt-4'>
                     <input type='tel'
                            placeholder='Телефон'
                            className='block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm placeholder:text-navy-main font-medium focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-lg'/>
                     <input type='text'
                            placeholder='Компания'
                            className='block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm placeholder:text-navy-main font-medium focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-lg'/>
                  </div>
                  <div className='flex justify-between gap-2 mt-4'>
                  <textarea id='message'
                            name='Message'
                            placeholder='Сообщение'
                            rows={4}
                            className='block w-full rounded-xl border-0 py-4 text-gray-900 shadow-sm placeholder:text-navy-main font-medium focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-lg'
                            defaultValue={''}/>
                  </div>
                  <div className='flex justify-between gap-2 mt-4'>
                     <button type='submit'
                             className='bg-orange-500 hover:bg-orange-600 text-lg text-white font-medium py-2 px-4 rounded-lg'>
                        Отправить
                     </button>
                  </div>
               </div>
            </div>
            <div className='w-full h-full flex justify-center pt-12 pb-8'>
               <div className='text-white font-thin text-sm'>
                  2003-2023 © GES Computers. Все права защищены.
               </div>
            </div>
         </div>
      </footer>
   );
};