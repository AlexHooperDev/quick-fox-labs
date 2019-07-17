import React from 'react'
import makeVisible from '../hooks/makeVisible'
import './logos.scss';

export default function Logos({ title, copy, brands }) {

    const [bodyContent, isVisible] = makeVisible();

    return (
        <section className="section section--d-blue" ref={bodyContent}>
            <div className={`section__wrapper ${isVisible ? 'section__wrapper--visible' : ''}`}>
                <h2 className="white">
                    {title}
                </h2>
                <p>
                    {copy}
                </p>
                <div className="brands">
                    {brands.map(brand => (
                        <div className="brands__item">
                            {brand.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}