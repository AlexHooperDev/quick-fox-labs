import React from 'react'
import makeVisible from '../hooks/makeVisible'


export default function SimpleP({ title, copy, darkBlue, medBlue, noWave, children, hero }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section ${darkBlue ? 'section--d-blue' : ''} ${medBlue ? 'section--m-blue' : ''} ${noWave ? 'section--no-wave' : ''} ${hero ? 'section--hero' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper section__wrapper--simple`}>
        {title ? <h2>{title}</h2> : ''}
        {children}
      </div>
    </section>
  )
}