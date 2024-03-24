import React from 'react'
import './MyBag.css'

function MyBag({ games, reference}) {
  return (
    <section id="bag" className='bag' ref={reference}>
        <h1>My Bag</h1>
    </section>
  )
}

export default MyBag
