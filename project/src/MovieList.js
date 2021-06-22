import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard'
import './App.css'
const MovieList = ({movies ,searchInput}) => {
    const [filtredList, setFiltredList] = useState(movies)
    useEffect(()=>{
        setFiltredList(movies.filter(
        (movie) =>  
         movie.title.toLowerCase().includes(searchInput.searchInput.toLowerCase()) && 
         movie.rate >= searchInput.searchRate
         )
         );      
        },[searchInput.searchInput, searchInput.searchRate, movies]);
    return (
        <div className="App-header">
            {filtredList.map((movie)=> (
            <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    )
}

export default MovieList
