import React, { useState, useEffect } from 'react'
import './stepper.scss'

export default function Stepper({ steps }) {

  const [activeStep, setActiveStep] = useState(0);
  const [stepPercentage, setStepPercentage] = useState(0);

  useEffect(() => {
    setStepPercentage(activeStep / (steps.length - 1) * 100);
    console.log(activeStep, steps.length);
  }, [activeStep]);

  return (
    <div className="stepper">
      <div className="stepper__image">
        {steps.map((step, i) => {
          return (
            <div className="stepper__image__item">
              <img
                src={step.img}
                alt={step.title}
                style={{
                  opacity: `${activeStep === i ? '1' : '0'}`,
                  transform: `translate3d(0, ${activeStep === i ? '0' : '100'}%, 0)`
                }} />
              <p style={{
                opacity: `${activeStep === i ? '1' : '0'}`,
                transform: `translate3d(0, ${activeStep === i ? '0' : '-100'}%, 0)`
              }}>{step.copy}</p>
            </div>
          );
        }
        )}
      </div>
      <div className="step-container">
        {steps.map((step, i) => (
          <div
            className="step"
            onClick={() => { setActiveStep(i) }}
          >
            <div
              className="step__number"
              style={{ backgroundColor: `${activeStep >= i ? '#ff6952' : '#1a1c38'}` }}
            ><span>{step.number}</span></div>
            <div className="step__name">
              <h2 className="no-underline"
                style={{ color: `${activeStep >= i ? '#ff6952' : '#1a1c38'}` }}
              >
                {step.title}
              </h2>
              {/* <p>{step.copy}</p> */}
            </div>
          </div>
        ))}
        <div className="stepper__line">
          <div className="stepper__line__progress" style={{ width: `${stepPercentage}%` }} />
          <div className="stepper__line__outline" />
        </div>
      </div>
    </div>
  )
}