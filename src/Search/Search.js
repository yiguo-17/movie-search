  
import React, { useContext } from "react";
import SearchList from "./SearchList";
import { MoviesContext } from "../context/MovieContext";//for context

const Search = () => {
  const fromCon = useContext(MoviesContext);//for context

  const { searchValue, fetchMovieListAPI, movieResults } = fromCon;//for context

  return (
    <div>
      <input
        value={searchValue}
        onChange={(e) => fetchMovieListAPI(e.target.value)}
        type="text"
      />

      {/* { searchValue !== "" ? <SearchList movieResults={movieResults} /> : ""} */}
      {searchValue !== "" && (
        <SearchList 
        // movieResults={movieResults}
        />
      )}
    </div>
  );
};

export default Search;