import React from 'react'

export default function GivingBack({ quote, author, copy }) {
  return (
    <section className="section">
      <div className="section__wrapper">
        <div className="quote--static">
          <q>
            {quote}
          </q>
          <em>
            {author}
          </em>
          <p>
            {copy}
          </p>
        </div>
      </div>
    </section>
  )
}