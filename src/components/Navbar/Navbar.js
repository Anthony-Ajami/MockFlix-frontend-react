import React from "react";
import './navbar.scss'
import { useState } from "react";

import { MenuOutlined, SearchOutlined, CardGiftcardOutlined, NotificationsOutlined } from "@mui/icons-material";


function Navbar() {

    const [navBlack, setNavBlack] = useState(false);

    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    }

    const handleToggleMenu = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    useState(() => {
        document.addEventListener('scroll', transitionNav);
    });

    return (
        <div className={`navbar ${navBlack || toggleMenu ? "navbar--black" : "navbar--transparent"} ${toggleMenu && "show"}`}>
            <button onClick={handleToggleMenu} className="navbar__burger">
                <MenuOutlined />
            </button>
            <img className="navbar__logo" src="../images/logo.png" alt="Mockflix logo" />
            <nav className="navbar__links">
                <a href="/" className="navbar__link">Home</a>
                <a href="/" className="navbar__link">Series</a>
                <a href="/" className="navbar__link">Movies</a>
            </nav>
            <div className="navbar__actions">
                <a href="/" className="navbar__action">
                    <SearchOutlined />
                </a>
                <a href="/" className="navbar__action">
                    LIVE
                </a>
                <a href="/" className="navbar__action">
                    <CardGiftcardOutlined />
                </a>
                <a href="/" className="navbar__action">
                    <NotificationsOutlined />
                </a>
                <a href="/" className="navbar__action">
                    <img src="../images/avatar.jpg" alt="avatar" />
                </a>

            </div>
        </div>
    )
}

export default Navbar;