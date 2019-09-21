import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero';
import Products from '../components/products'
import SimpleP from '../components/simpleP'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

import tickImg from '../assets/tick.svg'
import headerImg from '../assets/pricing.svg'

const Cost = () => (
  <Layout>
    <SEO title="Pricing" />
    <Hero
      img={headerImg}
      page="Pricing"
      pageTitle="Pick the package that is right for you."
      copy="We list our pricing on our website, so you know you're paying the same as everybody else. Revolutionary, right?"
    />
    <Products
      title="How does it work?"
      copy="We're highly streamlined as we know what works and only charge you for the time that you use, so you're never forking out for a service you don't need. Simple. You'll have experts on-hand, in your office or online for up to once a week if you need us there. Stop at any time - No long-term commitments needed. If you don’t like the results, stop at any time with 30-days notice."
      productData={[
        {
          icon: '',
          type: 'Do it with you',
          name: 'Training',
          forTxt: 'people ready to become an expert in 8 weeks',
          cost: '2,250',
          costDetails: 'One time',
          productDetails: [
            { bold: 'Technical Audit', copy: tickImg },
            { bold: 'Digital Strategy', copy: tickImg },
            { bold: 'Technical set up', copy: tickImg },
            { bold: 'Adverts Build', copy: tickImg },
            { bold: 'Audience Build', copy: tickImg },
            { bold: 'Re-targeting', copy: tickImg },
            { bold: 'Tracking and Pixels set up', copy: tickImg },
            { bold: 'Landing Pages', copy: tickImg },
            { bold: 'Emails', copy: tickImg },
            { bold: 'Automated engagment campaigns', copy: tickImg },
            { bold: 'Reporting', copy: tickImg },
            { bold: 'Weekly Calls', copy: tickImg },
            { bold: 'Daily Optimisation', copy: tickImg },
            { bold: 'Full Digital Transformation' }
          ]
        },
        {
          icon: '',
          name: 'Starter pack',
          type: 'Do it for you',
          forTxt: 'First-timers and last-minute organisers',
          cost: '2,500',
          costDetails: 'per month (starts)',
          productDetails: [
            { bold: 'Technical Audit', copy: tickImg },
            { bold: 'Digital Strategy', copy: tickImg },
            { bold: 'Technical set up', copy: tickImg },
            { bold: 'Adverts Build', copy: tickImg },
            { bold: 'Audience Build', copy: tickImg },
            { bold: 'Re-targeting', copy: tickImg },
            { bold: 'Tracking and Pixels set up', copy: tickImg },
            { bold: 'Landing Pages', copy: tickImg },
            { bold: 'Emails', copy: tickImg },
            { bold: 'Automated engagment campaigns', copy: tickImg },
            { bold: 'Reporting', copy: tickImg },
            { bold: 'Weekly Calls', copy: tickImg },
            { bold: 'Daily Optimisation', copy: tickImg },
            { bold: 'Full Digital Transformation' }
          ]
        },
        {
          icon: '',
          name: 'Scale',
          type: 'Do it for you',
          forTxt: 'businesses who are ready to scale',
          cost: '3,500',
          costDetails: 'or 15% of Ad spend per month (starts)',
          productDetails: [
            { bold: 'Technical Audit', copy: tickImg },
            { bold: 'Digital Strategy', copy: tickImg },
            { bold: 'Technical set up', copy: tickImg },
            { bold: 'Adverts Build', copy: tickImg },
            { bold: 'Audience Build', copy: tickImg },
            { bold: 'Re-targeting', copy: tickImg },
            { bold: 'Tracking and Pixels set up', copy: tickImg },
            { bold: 'Landing Pages', copy: tickImg },
            { bold: 'Emails', copy: tickImg },
            { bold: 'Automated engagment campaigns', copy: tickImg },
            { bold: 'Reporting', copy: tickImg },
            { bold: 'Weekly Calls', copy: tickImg },
            { bold: 'Daily Optimisation', copy: tickImg },
            { bold: 'Full Digital Transformation' }
          ]
        },
        {
          icon: '',
          name: 'Full transformation',
          type: 'Custom',
          cost: 'ON REQUEST',
          forTxt: 'businesses who need a full review',
          productDetails: [
            { bold: 'Technical Audit', copy: tickImg },
            { bold: 'Digital Strategy', copy: tickImg },
            { bold: 'Technical set up', copy: tickImg },
            { bold: 'Adverts Build', copy: tickImg },
            { bold: 'Audience Build', copy: tickImg },
            { bold: 'Re-targeting', copy: tickImg },
            { bold: 'Tracking and Pixels set up', copy: tickImg },
            { bold: 'Landing Pages', copy: tickImg },
            { bold: 'Emails', copy: tickImg },
            { bold: 'Automated engagment campaigns', copy: tickImg },
            { bold: 'Reporting', copy: tickImg },
            { bold: 'Weekly Calls', copy: tickImg },
            { bold: 'Daily Optimisation', copy: tickImg },
            { bold: 'Full Digital Transformation', copy: tickImg }
          ]
        },
      ]}
    />
    {/* <SimpleP
      darkBlue
      title="How does it work?"
      copy="We're highly streamlined as we know what works and only charge you for the time that you use, so you're never forking out for a service you don't need. Simple. You'll have experts on-hand, in your office or online for up to once a week if you need us there.

      Stop at any time - No long-term commitments needed. If you don’t like the results, stop at any time with 30-days notice.
      "
    /> */}
    <BannerCTA title="Meet the team" copy="Come and get to know a little about us..." link1="/about" link1Copy="Meet the Team" link2="/" link2Copy="Book a meeting" />
  </Layout>
)

export default Cost
