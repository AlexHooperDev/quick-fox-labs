import React, { useEffect } from 'react'
import Button from './button'
import './whatwedo.scss'
import makeVisible from '../hooks/makeVisible'

export default function WhatWeDo({ title, subtitle, points }) {

    const [bodyContent, isVisible] = makeVisible();

    return (
        <section className="section section--d-blue" ref={bodyContent}>
            <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
                <h2>
                    {title}
                </h2>
                <p>
                    {subtitle}
                </p>
                <ul className="list">
                    {points.map((point) => (
                        <li><img src={point.img} /><p>{point.copy}</p></li>
                    ))}
                </ul>
                <Button link="services" copy="Let's talk" base />
            </div>
        </section>
    )
}