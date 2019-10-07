import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroHome from '../components/heroHome'
import HowWeDoIt from '../components/howwedoit'
import WhatWeDo from '../components/whatwedo'
import Logos from '../components/logos'
import BannerCTA from '../components/bannerCTA'
import Image from "../components/image"
import SEO from "../components/seo"
import Family from '../components/family'
import ThreeColBlock from '../components/threeColBlock'


import leadgen from '../assets/icons/leadgen.svg'
import reporting from '../assets/icons/reporting.svg'
import strategy from '../assets/icons/strategy.svg'
import scope from '../assets/icons/scope.svg'
import build from '../assets/icons/build.svg'
import scale from '../assets/icons/scale.svg'
import oneImg from '../assets/1.svg'
import twoImg from '../assets/2.svg'
import threeImg from '../assets/3.svg'

import pure from '../assets/pure.jpg';
import waa from '../assets/waa.jpg';
import matter from '../assets/matter.jpg';

import digitalImg from '../assets/icons/home/digital-strategy.svg'
import valueImg from '../assets/icons/home/value-prop.svg'
import socialImg from '../assets/icons/home/social.svg'
import leadgenImg from '../assets/icons/home/lead-gen.svg'
import automatedImg from '../assets/icons/home/automated-lead-nurturing.svg'
import emailmarketingImg from '../assets/icons/home/email-marketing.svg'
import insightsImg from '../assets/icons/home/insights.svg'


import userImg from '../assets/icons/home/new/user.svg';
import settingImg from '../assets/icons/home/new/setting.svg';
import flasksImg from '../assets/icons/home/new/flasks.svg';
import groupImg from '../assets/icons/home/new/group.svg';
import rocketImg from '../assets/icons/home/new/rocket.svg';
import salesImg from '../assets/icons/home/new/sales.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome
      header="Hi, we’re Quick Fox."
      subHeader="We help you grow your business with smart digital marketing."
      copy="We have got you covered." />
    <WhatWeDo
      title="Grow your business with digital marketing."
      subtitle="We take you from, 'Digital what now?' right through to growing leads and sales, using our Quick Fox method that's tried and tested. Using data and over 15 years of experience, we build simple, intuitive customer journeys designed to grow your business."
      copy="From strategy to implementation, we can help you:"
      points={[{ img: userImg, copy: 'Find the right customers quickly' }, { img: settingImg, copy: 'Build campaigns that drive results' }, { img: flasksImg, copy: 'Use data to test and scale what works' }, { img: groupImg, copy: 'Generate high-quality leads' }, { img: rocketImg, copy: 'Reduce your customer acquisition cost ' }, { img: salesImg, copy: 'Increase your sales' }]}
    />
    {/* <HowWeDoIt
      title="How it works..."
      subtitle="Give us five days and we’ll show you. We spend time in your office, working with your team to understand your business and tackle each of your marketing challenges one by one."
      points={[{ number: '1', title: 'We Scope', copy: 'After a free discovery call, well assess where you are at right now', img: scope }, { number: '2', title: 'We Build', copy: 'We know where your audience is and how to engage them within your budget. You choose your service level and we spring into action. ', img: build }, { number: '3', title: 'We Scale', copy: 'You\'ll receive weekly reviews and reports to maximise exposure and minimise waste.', img: scale },]}
    /> */}
    <ThreeColBlock
      numbers
      title="Why work with Quick Fox?"
      subheader=""
      data={[
        { img: oneImg, title: 'We see the big picture.', copy: 'We don’t just look at one stage of the customer journey, or specialise in only one channel. We take care of everything, from first click to purchase.' },
        { img: twoImg, title: 'We’ve got the experience.', copy: 'We’ve worked in digital marketing for over 15 years, which means we know where you audience is and how to engage them with your budget.' },
        { img: threeImg, title: 'We’re obsessed with testing.', copy: 'We’ll be honest: we’re nerds. We don’t want to waste time or money any more than you do, so we constantly test and monitor to get you the best results.' }
      ]}
    />
    <Family
      title="Our customers love what we do"
      carouselData={[{ title: 'Director, PURE', quote: 'We were totally new to Digital Marketing and the team made it quick, simple and effective to get started. Tailoring the approach to exactly what we needed resulted in new business sales! I would recommend them."' }, { title: 'MD, WAA', quote: 'I have always found them a pleasure to work with. We knew we needed to grow but needed guiding on how. They came in and found the right solution for us and delivered quality leads and sales quickly. I have no hesitation in recommending them.' }]}
    />
    {/* <Logos
      title="Our Work"
      copy="We work with some very clever people. Here’s just a few of them:"
      brands={[{ name: 'PURE Life Experiences', copy: '3 x ROAS ', img: pure }, { name: 'We Are Africa', copy: '15% of ticket sales ', img: waa }, { name: 'MATTER Unconference', copy: '200 Qualified leads per month & 3 x ROAS', img: matter },]} /> */}

    <BannerCTA
      title="Get in touch"
      copy="Want an idea of cost and ROI right now? Get in touch"
      link1="/quiz"
      link2="/"
      link1Copy="Contact us" link2="/"
      link2Copy="Book a meeting"
    />

  </Layout>
)

export default IndexPage
