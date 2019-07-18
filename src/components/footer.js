import React from 'react'
import './footer.scss'

import fb from '../assets/icons/social/fb.svg'
import ig from '../assets/icons/social/ig.svg'
import twitter from '../assets/icons/social/twitter.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper__contact">
                    <h2 className="no-underline">Quick Fox Labs</h2>
                    <p>07557644480</p>
                    <p>contact@quickfoxlabs.com</p>
                    <ul>
                        <li><img src={fb} alt="facebook" /></li>
                        <li><img src={ig} alt="facebook" /></li>
                        <li><img src={twitter} alt="facebook" /></li>
                    </ul>
                </div>
                <div className="footer__wrapper__location">
                    <h4>Location</h4>
                </div>
                <div className="footer__wrapper__links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Brand</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>School</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}