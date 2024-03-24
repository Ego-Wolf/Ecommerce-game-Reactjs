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
              <div className="row">
                <div className="table-responsive">
                  <table className="shopBagTable table table-borderless align-middle">
                    <thead>
                      <th scope="col">No.</th>
                      <th scope="col">No.</th>
                      <th scope="col">No.</th>
                      <th scope="col">No.</th>
                      <th scope="col"></th>
                      <th scope="col">Payment</th>
                      <th scope="col">Remove</th>
                    </thead>
                  </table>
                </div>
              </div>
            </>
          )
        }
    </section>
  )
}

export default MyBag
