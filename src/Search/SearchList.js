  
import React, { useContext } from "react";
import { MoviesContext } from "../context/MovieContext";
import "./Search.css";

const SearchList = () => {
  const fromCon = useContext(MoviesContext); //for context

  const { searchValue, fetchMovieListAPI, movieResults } = fromCon; //for context

  function showMovieList() {
    return movieResults.map((item, i) => {
      return (
        <div className="search-list" key={i}>
          <div key={i} >
            <img
              src={item.Poster}
              alt="some good movie"
              style={{ width: "200px" }}
            />
            {/* {console.log(i)} */}
          </div>
         </div>
      );
    });
  }

  return <ul>{showMovieList()}</ul>;
};

export default SearchList;