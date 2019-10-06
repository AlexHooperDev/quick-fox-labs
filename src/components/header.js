import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import logo from '../assets/qfl-logo.svg'
import logoNoText from '../assets/qfl-logo-notext.svg'

import './header.scss'

export default function Header({ contactModal }) {

  const [isNavTop, setIsNavTop] = useState(true);




  useEffect(() => {
    let timeout = false;
    window.addEventListener('scroll', (event) => {
      console.log('no debounce');
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const fromTop = window.scrollY;
        setIsNavTop(fromTop > 100 ? false : true);
      })
    }, false);
  }, [])

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link
            to="/"
          >
            <img src={logo} alt="Quick Fox Labs" />
          </Link>
        </div>
        <section className="header__links">
          <nav className="header__links__nav">
            <ul>
              <li>
                <Link to="/services">What We Do</Link>
              </li>
              <li>
                <Link to="/case-studies">Our Work</Link>
              </li>
              <li>
                <Link to="/about">Who We Are</Link>
              </li>
              <li>
                <Link to="/school">Training</Link>
              </li>
            </ul>
          </nav>
          <div className="header__links__cta">
            <button onClick={() => contactModal()}>Contact us</button>
          </div>
        </section>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
