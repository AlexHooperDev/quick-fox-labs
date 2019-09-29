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
              <img src={point.img} />
              <h3>{!small ? `${i + 1}.` : ''} {point.title}</h3>
              <p>{point.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )

}