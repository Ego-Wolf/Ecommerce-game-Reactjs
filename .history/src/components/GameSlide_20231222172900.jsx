import React from 'react'

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

import './GameSlide.css'


function GameSlide({ game, active, to }) {
  return (
    <SwiperSlide>
        <div className="gameSlider">
            <img src={game.img} alt="Game Image" />
            <div className={`video ${active? 'active' : undefined}`}>
                <iframe 
                width="1229" 
                height="691" 
                src={game.trailer}
                title={game.title} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            </div>
            <div className="content">
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                    <a href="#" className="orderBtn">Order Now</a>
                    <a href="#" className={`playBtn ${active ? 'active' : undefined}`} onClick={handleToggleVideo}>
                        <span className="pause">
                            <i class="bi bi-pause-fill"></i>
                        </span>
                        <span className='play'>
                            <i class="bi bi-play-fill"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </SwiperSlide>
  )
}

export default GameSlide
