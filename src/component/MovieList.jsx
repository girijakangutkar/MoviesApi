import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/movieList.css";

function MovieList({ searchName, setSearchName }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (searchName) fetchMovie(searchName);
  }, [searchName]);

  const ApiKey = import.meta.env.VITE_API_KEY;

  async function fetchMovie(name) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${name}&apikey=${ApiKey}`
      );
      const data = await response.json();

      if (data.Search) {
        setMovieList(data.Search);
      } else {
        setMovieList([]);
      }
    } catch (err) {
      console.log("error occurred:", err);
      setMovieList([]);
    }
  }

  return (
    <>
      <div className="searchBar">
        <input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search for movies..."
        />
      </div>

      <div className="MovieList">
        {movieList.map((movie) => (
          <NavLink key={movie.imdbID} to={`/movies/${movie.Title}`}>
            <div className="innerList">
              <p>
                {movie.Title} ({movie.Year})
              </p>

              <div>
                <img
                  src={movie.Poster}
                  // alt="Not Found"
                  width={"350px"}
                  height={"470px"}
                />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default MovieList;
