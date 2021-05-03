import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayersTable from "../components/playerstable"

const Players = () => {

  const [playerId, setPlayerId] = useState(1)

  function getPlayerId(state) {
    setPlayerId(state)
  }

  return (
  <Layout>
    <SEO title="Players" />
    <PlayersTable currentId={playerId} parentCallback={getPlayerId}></PlayersTable>
  </Layout>
  )
}

export default Players
