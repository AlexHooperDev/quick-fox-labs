import React from 'react'

import Button from './button'

export default function HowItWorksList({ title, data }) {
  return (
    <section className="section">
      <div className="section__wrapper">
        <h2>
          {title}
        </h2>
        {data.map(step => (
          <div className="step">
            <div className="step__upper">
              <h3>{step.subtitle}</h3>
              <img src="/" alt="" />
            </div>
            <ul className="step__list">
              {step.points.map(point => (
                <li>{point}</li>
              ))}
            </ul>
            <Button link={step.link} copy={step.linkCopy} />
          </div>
        ))}
      </div>
    </section>
  )
}