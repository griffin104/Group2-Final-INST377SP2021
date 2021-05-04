import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import PlayersTable from "../components/playerstable"

const PlayerStats = ({ location }) => {

  let urlParams = new URLSearchParams(location.search)
  let tableData = []
  let table = ''
  let route

  const [playerInfo, setplayerInfo] = useState([])
  const [playerId, setPlayerId] = useState(parseInt(urlParams.get("player")) || 1)


  if (process.env.DOMAIN) {
    route = `${process.env.DOMAIN}/api/player-game-stats/players/${playerId}`
  } else {
    route = `/api/player-game-stats/players/${playerId}`
  }

  useEffect(() => {
    fetch(route)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setplayerInfo(resultData.data)
      })
  }, [playerId])

  if (typeof playerInfo === 'object') {
    playerInfo.forEach((player) => {
      tableData.push({
        player_game_stat_id: player.player_game_stat_id,
        minutes: player.minutes,
        points: player.points,
        off_reb: player.off_reb,
        def_reb: player.def_reb,
        assists: player.assists,
        steals: player.steals,
        blocks: player.blocks,
        turnovers: player.turnovers,
        fg_made: player.fg_made,
        fg_attempted: player.fg_attempted,
        three_point_made: player.three_point_made,
        three_point_attempted: player.three_point_attempted,
        ft_made: player.ft_made,
        ft_attempted: player.ft_attempted
      })
    })
  }

  function getPlayerId(state) {
    setPlayerId(state)
  }

  const headers = ["MIN", "PTS", "OREB",
    "DERB", "AST", "STL", "BLK", "TO",  "FGM", "FGA", "3FGM", "3FGA",
    "FTM", "FTA"]

  if (tableData.length) {
    table = <Table table={tableData} headers={headers}></Table>
  }

  return (
    <Layout>
      <SEO title="Player Stats" />
      <div className="columns">
        <div className="column is-one-third">
          <PlayersTable currentId={playerId} parentCallback={getPlayerId}></PlayersTable>
    </div>
        <div className="column is-two-thirds">
          <div id="tableContainer">
           {table}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PlayerStats