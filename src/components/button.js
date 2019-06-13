import React from 'react'
import { Link } from 'gatsby'

export default function Button({ link, copy }) {
    return (
        <button className="cta">
            <Link to={link}>
                {copy}
            </Link>
        </button>
    )
}