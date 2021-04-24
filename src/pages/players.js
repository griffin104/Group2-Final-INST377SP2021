import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayersTable from "../components/playerstable"

const Players = () => (
  <Layout>
    <SEO title="Players" />
    <PlayersTable></PlayersTable>
  </Layout>
)

export default Players
