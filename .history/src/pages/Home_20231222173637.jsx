import React from 'react'
import './Home.css'
import GameSwiper from '../components/GameSwiper'

function Home({ games }) {
  return (
    <section id="home"  className='home active'>
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games}/>
        </div>
        <div className="row">
          <div className="col-lg-6">
            .section
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
