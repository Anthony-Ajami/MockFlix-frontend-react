const API_URL = 'http://localhost:8080/api';

const requests = {
    API_URL: 'http://localhost:8080/api',
    fetchTrending: `${API_URL}/movies/trending`,
    fetchTopRated: `${API_URL}/movies/top-rated`,
    fetchActionMovies: `${API_URL}/movies/action`,
    fetchComedyMovies: `${API_URL}/movies/comedy`,
    fetchHorrorMovies: `${API_URL}/movies/horror`,
    fetchRomanceMovies: `${API_URL}/movies/romance`,
    fetchDocumentaries: `${API_URL}/movies/documentary`,
}

export default requests;