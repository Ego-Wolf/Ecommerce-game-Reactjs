import React from 'react'
import './GameCard.css'

function GameCard({ game }) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
        <img src={game.img} alt={game.title} className='img-fluid' />
        <a href="#"><i className=''></i></a>
    </div>
  )
}

export default GameCard
