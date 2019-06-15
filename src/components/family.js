import React from 'react'

import './family.scss'

export default function Family({ title, copy, carouselData }) {
  return (
    <section className="section">
      <div className="section__wrapper--col">
        <div className="family">
          <h2>
            {title}
          </h2>
          <p>
            {copy}
          </p>
        </div>
        <div className="family-carousel">
          {carouselData.map(item => (
            <div className="section__wrapper__carousel__item">
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}