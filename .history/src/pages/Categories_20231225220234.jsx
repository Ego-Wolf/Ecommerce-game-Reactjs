import React from 'react'
import './Categories.css'

function Categories({ games, reference}) {
  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row"></div>
      </div>
    </section>
  )
}

export default Categories
