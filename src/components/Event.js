import React, {useContext} from 'react'
import Button from './button'

import { ModalContext } from './PopupState'

import './Events.scss'

export default function Events(props) {

  const state = useContext(ModalContext);

  return (
    <div className="event-item">
      {props.limited && <span>Limited spaces remaining</span>}
      <h3>{props.date}</h3>
      <h4>{props.title}</h4>
      <h5>£{props.cost}</h5>
      <Button modal product copy="Sign up here" />
      <h6 onClick={() => state.setModal(true)}>Find out more</h6>
    </div>
  )

}