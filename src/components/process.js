import React, { isValidElement } from 'react'
import ProcessItem from './processItem'
import './process.scss'

export default function Process({ points }) {
  return (
    <div className="process">
      {points.map((point, i) => (
        <ProcessItem point={point} i={i} />
      ))}
    </div>
  )
}