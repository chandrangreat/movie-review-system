import React from 'react';
// import { CardDeck, CardGroup } from 'react-bootstrap';
import MovieCard from '../../components/MovieCard';
import { useHistory } from 'react-router-dom';

export default function UserMovieList(props) {
  let history = useHistory();

  function goToMovieInfo(movieId, title) {
    history.push(`/movies/${movieId}/${encodeURIComponent(title)}`);
  }

  return (
    <div className="d-flex flex-wrap">
      {props.movies.map((movie) => (
        <MovieCard
          goToMovieInfo={goToMovieInfo}
          key={movie._id}
          id={movie._id}
          {...movie}
        />
      ))}
    </div>
  );
}
