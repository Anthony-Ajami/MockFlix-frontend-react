import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';
import requests from '../config/Requests';

function Home() {

    useEffect(() => {
        setBackgroundColor('/images/home-background.jpg');
    }

        , []);

    const setBackgroundColor = (image) => {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }

    return (
        <div className="App">
            {/* <div>{JSON.stringify(user, null, 2)}</div> */}

            <Navbar />

            <Banner />

            <Row
                title="Mockflix Most Viewed"
                fetchUrl={requests.fetchTop10Viewed}
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