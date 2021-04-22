// import * as React from "react"
import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
// import Players from "../components/players"

const PlayerStats = () => {

  let tableData = []

  const [playerInfo, setplayerInfo] = useState(0)
  useEffect(() => {
    fetch(`/api/player-stats`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setplayerInfo(resultData)
      }) 
  }, [])


if (typeof playerInfo === 'object') {
  playerInfo.forEach((player) => {
    tableData.push({
      player_id: player.player_id,
      games: player.games,
      games_started: player.games_started,
      minutes: player.minutes,
      off_reb: player.off_reb,
      def_reb: player.def_reb,
      assists: player.assists,
      steals: player.steals,
      blocks: player.blocks,
      turnovers: player.turnovers,
      points: player.points,
      fg_made: player.fg_made,
      fg_attempted: player.fg_attempted,
      three_point_made: player.three_point_made,
      three_point_attempted: player.three_point_attempted,
      ft_made: player.ft_made,
      ft_attempted: player.ft_attempted
    })
  })
}

const headers = ["Player ID", "Games", "Games Started", "Minutes", "Off. Rebounds",
                "Def. Rebounds", "Assists", "Steals", "Blocks", "Turnovers", 
                "Points", "FG", "FG Attempts", "3 Pt'r", "3 Pt'r Attempts", "Free Throws",
                "Free Throw Attempts"]

return(
<Layout>
  <SEO title="Player Stats" />
    <div id="tableContainer">
      <Table table={tableData} headers={headers}></Table>
    </div>
    </Layout>
  )
}

export default PlayerStats