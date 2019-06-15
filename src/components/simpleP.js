import React from 'react'


export default function SimpleP({ title, copy }) {
  return (
    <section className="section">
      <div className="section__wrapper--simple">
        {title ? <h2>{title}</h2> : ''}
        <p>
          {copy}
        </p>
      </div>
    </section>
  )
}