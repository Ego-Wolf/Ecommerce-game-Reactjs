import React, {useState} from 'react'
import './SideMenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'

function SideMenu() {
  const [navData, setNavData] = useState(navListData);
  return (
    <div className="sideMenu">
        <a href="#" className="logo">
            <i class="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
          {navData.map(item => (
            <NavListItem key={item._id} item={item} />
          ))}
        </ul>

        <ul className="social">
          li
        </ul>

    </div>
  );
}

export default SideMenu;
