import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import SimpleP from '../components/simpleP'
import SEO from "../components/seo"
import ThreeColBlock from "../components/threeColBlock";

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
  </Layout>
)

export default School
