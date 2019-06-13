import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroHome from '../components/heroHome'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome
      header="Quick Fox Labs"
      copy="We help the world’s most exciting events companies sell out, by running bespoke digital campaigns" />
  </Layout>
)

export default IndexPage
