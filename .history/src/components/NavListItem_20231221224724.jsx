import React from 'react'
import './NavListItem.css'

function NavListItem({ item }) {
  return (
    <li>
        <a href="#">
            <i class="`bi ${}`"></i> {item.name}
        </a>
    </li>
  )
}

export default NavListItem
