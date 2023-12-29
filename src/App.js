import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MoviesDetail'; // Corrected component import




const App = () => {
  // Define the initial movie data and set up state for filtering
  const [movies, setMovies] = useState([
    {
      title: 'The Survivor',
      description: 'Drama historique',    // Add a description for the movie
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKgYhnCIsxfQVrqYhPtTIwwj9vZY1N5gTc3Flmn3I&s',
      rating: 4,
      trailerLink: 'https://www.youtube.com/embed/your-trailer-video-id-1',  // Add a trailer link
      movieDescription: 'This is a description of The Survivor movie.',
    },
  {
    title: 'Athena',
    description: 'Drame/action',
    posterURL: 'https://imgr.cineserie.com/2023/05/2201086.jpg?imgeng=/f_jpg/cmpr_0/w_169/h_253/m_cropbox&ver=1',
    rating: 3,
    trailerLink: 'https://www.youtube.com/embed/your-trailer-video-id-2',
    movieDescription: 'This is a description of Athena movie.',
  },
]);

  // Set up state for filtered movies
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Define a function to handle filtering based on user input
  const handleFilter = (filters) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.includes(filters.title) &&
        movie.rating >= parseFloat(filters.rating)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="app">
        <h1>
          {/* Create a link to the home page with the "Movie Library" text */}
          <Link to="/">Movie Library</Link>
        </h1>
        <Routes>
          <Route exact path="/" element={
            <>
              <Filter onFilter={handleFilter} />
              {/* Render the MovieList component, which includes clickable images */}
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:title" element={({ params }) => {
            const movieTitle = params.title;
            const movie = filteredMovies.find((m) => m.title === movieTitle);
            return <MovieDetail movie={movie} />;
          }} />
        </Routes>
        <div className="add-movie-form">
          {/* Additional components can be added here */}
        </div>
      </div>
    </Router>
  );
};

export default App;



