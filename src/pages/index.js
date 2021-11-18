import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import User from "../components/user"

// Comment
//'npm start' or 'gatsby develop' to start the gatsby server, it runs on localhost:8000 by default
//The index page with be the root directory, any other page will have the path equal to it's name. (Ex. /about-us)

//All pages should use the format below 'const {page-name} = () => ({code})', followed by 'export default {page=name}
const IndexPage = () => (
  
  //<Layout> should surround everyone else in the page, if for any reason it doesn't, use an empty tag to surround everything
  <Layout>
    {/* Once we are inside a JSX element, commenents must look like this.
    <SEO> (Search Engine Optimizer) can basically be ignored for this project, 
    just add the tag with a page title at the beginning of each page*/}
    <SEO title="Home" />

    {/* A few notable changes when working with React & Gatsby:
    Instead of having a class property, we use className
    When working with a static image (all images for this project), use <StaticImage> instead of <img>
    When working with a link that leads to somewhere else on our page, use <Link> instead of <a>*/}
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <h1 className="title is-1 has-text-centered">INST377 Group 5</h1>
      <StaticImage
        src="../images/umdlogo.png"
        alt="A UMD basketball background graphic"
      />
      <h1 className="title is-size-1 has-text-centered has-text-danger">MARYLAND TERRAPINS MEN'S BASKETBALL</h1>
    </div>
    <script>getTable('/api/games')</script>
    <User/>
  </Layout>
)

export default IndexPage
