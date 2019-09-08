import React from 'react'
import Button from '../components/button'

export default function Product({ icon, name, cost, costDetails, link, productDetails }) {
  return (
    <div className="product-carousel__item">
      <div className="product-carousel__item__upper">
        {/* <img src={icon} alt={name} /> */}
        <h3>
          {name}
        </h3>
        <h4>
          £{cost}
        </h4>
        <h5>
          {costDetails}
        </h5>
      </div>
      <div className="product-carousel__item__lower">
        <ul>
          {productDetails.map(detail => (
            <li>
              <span>
                <b>
                  {detail.bold}
                </b>
              </span>
              <span>
                {detail.copy}
              </span>
            </li>
          ))}
        </ul>
        <Button product link="/" copy="Find out more" />
      </div>
    </div>
  )
}