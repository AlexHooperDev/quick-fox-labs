import React from "react"

import Layout from "../components/layout"
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"
import SimpleP from "../components/simpleP"

const WeAreAfrica = () => (
  <Layout>
    <SEO title="We Are Africa" />
    <SimpleP
      hero
      darkBlue
    >
      <h2>Brief:</h2>
      <p>We Are Africa had developed a great product which was popular with their existing audience but had exhausted their existing channels and need to  reach new audiences of senior leaders in travel. Having never used paid advertising channels they wanted to test its potential to acquire new customers.</p>
    </SimpleP>
    <SimpleP>
      <h2>What We Did:</h2>
      <p>We built a simple customer journey integrating lead generation, acquisition, and retention processes. Within the funnel, we used multiple touchpoints: Facebook/Instagram, Facebook ads, Google Adwords and automated email campaigns. We also connected the funnel with their existing CRM system salesforce to managed full end to end lead generation to sales and track ROI.</p>
    </SimpleP>
    <SimpleP
      darkBlue
    >
      <h2>Results:</h2>
      <p>After 3 months we were able to generate 400% increase in new business leads with 80% being C-suite level and above and drove 500% ROI.</p>
      <p>In numbers:</p>
      <ul className="gen-list">
        <li>18m views</li>
        <li>100 organic shares</li>
        <li>400% increase in leads</li>
        <li>80% qualified leads</li>
        <li>25% sales came directly from digital</li>
        <li>3 x ROAS</li>
      </ul>
    </SimpleP>
    <BannerCTA
      title="Ready to get started?"
      link1="/quiz"
      link2="/"
      link1Copy="Contact us" link2="/"
      link2Copy="Book a meeting"
    />
  </Layout>
)

export default WeAreAfrica
