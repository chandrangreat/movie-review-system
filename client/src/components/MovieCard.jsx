import React from 'react';
import { Card } from 'react-bootstrap';

export default function MovieCard(props) {
  function goToMovieInfo(movieId, title) {
    props.goToMovieInfo(movieId, title);
  }

  return (
    <Card
      onClick={() => goToMovieInfo(props.id, props.title)}
      className="mx-4 my-3"
      style={{ width: '18rem', cursor: 'pointer' }}
    >
      <Card.Img
        style={{ width: '18rem', height: '20rem' }}
        variant="top"
        src={props.image}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <span>Ratings: 5</span>
      </Card.Body>
    </Card>
  );
}
