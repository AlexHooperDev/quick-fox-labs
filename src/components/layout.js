/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useContext, useEffect } from "react"
import Footer from '../components/footer'
import PropTypes from "prop-types"
import { ModalContext, ModalContextProvider } from '../components/PopupState'

import Header from "./header"
import Modal from '../components/modal'
import CookieBanner from './CookieBanner';
import "./layout.scss"

function Layout({ children }) {

  const state = useContext(ModalContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    //If the local storage is set, then set cookie state
    if (localStorage.getItem('gdpr')) {
      state.setCookieConsent(false);
    }
  }, []);

  return (
    <>
      <Header />
      <div className={`${state.modal ? 'noScroll' : ''}`}>
        <main>
          {state.modal && <Modal />}
          {!state.cookieConsent && <CookieBanner />}
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
