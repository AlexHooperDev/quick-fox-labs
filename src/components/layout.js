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
import "./layout.scss"

function Layout({ children }) {

  const state = useContext(ModalContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    < ModalContextProvider >
      <Header />
      <div className={`${state.modal ? 'noScroll' : ''}`}>
        <main>
          {state.modal && <Modal />}
          {children}
        </main>
        <Footer />
      </div>
    </ModalContextProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
