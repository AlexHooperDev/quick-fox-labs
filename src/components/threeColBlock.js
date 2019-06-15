import React from 'react'

import './threeColBlock.scss'

export default function ThreeColBlock({ data }) {
  return (
    <section className="section">
      <div className="section__wrapper--col">
        {data.map(col => (
          <div className="col">
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