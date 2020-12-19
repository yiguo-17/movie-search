import { useState } from "react";
import "./App.css";
import Search from "./Search/Search";
import { MoviesContext } from "./context/MovieContext";//for context
import SearchList from "./Search/SearchList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [movieResults, setMovieResults] = useState([]);

  async function fetchMovieListAPI(inputValue) {
    
    setSearchValue(inputValue);

    const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMDB_API;

    try {
      const response = await fetch(
        `http://omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${inputValue}`
      );

      const data = await response.json();

      setMovieResults(data.Search || []);
    } catch (e) {}
  }
  //create context list to insert into the 'value' for passing..
  const fromContext = { searchValue, fetchMovieListAPI, movieResults };//for context

  return (
    <div className="App">
      <MoviesContext.Provider value={fromContext}>
        <Search />
        <SearchList />
      </MoviesContext.Provider>
    </div>
  );
}

export default App;