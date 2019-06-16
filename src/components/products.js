import React from 'react'
import Product from '../components/product'

export default function Products({ title, copy, productData }) {
  return (
    <section className="section">
      <div className="section__wrapper">
        <h2>
          {title}
        </h2>
        <p>
          {copy}
        </p>
        <div className="product-carousel">
          {productData.map(item => (
            <Product
              icon={item.icon}
              name={item.name}
              cost={item.cost}
              costDetails={item.costDetails}
              productDetails={item.productDetails}
            />
          ))}
        </div>
      </div>
    </section>
  )
}