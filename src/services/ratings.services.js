import axios from 'axios';

const baseUrl = 'http://localhost:4000/api';

export const getAllRatings = async () => {
    return await axios.get(`${baseUrl}/ratings`);
}

export const getRatings = async (id) => {
    return await axios.get(`${baseUrl}/ratings/movieId/${id}`);
}

export const postRating = async (formValues, id) => {
    const rating = formValues.rating;
    const commentTitle = formValues.ratingTitle;
    const commentContent = formValues.ratingContent;
    const userId = formValues.userId;
    const movieId = id;

    return await axios.post(`${baseUrl}/post`, { rating, commentTitle, commentContent, userId, movieId });
}
