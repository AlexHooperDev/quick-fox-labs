import React from 'react'
import Button from '../components/button'

export default function Product({ icon, name, cost, costDetails, link, productDetails }) {
  return (
    <div className="prouct-carousel__item">
      <div className="prouct-carousel__item__upper">
        <img src={icon} alt={name} />
        <h3>
          {name}
        </h3>
        <h4>
          {cost}
        </h4>
        <h5>
          {costDetails}
        </h5>
        <Button link={link} copy="Find out more" />
      </div>
      <div className="product-carousel__item__lower">
        <ul>
          {productDetails.map(detail => (
            <li>
              <b>
                {detail.bold}
              </b>
              <p>
                {detail.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}