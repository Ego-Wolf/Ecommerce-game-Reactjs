import React, {useState} from 'react'
import './SideMenu.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'
import socialListData from '../data/socialListData'

function SideMenu() {
  const [navData, setNavData] = useState(navListData);
  const [socialData, setSocialData]
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
          
        </ul>

    </div>
  );
}

export default SideMenu;
