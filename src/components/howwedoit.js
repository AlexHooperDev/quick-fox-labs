import React from 'react'

export default function HowWeDoIt({ title, subtitle }) {
    return (
        <section className="section">
            <div className="section__wrapper">
                <h2>
                    {title}
                </h2>
                <p>
                    {subtitle}
                </p>
            </div>
        </section>
    )
}