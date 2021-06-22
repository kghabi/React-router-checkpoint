import React, {useState, useEffect} from 'react';
import './App.css';
import movies from './movieData'
import MovieList from './MovieList';
import AddMovie from './AddMovie'
import Filter from './Filter';
import {Route} from "react-router-dom"
import Description from './Description';


function App() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setSearchInput] = useState({searchInput:'',searchRate:0});
  const getInputData = (data) => {
    setMovieList([...movieList,data]);
  };
  const getSearchData = (searchData) => {
    setSearchInput(searchData)
  }

  
  return (
    <div className="App">
      <header>
      <Route exact path="/" render={(props)=><AddMovie   {...props} getInputData={getInputData}    />  }/>

      <Route exact path="/" render={(props)=><Filter getSearchData={getSearchData} /> }/>
        
      <Route exact path="/" render={(props)=><MovieList searchInput={searchInput} movies={movieList}/> }/>
        
      <Route   path="/:id" render={(props)=><Description     {...props}  movie={movieList}      />   } />
     
      </header>
    </div>
  );
}

export default App;
