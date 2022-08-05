import React from 'react'
import './footer.scss'
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__socials'>
                    <a href='/#' className='footer__social-link'>
                        <Facebook />
                    </a>
                    <a href='/#' className='footer__social-link'>
                        <Twitter />
                    </a>
                    <a href='/#' className='footer__social-link'>
                        <Instagram />
                    </a>
                    <a href='/#' className='footer__social-link'>
                        <YouTube />
                    </a>
                </div>
                <ul className='footer__links'>
                    <li className='footer__link'>
                        <a href='/'>
                            About
                        </a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>
                            Contact
                        </a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>
                            Terms & Conditions
                        </a>
                    </li>
                    <li className='footer__link'>
                        <a href='/'>
                            Privacy Policy
                        </a>
                    </li>
                </ul>
                <div className='footer__copyright'>
                    <p>
                        MockFlix © 2022. A project by Anthony Ajami.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer