import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { Title, Year, Poster, imdbID } = movie;

  return (
    <div className="movie-item">
      <img src={Poster} alt={Title} />
      <div className="movie-details">
        <h3>{Title}</h3>
        <p>{Year}</p>
      </div>
      {/* Add a link or button to navigate to the movie's detailed info */}
      <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </div>
  );
};

export default MovieItem;
