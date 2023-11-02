import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';

const SearchBar = () => {
  const { updateSearchTerm } = useMovieContext();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    updateSearchTerm(inputValue);
    // You can initiate the API call to fetch movies using the searchTerm
    // Example: fetchMovies(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
