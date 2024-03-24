import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <a href="#" className='menu'><i class="bi bi-sliders"></i></a>
        <div className="userItems">
            <a href="#" className="icon">
                <i class="bi bi-arrow-through-heart-fill"></i></a>
            <a href="#" className="icon"><i class="bi bi-backpack2-fill"></i></a>
        </div>
    </header>
  )
}

export default Header
