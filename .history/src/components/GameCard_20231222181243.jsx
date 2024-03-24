import React from 'react'
import './GameCard.css'
import GameRating from './GameRating'

function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gameCard">
        <img src={game.img} alt={game.title} className='img-fluid' />
        <a href="#" className='like'>
            <i className='bi bi-heart-fill'></i>
        </a>
        <div className="gameFeature">
            <span className="gameType">{game.level}</span>
            <GameRating rating={game.rating} />
        </div>
        <div className="gameTitle mt-4 mb-3">{game.title}</div>
        <div className="gamePrice">
            {game.discount != 0 &&  (
                    <>
                        <span className="discount">
                            <i>{game.discount*100}%</i>
                        </span>
                        <div className="prevPrice">${game.price.toFixed(2)}</div>
                    </>
                )
            }
            <span className="currentPrice">
                ${((1- game.discount)* game.price).toFixed(2)}
            </span>
        </div>
        <a href="#" className="addBag">
            <i className="bi bi-bag-plus-fill"></i>
        </a>
        </div>
    </div>
  )
}

export default GameCard