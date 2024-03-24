import React, {useState} from 'react'
import './SideMenu.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'
import socialListData from '../data/socialListData'
import SocialListItem from './SocialListItem'

function SideMenu() {
  const [navData, setNavData] = useState(navListData);
  const [socialData, setSocialData] = useState(socialData);

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
          {socialData.map(item => (
            <SocialListItem key={item._id} item/>
          ))}
        </ul>

    </div>
  );
}

export default SideMenu;
