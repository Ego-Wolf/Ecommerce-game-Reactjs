import React from 'react'
import './Categories.css'
import filterListData from '../data/filterListData'


function Categories({ games, reference}) {
  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className='col-lg-8'>
            <ul className='filters'>

            </ul>
          </div>
          <col-lg-4></col-lg-4>
        </div>
      </div>
    </section>
  )
}

export default Categories
