import HeroCarouselSwiper from '@/app/ui/home/HeroCarouselSwiper';

export default function Hero() {
   return (
      <>
         <div className='relative flex overflow-hidden w-full h-full'>
            <div className='flex flex-auto z-30 bg-gradient-to-r from-[#112b43] via-[#0d4c84]/[.6] via-80%'>
               <div className='max-h-[1500px] w-full h-[calc(100vh-80px)] flex max-w-screen-2xl items-center m-auto columns-2'>
                  <div className='w-1/2'>
                     <div className='w-full text-xl text-white uppercase my-4'>
                        Ваш партнер в дистрибьюции
                     </div>
                     <div className='h-full inline-block flex-col text-8xl text-black -ml-2'>
                        <span className='block text-white'>Качественно</span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-tr to-[#319efc] from-[#79dfff]'>
                        Надежно <br/>
                        Быстро
                     </span>
                     </div>
                  </div>
                  <div className='absolute bottom-10'>
                     <div className='text-xl uppercase text-white mb-10'>
                        Бренды на стоке
                     </div>
                     <div>
                        <HeroCarouselSwiper/>
                     </div>
                  </div>
               </div>
            </div>
            <video autoPlay={true} loop={true} muted={true} className='absolute z-10 w-auto min-w-full min-h-full max-w-none max-h-none'>
               <source src='/ges-hero-video-bg.mp4' type='video/mp4'/>
            </video>
         </div>
      </>
   );
}