MockFlixTechnical Documentation
Author: Anthony Ajami

Overview
MockFlix is a Netflix clone platform made for a school project. This platform allows users
to check out actual trending movies, sorted by their genres and with a section dedicated
to the top 10 most popular movies on the platform.

MockFlix does not let users stream the movies, but rather implements a 'mock' feature
where it redirects users to a YouTube video when pressing the Play button for each of the
movies.
The project includes a complete application cycle; from user authentification to
participating in features applied to the shown movies.


Technical Overview

Backend
See other 2 repositories' README files...

Frontend
The front end of the application was developed through a React app. 3 API endpoints
were used for showing useful platform data, like movies sorted by genres, reviews and
view counts specific for every movie. The content of the app is displayed through
separate components, joined through the App.js file. There is a Sidebar, which is only
shown for mobile device screens, A Navigation Bar, and a Footer.
Movies are displayed by their genres. Each list's data is called from a request connected
to the respective API and shown through Rows on the Home page.
