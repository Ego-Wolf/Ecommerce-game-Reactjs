import React from 'react'
import './SideMenu.css'

function SideMenu() {
  return (
    <div className="sideMenu">
        <a href="#" className="log">
            <i class="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
          <li><a href="#"><i class="bi bi-houses-fill"></i></a></li>
          <li><a href="#"><i class="bi bi-houses-fill"></i></a></li>
          <li><a href="#"><i class="bi bi-houses-fill"></i></a></li>
          <li><a href="#"><i class="bi bi-houses-fill"></i></a></li>
          <li><a href="#"><i class="bi bi-houses-fill"></i></a></li>
        </ul>
    </div>
  )
}

export default SideMenu
