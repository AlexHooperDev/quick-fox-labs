import React, { useEffect } from 'react'
import Typist from 'react-typist'
import Button from './button'
import './whatwedo.scss'
import makeVisible from '../hooks/makeVisible'

export default function WhatWeDo({ title, subtitle, points }) {

    const [bodyContent, isVisible] = makeVisible();

    return (
        <section className="section section--l-blue" ref={bodyContent}>
            <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
                <h2>
                    {title}
                </h2>
                <div className="quote--typed">
                    <Typist>
                        <span> "I know something needs fixing but I don't know what" </span>
                        <Typist.Backspace count={54} delay={2000} />
                        <span> “Digital marketing costs a lot, right?” </span>
                        <Typist.Backspace count={40} delay={2000} />
                        <span> “I have no idea where to start” </span>
                        <Typist.Backspace count={32} delay={2000} />
                        <span> "I know something needs fixing but I don't know what" </span>
                        <Typist.Backspace count={54} delay={2000} />
                        <span> “Digital marketing costs a lot, right?” </span>
                        <Typist.Backspace count={40} delay={2000} />
                        <span> “I have no idea where to start” </span>
                        <Typist.Backspace count={32} delay={2000} />
                        <span> "I know something needs fixing but I don't know what" </span>
                        <Typist.Backspace count={54} delay={2000} />
                        <span> “Digital marketing costs a lot, right?” </span>
                        <Typist.Backspace count={40} delay={2000} />
                        <span> “I have no idea where to start” </span>
                    </Typist>
                </div>
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