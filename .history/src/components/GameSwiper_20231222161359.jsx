import React from 'react'
import './GameSwiper.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from ''

function GameSwiper() {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 35,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[]}
    >

    </Swiper>
  )
}

export default GameSwiper
