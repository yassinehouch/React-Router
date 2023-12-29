// MovieDetail.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <Link to="/">Back to Home</Link>
      <h2>{movie.title}</h2>
      <p>{movie.movieDescription}</p>
      <iframe title={movie.title} width="560" height="315" src={movie.trailerLink} allowFullScreen />
    </div>
  );
};

export default MovieDetail;
