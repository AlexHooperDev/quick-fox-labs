import React from 'react';
import Button from './button'

export default function BannerCTA({ title, copy, link1, link2 }) {
    return (
        <section className="section--cta">
            <div className="section__wrapper--col">
                <div className="section__wrapper__content">
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {copy}
                    </p>
                </div>
                <div className="section__wrapper__cta">
                    <Button link={link1} copy="Take the quiz" />
                    <Button link={link2} copy="Book a meeting" />
                </div>
            </div>
        </section>
    )
}