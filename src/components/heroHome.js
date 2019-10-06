import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import Button from '../components/button'
import heroArt from '../assets/home/hero-art.svg';
import './hero.scss';
import arrow from '../assets/arrow-down.svg'

export default function HeroHome({ header, subheader, copy }) {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // on mount
        setTimeout(() => {
            setLoaded(true);
        }, 600)
    }, [])

    return (
        <div className="hero--home">
            <div className="hero__wrapper">
                <div className="hero__wrapper__content" style={{ opacity: `${loaded ? '1' : '0'}`, transform: `translate3d(${loaded ? '0%' : '-10%'}, 0, 0)` }}>
                    <h1>{header}</h1>
                    <div className="quote--typed">
                        <Typist>
                            <span>Need to get more leads quickly?</span>
                            <Typist.Backspace count={31} delay={3000} />
                            <span>Want to reach niche audiences?</span>
                            <Typist.Backspace count={30} delay={3000} />
                            <span>Need to test digital marketing?</span>
                            <Typist.Backspace count={31} delay={3000} />
                            <span></span>
                            <Typist.Backspace count={24} delay={3000} />
                            <span></span>
                            <Typist.Backspace count={20} delay={3000} />
                            <span></span>
                        </Typist>
                    </div>
                    <h3 className="no-underline">{copy}</h3>
                    <div className="cta-container">
                        <Button main link="/#down" copy='Get in touch' />
                    </div>
                </div>
                <div className="hero__wrapper__art" style={{ opacity: `${loaded ? '1' : '0'}`, transform: `translate3d(0, ${loaded ? '0%' : '10%'}, 0)` }}>
                    <img src={heroArt} alt={header} />
                </div>
            </div>
            <img className="arrow" src={arrow} alt="down arrow" />
        </div>
    );
}