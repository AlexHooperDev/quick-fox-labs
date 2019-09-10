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
      copy="We're people who love digital marketing. Love it. Weird? Maybe, but it's a badge we wear proudly. We are a small agency who pack a big punch, with over 10 years experience marketing events across the industry. Whether it's advertising at Cannes Lions, selling out niche events or building audiences for global campaigns, we will deliver."
    />
    <SimpleP
      medBlue
      title="Our Story"
      copy="Quick Fox exists for two reasons: 
      1. Great digital marketing should be accessible to all. It's not a dark art reserved for the few with big budgets– it's data,used well, and that should be available for everyone.
      2. We've been in-house events marketers. We know what it's like. And when we couldn't find an agency who did what we needed, and quickly, we started one.
      "
    />
    <SimpleP
      medBlue
      noWave
      title="Why a lab?"
      copy="Honestly? It's nerdy. We are obsessed with constantly testing and monitoring results, just like in a science lab. It means we're always tweaking bits, and working to get you the best results."
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
    {/* <ThreeColBlock
      data={[
        { img: '/', title: 'We keep it simple', copy: 'Everything we do is designed to simplify digital marketing. From our pricing plans to our streamline approach, we’re here to de-mystify and deliver.' },
        { img: '/', title: 'We keep it focused', copy: 'One word: strategy. We’re experts in digital marketing, so we know where your audience is and how to engage them within your budget.' },
        { img: '/', title: 'We keep it transparent', copy: 'Our fee structure is crystal clear. You always know everything we’re doing and our campaigns are ethically sound and fully legally compliant.' }
      ]}
    /> */}
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
