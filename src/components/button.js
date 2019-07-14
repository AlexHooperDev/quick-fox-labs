import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

export default function Button({ link, copy, main, secondary, banner, banner2, base }) {
    return (
        <button className={
            `cta${base ? '--base' : ''}${banner ? '--banner' : ''}${banner2 ? '--banner-secondary' : ''}${main ? '--main' : ''}${secondary ? '--secondary' : ''}`}>
            <Link to={link}>
                {copy}
            </Link>
        </button>
    )
}