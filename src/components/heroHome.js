import React from 'react';
import Button from '../components/button'
import './hero.scss';

export default function HeroHome({ header, copy }) {
    return (
        <div className="hero--home">
            <div className="hero__wrapper">
                <div className="hero__wrapper__content">
                    <h1>{header}</h1>
                    <p>{copy}</p>
                    <Button link="/#down" copy='I need you to sort my digital marketing' />
                    <Button link='/school' copy='I need digital marketing training' />
                </div>
            </div>
        </div>
    );
}