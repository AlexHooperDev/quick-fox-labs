import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero';
import SEO from "../components/seo"

const Cost = () => (
  <Layout>
    <SEO title="Pricing" />
    <Hero
      page="Pricing"
      pageTitle="What We Cost"
      copy="We're people who love digital marketing. Love it. Yes, we know that sounds weird but it's a badge wear proudly. Our experience comes from right across the industry, marketing global events and delivering results."
    />
  </Layout>
)

export default Cost
