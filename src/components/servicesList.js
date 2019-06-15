import React from 'react'
import './servicesList.scss'

export default function servicesList({ data }) {
  return (
    <section className="section">
      <div className="section__wrapper--col">
        {data.map(service => (
          <div className="service">
            <span>{service.title}</span>
            <ul className="service__details">
              {service.points.map(point => (
                <li>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )

}