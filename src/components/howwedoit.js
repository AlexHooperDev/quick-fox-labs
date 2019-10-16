import React from 'react'
import Process from './process'
import Stepper from './stepper'
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
                {/* <Process points={points} /> */}
                <Stepper steps={points} />
            </div>
        </section>
    )
}