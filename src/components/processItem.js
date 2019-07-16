import React from 'react'
import makeVisible from '../hooks/makeVisible'


export default function ProcessItem({ point, i }) {

  const [bodyContent, isVisible] = makeVisible();

  return (
    <div className="process__item" ref={bodyContent}>
      <div className={`process__item__content ${i % 2 === 0 ? '' : 'process__item__content--right'}`}
        style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translate3d(${isVisible ? '0%' : '-20%'}, 0, 0)` }}
      >
        <div className="process__item__content__inner">
          <span className="number">
            {point.number}
          </span>
          <div className="content__inner">
            <h3>{point.title}</h3>
            <p>{point.copy}</p>
          </div>
        </div>
      </div>
      <div className="process__item__art" style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translate3d(0, ${isVisible ? '0%' : '20%'}, 0)` }}>
        <img src={point.img} alt="" />
      </div>
    </div>
  )
}