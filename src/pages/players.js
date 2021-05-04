import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayersTable from "../components/playerstable"
import PlayerBio from "../components/playerbio"

const Players = () => {

  const [playerId, setPlayerId] = useState(1)

  //Fetch player information

  //Create a component using player information
  //<PlayerBio player_number={obj.playernumber}></PlayerBio>


  function getPlayerId(state) {
    setPlayerId(state)
  }

  return (
  <Layout>
    <SEO title="Players" />
    <div className="columns">
      <div className="column is-one-third">
        <PlayersTable currentId={playerId} parentCallback={getPlayerId}></PlayersTable>
      </div>
      <div className="column">
        <PlayerBio name="Anthony Cowan Jr." image="../../anthonycowan.png" number="1" position="Guard" weight="180" height="6'0"></PlayerBio>
      </div>
    </div>
  </Layout>
  )
}

export default Players
