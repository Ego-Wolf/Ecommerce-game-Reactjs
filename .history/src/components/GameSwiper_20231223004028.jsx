import React, {useState} from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper } from 'swiper/react';

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
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, ]}
        className="mySwiper"
      >

        {games.map(game=>(
            <SwiperSlide key={game._id}>
                <GameSlide 
                key={game._id} 
                game={game}
                active={active} 
                toggleVideo={handleToggleVideo}/>
            </SwiperSlide>
        ))
        }
    </Swiper>
  )
}

export default GameSwiper
