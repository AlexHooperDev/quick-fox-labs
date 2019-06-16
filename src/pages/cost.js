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
      pageTitle="What We Cost"
      copy="We're people who love digital marketing. Love it. Yes, we know that sounds weird but it's a badge wear proudly. Our experience comes from right across the industry, marketing global events and delivering results."
    />
    <Products
      title="Pricing"
      copy="we put the pricing on our website, so you know you’re paying the same as everybody else."
      productData={[
        {
          icon: '',
          name: '5 week training',
          cost: '4500',
          costDetails: 'per course',
          productDetails: [
            { bold: 'For:', copy: 'People who want to test digital for themselves' },
            { bold: 'You:', copy: 'Want to do it yourself before investing' },
          ]
        },
        {
          icon: '',
          name: '4 - 6 month starter pack',
          cost: '2200',
          costDetails: 'excluding digital spend',
          productDetails: [
            { bold: 'For:', copy: 'First-timers and last-minute organisers' },
            { bold: 'You:', copy: 'want to test digital marketing and gauge your results' },
            { bold: 'Time until event:', copy: 'three months or less' },
            { bold: 'Well give you,', copy: '4 days per month & technical set up' },
          ]
        },
        {
          icon: '',
          name: 'Full partnership pack',
          cost: '15,000',
          costDetails: 'or 15% of your digital spend',
          productDetails: [
            { bold: 'For:', copy: 'businesses who are ready to scale' },
            { bold: 'You:', copy: 'know digital works and you want to keep your campaigns running' },
            { bold: 'Time until event:', copy: 'three months or less' },
            { bold: 'Well give you,', copy: '4 days per month & technical set up' },
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
          icon: '',
          name: 'Added extras',
          cost: 'x',
          costDetails: 'x',
          productDetails: [
            { bold: 'Landing page:', copy: '750' },
            { bold: 'email design and build', copy: '750' },
            { bold: 'email set-up', copy: '750' },
            { bold: 'Copywriting,', copy: '750' },
            { bold: 'Video (three days)', copy: '1000' }
          ]
        },
      ]}
    />
    <SimpleP
      title="How does it work?"
      copy="We're highly streamlined and only charge you for the time that you use, so you're never forking out for a service you don't need. Simple, right? You'll have two experts on-hand, in your office up to once a week if you need us there, plus an army of freelancers on speed-dial if we're helping with your creative as well."
    />
    <BannerCTA title="Meet the team" copy="See how we an help your business grow..." link1="/about" link2="/" />
  </Layout>
)

export default Cost
