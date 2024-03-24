import React, {useState} from 'react'
import './SideMenu.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'

function SideMenu() {
  const [navData, setNavData] = useState(navListData);
  return (
    <div className="sideMenu">
        <a href="#" className="log">
            <i class="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
          {
            navData.map(item=<NavListItem/>>)
          }
          
        </ul>
    </div>
  )
}

export default SideMenu
