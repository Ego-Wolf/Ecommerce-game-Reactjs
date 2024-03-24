import React from 'react'
import './NavListItem.css'

function NavListItem({ item }) {
  return (
    <li>
        <a href="#">
            <i className="{`bi ${item.icon}`}"></i> 
        </a>
    </li>
  )
}

export default NavListItem
