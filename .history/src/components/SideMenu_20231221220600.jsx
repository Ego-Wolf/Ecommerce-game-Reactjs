import React from 'react'
import './SideMenu.css'
import NavListItem from './NavListItem'

function SideMenu() {
  return (
    <div className="sideMenu">
        <a href="#" className="log">
            <i class="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
          <NavListItem/>
        </ul>
    </div>
  )
}

export default SideMenu
