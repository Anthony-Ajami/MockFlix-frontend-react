import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';
import requests from '../config/Requests';

function Home() {

    return (
        <div className="App">
            {/* <div>{JSON.stringify(user, null, 2)}</div> */}

            <Navbar />

            <Banner />

            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />

            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow={true}
            />

            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
            />

            <Footer />
        </div>
    )
}

export default Home