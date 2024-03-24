import React from 'react'
import './Categories.css'

function Categories({ games, reference}) {
  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <col-lg-8>
          <ul></ul>
          </col-lg-8>
          <col-lg-4></col-lg-4>
        </div>
      </div>
    </section>
  )
}

export default Categories
