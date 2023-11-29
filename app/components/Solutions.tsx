import Image from 'next/image';
import {CubeIcon, DocumentDuplicateIcon, TruckIcon} from '@heroicons/react/24/outline';
import React from 'react';

export default function Solutions() {
   return (
      <>
         <div className='w-full h-full bg-navy-main py-32'>
            <div className='w-full h-full'>
               <div className='w-full h-full flex justify-center m-auto max-w-screen-xl'>
                  <div className='grid grid-cols-2'>
                     <div className='relative w-full h-full py-5 max-h-[360px] pr-20'>
                        <div className='text-4xl text-white font-semibold w-full mb-5'>
                           Комплексные решения дистрибьюции
                        </div>
                        <div className='w-full text-xl text-white font-medium mt-5'>
                           Наш богатый опыт работы поставки оборудования выведет Вас на новый уровень.
                        </div>
                     </div>
                     <div className='relative w-full h-full max-h-[360px]'>
                        <div className='absolute bottom-0 left-0 w-full z-10 p-5'>
                           <div className='py-3'>
                              <DocumentDuplicateIcon width={56} height={56} className='stroke-orange-500'/>
                              <span className='w-full h-full text-2xl font-semibold text-white'>
                                    Component Sourcing
                                 </span>
                           </div>
                           <span className='w-full h-full text-lg font-medium text-white py-3'>
                                 Providing you with a seamless and efficient experience while sourcing parts for your projects.
                              </span>
                           <div className='w-full h-full py-3 hidden'>
                              <button className='bg-orange-500 hover:bg-orange-600 text-lg text-white font-medium py-2 px-4 rounded-lg'>
                                 Узнать больше
                              </button>
                           </div>
                        </div>
                        <Image src='/solutions-management.jpg' alt='Solutions Management' width={1000} height={1000} className='w-full h-full z-0'/>
                     </div>
                     <div className='relative w-full h-full max-h-[360px]'>
                        <div className='absolute bottom-0 left-0 w-full z-10 p-5'>
                           <div className='py-3'>
                              <CubeIcon width={56} height={56} className='stroke-orange-500'/>
                              <span className='w-full h-full text-2xl font-semibold text-white'>
                                    Component Sourcing
                                 </span>
                           </div>
                           <span className='w-full h-full text-lg font-medium text-white py-3'>
                                 Providing you with a seamless and efficient experience while sourcing parts for your projects.
                              </span>
                           <div className='w-full h-full py-3 hidden'>
                              <button className='bg-orange-500 hover:bg-orange-600 text-lg text-white font-medium py-2 px-4 rounded-lg'>
                                 Узнать больше
                              </button>
                           </div>
                        </div>
                        <Image src='/solutions-stock.jpg' alt='Solutions Management' width={1000} height={1000} className='w-full h-full z-0'/>
                     </div>
                     <div className='relative w-full h-full max-h-[360px]'>
                        <div className='absolute bottom-0 left-0 w-full z-10 p-5'>
                           <div className='py-3'>
                              <TruckIcon width={56} height={56} className='stroke-orange-500'/>
                              <span className='w-full h-full text-2xl font-semibold text-white'>
                                    Component Sourcing
                                 </span>
                           </div>
                           <span className='w-full h-full text-lg font-medium text-white py-3'>
                                 Providing you with a seamless and efficient experience while sourcing parts for your projects.
                              </span>
                           <div className='w-full h-full py-3 hidden'>
                              <button className='bg-orange-500 hover:bg-orange-600 text-lg text-white font-medium py-2 px-4 rounded-lg'>
                                 Узнать больше
                              </button>
                           </div>
                        </div>
                        <Image src='/solutions-delivery.jpeg' alt='Solutions Management' width={1000} height={1000} className='w-full h-full z-0'/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}