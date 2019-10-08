import React from 'react'
import makeVisible from '../hooks/makeVisible'

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';

import './family.scss'

export default function Family({ title, copy, carouselData }) {

  const [bodyContent, isVisible] = makeVisible();

  const settings = {
    className: "family-carousel",
    infinite: true,
    slidesToShow: 1,
    initialSlide: 0,
    speed: 800,
    easing: "cubic-bezier(.57,.21,.69,1.25)",
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
        verticalSwiping: false,
        vertical: false,
      }
    }
    ]
  };

  return (
    <section className="section section--d-blue" ref={bodyContent}>
      <div className={`section__wrapper section__wrapper--col ${isVisible ? 'section__wrapper--visible' : ''}`}>
        <div className="family">
          <h2>
            {title}
          </h2>
          <p>
            {copy}
          </p>
        </div>
        <Slider {...settings}>
          {carouselData.map(item => (
            <div className="family-carousel__item">
              <div className="family-carousel__item__inner">
                <div className="family-carousel__item__inner__content">
                  <h3>{item.quote}</h3>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}