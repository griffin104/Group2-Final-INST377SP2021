import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PlayersTable from "../components/playerstable"
import PlayerBio from "../components/playerbio"

const Players = () => {

  let route

  const [playerId, setPlayerId] = useState(1)
  const [playerInfo, setPlayerInfo] = useState([])

  if (process.env.DOMAIN) {
    route = `${process.env.DOMAIN}/api/player-bios/${playerId}`
  } else {
    route = `/api/player-bios/${playerId}`
  }

  useEffect(() => {

    fetch(route)
      .then(response => response.json())
      .then(resultData => {
        console.log(resultData[0])
        console.log(route)
        setPlayerInfo(resultData[0])
      })
  }, [playerId])

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
        <PlayerBio name={`${playerInfo.first_name} ${playerInfo.last_name}`} image={`../../player_image_${playerId}.png`}
          number={playerInfo.player_number} position={playerInfo.position} weight={playerInfo.weight} height={`${playerInfo.height_feet}' ${playerInfo.height_inch}\"`}></PlayerBio>
      </div>
    </div>
  </Layout>
  )
}

export default Players
