 const API_URL = `http://www.omdbapi.com`;
 const API_KEY = process.env.REACT_APP_API_KEY;



 export const getMoviesBySearchTerm = async (searchInput) => {
    const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${searchInput}`);
    const data = await response.json();
    console.log(data);    
    displayResults(data.Search);
  }
  
  //******************************************************/
   export const getMoviesDetailsById = async (movieId) => {
    const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&i=${movieId}`);
    const data = await response.json();
    console.log(data);
   }
  
  
