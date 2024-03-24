import React, {useState, useEffect, useRef} from 'react'
import './Main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import MyBag from './MyBag';



function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();


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

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <main>
        <SideMenu active={active}/>
        <div className={`banner ${active ? 'active' : undefined}`}>
          <Header toggleActive={handleToggleActive}/>
          <div className="container-fluid">
            <Home games={games} reference={homeRef}/>
            <Categories games={games} reference={categoriesRef}/>
            <MyLibrary games={games} reference={libraryRef}/>
            <MyBag games={games} reference={bagRef}/>
          </div>
        </div>
    </main>
  )
}

export default Main

