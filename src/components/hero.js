import React from 'react';
import './hero.scss';
import fox from '../assets/qfl-logo-notext.svg'

export default function Hero({ page, pageTitle, copy, darkBlue, img }) {
    return (
        <div className={`hero hero--normal ${darkBlue ? 'hero--d-blue' : ''}`}>
            <div className="hero__wrapper">
                <div className="hero__wrapper__content">
                    <h1>{pageTitle}</h1>
                    <p>{copy}</p>
                </div>
                <div className="hero__wrapper__fox">
                    <img src={img} alt="pageTitle" />
                </div>
            </div>
        </div>
    );
}