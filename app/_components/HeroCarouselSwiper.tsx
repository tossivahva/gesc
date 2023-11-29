'use client';

// Import Swiper React _components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/react';
import 'swiper/css';

import '@/app/globals.css';

// import required modules
import {Autoplay} from 'swiper/modules';
import Image from 'next/image';

export default function HeroCarouselSwiper() {
   return (
      <>
         <Swiper slidesPerView={5} spaceBetween={20} centeredSlides={false} loop={true} autoplay={{
            delay: 1000,
         }} pagination={{
            clickable: false
         }} navigation={false} modules={[Autoplay]} className='mySwiper'>
            <SwiperSlide><Image src='/intel_logo.png' alt='intel' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/nvidia_logo.png' alt='nvidia' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/amd_logo.png' alt='amd' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/samsung_logo.png' alt='samsung' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/creative_logo.png' alt='creative' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/msi_logo.png' alt='msi' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/asus_logo.png' alt='asus' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/palit_logo.png' alt='palit' width={100} height={100}/></SwiperSlide>
            <SwiperSlide><Image src='/sapphire_logo.png' alt='sapphire' width={100} height={100}/></SwiperSlide>
         </Swiper>
      </>
   );
}