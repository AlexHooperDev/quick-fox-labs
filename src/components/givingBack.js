import React from 'react'

import './givingback.scss'

// import women from '../assets/icons/school/women.png'

import makeVisible from '../hooks/makeVisible'

export default function GivingBack({ quote, author, copy }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className="section section--d-blue" ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
        <div className="quote quote--static">
          <q>
            {quote}
          </q>
          <h5>
            {author}
          </h5>
          <p>
            {copy}
          </p>
          {/* <img src={women} alt="Women together" /> */}
        </div>
      </div>
    </section>
  )
}