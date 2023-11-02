import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api'

const MovieDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie Details</h2>
      <MovieDetailsPage movieId={id} />
    </div>
  );
};

export default MovieDetailsPage;
