import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GameStats = ({ location }) => {

    const urlParams = new URLSearchParams(location.search)

    let tableData = []
    let table = ""
    let route1
    let route2

    if (process.env.DOMAIN) {
        route1 = `${process.env.DOMAIN}/api/player-game-stats/games/${urlParams.get("game")}`
        route2 = `${process.env.DOMAIN}/api/player-bios/`
      } else {
        route1 = `/api/player-game-stats/games/${urlParams.get("game")}`
        route2 = `/api/player-bios/`
      }

    const [playerInfo, setPlayerInfo] = useState([])
    const [playerNames, setPlayerNames] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(route1)
            const json = await response.json()
            console.log(json.data)
            const names = await getPlayerNames(json.data)
            setPlayerNames(names)
            setPlayerInfo(json.data)
        }
        fetchData()
    }, [])

    if (typeof playerInfo === 'object') {
        console.log(playerNames)
        playerInfo.forEach((player, i) => {
            tableData.push({
                player_game_stats_id: player.player_game_stats_id,
                player_id: playerNames[i],
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
        const ans = await Promise.all(players.map((player) => {
            return getPlayerName(player)
        }))
        return ans
    }

    async function getPlayerName(player) {
        const response = await fetch(`${route2}${player.player_id}`)
        const json = await response.json()
        console.log(`${json[0].first_name} ${json[0].last_name}`)
        return `${json[0].first_name} ${json[0].last_name}`
    }


    const headers = ["Name", "Minutes", "PTS", "OREB", "DREB", "AST", "TO", "BLK", "STL", "PF", "FGM", "FGA", "3FGM", "3FGA", "FTM", "FTA"]

    if (tableData.length) {
        table = <Table table={tableData} headers={headers}></Table>
    }

    return (
        <Layout>
            <SEO title="Game Stats" />
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
