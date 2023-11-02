import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import { fetchMovies } from '../services/api';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { searchTerm } = useContext(MovieContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      if (searchTerm) {
        setLoading(true);
        try {
          const results = await fetchMovies(searchTerm);
          setMovies(results || []);
        } catch (error) {
          console.error('Error fetching movies:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    searchMovies();
  }, [searchTerm]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && movies.length === 0 && <p>No movies found</p>}
      {!loading && movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
