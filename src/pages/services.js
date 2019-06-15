import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import Logos from '../components/logos'
import ServicesList from '../components/servicesList'
import HowItWorksList from '../components/howItWorksList'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero
      page="Services"
      pageTitle="What We Do"
      copy="We're people who love digital marketing. Love it. Yes, we know that sounds weird but it's a badge wear proudly. Our experience comes from right across the industry, marketing global events and delivering results."
    />
    <ServicesList data={[
      {
        title: 'Lead generation',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'Marketing Automation',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'Lead Nurturing',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'Digital Marketing Strategy',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'Digital Transformation',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'LinkedIn Marketing',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'Facebook and Instagram Marketing',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
      {
        title: 'Google Display and search Marketing',
        points: [
          'one',
          'two',
          'three',
          'four',
        ],
      },
    ]} />
    <Logos
      title="The tech"
      copy="We're fluent in tech. These are the platforms we get asked about the most, but if you can't see yours here, just ask – it's very likely we'll have used it before."
      brands={[
        { name: 'microsoft' },
        { name: 'apple' },
        { name: 'tesla' },
      ]}
    />
    <HowItWorksList title="How it works" data={[
      {
        subtitle: 'Step one: we scope',
        copy: 'After a free discovery call, well assess your where you are right now, looking at your assets and the health of your existing activity.',
        img: '/',
        points: [
          'We work with you to understand your goals, and develop a  bespoke strategy.',
          'Together we create your segmented offer to reach the right people, at the right time with the right message. '
        ],
        link: '/',
        linkCopy: 'Do it yourself with our frameworks',
      },
      {
        subtitle: 'Step two: we build',
        copy: 'After a free discovery call, well assess your where you are right now, looking at your assets and the health of your existing activity.',
        img: '/',
        points: [
          'We create your customer journey, which is your full technical set-up.',
          'We test traffic and capture data across paid social, PPC and Google and beyond.',
          'We capture your leads through a dedicated landing page.',
          'We nurture those leads with email marketing.',
          'We score your leads to calculate how valuable they are.'
        ],
        link: '/',
        linkCopy: 'Do it yourself with our frameworks',
      },
      {
        subtitle: 'Step three: we scale',
        copy: 'With weekly reviews and reports to maximise exposure and minimise waste.',
        img: '/',
        points: [
          'We constantly monitor your campaigns, reporting as we go.',
          'We optimise your campaign based on these results, streamlining to maximise your budget and results.'
        ],
        link: '/',
        linkCopy: 'Do it yourself with our frameworks',
      }
    ]} />
    <BannerCTA
      title="See how we can help your business grow"
      copy="Our pirces are transparently layed out in full on the pricing page"
      link1="/cost"
      link2="/"
    />
    {/* <CustomerJ /> */}
    <BannerCTA
      title="Ready to get started?"
      copy="Take our quiz and we’ll give you an idea of cost and ROI right away."
      link1="/quiz"
      link2="/"
    />
  </Layout>
)

export default Services
