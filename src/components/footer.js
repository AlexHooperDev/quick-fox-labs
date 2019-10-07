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
                    <p>00000000</p>
                    <p>contact@quickfoxlabs.com</p>
                    <ul>
                        <li><img src={fb} alt="facebook" /></li>
                        <li><img src={ig} alt="Instagram" /></li>
                        <li><img src={twitter} alt="Twitter" /></li>
                    </ul>
                </div>
                <div className="footer__wrapper__location">
                    <h2 className="no-underline">Location</h2>
                </div>
                <div className="footer__wrapper__links">
                    <h2 className="no-underline">Quick Links</h2>
                    <ul>
                        <li>About</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>School</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}