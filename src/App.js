import './App.scss';
import React, { useState, useMemo } from "react";
import Home from './pages/Home';
import Video from './components/Video/Video';
import LoginPage from './pages/Login/LoginPage';
import { UserContext } from '../src/context/UserContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(null);

  const loggedInUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={loggedInUser}>
          <Routes>
            {user ? <Route exact path="/" element={<Home />}></Route>
              : <Route path="/" element={<LoginPage />}></Route>}
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/video/:id" element={<Video />}></Route>
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
