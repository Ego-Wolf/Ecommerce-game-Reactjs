import React from 'react'
import './Categories.css'
import filterListData from '../data/filterListData'


function Categories({ games, reference}) {
  const [filters, setFilters] = useState(filterListData)

  return (
    <section id="categories" className='categories' ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className='col-lg-8'>
            <ul className='filters'>
              {
                filters.map(filter=>(
                  <li key={filter._id}>x{filter.mame}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='col-lg-4'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
