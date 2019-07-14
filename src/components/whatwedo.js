import React from 'react'
import Typist from 'react-typist'
import Button from './button'

export default function WhatWeDo({ title, subtitle, points }) {
    return (
        <section className="section section--l-blue">
            <div className="section__wrapper">
                <h2>
                    {title}
                </h2>
                <div className="quote--typed">
                    <Typist>
                        "I know something needs fixing but I don't know what"
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