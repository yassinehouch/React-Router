
 // MovieCard.js
import React from 'react';

const MovieCard1 = ({ movie }) => {
     return (
        <div className="movie-card">
          <img src={movie.posterURL} alt={movie.title} />
             <h2>{movie.title}</h2>
             <p>{movie.description}</p>
             <p>Rating: {movie.rating}</p>
         </div>
         );
         };
                           
  export default MovieCard1;          
