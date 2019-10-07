import React from 'react'
import './caseStudiesList.scss'

import makeVisible from '../hooks/makeVisible'

export default function CaseStudiesList({ caseStudies, white, title }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section section--case-studies ${white ? 'section--case-studies--white' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
        {title && <h2 className="black">{title}</h2>}
        <div className="case-studies">
          {caseStudies.map(caseStudy => (
            <div className="case-studies__item" style={{ backgroundImage: `url(${caseStudy.img})` }}>
              <div className="case-studies__item__overlay">
                <h3>{caseStudy.name}</h3>
                <h4>The challenge:</h4>
                <p>{caseStudy.challenge}</p>
                <h4>The gameplan:</h4>
                <p>{caseStudy.gameplan}</p>
                <h4>The solution:</h4>
                <p>{caseStudy.solution}</p>
                <h4>The results:</h4>
              </div>
              <div className="case-studies__item__copy">
                <h2>{caseStudy.name}</h2>
                <ul>
                  {caseStudy.stats.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}