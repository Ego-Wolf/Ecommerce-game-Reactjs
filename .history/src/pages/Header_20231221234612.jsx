import React from 'react'
import './Header.css'
import userImg from '../images/user.jpg'

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
                <a href="#"><img src={im}" alt="User Image" /></a>
                <div className="user">
                    <span>User Name</span>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
