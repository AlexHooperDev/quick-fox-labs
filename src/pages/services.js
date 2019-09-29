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
import LongList from '../components/LongList'

import scope from '../assets/icons/scope.svg'
import build from '../assets/icons/build.svg'
import scale from '../assets/icons/scale.svg'
import headerImg from '../assets/icons/services.svg'

//Tech logos
import linkedInImg from '../assets/logos/linkedin.png'
import googleAdsImg from '../assets/logos/google-ads.svg'
import mailchimpImg from '../assets/logos/mailchimp.png'
import marketoImg from '../assets/logos/marketo.svg'
import pardotImg from '../assets/logos/pardot.svg'
import hubspotImg from '../assets/logos/hubspot.svg'

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero
      page="Services"
      pageTitle="Are you spending more to get customers than they are worth? We can help."
      copy="With over 10 years event marketing experience, we know what works, and understand that advertising alone won’t sell out your event. That’s why we work with your teams to build smart automated customer journeys."
      img={headerImg}
    />
    <ServicesListBig
      blue
      title="Our Services"
      data={[
        {
          title: 'Digital strategy',
          copy: 'We make a plan. Doing the right things in the right places, for the right reasons. '
        },
        {
          title: 'Value proposition and messaging',
          copy: 'Discover your brand\'s USP\’s and expand on them.'
        },
        {
          title: 'Paid Social',
          copy: 'Get your event in front of the right people at the right time and convert them into leads.'
        },
        {
          title: 'Lead generation',
          copy: 'Get qualified leads directly to your sales teams to accelerate growth'
        },
        {
          title: 'Automated Lead nurturing',
          copy: 'Build highly effective engagement funnels that nurture customers through to purchase'
        },
        {
          title: 'Email marketing',
          copy: 'We plan, create and schedule your campaign emails to best work with your strategy.'
        },
        {
          title: 'Insights and reporting',
          copy: 'We work with full transparency, sending weekly reports so you know what\'s working, and quickly.'
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
    <LongList
      title="The tech"
      subHeader="We're fluent in tech. These are the platforms we get asked about the most, but if you can't see yours here, just ask – it's likely we'll have used it before."
      data={[{ name: 'LinkedIn', img: linkedInImg }, { name: 'Google ads', img: googleAdsImg }, { name: 'Mailchimp', img: mailchimpImg }, { name: 'Marketo', img: marketoImg }, { name: 'Padrot', img: pardotImg }, { name: 'Hubspot', img: hubspotImg },]} />
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
