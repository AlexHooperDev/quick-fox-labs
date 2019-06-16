import React from 'react';
import Button from '../components/button'


export default function TwoColCTA({
  title,
  cta1Title,
  cta1Copy,
  cta1Button,
  cta2Title,
  cta2Copy,
  cta2Button
}) {
  return (
    <section className="section">
      <div className="section__wrapper--col">
        <h2>
          {title}
        </h2>
        <div className="col--cta">
          <h3>
            {cta1Title}
          </h3>
          <p>
            {cta1Copy}
          </p>
          <Button link="" copy={cta1Button} />
        </div>
        <div className="col--cta">
          <h3>
            {cta2Title}
          </h3>
          <p>
            {cta2Copy}
          </p>
          <Button link="" copy={cta2Button} />
        </div>
      </div>
    </section>
  )
}