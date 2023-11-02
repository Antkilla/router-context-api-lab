import axios from 'axios'; //for running with the entire app
// const axios = require("axios") //for running as isolated file for testing

//sample API query path: http://www.omdbapi.com/?s=Batman&apikey=[yourkey]
const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_API_KEY;
//set up BASE_URL and API_KEY variables here
//const BASE_URL = "https://www.omdbapi.com/?"



const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}/?s=${searchTerm}&apikey=${API_KEY}`);
    return response.data.Search;
    //your code here

  } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/?i=${id}&apikey=${API_KEY}`);
    return response.data;
    //your code here
    
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

// fetchMovies("Bathman");
// fetchMovieById("tt3896198")

export { fetchMovies, fetchMovieById };