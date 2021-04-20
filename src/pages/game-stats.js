import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = () => {

  let displayedTable = []

  const [gameInfo, setGameInfo] = useState(0)
  useEffect(() => {
    fetch(`/api/game-info`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setGameInfo(resultData)
      }) 
  }, [])
  if (typeof gameInfo === 'object') {
    displayedTable = gameInfo.slice(0)
    console.log(displayedTable)
  }

  return(
  <Layout>
    <SEO title="Game Stats" />
    <div id="tableContainer">
      <table className="table is-striped is-bordered is-hoverable center has-text-centered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Opposing School</th>
            <th>Home or Away</th>
            <th>Outcome</th>
            <th>Maryland Score</th>
            <th>Opposing Score</th>
            <th>OffReb</th>
            <th>DefReb</th>
            <th>Assists</th>
            <th>TO</th>
            <th>Blocks</th>
            <th>Steals</th>
            <th>Fouls</th>
            <th>fg_m</th>
            <th>fg_a</th>
            <th>3pt_m</th>
            <th>3pt_a</th>
            <th>ft_m</th>
            <th>ft_a</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {displayedTable.map(row => (
             <tr>
              <td>{`${row.date_day}/${row.date_month}/${row.date_year}`}</td>
              <td>{row.opposing_school}</td>
              <td>{row.home_or_away}</td>
              <td>{row.outcome}</td>
              <td>{row.maryland_score}</td>
              <td>{row.opposing_score}</td>
              <td>{row.off_reb}</td>
              <td>{row.def_reb}</td>
              <td>{row.assists}</td>
              <td>{row.turnovers}</td>
              <td>{row.blocks}</td>
              <td>{row.steals}</td>
              <td>{row.fouls}</td>
              <td>{row.fg_made}</td>
              <td>{row.fg_attempted}</td>
              <td>{row.three_point_made}</td>
              <td>{row.three_point_attempted}</td>
              <td>{row.ft_made}</td>
              <td>{row.ft_attempted}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  </Layout>
  )
}

export default GameStats
