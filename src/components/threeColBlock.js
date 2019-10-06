import React from 'react'
import makeVisible from '../hooks/makeVisible'

import './threeColBlock.scss'

export default function ThreeColBlock({ data, title, subheader, numbers }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className="section" ref={bodyContent}>
      <div className={`section__wrapper section__wrapper--col ${isVisible ? 'section__wrapper--visible' : ''}`}>
        <h2>{title}</h2>
        <p>{subheader}</p>
        {data.map(col => (
          <div className={`col ${numbers ? 'col--numbers' : ''}`}>
            <img src={col.img} alt={col.title} />
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