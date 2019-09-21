import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import Logos from '../components/logos'
import ServicesListBig from '../components/servicesListBig'
import HowItWorksList from '../components/howItWorksList'
import HowWeDoIt from '../components/howwedoit'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"
import SimpleP from "../components/simpleP";

import scope from '../assets/icons/scope.svg'
import build from '../assets/icons/build.svg'
import scale from '../assets/icons/scale.svg'
import headerImg from '../assets/icons/services.svg'

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero
      page="Services"
      pageTitle="Are you spending more to get customers than they are worth or not sure where to start with digital marketing? We can help."
      copy="With over 10 years event marketing experience, we know what works, and understand that advertising alone won’t sell out your event. That’s why we work with your teams to build smart automated customer journeys that cover every step from the first hello, to purchase across channels."
      img={headerImg}
    />
    <ServicesListBig
      data={[
        {
          title: 'Digital strategy',
          copy: 'We make a plan. Doing the right things in the right places, for the right reasons.'
        },
        {
          title: 'Value proposition and messaging workshops',
          copy: 'We discover your brand\'s USP\’s and expand on them.'
        },
        {
          title: 'Setting up and running ad campaigns',
          copy: 'We get your event in front of the right people at the right time and convert them into leads.'
        },
        {
          title: 'Lead generation',
          copy: 'We get qualified leads directly to your sales teams to accelerate growth.'
        },
        {
          title: 'Lead nurturing',
          copy: 'We build highly effective engagement funnels that nurture customers through to purchase.'
        },
        {
          title: 'Marketing Automation',
          copy: 'We automate every imaginable manual task,leaving you free to do what you do best.'
        },
        {
          title: 'Email marketing',
          copy: 'We plan, create and schedule your campaign emails to best work with your strategy.'
        },
        {
          title: 'Reporting and Analytics',
          copy: 'We work with full transparency, sending weekly reports so you know what\'s working, and quickly.'
        },
        {
          title: 'Digital transformation',
          copy: 'We totally transform your business\' digital landscape. Form your email and CRM platforms right through to fully integrated systems.',
        },
      ]} />
    <HowWeDoIt
      title="How it works..."
      subtitle="Yep, we're even transparent about our process"
      points={[{ number: '1', title: 'We Scope', copy: 'After a free discovery call, well assess where you are at right now', img: scope }, { number: '2', title: 'We Build', copy: 'We know where your audience is and how to engage them within your budget. You choose your service level and we spring into action. ', img: build }, { number: '3', title: 'We Scale', copy: 'You\'ll receive weekly reviews and reports to maximise exposure and minimise waste.', img: scale },]}
    />
    <SimpleP
      darkBlue
    >
      <h2>For example</h2>
      <p>Your customer journey might look like this:</p>
      <img src="https://via.placeholder.com/940x800?text=Customer+Journey" alt="Customer Journey" />
    </SimpleP>
    <SimpleP
    >
      <h2>The tech</h2>
      <p>We're fluent in tech. These are the platforms we get asked about the most, but if you can't see yours here, just ask – it's likely we'll have used it before.</p>
    </SimpleP>
    {/* <CustomerJ /> */}
    <BannerCTA
      greyBg
      title="Ready to get started?"
      copy="Want an idea of cost and ROI right now? We have a quiz for that."
      link1="/quiz"
      link1Copy="Take the quiz"
      link2="/"
      link2Copy="Book a meeting"
    />
  </Layout>
)

export default Services
