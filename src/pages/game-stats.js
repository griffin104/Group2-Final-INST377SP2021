import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = () => {

  let tableData = []

  const [gameInfo, setGameInfo] = useState(0)
  useEffect(() => {
    fetch(`/api/game-info`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setGameInfo(resultData)
      }) 
  }, [])

  if (typeof gameInfo === 'object') {
    gameInfo.forEach((game) => {
      tableData.push({
        date: `${game.date_day}/${game.date_month}/${game.date_year}`,
        opposing_school: game.opposing_school,
        home_or_away: game.home_or_away,
        outcome: game.outcome,
        maryland_score: game.maryland_score,
        opposing_score: game.opposing_score,
        off_reb: game.off_reb,
        def_reb: game.def_reb,
        assists: game.assists,
        turnovers: game.turnovers,
        blocks: game.blocks,
        steals: game.steals,
        fouls: game.fouls,
        fg_made: game.fg_made,
        fg_attempted: game.fg_attempted,
        three_point_made: game.three_point_made,
        three_point_attempted: game.three_point_attempted,
        ft_made: game.ft_made,
        ft_attempted: game.ft_attempted
      })
    })
  }

  const headers = ["Date", "Opposing School", "Home or Away", "Outcome", "Maryland Score", "Opposing Score", "OffReb",
                    "DefReb", "Assists", "TO", "Blocks", "Steals", "Fouls", "fg_m", "fg_a", "3pt_m", "3pt_a", "ft_m", "ft_a"]

  return(
  <Layout>
    <SEO title="Game Stats" />
    <div id="tableContainer">
      <Table table={tableData} headers={headers}></Table>
    </div>
  </Layout>
  )
}

export default GameStats
