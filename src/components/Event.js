import React from 'react'
import Button from './button'

import './Events.scss'

export default function Events(props) {

  return (
    <div className="event-item">
      <h3>{props.title}</h3>
      <h4>{props.date}</h4>
      <h5>£{props.cost}</h5>
      <Button product link="/" copy="Sign up here" />
    </div>
  )

}