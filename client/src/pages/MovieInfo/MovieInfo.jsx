import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieInfo() {
  let params = useParams();
  let [movie, setMovie] = useState({});
  let [reviewsAvailable, setReviewsAvailable] = useState(false);

  useEffect(() => {
    fetch(
      `http://localhost:3001/api/v1/movies/${params.movieId}?userId=6071fdb98774647c682ebbd8`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((movie) => {
        console.log(movie);
        setMovie(movie);
        if (movie.ratings?.length > 0) {
          setReviewsAvailable(true);
        }
      });
  }, [params.movieId]);

  return (
    <div className="d-flex">
      <div className="flex-1">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="flex-2 ml-4">
        <h3>{movie.title}</h3>
        <p>Cast: {movie.cast}</p>
        <p>{movie.genre}</p>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Language: {movie.language}</p>
        <h3>Reviews and Ratings</h3>
        {!reviewsAvailable && <p>No Reviews yet...</p>}
        <div>
          {reviewsAvailable &&
            movie?.ratings.map((rating) => (
              <div
                style={{ borderBottom: '1px solid #dddddd' }}
                key={rating.userId}
              >
                <p> {rating.rating}/5 </p>
                <p>
                  {rating.comment} -{' '}
                  <span style={{ fontStyle: 'italic' }}>{rating.userName}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
