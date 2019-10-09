import React from 'react'
import './caseStudiesList.scss'

import makeVisible from '../hooks/makeVisible'
import Button from './button';

export default function CaseStudiesList({ caseStudies, white, title }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className={`section section--case-studies ${white ? 'section--case-studies--white' : ''}`} ref={bodyContent}>
      <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
        {title && <h2 className="black">{title}</h2>}
        <div className="case-studies">
          {caseStudies.map(caseStudy => (
            <div className="case-studies__item" style={{ backgroundImage: `url(${caseStudy.img})` }}>
              <div className="case-studies__item__copy">
                <img src={caseStudy.logo} alt={caseStudy.title} />
                <ul>
                  {caseStudy.stats.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
                <Button
                  style={{ position: 'absolute', right: '20px', bottom: '20px' }}
                  orange
                  base
                  copy="Read more"
                  link={caseStudy.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}