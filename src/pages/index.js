import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="is-flex is-flex-direction-column is-vcentered is-align-items-center">
      <StaticImage
        src="../images/umdlogo.png"
        alt="A UMD basketball background graphic"
      />
      <h1 className="title is-size-1 has-text-centered has-text-danger">MARYLAND TERRAPINS MEN'S BASKETBALL</h1>
    </div>
  </Layout>
)

export default IndexPage
