import React, { useContext } from 'react'
import { Link } from "gatsby"
import { ModalContext } from './PopupState'
import './footer.scss'

import fb from '../assets/icons/social/fb.svg'
import ig from '../assets/icons/social/ig.svg'
import linkedin from '../assets/icons/social/linkedin.svg';
import Button from './button'
import privacyPolicy from '../assets/privacy-policy.pdf';

export default function Footer() {

    const state = useContext(ModalContext);

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper__contact">
                    <h2 className="no-underline">© 2019 Quick Fox Labs</h2>
                    <ul>
                        {/* <li><img src={fb} alt="facebook" /></li> */}
                        <li><a href="https://www.instagram.com/quickfoxlabs/?hl=en" rel="noopener noreferrer" target="_blank"><img src={ig} alt="Instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/company/26261756/admin/" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="LinkedIn" /></a></li>
                    </ul>
                    <a onClick={() => state.setModal(true)}>Contact us</a>
                </div>
                <div className="footer__wrapper__links">
                    <h2 className="no-underline">Quick Links</h2>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/case-studies">Case Studies</Link></li>
                        <li><Link to="/school">Training</Link></li>
                        <li><a href={privacyPolicy} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}