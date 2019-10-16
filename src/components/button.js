import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { ModalContext } from './PopupState';
import './button.scss'

export default function Button({ link, copy, main, secondary, banner, banner2, base, product, style, orange, external, modal }) {

    const state = useContext(ModalContext);

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
            <button
                onClick={() => state.setModal(true)}
                className={
                    `cta${base ? '--base' : ''}${banner ? '--banner' : ''}${banner2 ? '--banner-secondary' : ''}${main ? '--main' : ''}${secondary ? '--secondary' : ''}${product ? '--product' : ''} ${orange ? 'orange' : ''}`}
                style={{ ...style }}
            >
                <a href={link} rel="noreferrer noopener" target="_blank">
                    {copy}
                </a>
            </button>
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