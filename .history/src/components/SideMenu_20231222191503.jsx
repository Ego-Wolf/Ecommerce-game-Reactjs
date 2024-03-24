import React, {useState} from 'react'
import './SideMenu.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'
import socialListData from '../data/socialListData'
import SocialListItem from './SocialListItem'

function SideMenu({ active }) {
  const [navData, setNavData] = useState(navListData);
  const [socialData, setSocialData] = useState(socialListData);

  // function every time click into the items in sideMenu will changing another tab

  const handleNavOnClick = (id) => {
    const newNavData = navData.map(nav => {
      nav.active = false;
      if(nav._id === id) nav.active = true;
      return nav;
    });
    setNavData(newNavData);
  }
x
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
        <a href="#" className="logo">
            <i class="bi bi-controller"></i>
            <span className="brand">Play</span>
        </a>
        <ul className="nav">
          {navData.map(item => (
            <NavListItem 
            key={item._id} 
            item={item} 
            navOnClick={handleNavOnClick} />
          ))}
        </ul>

        <ul className="social">
          {socialData.map(item => (
            <SocialListItem key={item._id} item={item} />
          ))}
        </ul>

    </div>
  );
}

export default SideMenu;
