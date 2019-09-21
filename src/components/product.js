import React from 'react'
import Button from '../components/button'

export default function Product({ icon, name, type, cost, costDetails, forTxt, link, productDetails, extras }) {

  if (extras) {
    return (
      <div className={`product-carousel__item ${extras ? 'product-carousel__item--wide' : ''}`}>
        <div className="product-carousel__item__upper">
          {/* <img src={icon} alt={name} /> */}
          <h3>
            {name}
          </h3>
          <h5>
            {costDetails}
          </h5>
        </div>
        <div className="product-carousel__item__lower">
          <ul>
            <li></li>
            {/* {productDetails.map(detail => (
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
              // if list exists then map throigh that
            ))} */}
          </ul>
          <Button product link="/" copy="Find out more" />
        </div>
      </div>
    );
  }

  return (
    <div className="product-carousel__item">
      <div className="product-carousel__item__upper">
        {/* <img src={icon} alt={name} /> */}
        <h3>
          <span>{type}</span> <br />
          {name}
        </h3>
        <p>For: {forTxt}</p>
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
                {detail.copy && <img src={detail.copy} alt="tick" />}
              </span>
              <span>
                <b>
                  {detail.bold}
                </b>
              </span>
            </li>
          ))}
        </ul>
        <Button product link="/" copy="Get in touch" />
      </div>
    </div>
  )
}