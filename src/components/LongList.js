import React from 'react'
import makeVisible from '../hooks/makeVisible'
import './LongList.scss'

export default function LongList({ data, title, subHeader, dBlue }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section ${dBlue ? 'section--d-blue' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''} section__wrapper--col section__wrapper--long-list`}>
        {title && <h2>{title}</h2>}
        {subHeader && <p>{subHeader}</p>}
        <ol className="list list--long">
          {data.map((point, i) => (
            <li>
              <img src={point.img} alt={point.title} />
              <p>{point.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )

}