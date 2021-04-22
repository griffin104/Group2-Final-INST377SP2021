import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = ({ location }) => {
    const urlParams = new URLSearchParams(location.search)
    
    let tableData = []
    let table = ""
    let names = []

    const [playerInfo, setPlayerInfo] = useState(0)

    useEffect(() => {
    fetch(`/api/player-game-stats/games/${urlParams.get("game")}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setPlayerInfo(resultData.data)
      })
  }, [])

  function getPlayerName(player_id) {
      fetch(`/api/player-bios/${player_id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json[0].first_name)
            return `${json[0].first_name} ${json[0].last_name}` 
        })
  }

  if (typeof playerInfo === 'object') {
      playerInfo.forEach((player, i) => {
      tableData.push({
        player_game_stats_id: player.player_game_stats_id,
        player_name: player.player_id,
        minutes: player.minutes,
        points: player.points,
        off_reb: player.off_reb,
        def_reb: player.def_reb,
        assists: player.assists,
        turnovers: player.turnovers,
        blocks: player.blocks,
        steals: player.steals,
        fouls: player.fouls,
        fg_made: player.fg_made,
        fg_attempted: player.fg_attempted,
        three_point_made: player.three_point_made,
        three_point_attempted: player.three_point_attempted,
        ft_made: player.ft_made,
        ft_attempted: player.ft_attempted
      })
    })
  }

    const headers = ["player_id","Minutes","PTS","OREB","DREB","AST","TO","BLK","STL","PF","FGM","FGA","3FGM","3FGA","FTM","FTA"]

    if (tableData.length) {
        table = <Table table={tableData} headers={headers}></Table>
      }

    return (
        <Layout>
            <SEO title="Game Stats" />
            {table}
        </Layout>
    )
}

export default GameStats
