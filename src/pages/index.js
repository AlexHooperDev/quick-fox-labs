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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome
      header="Quick Fox Labs"
      copy="We help the world’s most exciting events companies sell out, by running bespoke digital campaigns" />
    <WhatWeDo
      title="What we do"
      subtitle="From ‘what is digital marketing?’ right through to your sold out event. We set up ads campagins which are bespoke, unique to you and designed to take your audience seamlessly from interest to purchase."
      points={[{ img: leadgen, copy: 'Lead Generation' }, { img: reporting, copy: 'Reporting and Analytics' }, { img: strategy, copy: 'Digital Marketing Strategy' }]}
    />
    <HowWeDoIt
      title="How we do it"
      subtitle="Give us five days and we’ll show you. We spend time in your office, working with your team to understand your business and tackle each of your marketing challenges one by one."
      points={[{ number: '1', title: 'We Scope', copy: 'After a free discovery call, well assess where you are at right now', img: scope }, { number: '2', title: 'We Build', copy: 'You choose your service level and we spring into action', img: build }, { number: '3', title: 'We Scale', copy: 'With weekly reviews and reports to maximise exposure and minimise waste', img: scale },]}
    />
    <Logos
      title="And some of the results..."
      copy="We work with some very clever people. Here’s just a few of them:"
      brands={[{ name: 'LOGO' }, { name: 'LOGO' }, { name: 'LOGO' },]} />
    <BannerCTA
      title="Ready to get started?"
      copy="Take our quiz and we'll give you an idea of cost and ROI right away."
      link1="/quiz"
      link2="/" />
  </Layout>
)

export default IndexPage
