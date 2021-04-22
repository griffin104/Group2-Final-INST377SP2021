import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import Players from "../components/players"

const PlayerStats = () => {

  let tableData = []
  let table = ''

  const [playerInfo, setplayerInfo] = useState([])

  useEffect(() => {
    fetch(`${process.env.DOMAIN}/api/player-stats`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setplayerInfo(resultData.data)
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

  const headers = ["Games", "Games Started", "Minutes", "OREB",
    "DERB", "AST", "STL", "BLK", "TO", "Pts", "FGM", "FGA", "3FGM", "3FGA",
    "FTM", "FTA"]

  if (tableData.length) {
    table = <Table table={tableData} headers={headers}></Table>
  }

  return (
    <Layout>
      <SEO title="Player Stats" />
      <div class="columns">
        <div class="column is-one-quarter">
          <Players players=""></Players>
    </div>
        <div class="column">
          <div id="tableContainer">
           {table}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PlayerStats