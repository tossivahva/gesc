import {CpuChipIcon, CubeIcon, DocumentDuplicateIcon, TruckIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function CompanyPros(){
 return(
    <>
       <div className='w-full '>
          <div className='sm:m-auto mx-3 max-w-screen-xl sm:py-32 py-8'>
             <div className='w-full h-full flex sm:flex-row flex-col'>
                <div className='w-full py-9'>
                   <div className='w-full'>
                      <div className='w-full py-6'>
                         <span className='w-full sm:text-xl text-lg uppercase font-medium text-orange-500'>Мы предлагаем</span>
                      </div>
                      <ul className='sm:text-2xl text-xl font-medium text-navy-main max-w-[500px]'>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <CpuChipIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full self-center ml-2'>Широкая линейка товаров</span>
                         </li>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <DocumentDuplicateIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full self-center ml-2'>Легальный параллельный импорт</span>
                         </li>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <CubeIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full self-center ml-2'>Наличие на стоках</span>
                         </li>
                         <li className='w-full h-full flex flex-row align-middle py-4 border-b-blue-200 border-b'>
                            <TruckIcon width={56} height={56} className='stroke-orange-500'/><span className='w-full h-full self-center ml-2'>Быстрая доставка</span>
                         </li>
                      </ul>
                   </div>
                </div>
                <div className='w-full invisible sm:visible hidden sm:block'>
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

