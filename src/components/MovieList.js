// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard1 from './MovieCard1';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link to={`/movie/${movie.title}`} key={index}>
          <MovieCard1 movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
