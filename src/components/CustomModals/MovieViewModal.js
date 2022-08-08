import React from 'react'
import { Cancel, PlayArrow, Reviews } from "@mui/icons-material";
import './movieViewModal.scss'
import { useState, useEffect } from 'react'
import { postRating, getRatings } from '../../services/ratings.services'
import { ratingInputs } from '../../data/formInputs';
import FormInput from '../../formInput/FormInput';

import { incrementViewCount } from '../../services/movies.services'

import { ratingFormValidation } from '../../utils/formValidations';

function MovieViewModal({ movie, backgroundImage, handleClickPopup, popup }) {

    const userProfile = JSON.parse(
        window.localStorage.getItem('MockflixProfile')
    );
    const username = userProfile.username;

    const initialState = {
        rating: 0,
        ratingTitle: '',
        ratingContent: '',
        userId: username,
        movieId: movie.id,
    };

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [reviews, setReviews] = useState([])
    const [showAddReview, setShowAddReview] = useState(false)
    const [movieId, setMovieId] = useState(movie.id)

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        ratingFormValidation(setFormErrors, name, value);
    };

    const bannerStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: backgroundImage,
    };

    useEffect(() => {
        async function fetchData() {
            const { data } = await getRatings(movie.id)
            console.log(movie.id)
            setReviews(data)
        }
        fetchData()
    }
        , [movie.id])


    const handlePostRating = async (rating) => {
        postRating(formValues, movieId);
    }

    const handlePlayMovie = () => {
        window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_blank')
        incrementViewCount(movie.id)
    }

    const handleAddReviewBox = () => {
        setShowAddReview(!showAddReview)
        setMovieId(movie.id)
    }

    const handleClosePopup = () => {
        handleClickPopup()
        if (showAddReview) {
            setShowAddReview(false)
        }
    }

    return (
        <div className={`viewModal ${popup && "open"}`}>
            <div className='viewModal__banner' style={bannerStyle}>
                <div className='viewModal__content'>
                    <h3 className='viewModal__title'>
                        {movie?.title}
                    </h3>
                    <p className='viewModal__description'>
                        {movie?.description}
                    </p>
                    <div className='viewModal__buttons'>
                        <button className='viewModal__button viewModal__button--play' onClick={handlePlayMovie}>
                            <PlayArrow /> Play
                        </button>
                        <button onClick={handleAddReviewBox} className='viewModal__button viewModal__button--review'>
                            <Reviews /> Write Review
                        </button>
                    </div>
                    <p>Views: {movie?.viewCount}</p>
                    <div className='viewModal__addReview' style={showAddReview ? {} : { display: 'none' }}>
                        <form className='Auth-form' onSubmit={handlePostRating}>
                            {ratingInputs.map((input) => (
                                <FormInput
                                    key={input.id}
                                    {...input}
                                    value={formValues[input.name]}
                                    errorMessage={formErrors[input.name] && formErrors[input.name]}
                                    onChange={onInputChange}
                                />
                            ))}

                            <button type='submit' className='loginButton'>
                                Add Rating
                            </button>
                        </form>
                    </div>
                    <div className='viewModal__addReview__reviews'>

                        <div className='viewModal__reviews'>
                            {reviews.length > 0 ? <p>Reviews</p> : <p>No reviews yet for this movie...</p>}
                            {reviews.map(review => (
                                reviews.length > 0 ?
                                    <div className='viewModal__review' key={review._id}>
                                        <p className='viewModal__review--author'>Author: {review.userId}</p>
                                        <p className='viewModal__review--rating' style={review.rating ? review.rating > 5 ? { color: 'green' } : { color: 'red' } : { color: 'white', display: 'none' }}>Rating: {review.rating} / 10</p>
                                        <p className='viewModal__review--title'>{review.commentTitle}</p>
                                        <p className='viewModal__review--content'>{review.commentContent}</p>
                                    </div>
                                    : <p className='viewModal__review--noReviews'>No reviews yet</p>
                            ))}
                        </div>
                        <button className='viewModal__close' onClick={handleClosePopup}>
                            <Cancel fontSize='large' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieViewModal