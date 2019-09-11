import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import Button from '../components/button'
import heroArt from '../assets/home/hero-art.svg';
import './hero.scss';

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
                    <h2 className="no-underline">{subheader}</h2>
                    <div className="quote--typed">
                        <Typist>
                            <span>"I need to sell more tickets fast?"</span>
                            <Typist.Backspace count={24} delay={3000} />
                            <span>find new customers?"</span>
                            <Typist.Backspace count={20} delay={3000} />
                            <span>reach niche audiences?"</span>
                            <Typist.Backspace count={23} delay={3000} />
                            <span>sell more tickets fast?"</span>
                            <Typist.Backspace count={24} delay={3000} />
                            <span>find new customers?"</span>
                            <Typist.Backspace count={20} delay={3000} />
                            <span>reach niche audiences?"</span>
                        </Typist>
                    </div>
                    <h3 className="no-underline">{copy}</h3>
                    <div className="cta-container">
                        <Button main link="/#down" copy='Sort my digital marketing' />
                        <Button secondary link='/school' copy='Digital marketing training' />
                    </div>
                </div>
                <div className="hero__wrapper__art" style={{ opacity: `${loaded ? '1' : '0'}`, transform: `translate3d(0, ${loaded ? '0%' : '10%'}, 0)` }}>
                    <img src={heroArt} alt={header} />
                </div>
            </div>
        </div>
    );
}