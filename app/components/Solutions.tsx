import Image from 'next/image';
import {CubeIcon, DocumentDuplicateIcon, TruckIcon} from '@heroicons/react/24/outline';
import React from 'react';

export default function Solutions() {
   return (
      <>
         <div className='w-full h-full bg-navy-main sm:py-32'>
            <div className='w-full h-full flex'>
               <div className='w-full h-full flex justify-center sm:m-auto sm:max-w-screen-xl'>
                  <div className='sm:grid sm:grid-cols-2 flex flex-col'>
                     <div className='sm:relative px-3 w-full h-full py-16 sm:max-h-[360px] sm:pr-20'>
                        <div className='text-4xl text-white font-semibold w-full mb-5'>
                           Комплексные решения дистрибьюции
                        </div>
                        <div className='w-full text-xl text-white font-medium mt-5'>
                           Наш богатый опыт работы поставки оборудования выведет Вас на новый уровень.
                        </div>
                     </div>
                     <div className='relative w-full h-full max-h-[360px]'>
                        <div className='absolute bottom-0 left-0 w-full z-10 p-5 bg-gradient-to-t from-black/[.8] to-transparent'>
                           <div className='py-3'>
                              <DocumentDuplicateIcon width={56}
                                                     height={56}
                                                     className='stroke-orange-500'/>
                              <span className='w-full h-full text-2xl font-semibold text-white'>
                                    Прозрачный документооборот
                                 </span>
                           </div>
                           <span className='w-full h-full text-lg font-medium text-white py-3'>
                                 Таможенная очистка и все необходимые документы для легальной торговли.
                              </span>
                        </div>
                        <Image src='/solutions-management.jpg'
                               alt='Solutions Management'
                               width={1000}
                               height={1000}
                               className='w-full h-full z-0'/>
                     </div>
                     <div className='relative w-full h-full max-h-[360px]'>
                        <div className='absolute bottom-0 left-0 w-full z-10 p-5 bg-gradient-to-t from-black/[.8] to-transparent'>
                           <div className='py-3'>
                              <CubeIcon width={56}
                                        height={56}
                                        className='stroke-orange-500'/>
                              <span className='w-full h-full text-2xl font-semibold text-white'>
                                    Близость складов
                                 </span>
                           </div>
                           <span className='w-full h-full text-lg font-medium text-white py-3'>
                                 Отгрузка со склада по основным брендам — в день заказа.
                              </span>
                        </div>
                        <Image src='/solutions-stock.jpg'
                               alt='Solutions Management'
                               width={1000}
                               height={1000}
                               className='w-full h-full z-0'/>
                     </div>
                     <div className='relative w-full h-full max-h-[360px]'>
                        <div className='absolute bottom-0 left-0 w-full z-10 p-5 bg-gradient-to-t from-black/[.8] to-transparent'>
                           <div className='py-3'>
                              <TruckIcon width={56}
                                         height={56}
                                         className='stroke-orange-500'/>
                              <span className='w-full h-full text-2xl font-semibold text-white'>
                                    Выгодная доставка
                                 </span>
                           </div>
                           <span className='w-full h-full text-lg font-medium text-white py-3'>
                                 Бесплатная доставка по РФ до склада транспортной компании в вашем городе.
                              </span>
                        </div>
                        <Image src='/solutions-delivery.jpeg'
                               alt='Solutions Management'
                               width={1000}
                               height={1000}
                               className='w-full h-full z-0'/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}