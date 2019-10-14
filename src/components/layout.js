/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useContext } from "react"
import Footer from '../components/footer'
import PropTypes from "prop-types"

import Header from "./header"
import Modal from '../components/modal'
import "./layout.scss"

import { PopupContextProvider, PopupContext } from './PopupState';

function Layout({ children }) {

  const state = useContext(PopupContext);


  return (
    <PopupContextProvider>
      <>
        <Header />
        <div className={`${state.modal ? 'noScroll' : ''}`}>
          <main>
            {`${state.modal}`}
            {state.modal && <Modal />}
            {children}
          </main>
          <Footer />
        </div>
      </>
    </PopupContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
