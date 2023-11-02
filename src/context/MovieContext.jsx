import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <MovieContext.Provider
      value={{
        searchTerm,
        searchResults,
        updateSearchTerm,
        updateSearchResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovieContext = () => {
  return useContext(MovieContext);
};

export { MovieProvider, useMovieContext, MovieContext }; 
