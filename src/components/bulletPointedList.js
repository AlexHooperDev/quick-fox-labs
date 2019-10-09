import React from 'react';

import './bulletPointedList.scss';

import listImg from '../assets/icons/whoisitfor.svg'

export default function BulletPointedList({ data }) {
  return (
    <section className="section">
      <div className={`section__wrapper section__wrapper--visible`}>
        <h2>Who it is for?</h2>
        <p>If you want to grow your business and become a true expert in digital marketing, this is for you. We'll take you way beyond what you learn on the job, in a structured set-up, designed to relate to your work. If you are:</p>
        <div className="bullet-list">
          <div className="bullet-list__inner">
            <div className="bullet-list__inner__img">
              <img src={listImg} alt="List image" />
            </div>
            <ul className="bullet-list__inner__list">
              {data.map((point) => (
                <li>{point.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}