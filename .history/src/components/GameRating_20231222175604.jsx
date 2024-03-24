import React, {useState} from 'react'
import './GameRating.css'

function GameRating({ rating }) {
    const [starts, setStarts] = useState([])

    const generateStarts = () => {
        let starts = [];
        if( rating>5 || rating<1) {
            return
        }
        for (let i=0; i < rating; i++) {
            start.push(i)
        }
        return starts;
    }

  return (
    <div className="gameRating">

    </div>
  )
}

export default GameRating
