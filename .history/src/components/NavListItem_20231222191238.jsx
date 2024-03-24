import React from 'react'
import './NavListItem.css'

function NavListItem({ item, navOnClick }) {
  return (
    <li>
        <a href="#" onclick={}>
            <i className={`bi ${item.icon}`}></i> 
            <span className="navName">{item.name}</span>
        </a>
    </li>
  )
}

export default NavListItem
