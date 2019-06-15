import React from 'react'

import './team.scss'

export default function Team({ members }) {
  return (
    <section className="section">
      <div className="section__wrapper--col">
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