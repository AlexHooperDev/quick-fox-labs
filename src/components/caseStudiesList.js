import React from 'react'
import './caseStudiesList.scss'

import makeVisible from '../hooks/makeVisible'

export default function CaseStudiesList({ caseStudies }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className="section section--case-studies" ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
        <div className="case-studies">
          {caseStudies.map(caseStudy => (
            <div className="case-studies__item" style={{ backgroundImage: `url(${caseStudy.img})` }}>
              <div className="case-studies__item__copy">
                <h4>{caseStudy.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}