import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import CaseStudiesList from '../components/caseStudiesList'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

import waaImg from '../assets/waa.jpg'
import pureImg from '../assets/pure.jpg'
import heroImg from '../assets/case-study.svg'

const CaseStudies = () => (
  <Layout>
    <SEO title="Case Studies" />
    <Hero
      img={heroImg}
      page="School"
      pageTitle="We deliver sell-out events time after time, and we have the case studies to prove it."
    />
    <CaseStudiesList
      caseStudies={[{ name: "We Are Africa", img: waaImg, stats: ['18m views', '100 shares', '80% Qualified leads', '18% of sales to the event came directly from digital', '2005 ROA'], challenge: 'Generate 150 leads with a 10% conversion rate, spending only £1500.', gameplan: 'Implement a content strategy for Instagram and Facebook.', solution: '', results: '' }, { name: "Pure Life Experiences", img: pureImg, stats: ['18m views', '100 shares', '80% Qualified leads', '18% of sales to the event came directly from digital', '2005 ROA'], challenge: 'Generate 150 leads with a 10% conversion rate, spending only £1500.', gameplan: 'Implement a content strategy for Instagram and Facebook.', solution: '', results: '' }]} />
    <BannerCTA
      title="Ready to get started?"
      link1="/quiz"
      link2="/"
      link1Copy="Contact us"
      link2Copy="book a meeting"
    />
  </Layout>
)

export default CaseStudies
