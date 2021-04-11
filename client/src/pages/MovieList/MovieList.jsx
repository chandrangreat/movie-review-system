import React, { useEffect, useState } from 'react';
import UserMovieList from '../User/UserMovieList';

export default function MovieList() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/movies?userId=6071fdb98774647c682ebbd8')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((movies) => {
        setMovies(movies);
      });
  }, []);
  let userRole = 'user';
  if (userRole === 'admin') {
    return <h1>Movies List</h1>;
  }

  return <UserMovieList movies={movies} />;
}
