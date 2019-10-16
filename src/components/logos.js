import React, { useState, useEffect } from 'react'
import makeVisible from '../hooks/makeVisible'
import './logos.scss';
import Button from './button';

import arrow from '../assets/icons/arrow-white.svg';

export default function Logos({ title, copy, brands }) {

    const [bodyContent, isVisible] = makeVisible();
    const [sliderIndex, setSliderIndex] = useState(0);

    return (
        <section className="section section--no-width section--d-blue" ref={bodyContent}>
            <div className={`section__wrapper section__wrapper--no-width ${isVisible ? 'section__wrapper--visible' : ''}`}>
                {/* <h2 className="white">
                    {title}
                </h2>
                <p>
                    {copy}
                </p> */}
                <div className="brands">
                    <div className="brands__controls">
                        <button style={{ pointerEvents: `${sliderIndex === 0 ? 'none' : 'auto'}` }} onClick={() => setSliderIndex(sliderIndex - 1)}>
                            <img src={arrow} alt="back" />
                        </button>
                        <button onClick={() => setSliderIndex(sliderIndex + 1)} style={{ pointerEvents: `${sliderIndex + 1 === brands.length ? 'none' : 'auto'}` }}>
                            <img src={arrow} alt="next" />
                        </button>
                    </div>
                    {brands.map((brand, index) => (
                        <div className={`brands__item ${sliderIndex === index ? 'brands__item--visible' : ''} ${index === sliderIndex - 1 ? 'prev' : ''}`} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(${brand.img})` }}>
                            <div className="brands__item__inner">
                                <h4>Our Work</h4>
                                <h3>{brand.name}</h3>
                                <h5>Results: <span>{brand.copy}</span></h5>
                                <Button link="" copy="Find out more" base />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}