import React from 'react'
import makeVisible from '../hooks/makeVisible'
import './Events.scss'

export default function Events({ title, subHeader, events }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className="section" ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''} section__wrapper--col`}>
        {title && <h2>{title}</h2>}
        {subHeader && <p>{subHeader}</p>}
        <h2>PRICING AND DATES HERE</h2>
      </div>
    </section>
  )

}