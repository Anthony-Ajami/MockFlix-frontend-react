const API_KEY = '6ac8c0459ad0f9d5feb77f52c6c0de9c';
const API_URL = 'https://api.themoviedb.org/3';

const requests = {
    API_KEY: '6ac8c0459ad0f9d5feb77f52c6c0de9c',
    API_URL: 'https://api.themoviedb.org/3',
    fetchTrending: `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOriginals: `${API_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;