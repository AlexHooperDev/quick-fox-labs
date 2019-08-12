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


import leadgen from '../assets/icons/leadgen.svg'
import reporting from '../assets/icons/reporting.svg'
import strategy from '../assets/icons/strategy.svg'
import scope from '../assets/icons/scope.svg'
import build from '../assets/icons/build.svg'
import scale from '../assets/icons/scale.svg'

import pure from '../assets/pure.jpg';
import waa from '../assets/waa.jpg';
import matter from '../assets/matter.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome
      header="Quick Fox Labs"
      copy="Quick Fox Funnels are the smart digital marketing specialists for people who run events. 
      With over 10 years experience we know what works, and create marketing funnels that generate leads and sell out  the world’s most exciting events quickly.
      " />
    <WhatWeDo
      title="How we can help"
      subtitle="We take you from, 'Digital what now?' right through to your sold-out event, using our Quick Fox method that's tried and tested on global events. Using data and over 10 years of experience, we build simple, intuitive customer journeys (funnels) designed to sell tickets. From strategy and implementation to training up your teams (and yes, we can also do a bit of both)."
      points={[{ img: leadgen, copy: 'Reach new customers fast' }, { img: reporting, copy: 'Test and scale your ad campaigns ' }, { img: strategy, copy: 'Generate high quality leads ' }, { img: leadgen, copy: 'Reduce your customer acquisition cost ' }, { img: reporting, copy: 'Save time by automating the process' }, { img: strategy, copy: 'Increase your sales' }]}
    />
    <HowWeDoIt
      title="How it works..."
      subtitle="Give us five days and we’ll show you. We spend time in your office, working with your team to understand your business and tackle each of your marketing challenges one by one."
      points={[{ number: '1', title: 'We Scope', copy: 'After a free discovery call, well assess where you are at right now', img: scope }, { number: '2', title: 'We Build', copy: 'We know where your audience is and how to engage them within your budget. You choose your service level and we spring into action. ', img: build }, { number: '3', title: 'We Scale', copy: 'You\'ll receive weekly reviews and reports to maximise exposure and minimise waste.', img: scale },]}
    />
    <Logos
      title="Our Work"
      copy="We work with some very clever people. Here’s just a few of them:"
      brands={[{ name: 'PURE Life Experiences', copy: '3 x ROAS ', img: pure }, { name: 'We Are Africa', copy: '15% of ticket sales ', img: waa }, { name: 'MATTER Unconference', copy: '200 Qualified leads per month & 3 x ROAS', img: matter},]} />
    <BannerCTA
      title="Ready to get started?"
      copy="Want an idea of cost and ROI right now? We have a quiz for that. "
      link1="/quiz"
      link2="/" />
  </Layout>
)

export default IndexPage
