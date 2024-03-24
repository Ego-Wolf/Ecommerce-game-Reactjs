import React from 'react'
import './MyBag.css'

function MyBag({ games, reference}) {
  return (
    <section id="bag" className='bag' ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>My Bag</h1>
          </div>
        </div>
        {
          games.length === 0 ? (
            <h2>Your bag is empty</h2>
          ) : (
            <>
              <div class="row">
                
              </div>
            </>
          )
        }
    </section>
  )
}

export default MyBag
