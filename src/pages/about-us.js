import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="columns">
      <div className="column is-one-fifth"></div>
      <div className="column is-two-fifths">
        <h1 class="title is-3 has-text-centered">About Us</h1>
        <p>This database brings you the statistics of the University of Maryland basketball team to a new level. We wanted 
        to make everything from player statistics to game trends more accessible to both scouts and fans.
        </p>
        <br></br>
        <p>There are many resources for viewing sports stats online. However, many of these resources are missing information.
        This causes people that want to get the best information to reference many different databases just to get the whole
        picture.</p>
        <br></br>
        <p>Our solution is simple - directly fix these issues. By designing a website with a cleaner way of displaying these
        statistics, it would greatly improve the experience of those who have to constantly monitor player performance.      
        </p>
      </div>
      <div className="column is-two-fifths">
        <StaticImage
          src="../images/umd-m-logo.png"
          alt="UMD logo"
        />
      </div>
    </div>
  </Layout>
)

export default AboutUs
