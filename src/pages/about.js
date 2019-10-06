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

import '../components/about.scss'

import teamImg from '../assets/icons/team.svg';
import flexibleImg from '../assets/icons/flexible.svg';
import simpleImg from '../assets/icons/simple.svg';
import emmaAmyImg from '../assets/headshot.jpg';

const About = () => (
  <Layout>
    <SEO title="About" />
    {/* <Hero
      page="About"
      pageTitle="Who We Are"
    /> */}
    <SimpleP
      hero
      darkBlue
      noWave
    >
      <h2>Let us introduce ourselves.</h2>
      <div className="our-story">
        <div className="our-story__content">
          <p>
            We’re Emma and Amy, and we love digital marketing. Yep, love it. Some might think that odd, but you see we believe digital done right is a powerful tool for human connection – a way to build relationships and nurture shared ideas. Because great things happen when people come together.
        </p>
          <p>
            For more than 15 years Amy has transformed the digital marketing strategies at Guardian Edinburgh International Television Festival, The London Tea Company, Cannes Lions International Festival of Creativity and, most recently, This is Beyond. A dab hand at a rebrand, she understands how to align brand purpose with business goals via simple, intuitive customer journeys.
        </p>
          <p>
            Emma has set up digital teams at Lawyers On Demand and This is Beyond, implementing brand new systems and processes across large teams and running successful global, cross-channel campaigns. A stickler for detail, she reads data like novels and knows exactly what story your customers are trying to tell you.
        </p>
        </div>
        <img className="our-story__img" src={emmaAmyImg} alt="Emma and Amy" />
      </div>
    </SimpleP>
    <SimpleP
      darkBlue
      noWave
    >
    <h3>
          Where did it all start?
        </h3>
        <p>
          We were working together for an events company, trying to find a digital partner we clicked with. Everyone we spoke to insisted on talking to us in riddles, locking us into endless contracts, and refusing to let us in on their process or results. That’s when we realised: why not do it ourselves? Honest, accessible digital marketing with no commitment and total transparency. Revolutionary, right?!
        </p>
        <h3>
          So, why the name?
        </h3>
        <p>
          We’ve both been lucky enough to have strong, capable women around us throughout our careers – women we’ve learned from and looked up to. Women who showed us that we could be whatever we want to be. Women who are smart, cunning, and unapologetically female.
        </p>
        <p>
          Our business is a homage to Quick Foxes everywhere. Keep doing what you’re doing!
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
        { img: simpleImg, title: 'We keep it simple', copy: 'We’re on a mission to demystify digital marketing. From our streamlined approach to our total transparency, we\'re here to simplify and deliver.' },
        { img: teamImg, title: 'Keep it collaborative', copy: 'We think teamwork makes the dream work. That’s why we take time getting to know your business, so we can be an extension of your team.' },
        { img: flexibleImg, title: 'Keep it flexible.', copy: 'We pride ourselves on being adaptable. Whether you want lots of support or the occasional helping hand, you pay for what you need – and no more.' }
      ]}
    />
    {/* <Family
      title="Our family"
      copy="If you need them, we work with them - we have a contacts book of the best creative and tech talent in town."
      carouselData={['Copywriters', 'Videographers', 'Designers', 'Digital Transformation Experts', 'Salesforce Architects', 'Report Writers']}
    /> */}
    <BannerCTA
      greyBg
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
