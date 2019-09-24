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
import LongList from "../components/LongList";

import heroImg from '../assets/training.svg'
import spotifyImg from '../assets/logos/spotify.png'
import cannesImg from '../assets/logos/cannes.png'
import expertImg from '../assets/icons/expert.svg'
import calendarImg from '../assets/icons/calendar.svg'
import remoteImg from '../assets/icons/remote.svg'


const School = () => (
  <Layout>
    <SEO title="Training" />
    <Hero
      img={heroImg}
      page="School"
      pageTitle="Learn how to grow your business, quickly."
      copy="Ready to be an expert in digital marketing? We'll tell you how. In five weeks, we’ll take you from, ‘Digital what now?’ to creating and implementing a unique digital marketing strategy, capturing, nurturing and reporting on your first leads and sales. 
      "
    />
    <ServicesListBig
      title="What you will learn?"
      subHeader="Give us five weeks and we'll train you in:"
      data={[
        {
          title: 'Creating a digital marketing strategy',
        },
        {
          title: 'Understanding which channels will work best for you',
        },
        {
          title: 'Generating new leads for your business to grow',
        },
        {
          title: 'Building landing pages',
        },
        {
          title: 'Building automation programmes',
        },
        {
          title: 'Setting up Facebook, Instagram and Google Adwords campaigns',
        },
        {
          title: 'Optimising your campaigns',
        },
        {
          title: 'Benchmarking for success',
        },
        {
          title: 'Setting up accurate reporting to showcase your results',
        },
      ]} />
        <ThreeColBlock
      title="How it works"
      subheader="Our training is bespoke to your business, with a hands-on approach designed to get you to your first lead generation. As well as guides and office time with our trainers, when you've finished the course, you'll join our Alumni of Quick Foxes, with access to updated learnings and our open Alumni forum."
      data={[
        { title: 'Hands on training with your work reviewed by an expert', img: expertImg },
        { title: 'Remote learning, the course can be taken anywhere', img: remoteImg },
        { title: 'Five weeks, Five days a week, Three hours a day', img: calendarImg }
      ]}
    />
      <LongList
        title="Why us?"
        subHeader="Because we know what we're doing. From building the system that sold out [X event] to helping [X client do X], our experience is wide-ranging, comprehensive and yours to learn from. We’ve trained people at:"
        data={[{ name: 'Cannes Lions', img: cannesImg }, { name: 'Spotify', img: spotifyImg }]}
      />
    <Family
      title="Our customers love what we do"
      copy="What recent participants have to say:"
      carouselData={['The  course was the most practical and hands on course I ever experienced. It gives you all the theory, process and tools to start growth hacking tomorrow!"', 'It was amazing to see how many easy tactics and simple tools / techniques you can use to make your product more successful ! Every Product Owner should do this !"', 'What a great atmosphere! At Growth Tribe it’s high paced, relevant, practical, no-nonsense learning."']}
    />
    {/* <GatedCTA title="What you'll learn" copy="Some copy should go here telling you about this gated PDF content" /> */}
    <GivingBack
      quote="There is a special place in hell for women who do not help other women"
      author="Madeleine Albright"
      copy="As female founders, we want to help other female founders on their road to success. So, per course, we offer two free spots to women doing incredible things in business. To find out more about this, <contact us>."
    />
    <BannerCTA
      title="Want more?"
      copy="Keep up to date with the latest digital marketing news and tips..."
      link1="/blog"
      link2="/"
    />
  </Layout>
)

export default School
