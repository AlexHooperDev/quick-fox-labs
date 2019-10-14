import React from 'react';
import Button from './button'
import makeVisible from '../hooks/makeVisible'

export default function BannerCTA({ title, copy, link1, link1Copy, link2, link2Copy, greyBg, external1, external2 }) {

    const [bodyContent, isVisible] = makeVisible();

    return (
        <section className={`section section--cta ${greyBg ? 'section--cta--grey' : ''}`} ref={bodyContent}>
            <div className="section__wrapper--col">
                <div className="section__wrapper__content" style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translate3d(${isVisible ? '0%' : '-10%'} ,0, 0)` }}>
                    <h2 className="no-underline">
                        {title}
                    </h2>
                    <p>
                        {copy}
                    </p>
                </div>
                <div className="section__wrapper__cta">
                    <Button external={external1 ? true : false} banner link={link1} copy={link1Copy} style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translate3d(0, ${isVisible ? '0%' : '-30%'}, 0)` }} />
                    <Button external={external2 ? true : false} banner2 link={link2} copy={link2Copy} style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translate3d(0, ${isVisible ? '0' : '30%'}, 0)` }} />
                </div>
            </div>
        </section>
    )
}