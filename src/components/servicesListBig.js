import React from 'react'
import makeVisible from '../hooks/makeVisible'
import './servicesList.scss'

export default function servicesListBig({ data, title, subHeader, copy, small, blue }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section ${blue ? 'section--d-blue' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''} section__wrapper--col section__wrapper--services-big ${small ? 'section__wrapper--services-big--school' : ''} `}>
        {title && <h2>{title}</h2>}
        {subHeader && <p>{subHeader}</p>}
        <ol className="list list--services">
          {data.map((point, i) => (
            <li>
              {point.img && <img src={point.img} />}
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </li>
          ))}
          <p>Plus much more… If there’s something you need (even if you’re not sure what it is yet), let us know and we’ll put a plan together. </p>
        </ol>
      </div>
    </section>
  )

}