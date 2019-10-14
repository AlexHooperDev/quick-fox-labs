import React from "react"

import Layout from "../components/layout"
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"
import SimpleP from "../components/simpleP"

const PureLifeExperiences = () => (
  <Layout>
    <SEO title="Pure Life Experiences" />
    <SimpleP
      hero
      darkBlue
    >
      <h1>PURE Life Experiences Case Study</h1>
      <h2>Brief:</h2>
      <p>MATTER was a 2 day conference in Marrakech and wanted to grow the number of attendees and reach new audiences of senior leaders in UK and Europe. Having tested paid advertising but not seen direct sales the challenge was to drive results within eight weeks to demonstrate the potential.</p>
    </SimpleP>
    <SimpleP>
      <h2>What We Did:</h2>
      <p>We delivered a full digital strategy which aligned to the business objectives of focussing on new customer growth only. We design a customer journey that was highly targeted to the niche audience of senior leaders, which included paid acquisition, email automation and behaviour based retargeting to be personalised to where they are in the journey. Once the test phase was completed and the return was proven we continuously optimised the paid acquisition strategy to achieve best performance.</p>
    </SimpleP>
    <SimpleP
      darkBlue
    >
      <h2>Results:</h2>
      <p>In numbers:</p>
      <ul className="gen-list">
        <li>11 Million views</li>
        <li>600% engagement uplift</li>
        <li>75% qualified leads</li>
        <li>15% sales came directly from digital</li>
        <li>3 x ROAS</li>
        <li>300% ROI</li>
      </ul>
    </SimpleP>
    <BannerCTA
      title="Ready to get started?"
      link1="/quiz"
      link2="/"
      link1Copy="Contact us" link2="https://calendly.com/quickfoxlabs/30min"
      link2Copy="Book a meeting"
      external2
    />
  </Layout>
)
export default PureLifeExperiences
