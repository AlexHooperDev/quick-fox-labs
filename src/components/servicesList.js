import React from 'react'
import makeVisible from '../hooks/makeVisible'
import './servicesList.scss'

export default function servicesList({ data, title, subHeader }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className="section section--d-blue" ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''} section__wrapper--col`}>
        <h2>{title}</h2>
        <p>{subHeader}</p>
        <ol className="list">
          {data.map((point) => (
            <li><img src={point.img} /><p>{point.title}</p></li>
          ))}
        </ol>
      </div>
    </section>
  )

}