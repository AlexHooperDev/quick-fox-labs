import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

export default function Button({ link, copy, main, secondary, banner, banner2, base, style }) {
    return (
        <button className={
            `cta${base ? '--base' : ''}${banner ? '--banner' : ''}${banner2 ? '--banner-secondary' : ''}${main ? '--main' : ''}${secondary ? '--secondary' : ''}`}
            style={{ ...style }}
        >
            <Link to={link}>
                {copy}
            </Link>
        </button>
    )
}