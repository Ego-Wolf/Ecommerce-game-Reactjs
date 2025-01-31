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
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'

function GameSwiper({ games }) {
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
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className='gameSwiper'
    >

        {
            games.map(game=>(
                <SwiperSlide key={game._id}>
                    <div className="gameSlider">
                        <img src={""} alt="Game Image" />
                    </div>
                </SwiperSlide>
            ))
        }

    </Swiper>
  )
}

export default GameSwiper
