import React from 'react'

export default function Logos({ title, copy, brands }) {
    return (
        <section className="section">
            <div className="section__wrapper">
                <h2>
                    {title}
                </h2>
                <p>
                    {copy}
                </p>
                <div className="brands">
                    {brands.map(brand => (
                        <div className="brands__item">
                            {brand.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}