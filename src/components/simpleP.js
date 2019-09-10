import React from 'react'
import makeVisible from '../hooks/makeVisible'


export default function SimpleP({ title, copy, darkBlue, medBlue, noWave }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section ${darkBlue ? 'section--d-blue' : ''} ${medBlue ? 'section--m-blue' : ''} ${noWave ? 'section--no-wave' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''} section__wrapper--simple`}>
        {title ? <h2>{title}</h2> : ''}
        <p>
          {copy}
        </p>
      </div>
    </section>
  )
}