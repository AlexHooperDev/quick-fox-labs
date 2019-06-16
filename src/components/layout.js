/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import Footer from '../components/footer'
import PropTypes from "prop-types"

import Header from "./header"
import Modal from '../components/modal'
import "./layout.scss"

function Layout({ children }) {
  const [modal, toggleModal] = useState(0);

  function contactModal() {
    toggleModal(modal ? false : true);
  }

  return (
    <>
      <Header contactModal={contactModal} />
      <div className={`${modal ? 'noScroll' : ''}`}>
        <main>
          {modal ? <Modal contactModal={contactModal} /> : ''}
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
