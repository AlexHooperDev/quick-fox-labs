import React from 'react'
import makeVisible from '../hooks/makeVisible'

import './team.scss'

export default function Team({ members }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <section className="section" ref={bodyContent}>
      <div className={`section__wrapper section__wrapper--col ${isVisible ? 'section__wrapper--visible' : ''}`}>
        <h2>Our Team</h2>
        {
          members.map(member => (
            <div className="member">
              <img src="/" alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.about}</p>
            </div>
          ))
        }
        <div className="">

        </div>
      </div>
    </section>
  )
}