import React, {useState} from 'react';
import './App.css';
import Main from "./pages/Main";

export const AppContext = React.createContext();

function App() {
  const [library, setLibrary] = useState([])
  const [bag]


  return (
    <Main/>
  );
}

export default App;
