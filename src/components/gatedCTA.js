import React from 'react'
import GatedInput from '../components/gatedInput'

export default function GatedCTA({ title, copy }) {
  return (
    <section className="section">
      <div className="section__wrapper">
        <h2>{title}</h2>
        <p>{copy}</p>
        <GatedInput />
      </div>
    </section>
  )
}