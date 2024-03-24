import React from 'react'
import './MyLibrary.css'

function MyLibrary({ games, reference }) {
  return (
    <section id="library" className='library' ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>My Library</h1>
          </div>
          <div className="row">
            {
              games.length === 0 ? (
                <h2>Your library is empty</h2>
              ) : (
                games.map(game=>)
              )
            }
          </div>
        </div>
    </section>
  )
}

export default MyLibrary
