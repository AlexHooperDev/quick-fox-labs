import React from 'react'
import makeVisible from '../hooks/makeVisible'

import './threeColBlock.scss'

export default function ThreeColBlock({ data, title, subheader, numbers, noPaddingTop, noPaddingBottom }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section ${noPaddingTop ? 'section--no-padding-top' : ''} ${noPaddingBottom ? 'section--no-padding-bottom' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper section__wrapper--col ${isVisible ? 'section__wrapper--visible' : ''}`}>
        {title && <h2>{title}</h2>}
        {subheader && <p>{subheader}</p>}
        {data.map(col => (
          <div className={`col ${numbers ? 'col--numbers' : ''}`}>
            {col.img && <img src={col.img} alt={col.title} />}
            {numbers && <div className="circles"></div>}
            <h4>
              {col.title}
            </h4>
            <p>
              {col.copy}
            </p>
          </div>
        ))
        }
      </div>

    </section>
  )
}