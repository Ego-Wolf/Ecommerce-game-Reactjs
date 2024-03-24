import React, {useState, use} from 'react'
import './Main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home';

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleToggleActive = () => {
    setActive(!active);

  };

  const fetchData  = () => {
    fetch('http://localhost:3000/api/gamesData.json')
      .then(res=>res.json())
      .then(data=>{
        setGames(data);
        console.log(data)
      })
      .catch(e=>console.log(e.message));
  }


  return (
    <main>
        <SideMenu active={active}/>
        <div className={`banner ${active ? 'active' : undefined}`}>
          <Header toggleActive={handleToggleActive}/>
          <div className="container-fluid">
            <Home/>
          </div>
        </div>
    </main>
  )
}

export default Main


