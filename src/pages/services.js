import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from '../components/hero'
import Logos from '../components/logos'
import ServicesListBig from '../components/servicesListBig'
import HowItWorksList from '../components/howItWorksList'
import HowWeDoIt from '../components/howwedoit'
import BannerCTA from '../components/bannerCTA'
import SEO from "../components/seo"
import SimpleP from "../components/simpleP";
import LongList from '../components/LongList'

import scope from '../assets/icons/scope.svg'
import build from '../assets/icons/build.svg'
import scale from '../assets/icons/scale.svg'
import headerImg from '../assets/icons/services.svg'

// Our Services logos
import digitalImg from '../assets/icons/home/digital-strategy.svg'
import valueImg from '../assets/icons/home/value-prop.svg'
import socialImg from '../assets/icons/home/social.svg'
import leadgenImg from '../assets/icons/home/lead-gen.svg'
import automatedImg from '../assets/icons/home/automated-lead-nurturing.svg'
import emailmarketingImg from '../assets/icons/home/email-marketing.svg'
import insightsImg from '../assets/icons/home/insights.svg'

import userImg from '../assets/icons/home/new/user.svg';
import settingImg from '../assets/icons/home/new/setting.svg';
import flasksImg from '../assets/icons/home/new/flasks.svg';
import groupImg from '../assets/icons/home/new/group.svg';
import rocketImg from '../assets/icons/home/new/rocket.svg';
import salesImg from '../assets/icons/home/new/sales.svg';

// Tech logos
import linkedInImg from '../assets/logos/linkedin.png'
import googleAdsImg from '../assets/logos/google-ads.svg'
import mailchimpImg from '../assets/logos/mailchimp.png'
import marketoImg from '../assets/logos/marketo.svg'
import pardotImg from '../assets/logos/pardot.svg'
import hubspotImg from '../assets/logos/hubspot.svg'
import facebookAdsImg from '../assets/logos/facebookads.png'
import instapageImg from '../assets/logos/Instapage.png'

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Hero
      page="Services"
      pageTitle="Want to increase sales while saving time and money?"
      copy="Yeah, right – who doesn’t?  Thanks to over 15 years of digital marketing experience, we know what works. We also know that doesn’t look the same for everyone, which is why we develop the right plan that will drive results for your business (because that’s what really matters)."
      img={headerImg}
    />
    <ServicesListBig
      blue
      title="Our Services"
      subHeader="Here are some of the things that plan might include:"
      data={[
        {
          img: digitalImg,
          title: 'Digital strategy',
          copy: 'Figuring out where you are you now, where you want to be, and how you’re going to get there. '
        },
        {
          img: valueImg,
          title: 'Value proposition and messaging',
          copy: 'Outlining why your customers buy your product over your competitor’s, so you can sell yourself better.'
        },
        {
          img: socialImg,
          title: 'Paid social media and pay-per-click',
          copy: 'Getting your product in front of the right people, at the right time, and converting them into leads.'
        },
        {
          img: groupImg,
          title: 'Lead generation',
          copy: 'Delivering qualified leads directly to your sales team.'
        },
        {
          img: emailmarketingImg,
          title: 'Email & Marketing automation',
          copy: 'Developing targeted messaging across various platforms to nudge your lead down the sales funnel and convince them to buy.'
        },
        {
          img: insightsImg,
          title: 'Insights and reporting',
          copy: 'Keeping you in the loop with regular reports, so you know exactly what’s working and where we’re making tweaks.'
        },
      ]} />
    <HowWeDoIt
      title="How it works..."
      subtitle="It’s as easy as 1, 2, 3."
      points={[{ number: '1', title: 'We Scope', copy: 'After a free discovery call, well assess where you are at right now', img: scope }, { number: '2', title: 'We Build', copy: 'We know where your audience is and how to engage them within your budget. You choose your service level and we spring into action. ', img: build }, { number: '3', title: 'We Scale', copy: 'You\'ll receive weekly reviews and reports to maximise exposure and minimise waste.', img: scale },]}
    />
    {/* <SimpleP
      darkBlue
    >
      <h2>For example</h2>
      <p>Your customer journey might look like this:</p>
      <img src="https://via.placeholder.com/940x800?text=Customer+Journey" alt="Customer Journey" />
    </SimpleP> */}
    <LongList
      dBlue
      title="Tools we use"
      subHeader="We're fluent in tech. These are the platforms we get asked about the most, but if you can't see yours here, just ask – we’ve probably used it before."
      data={[{ name: 'LinkedIn', img: linkedInImg }, { name: 'Google ads', img: googleAdsImg }, { name: 'Mailchimp', img: mailchimpImg }, { name: 'Marketo', img: marketoImg }, { name: 'Padrot', img: pardotImg }, { name: 'Hubspot', img: hubspotImg }, { name: 'Instapage', img: instapageImg }, { name: 'Facebook Ads', img: facebookAdsImg }]} />
    {/* <CustomerJ /> */}
    <BannerCTA
      greyBg
      title="Ready to get started?"
      link1="/quiz"
      link1Copy="Contact us"
      link2="/"
      link2Copy="Book a meeting"
    />
  </Layout>
)

export default Services
