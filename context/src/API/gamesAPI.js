import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function GamesAPI() {
    const [games, setGames] = useState([])
     const getGames = async () => {
            const res = await Axios.get('http://localhost:5000/game')
            setGames(res.data)
        }
    useEffect(() => {
      getGames()
    }, [])
       
    return { 
        games: [games, setGames] 
    }

}

export default GamesAPI
