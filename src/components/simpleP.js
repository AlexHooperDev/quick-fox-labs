import React from 'react'
import makeVisible from '../hooks/makeVisible'


export default function SimpleP({ title, copy, darkBlue, medBlue, noPaddingTop, noPaddingBottom, children, hero }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section ${darkBlue ? 'section--d-blue' : ''} ${medBlue ? 'section--m-blue' : ''} ${noPaddingTop ? 'section--no-padding-top' : ''} ${noPaddingBottom ? 'section--no-padding-bottom' : ''} ${hero ? 'section--hero' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper section__wrapper--simple ${isVisible ? 'section__wrapper--visible' : ''}`}>
        {title ? <h2>{title}</h2> : ''}
        {children}
      </div>
    </section>
  )
}