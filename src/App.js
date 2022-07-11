import React, {useState, useEffect} from "react"
import './App.css';
import NewMovie from "./component/NewMovie";
import MovieList from "./component/movieList";
function App() {
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addMovie, setAddMovie] = useState([]);
  const[status, setStatus] = useState("");
  const[id, setID] = useState("")
  const[filtered, setFiltered] = useState([])
  
  useEffect(()=>{
    filterHandler()
  }, [addMovie,status])

  useEffect(()=>{
    filterID()
  }, [addMovie,id])
  const filterHandler = () => {
    
    switch(status){
      case 'Introduction to React':
      setFiltered(addMovie.filter((movie)=> {
        return movie.title === "Introduction to React"
      }))
      break;

      case 'Introduction to Node':
      setFiltered(addMovie.filter((movie)=> {
        return movie.title === 'Introduction to Node'
      }))
      break;

      case 'Introduction to Java':
      setFiltered(addMovie.filter((movie)=> {
        return movie.title === 'Introduction to Java'
      }))
      break;

      case 'Introduction to c#':
      setFiltered(addMovie.filter((movie)=> {
        return movie.title === 'Introduction to c#'
      }))
      break; 

     

      default:
        setFiltered(addMovie)
        break;
    }

    
  }


  const filterID = () => {
    
    switch(id){
      case "1":
      setFiltered(addMovie.filter((movie)=> {
        return movie.rating === 1
      }))
      break;

      case "2":
      setFiltered(addMovie.filter((movie)=> {
        return movie.rating === 2
      }))
      break;

      case "3":
      setFiltered(addMovie.filter((movie)=> {
        return movie.rating === 3
      }))
      break;

      case "4":
      setFiltered(addMovie.filter((movie)=> {
        return movie.rating === 4
      }))
      break; 

      case "5":
      setFiltered(addMovie.filter((movie)=> {
        return movie.rating === 5
      }))
      break; 
     

      default:
        setFiltered(addMovie)
        break;
    }

    
  }

  return (
    <div className="App">
     <NewMovie setTitle= {setTitle} setDescription ={setDescription} setAddMovie= {setAddMovie}
     addMovie = {addMovie} title = {title} description= {description}
     setStatus={setStatus} setID = {setID}
     />
     <MovieList addMovie={addMovie} filtered = {filtered}/>
    </div>
  );
}

export default App;
