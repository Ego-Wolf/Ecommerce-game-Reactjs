import React from 'react'
import './Categories.css'

function Categories({ games, reference}) {
  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid"></div>
        <h1>Categories</h1>
    </section>
  )
}

export default Categories
