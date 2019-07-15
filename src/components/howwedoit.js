import React from 'react'
import './howwedoit.scss'
import makeVisible from '../hooks/makeVisible'

export default function HowWeDoIt({ title, subtitle, points }) {

    const [bodyContent, isVisible] = makeVisible();

    return (
        <section className="section" ref={bodyContent}>
            <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
                <h2>
                    {title}
                </h2>
                <p>
                    {subtitle}
                </p>
                <div className="process">
                    {points.map((point, i) => (
                        <div className="process__item">
                            <div className={`process__item__content ${i % 2 === 0 ? '' : 'process__item__content--right'}`}>
                                <span className="number">
                                    {point.number}
                                </span>
                                <div className="content__inner">
                                    <h3>{point.title}</h3>
                                    <p>{point.copy}</p>
                                </div>
                            </div>
                            <div className="process__item__art">
                                <img src={point.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}