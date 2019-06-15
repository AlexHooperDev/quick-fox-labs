import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import CaseStudiesList from '../components/caseStudiesList'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

const CaseStudies = () => (
  <Layout>
    <SEO title="Case Studies" />
    <Hero
      page="Case Studies"
      pageTitle="What We've Done"
      copy="We're people who love digital marketing. Love it. Yes, we know that sounds weird but it's a badge wear proudly. Our experience comes from right across the industry, marketing global events and delivering results."
    />
    <CaseStudiesList />
    <BannerCTA
      title="Ready to get started?"
      copy="Take our quiz and we'll give you an idea of cost and ROI right away."
      link1="/quiz"
      link2="/"
    />
  </Layout>
)

export default CaseStudies
