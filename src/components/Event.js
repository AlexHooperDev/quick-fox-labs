import React from 'react'
import Button from './button'

import './Events.scss'

export default function Events(props) {

  return (
    <div className="event-item">
      {props.limited && <span>Limited spaces remaining</span>}
      <h3>{props.date}</h3>
      <h4>{props.title}</h4>
      <h5>£{props.cost}</h5>
      <Button product link="/" copy="Sign up here" />
      <h6>Find out more</h6>
    </div>
  )

}