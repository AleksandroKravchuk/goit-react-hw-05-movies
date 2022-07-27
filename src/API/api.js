import axios from "axios";
const API_KEY = `419c8d7d79cbcac22c5520f1ac14d2c7`;

export async function fetchMovies(){
     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
      return data;     
};

export async function fetchSearchMovies(searchName) {
     const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchName}`);
      return data;     
  };

export async function fetchSelectedMovie(movie_id){
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
      return data;     
  };
   
export async function fetchMovieInfo(movie_id, meaning) {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/${meaning}?api_key=${API_KEY}&language=en-US`);
     return data;     
  };
    
