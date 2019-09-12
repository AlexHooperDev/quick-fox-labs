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

import teamImg from '../assets/icons/team.svg';
import flexibleImg from '../assets/icons/flexible.svg';
import deliverImg from '../assets/icons/deliver.svg';

const About = () => (
  <Layout>
    <SEO title="About" />
    {/* <Hero
      page="About"
      pageTitle="Who We Are"
    /> */}
    <SimpleP
      hero
      medBlue
      noWave
    >
      <h2>Our Story</h2>
      <p>
        We’re Emma and Amy, and we're people who love digital marketing. Love it. Weird? Maybe, but it's a badge we wear proudly. We both believe digital,  used ethically, can be a tool for real human connection; a way to build real relationships and help power the ideas that happen when great people come together.
      </p>
      <p>
        We’ve worked in events for over 12 years. Amy became Marketing Director of  This is Beyond and Emma launched digital teams, running successful campaigns globally. When we couldn’t find a digital partner to help us grow our own events, we decided to start one.
      </p>
      <p>
        Today, our mutual desire to help others succeed, is the basis of our partnership at Quick Fox Labs and the reason behind our name. Foxes are known for being quick, cunning and a great guide when you are facing tricky situations. Which is exactly what we aim to do for all our clients. Plus, foxes go about the business of living life with sass and class.
      </p>
      <p>
        We’re flexible with how we work – we can do it for you, do it with you or help you do it for yourself. We will work with you to find the right solution and succeed.
      </p>
    </SimpleP>
    {/* <Team
      members={[{
        name: 'Amy Cahill',
        about: 'Amy is your account director, point of contact and strategy planner. She’ll take your brief and make it happen.'
      },
      {
        name: 'Emma Browne',
        about: 'Amy is your account director, point of contact and strategy planner. She’ll take your brief and make it happen.'
      }
      ]}
    /> */}
    <ThreeColBlock
      title="The Quick Fox Promise:"
      subheader="Good business happens because of good partnerships, and the best partnerships are built on trust, transparency and generosity."
      data={[
        { img: deliverImg, title: 'We keep it simple', copy: 'Everything we do is designed to simplify digital marketing. From our pricing plans to our streamlined approach, we\'re here to de-mystify and deliver.' },
        { img: flexibleImg, title: 'We keep it flexible', copy: 'No long-term commitments needed. If you don’t like the results, stop at any time with 30-days notice.' },
        { img: teamImg, title: 'We keep it collaborative', copy: 'Everything we do is an extension of your team. We will even come and sit in your office up to 1 day a week.' }
      ]}
    />
    <Family
      title="Our family"
      copy="If you need them, we work with them - we have a contacts book of the best creative and tech talent in town."
      carouselData={['Copywriters', 'Videographers', 'Designers', 'Digital Transformation Experts', 'Salesforce Architects', 'Report Writers']}
    />
    <BannerCTA
      title="Take the Quiz"
      copy="Want an idea of cost and ROI right now? We have a quiz for that."
      link1="/quiz"
      link2="/"
      link1Copy="Take the Quiz"
      link2Copy="Book a meeting"
    />
    {/*
    <GivingBack /> */}
  </Layout>
)

export default About
