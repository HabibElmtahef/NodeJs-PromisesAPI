import {useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import {GlobalState} from './ContextApi/GlobalState'

const Bodyy = () => {
    const state = useContext(GlobalState)
    const [games, setGames] = state.gamesApi.games
    console.log(games)
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    //console.log(state.gamesApi.games[0])
//const [games, setGames] = state.gamesApi
   const addGame = async (e) => {
       e.preventDefault();
       const res = await Axios.post('http://localhost:5000/game/add', {
           name: name,
           genre: genre
       })
       console.log(res.data)
        Swal.fire(
      'Added!',
      'Your Game has been Added.',
      'success'
    )
   }

   const update =async (id) => {
       const res = await Axios.get(`http://localhost:5000/game/${id}`)
        const gm = res.data
        setName(gm.name)
        setGenre(gm.genre)
   }
 
//console.log(games)

  const deleteGame =  (id) => {
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
     Axios.delete(`http://localhost:5000/game/${id}`)
     setGames(games.filter(elem => elem.id != id))
    Swal.fire(
      'Deleted!',
      'Your Game has been deleted.',
      'success'
    )
  }
})
   
  } 
     
    return (
        <div className="container py-3">
        <h1 className="text-center pb-3">Games Context Api</h1>
        <form onSubmit= {e => addGame(e)} className="pb-3">
            <div className="form-group">
                <input type="text" placeholder="Name" value={name} onChange = {e => setName(e.target.value)}  className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Genre" value={genre} onChange = {e => setGenre(e.target.value)}  className="form-control"/>
            </div>
            <button className="btn btn-success"> Add Game</button>
        </form>
       <table className="table table-dark ">
        <thead>
          <tr>
            
            <th scope="col">Name</th>
            <th scope="col">Genre</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {games.map(item => (

          <tr key={item.id}>
            <td>{item.name}</td>
            <td> {item.genre} </td>
            <td><div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px'
            }}>
              <button className="btn btn-danger btn-block" onClick={e => deleteGame(item.id)} style={{width: '180px', height: '40px', marginRight:"20px"}}>Delete</button>
              <button className="btn btn-warning btn-block" onClick={e => update(item.id)} style={{width: '180px', height: '40px'}}>Update</button>
            </div></td>
          </tr>

        ))}
          
          
        </tbody>
      </table>
        
      </div>
    )
}

export default Bodyy
