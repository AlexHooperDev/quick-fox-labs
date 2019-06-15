import React from 'react'
import Typist from 'react-typist'

export default function WhatWeDo({ title, subtitle }) {
    return (
        <section className="section">
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
            </div>
        </section>
    )
}