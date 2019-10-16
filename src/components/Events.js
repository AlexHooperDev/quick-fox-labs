import React from 'react'
import Event from './Event'
import './Events.scss'

export default function Events({ title, subHeader, events }) {


  return (
    <section className="section section--d-blue">
      <div className={`section__wrapper section__wrapper--visible section__wrapper--col`}>
        {title && <h2>{title}</h2>}
        {subHeader && <p>{subHeader}</p>}
        <div className="events-wrapper">
          {events.map(event => (
            <Event {...event} />
          ))
          }
        </div>
      </div>
    </section>
  )

}