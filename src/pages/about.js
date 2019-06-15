import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import SimpleP from '../components/simpleP'
import Team from '../components/team'
import ThreeColBlock from '../components/threeColBlock'
import Family from '../components/family'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      page="About"
      pageTitle="Who We Are"
      copy="We're people who love digital marketing. Love it. Yes, we know that sounds weird but it's a badge wear proudly. Our experience comes from right across the industry, marketing global events and delivering results."
    />
    <SimpleP
      copy="We sell out events – simple as that. Our methods means we're never worried about getting bums on seats, but we are worried about working in an industry that doesn't support our values. That's why we set up Quick Fox Labs. To fix the agency problem, to provide a service we believe in, and to sell out your events, without breaking the bank. Simple. "
    />
    <Team
      members={[{
        name: 'Amy Cahill',
        about: 'Amy is your account director, point of contact and strategy planner. She’ll take your brief and make it happen.'
      },
      {
        name: 'Emma Browne',
        about: 'Amy is your account director, point of contact and strategy planner. She’ll take your brief and make it happen.'
      }
      ]}
    />
    <ThreeColBlock
      data={[
        { img: '/', title: 'We keep it simple', copy: 'Everything we do is designed to simplify digital marketing. From our pricing plans to our streamline approach, we’re here to de-mystify and deliver.' },
        { img: '/', title: 'We keep it focused', copy: 'One word: strategy. We’re experts in digital marketing, so we know where your audience is and how to engage them within your budget.' },
        { img: '/', title: 'We keep it transparent', copy: 'Our fee structure is crystal clear. You always know everything we’re doing and our campaigns are ethically sound and fully legally compliant.' }
      ]}
    />
    <Family
      title="Our family"
      copy="If you need them, we work with them - we have a contacts book of the best creative and tech talent in town."
      carouselData={['Copywriters', 'Videographers', 'Designers', 'Digital Transformation Experts', 'Salesforce Architects', 'Report Writers']}
    />
    <BannerCTA
      title="Ready to get started?"
      copy="Take our quiz and we'll give you an idea of cost and ROI right away."
      link1="/quiz"
      link2="/" />
    {/*
    <GivingBack /> */}
  </Layout>
)

export default About
