import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import SimpleP from '../components/simpleP'
import SEO from "../components/seo"
import ThreeColBlock from "../components/threeColBlock"
import TwoColCTA from "../components/twoColCTA"
import ServicesListBig from '../components/servicesListBig'
import TrainingStructure from '../components/trainingStructure'
import GatedCTA from '../components/gatedCTA'
import BannerCTA from '../components/bannerCTA'
import GivingBack from '../components/givingBack'
import Family from '../components/family'
import LongList from "../components/LongList"
import Events from '../components/Events'
import CaseStudiesList from '../components/caseStudiesList'

import waaImg from '../assets/waa.jpg'
import pureImg from '../assets/pure.jpg'

import heroImg from '../assets/training.svg'
import spotifyImg from '../assets/logos/spotify.png'
import cannesImg from '../assets/logos/cannes.png'

import expertImg from '../assets/icons/expert.svg'
import calendarImg from '../assets/icons/calendar.svg'
import remoteImg from '../assets/icons/school/remote.png'


const School = () => (
  <Layout>
    <SEO title="Training" />
    <Hero
      img={heroImg}
      page="School"
      pageTitle="Learn how to grow your business with smart digital marketing."
      copy="Ready to be an expert in digital marketing? We'll tell you how. In five weeks, we’ll take you from, ‘Digital what now?’ to creating and implementing a unique digital marketing strategy, capturing, nurturing and reporting on your first leads and sales. 
      "
    />
    <ServicesListBig
      small
      blue
      title="What you will learn?"
      subHeader="In five weeks, we’ll teach you how to:"
      data={[
        {
          title: 'Create a digital marketing strategy to generate new leads to grow your business',
        },
        {
          title: 'Understand which channels will work best for you',
        },
        {
          title: 'Write, build and test landing pages that convert better',
        },
        {
          title: 'Set up Facebook, Instagram and Google Adwords campaigns',
        },
        {
          title: 'Continuously optimise your campaigns to generate higher ROI',
        },
        {
          title: 'Troubleshoot campaigns',
        },
        {
          title: 'Design and build successful nurturing automation programmes',
        },
        {
          title: 'Benchmark for success',
        },
        {
          title: 'Set up accurate reporting to showcase your results',
        },
      ]} />
        <ThreeColBlock
        noPaddingBottom
      title="So, why should you choose us?"
      data={[
        { title: 'We’ll give you insights you can use.', copy: 'Literally. Our training course is project-based learning, so we’ll help you overcome real-life challenges in your actual business, step by step. (So you can wow the boss.)', img: expertImg },
        { title: 'We know our stuff.', copy:'Our 15 years of experience have taught us a thing or two (check out our case studies to learn more), and we’re raring to pass on our expertise.', img: remoteImg },
        { title: 'We don’t believe in silly questions.', copy: 'We were once where you are now, so we understand that barking instructions helps no one. Our trainers are savvy, friendly, and have the patience of a saint.', img: calendarImg }
      ]}
    />
     <ThreeColBlock
      noPaddingTop
      data={[
        { title: 'We make it bite size.', copy: 'We know too much new information can blow up the best of brains, so we break it down into three hours a day, five days a week, for five weeks.', img: expertImg },
        { title: 'We teach remotely.', copy:'All you need is a laptop and an internet connection, so you can take the course wherever you’re currently calling your office.', img: remoteImg },
        { title: 'We’ll make you a Quick Fox.', copy: 'Officially. Once you finish the course you’ll become part of our honorary alumni, which gets you access to updated learnings and our exclusive forum. ', img: calendarImg }
      ]}
    />
    <CaseStudiesList
      title="Case Studies"
      caseStudies={[{ name: "We Are Africa", img: waaImg, stats: ['18m views', '100 shares', '80% Qualified leads', '18% of sales to the event came directly from digital', '2005 ROA'], challenge: 'Generate 150 leads with a 10% conversion rate, spending only £1500.', gameplan: 'Implement a content strategy for Instagram and Facebook.', solution: '', results: '' }, { name: "Pure Life Experiences", img: pureImg, stats: ['18m views', '100 shares', '80% Qualified leads', '18% of sales to the event came directly from digital', '2005 ROA'], challenge: 'Generate 150 leads with a 10% conversion rate, spending only £1500.', gameplan: 'Implement a content strategy for Instagram and Facebook.', solution: '', results: '' }]} />
      {/* <LongList
        title="Why us?"
        subHeader="Because we know what we're doing. From building the system that sold out [X event] to helping [X client do X], our experience is wide-ranging, comprehensive and yours to learn from. We’ve trained people at:"
        data={[{ name: 'Cannes Lions', img: cannesImg }, { name: 'Spotify', img: spotifyImg }, { name: 'Cannes Lions', img: cannesImg },]}
      /> */}
    {/* <Family
      title="Our customers love what we do"
      copy="What recent participants have to say:"
      carouselData={['The  course was the most practical and hands on course I ever experienced. It gives you all the theory, process and tools to start growth hacking tomorrow!"', 'It was amazing to see how many easy tactics and simple tools / techniques you can use to make your product more successful ! Every Product Owner should do this !"', 'What a great atmosphere! At Growth Tribe it’s high paced, relevant, practical, no-nonsense learning."']}
    /> */}
    <ServicesListBig
      small
      title="Who it is for?"
      subHeader="If you want to grow your business and become a true expert in digital marketing, this is for you. We'll take you way beyond what you learn on the job, in a structured set-up, designed to relate to your work. If you are:"
      data={[
        {
          title: 'Marketers',
        },
        {
          title: 'CEOs',
        },
        {
          title: 'Executives & VPs',
        },
        {
          title: 'Digital Consultants',
        },
        {
          title: 'Product Owners & their teams',
        },
        {
          title: 'Managers',
        },
        {
          title: 'Developers',
        },
        {
          title: 'Startup Founders',
        },
        {
          title: 'Account Managers and Sales Managers',
        },
        {
          title: 'Consultants',
        },
        {
          title: 'Business Developers',
        },
        {
          title: 'Anyone interested in growing a product or business..',
        },
      ]} />
      <Events
      title="Dates, pricing and booking"
      subHeader=""
      events={[{date: "Oct 22 - Nov 26" , title: "Remote learning", cost: "2,479", ctaLink: '', limited: true },]}
      />
      <BannerCTA
      title="Get in touch"
      copy="Need more information? We have answers. Get in touch."
      link1="/blog"
      link2="/"
      link1Copy="book a call"
      link2Copy="apply now"
    />

    {/* <GatedCTA title="What you'll learn" copy="Some copy should go here telling you about this gated PDF content" /> */}
    <GivingBack
      quote="There is a special place in hell for women who do not help other women"
      author="Madeleine Albright"
      copy="We believe women should be better represented in business – and we’re willing to prove it:.  on every course we offer two free spots to women doing incredible things in business. Get in touch to find out more and apply."
    />
    
  </Layout>
)

export default School
