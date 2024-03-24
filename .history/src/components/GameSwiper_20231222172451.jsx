import React, {useState} from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// css nên để sau import của swiper để nó có thể overwrite edit của swiper
import './GameSwiper.css'

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'
import GameSlide from './GameSlide';

function GameSwiper({ games }) {
    const [active, setActive] = useState(false);

    const handleToggleVideo = ()=> {
        setActive(!active);
    }

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

        {games.map(game=>(
            <GameSlide key={game._id}></GameSlide>
        ))
        }
    </Swiper>
  )
}

export default GameSwiper
