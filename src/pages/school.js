import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import SimpleP from '../components/simpleP'
import SEO from "../components/seo"
import ThreeColBlock from "../components/threeColBlock"
import TwoColCTA from "../components/twoColCTA"
import TrainingStructure from '../components/trainingStructure'
import GatedCTA from '../components/gatedCTA'
import BannerCTA from '../components/bannerCTA'
import GivingBack from '../components/givingBack'

const School = () => (
  <Layout>
    <SEO title="Page two" />
    <Hero
      page="School"
      pageTitle="Quick Fox School"
      copy="We're people who love digital marketing. Love it. Yes, we know that sounds weird but it's a badge wear proudly. Our experience comes from right across the industry, marketing global events and delivering results."
    />
    <SimpleP
      title="How do we do it?"
      copy="In 5 weeks, we’ll take you from ‘what is digital marketing’ to creating and implementing a strategy unique to your business to capturing and nurturing and reporting on your first leads."
    />
    <ThreeColBlock data={[
      {
        img: '/',
        title: 'Case Studies',
        copy: 'See More'
      },
      {
        img: '/',
        title: 'Companies we have helped to transform',
        copy: 'See More'
      },
      {
        img: '/',
        title: 'What we have done in our careers to show we know what we’re talking about',
        copy: 'See More'
      }
    ]} />
    <TwoColCTA
      title="Why do this course?"
      cta1Title="Train yourself"
      cta1Copy="You’re a fledgling business that doesn’t have the budget or need for a full time marketer and you don’t need a full service agency right now."
      cta1Button="Take the quiz "
      cta2Title="Train your team"
      cta2Copy="Stop recruiting and train your team – upskill, growth, career ladder. Further your current knowledge beyond what you can learn on the job, to become a true master of digital marketing."
      cta2Button="Take the quiz"
    />
    <TrainingStructure
      title="Training structure"
      data={[
        {
          icon: '/',
          copy: '5 days per week, 3 hours per day'
        },
        {
          icon: '/',
          copy: 'Training is unique and hands-on: with guides to kick start your projects and office hours with our trainers to check, help and guide as you learn'
        },
        {
          icon: '/',
          copy: 'We work with you to go from ‘what is digital marketing’ to your first leads/sales'
        },
        {
          icon: '/',
          copy: 'And once you’ve finished, you’ll join our Alumni of Quick Foxes, where we will post updated learnings and you can ask questions of other graduates and our team'
        },
      ]}
    />
    <GatedCTA title="What you'll learn" copy="Some copy should go here telling you about this gated PDF content" />
    <BannerCTA title="Questions?" copy="Book a call with one of us and we will answer them" link1="/" link2="/quiz" />
    <GivingBack
      quote="There is a special place in hell for women who do not help other women"
      author="Madeleine Albright"
      copy="As female founders, we want to help other female founders on their road to success. So, per course, we offer two free spots to women doing incredible things in business. To find out more about this, <contact us>."
    />
    <BannerCTA
      title="Want more?"
      copy="Keep up to date with the latest digital marketing news and tips..."
      link1="/blog"
      link2="/"
    />
  </Layout>
)

export default School
