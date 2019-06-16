import React from 'react';

export default function TrainingStructure({ title, data }) {
  return (
    <section className="">
      <div className="section__wrapper--col">
        <h2>{title}</h2>
        {data.map(item => (
          <div className="col--2">
            <img src={item.icon} alt="" />
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}