const API_URL = 'http://localhost:8080/api';
const RATING_URL = 'http://localhost:4000/api';

const requests = {
    API_URL: 'http://localhost:8080/api',
    RATING_URL: 'http://localhost:4000/api',
    fetchTrending: `${API_URL}/movies/trending`,
    fetchTopRated: `${API_URL}/movies/top-rated`,
    fetchActionMovies: `${API_URL}/movies/action`,
    fetchComedyMovies: `${API_URL}/movies/comedy`,
    fetchHorrorMovies: `${API_URL}/movies/horror`,
    fetchRomanceMovies: `${API_URL}/movies/romance`,
    fetchDocumentaries: `${API_URL}/movies/documentary`,
    fetchTop10Viewed: `${API_URL}/movies/top-10-viewed`,

    fetchRatings: `${RATING_URL}/ratings/movieId/`,
}

export default requests;