import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = () => {

  let tableData = []
  let prefix

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
      if (game.home_or_away == "Home") {
        prefix = "vs "
      } else {
        prefix = "at "
      }

      tableData.push({
        date: `${game.date_day}/${game.date_month}/${game.date_year}`,
        opposing_school: prefix + game.opposing_school,
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

  const headers = ["Date", "Opponent", "W/L", "Maryland Score", "Opposing Score", "OREB",
                    "DREB", "AST", "TO", "BLK", "STL", "PF", "FGM", "FGA", "3FGM", "3FGA", "FTM", "FTA"]

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
