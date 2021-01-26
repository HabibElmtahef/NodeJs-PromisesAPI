import {useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Bodyy from './body'
import { DataProvider, GlobalState } from './ContextApi/GlobalState'

function App() {
/*
  const [games, setGames] = useState([])
  const getGames =async () => {
    const res = await Axios.get('http://localhost:5000/game')
        setGames(res.data) 
  }
  useEffect(() => {
    getGames()
  
  }, [])
*/

  
  return (
    <DataProvider>
    <div className="App">
      <Bodyy></Bodyy>
    </div>
    </DataProvider>

  );
}

export default App;
