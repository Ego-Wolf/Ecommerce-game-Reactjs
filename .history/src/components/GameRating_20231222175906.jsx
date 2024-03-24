import React, {useState, useEffect} from 'react'
import './GameRating.css'

function GameRating({ rating }) {
    const [stars, setStarts] = useState([])

    const generateStarts = () => {
        let starts = [];
        if( rating>5 || rating<1) {
            return;
        }
        for (let i=0; i < rating; i++) {
            starts.push(i);
        }
        return starts;
    };

    useEffect(()=>{
        setStarts(generateStarts());
    },[])


  return (
    <div className="gameRating">
        {starts.map(star=>(
            <i className="bi bi-starts-fill"></i>
        ))}
    </div>
  )
}

export default GameRating
