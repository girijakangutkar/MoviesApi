import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/movieDetails.css";

function MovieDetails() {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (title) fetchMovie(title);
  }, [title]);

  async function fetchMovie(title) {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=48c35c90`
      );
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.log("error occurred:", err);
    }
  }

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="movieDetail">
        <div className="poster">
          {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
        </div>
        <div className="info">
          <h1>{movie.Title}</h1>
          <p>Year: {movie.Year}</p>
          <p>Plot: {movie.Plot}</p>
          <p>Genre: {movie.Genre}</p>
        </div>
      </div>
      <div id="backBtn">
        <button>
          <NavLink to="/">{"<"}</NavLink>
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
