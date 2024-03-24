import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <a href="#" className='menu'><i class="bi bi-sliders"></i></a>
        <div className="userItems">
            <a href="#" className="icon">
                <i class="bi bi-arrow-through-heart-fill"></i>
                <span className='like'>0</span>
            </a>
            <a href="#" className="icon">
                <i class="bi bi-backpack2-fill"></i>
                <span className="bag">0</span>
            </a>
            <div className="avatar">
                <a href="#"><img src="" alt="User Image" /></a>
            </div>
        </div>
    </header>
  )
}

export default Header
