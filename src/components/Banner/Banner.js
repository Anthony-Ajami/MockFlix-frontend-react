import React from 'react'
import './banner.scss'
import { HelpOutline, PlayArrow } from "@mui/icons-material";

import axios from 'axios'
import requests from '../../config/Requests';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MovieViewModal from '../CustomModals/MovieViewModal';


function Banner() {
    const [movie, setMovie] = useState([])
    const [popup, setPopup] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        }
        fetchData()
    }, [])

    function handleClickPopup() {
        popup ? setPopup(false) : setPopup(true)
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    const bannerStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`,
    };

    return (
        <header className='banner' style={bannerStyle}>
            <div className='banner__content'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <p className='banner__description'>
                    {truncate(movie?.overview, 190)}
                </p>
                <div className='banner__buttons'>
                    <Link to={`/video/${movie?.id}`}>
                        <button className='banner__button banner__button--play'>
                            <PlayArrow /> Play
                        </button>
                    </Link>
                    <button className='banner__button' onClick={handleClickPopup}>
                        <HelpOutline /> More Info
                    </button>
                </div>
            </div>
            <MovieViewModal
                movie={movie}
                backgroundSize='cover'
                backgroundPosition='center center'
                backgroundImage={`url(
                    "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`}
                handleClickPopup={handleClickPopup}
                popup={popup}
            />
        </header>
    )
}

export default Banner