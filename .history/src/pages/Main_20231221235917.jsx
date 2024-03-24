import React, {useState} from 'react'
import './Main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'

function Main() {
  const [active, setActive] = useState(false);

  const handleToggleActive()=>
  return (
    <main>
        <SideMenu/>
        <div className="banner">
          <Header/>
        </div>
    </main>
  )
}

export default Main
