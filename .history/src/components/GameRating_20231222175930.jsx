import React, {useState, useEffect} from 'react'
import './GameRating.css'

function GameRating({ rating }) {
    const [stars, setStars] = useState([])

    const generateStars = () => {
        let stars = [];
        if( rating>5 || rating<1) {
            return;
        }
        for (let i=0; i < rating; i++) {
            stars.push(i);
        }
        return stars;
    };

    useEffect(()=>{
        setStarts(generateStars());
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