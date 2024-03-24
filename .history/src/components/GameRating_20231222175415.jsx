import React, {useState} from 'react'
import './GameRating.css'

function GameRating({ rating }) {
    const [starts, setStarts] = useState([])

    const generateStarts = () => {
        let starts = []
        if{ rating>5 || rating<1} {
            
        }
    }

  return (
    <div className="gameRating">

    </div>
  )
}

export default GameRating
