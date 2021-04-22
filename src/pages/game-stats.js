import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = ({ location }) => {
    
    const urlParams = new URLSearchParams(location.search)

    let tableData = []
    let table = ""

    const [playerInfo, setPlayerInfo] = useState([])
    const [playerNames, setPlayerNames] = useState([])

    useEffect(async () => {
        const response = await fetch(`${process.env.DOMAIN}/api/player-game-stats/games/${urlParams.get("game")}`)
        const json = await response.json()
        console.log(json.data)
        setPlayerNames(getPlayerNames(json.data))
        setPlayerInfo(json.data)
    }, [])

        if (typeof playerInfo === 'object') {
            playerInfo.forEach((player, i) => {
                console.log("push")
                tableData.push({
                    player_game_stats_id: player.player_game_stats_id,
                    player_name: playerNames[i],
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


    async function getPlayerNames(players) {
        return Promise.all(players.map(player => {
            fetch(`${process.env.DOMAIN}/api/player-bios/${player.player_id}`)
                .then(response => response.json())
                .then(json => {
                    console.log(json[0].first_name)
                    return `${json[0].first_name} ${json[0].last_name}`
                })
        }))
    }


    const headers = ["player_id", "Minutes", "PTS", "OREB", "DREB", "AST", "TO", "BLK", "STL", "PF", "FGM", "FGA", "3FGM", "3FGA", "FTM", "FTA"]

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
