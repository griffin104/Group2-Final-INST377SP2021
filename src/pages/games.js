import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = () => {

  let tableData = []
  let prefix
  let table = ""
  let route

  if (process.env.DOMAIN) {
    route = `${process.env.DOMAIN}/api/game-info`
  } else {
    route = `/api/game-info`
  }


  const [gameInfo, setGameInfo] = useState([])
  useEffect(() => {
    fetch(route)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setGameInfo(resultData)
      }) 
  }, []) 

  if (typeof gameInfo === 'object') {
    gameInfo.forEach((game) => {
      if (game.home_or_away === "Home") {
        prefix = "vs "
      } else {
        prefix = "at "
      }

      tableData.push({
        game_id: game.game_id,
        date: `${game.date_year}/${game.date_month}/${game.date_day}`,
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

  function getGameInfo(row, prop) {
    return ({
        title: row.opposing_school,
        subtitle: row.date
    })
}

  const headers = ["Date", "Opponent", "W/L", "Maryland Score", "Opposing Score", "OREB",
                    "DREB", "AST", "TO", "BLK", "STL", "PF", "FGM", "FGA", "3FGM", "3FGA", "FTM", "FTA"]

  if (tableData.length) {
    table = <Table table={tableData} headers={headers} path="/game-stats/?game=" pathColumn={2} pathState={getGameInfo}></Table>
  }

  return(
  <Layout>
    <SEO title="Games" />
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-narrow">
        {table}
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default GameStats
