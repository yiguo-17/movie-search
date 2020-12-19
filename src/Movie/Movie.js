import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import MovieDetails from "./MovieDetails";
const Movie = () => {
  const { search } = useLocation();
  const [movieDetail, setMovieDetail] = useState(null);
  const movie = queryString.parse(search);

  const { movieTitle } = useParams();

  console.log(movieTitle);

  async function fetchMovieDetail() {
    try {
      const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_OMDB_API;

      const response = await fetch(
        `http://omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${movie.title}`
      );

      const data = await response.json();

      data.imdb = movieTitle;

      setMovieDetail(data);
    } catch (e) {}
  }

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <div>
      <MovieDetails {...movieDetail} />
    </div>
  );
};

export default Movie;
