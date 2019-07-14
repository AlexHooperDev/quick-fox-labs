import React from 'react';
import Button from '../components/button'
import heroArt from '../assets/home/hero-art.svg';
import './hero.scss';

export default function HeroHome({ header, copy }) {
    return (
        <div className="hero--home">
            <div className="hero__wrapper">
                <div className="hero__wrapper__content">
                    <h1>{header}</h1>
                    <h2 className="no-underline">{copy}</h2>
                    <div className="cta-container">
                        <Button main link="/#down" copy='Sort my digital marketing' />
                        <Button secondary link='/school' copy='Digital marketing training' />
                    </div>
                </div>
                <div className="hero__wrapper__art">
                    <img src={heroArt} alt={header} />
                </div>
            </div>
        </div>
    );
}