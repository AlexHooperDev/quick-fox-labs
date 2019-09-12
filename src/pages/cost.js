import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero';
import Products from '../components/products'
import SimpleP from '../components/simpleP'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"

const Cost = () => (
  <Layout>
    <SEO title="Pricing" />
    <Hero
      page="Pricing"
      pageTitle="We list our pricing on our website, so you know you're paying the same as everybody else. Revolutionary, right?"
    />
    <Products
      title="How does it work?"
      copy="We're highly streamlined as we know what works and only charge you for the time that you use, so you're never forking out for a service you don't need. Simple. You'll have experts on-hand, in your office or online for up to once a week if you need us there. Stop at any time - No long-term commitments needed. If you don’t like the results, stop at any time with 30-days notice."
      productData={[
        {
          icon: '',
          name: '10 days online training course',
          cost: '5,000',
          costDetails: 'per course',
          productDetails: [
            { bold: 'We\'ll give you:', copy: 'access to the online course for 2 months' },
          ]
        },
        {
          icon: '',
          name: '5 Week \'virtual classroom\' Training',
          cost: '2,500',
          costDetails: 'per course',
          productDetails: [
            { bold: 'For:', copy: 'People who want us to do it with them' },
            { bold: 'We\'ll give you:', copy: 'Access to online training plus 25 days over 5 weeks face to face training & 8 hours of follow up to be used when required to ensure success' },
          ]
        },
        {
          icon: '',
          name: '3 Month Starter Pack',
          cost: '2,000',
          costDetails: 'per month (excluding digital spend)',
          productDetails: [
            { bold: 'For:', copy: 'first-timers and last-minute organisers' },
            { bold: 'You:', copy: 'want to test digital marketing and gauge your results' },
            {
              bold: 'You\'ll get:', copy: [
                '1 ad channel & retargeting set up',
                'four days per month',
                'weekly reporting',
                'Bi weekly calls',
                'Technical set-up for free',
              ]
            },
          ]
        },
        {
          icon: '',
          name: '3 - 12 Month Full throttle',
          cost: '2,500',
          costDetails: 'or 15% of your digital spend',
          productDetails: [
            { bold: 'For:', copy: 'businesses who are ready to scale' },
            { bold: 'You:', copy: 'know digital works and want to keep your campaigns running' },
            {
              bold: 'You\'ll get:', copy: [
                'Up to 3 channels',
                'four days per month',
                'weekly reporting',
                'weekly calls',
                'Technical set-up',
              ]
            },
          ]
        },
        {
          icon: '',
          name: 'Digital transformation',
          cost: 'POA',
          costDetails: '',
          productDetails: [
            { bold: 'For:', copy: 'businesses facing challenges with disconnected platforms, in need of some expert guidance' },
          ]
        },
        {
          extras: true,
          icon: '',
          name: 'Added extras',
          costDetails: 'For businesses who want extra support in getting started',
          productDetails: [
            { bold: '5 x post lead generation email -', copy: '£100' },
            { bold: 'Marketing automation email + set up -', copy: '£500' },
            { bold: 'Post purchase email templates & set up -', copy: '£750' },
            { bold: 'Landing page design and build -,', copy: '£500' },
            { bold: '1 x email design and build -', copy: '£150' },
            { bold: '1 x advert copywriting -', copy: '£300' },
            { bold: '1 x landing page copywriting -', copy: '£400' },
            { bold: '1 x event promo video (three days) -', copy: '£1,000' }
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
