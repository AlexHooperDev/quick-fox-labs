import React from 'react';
import './hero.scss';

export default function Hero({ page, pageTitle, copy }) {
    return (
        <div className="hero">
            <div className="hero__wrapper">
                <div className="hero__wrapper__content">
                    <h5>{page}</h5>
                    <h1>{pageTitle}</h1>
                    <p>{copy}</p>
                </div>
            </div>
        </div>
    );
}