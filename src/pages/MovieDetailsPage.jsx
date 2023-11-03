import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api'

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [MovieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await fetchMovieById(id);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id])

  if (!MovieDetails) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <h2>Movie Details</h2>
      <h3>Title: {MovieDetails.Title}</h3>
      <p>Year: {MovieDetails.Year}</p>
      <p>Genre: {MovieDetails.Genre}</p>
      <MovieDetailsPage movieId={id} />
    </div>
  );
};

export default MovieDetailsPage;
