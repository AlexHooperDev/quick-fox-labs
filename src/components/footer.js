import React from 'react'
import { Link } from "gatsby"
import './footer.scss'

import fb from '../assets/icons/social/fb.svg'
import ig from '../assets/icons/social/ig.svg'
import twitter from '../assets/icons/social/twitter.svg'
import Button from './button'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper__contact">
                    <h2 className="no-underline">© 2019 Quick Fox Labs</h2>
                    <ul>
                        {/* <li><img src={fb} alt="facebook" /></li> */}
                        <li><img src={ig} alt="Instagram" /></li>
                        {/* <li><img src={twitter} alt="Twitter" /></li> */}
                    </ul>
                    <a>Contact us</a>
                </div>
                <div className="footer__wrapper__links">
                    <h2 className="no-underline">Quick Links</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/case-studies">Case Studies</Link></li>
                        <li><Link to="/school">School</Link></li>
                        {/* <li><Link to="/privacy-policy">Privacy Policy</Link></li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}