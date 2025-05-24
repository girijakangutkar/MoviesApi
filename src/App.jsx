import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./component/MovieList";
import MovieDetails from "./component/MovieDetails";

function App() {
  const [searchName, setSearchName] = useState("");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList searchName={searchName} setSearchName={setSearchName} />
          }
        />
        <Route path="/movies/:title" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
