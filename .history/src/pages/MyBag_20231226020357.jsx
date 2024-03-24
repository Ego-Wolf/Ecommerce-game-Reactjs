import React from 'react'
import './MyBag.css'

function MyBag({ games, reference}) {
  return (
    <section id="bag" className='bag' ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            
          </div>
        </div>
    </section>
  )
}

export default MyBag
