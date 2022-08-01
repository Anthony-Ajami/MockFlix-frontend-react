import React from 'react'
import { Cancel, PlayArrow, Reviews } from "@mui/icons-material";
import './movieViewModal.scss'
import requests from '../../config/Requests';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function MovieViewModal({ movie, backgroundImage, handleClickPopup, popup }) {

    const bannerStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: backgroundImage,
    };

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=${requests.API_KEY}&language=en-US&page=1`)
            setReviews(request.data.results)
        }
        fetchData()
    }
        , [movie.id]) // to update the reviews when the movie id changes


    return (
        <div className={`viewModal ${popup && "open"}`}>
            <div className='viewModal__banner' style={bannerStyle}>
                <div className='viewModal__content'>
                    <h3 className='viewModal__title'>
                        {movie?.title || movie?.name || movie?.original_name}
                    </h3>
                    <p className='viewModal__description'>
                        {movie?.overview}
                    </p>
                    <div className='viewModal__buttons'>
                        <Link to={`/video/${movie?.id}`}>
                            <button className='viewModal__button viewModal__button--play'>
                                <PlayArrow /> Play
                            </button>
                        </Link>
                        <button className='viewModal__button viewModal__button--review'>
                            <Reviews /> Write Review
                        </button>
                    </div>
                    <div className='viewModal__addReview'>
                        <div className='viewModal__addReview__rating'>
                            <p className='viewModal__addReview__rating viewModal__addReview__rating--text'>
                                Rating:
                            </p>
                            <input className='viewModal__addReview__rating viewModal__addReview__rating--input' type='number' min='1' max='10' step='0.1' />
                            {                            //TODO: add post button functionality
                            }                                <button className='viewModal__addReview__rating viewModal__addReview__rating--button'>
                                Post
                            </button>
                        </div>
                        <textarea placeholder="Tell others what do you think about this movie..." className='viewModal__addReview__text' type='text' />
                    </div>
                    <div className='viewModal__addReview__reviews'>

                        <div className='viewModal__reviews'>
                            Reviews
                            {reviews.map(review => (
                                reviews.length > 0 ?
                                    <div className='viewModal__review' key={review.id}>
                                        <p className='viewModal__review--author'>Author: {review.author}</p>
                                        <p className='viewModal__review--rating' style={review.author_details.rating > 5 ? { color: 'green' } : { color: 'red' }}>Rating: {review.author_details.rating} / 10</p>
                                        <p className='viewModal__review--content'>{review.content}</p>
                                        <p className='viewModal__review--date'>Published: {review.updated_at}</p>
                                    </div>
                                    : <p className='viewModal__review--noReviews'>No reviews yet</p>
                            ))}
                        </div>
                        <button className='viewModal__close' onClick={handleClickPopup}>
                            <Cancel fontSize='large' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieViewModal