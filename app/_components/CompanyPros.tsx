import {CpuChipIcon, CubeIcon, DocumentDuplicateIcon, TruckIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function CompanyPros(){
 return(
    <>
       <div className='w-full '>
          <div className='m-auto max-w-screen-xl py-32'>
             <div className='w-full h-full flex flex-row'>
                <div className='w-full py-9'>
                   <div className='w-[500px]'>
                      <div className='w-full py-6'>
                         <span className='w-full text-xl uppercase font-medium text-orange-500'>Мы предлагаем</span>
                      </div>
                      <ul>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <CpuChipIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full text-2xl font-medium self-center text-navy-main ml-2'>Широкая линейка товаров</span>
                         </li>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <DocumentDuplicateIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full text-2xl font-medium self-center text-navy-main ml-2'>Легальный параллельный импорт</span>
                         </li>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <CubeIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full text-2xl font-medium self-center text-navy-main ml-2'>Наличие на стоках</span>
                         </li>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <TruckIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full text-2xl font-medium self-center text-navy-main ml-2'>Быстрая доставка</span>
                         </li>
                      </ul>
                   </div>
                </div>
                <div className='w-full'>
                   <div>
                      <Image src='/comp-pros.png' alt='amd' width={700} height={500}/>
                   </div>
                </div>
             </div>
             <div className='w-full h-full'>
                <div></div>
             </div>
          </div>
       </div>
    </>
 )

}

