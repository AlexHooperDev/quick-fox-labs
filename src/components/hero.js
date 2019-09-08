import React from 'react';
import './hero.scss';
import fox from '../assets/qfl-logo-notext.svg'

export default function Hero({ page, pageTitle, copy }) {
    return (
        <div className="hero--normal">
            <div className="hero__wrapper">
                <div className="hero__wrapper__fox">
                    <img src={fox} alt="Quick Fox Labs" />
                </div>
                <div className="hero__wrapper__content">
                    <h5>{page}</h5>
                    <h1>{pageTitle}</h1>
                    <p>{copy}</p>
                </div>
            </div>
        </div>
    );
}