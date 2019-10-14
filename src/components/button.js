import React, { useContext } from 'react'
import { Link } from 'gatsby'
import './button.scss'

import { PopupContextProvider, PopupContext } from './PopupState'

export default function Button({ link, copy, main, secondary, banner, banner2, base, product, style, orange, external, modal }) {

    const state = useContext(PopupContext);

    if (external) {
        return (
            <button
                className={
                    `cta${base ? '--base' : ''}${banner ? '--banner' : ''}${banner2 ? '--banner-secondary' : ''}${main ? '--main' : ''}${secondary ? '--secondary' : ''}${product ? '--product' : ''} ${orange ? 'orange' : ''}`}
                style={{ ...style }}
            >
                <a href={link} rel="noreferrer noopener" target="_blank">
                    {copy}
                </a>
            </button>
        );
    }

    if (modal) {
        return (
            <PopupContextProvider>
                <button
                    onClick={() => state.setLanguage(state.modal ? false : true)}
                    className={
                        `cta${base ? '--base' : ''}${banner ? '--banner' : ''}${banner2 ? '--banner-secondary' : ''}${main ? '--main' : ''}${secondary ? '--secondary' : ''}${product ? '--product' : ''} ${orange ? 'orange' : ''}`}
                    style={{ ...style }}
                >
                    <a href={link} rel="noreferrer noopener" target="_blank">
                        {copy}
                    </a>
                </button>
            </PopupContextProvider>
        )
    }

    return (
        <button className={
            `cta${base ? '--base' : ''}${banner ? '--banner' : ''}${banner2 ? '--banner-secondary' : ''}${main ? '--main' : ''}${secondary ? '--secondary' : ''}${product ? '--product' : ''} ${orange ? 'orange' : ''}`}
            style={{ ...style }}
        >
            <Link to={link}>
                {copy}
            </Link>
        </button>
    )
}