import React, { useState, useEffect } from "react"

import Table from "../components/table"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Schedule = () => {

  let route = ''
  let route2 = ''

  const [activeTableRoute, setActiveTableRoute] = useState('/game-stats')
  const [activeTable, setActiveTable] = useState([])
  const [headers, setHeaders] = useState([])
  const [table, setTable] = useState('')


  if (process.env.DOMAIN) {
    route = `${process.env.DOMAIN}/api${activeTableRoute}`
  } else {
    route = `/api${activeTableRoute}`
  }

  useEffect(() => {
    fetch(route)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setActiveTable(resultData.data)
      }) 
  },[activeTableRoute])

  useEffect(() => {
    if (activeTable[0]) {
      setHeaders(Object.getOwnPropertyNames(activeTable[0]))
    }
  },[activeTable])


  useEffect(() => {
    switch(headers[0]) {
      case 'player_id':
        route2 = 'player-bios'
        break
      case 'player_stats_id':
        route2 = 'player-stats'
        break
      case 'game_id':
        route2 = 'games'
        break
      case 'game_stats_id':
        route2 = 'game-stats'
        break
      case 'player_game_stats_id':
        route2 = 'player-game-stats'
        break
    }

    if (headers.length) {
      setTable(<Table table={activeTable} headers={headers} admin={true} apiRoute={route2}></Table>)
    }
  },[headers])

  function handleClick(route) {
    setActiveTableRoute(route)
  }

  return (
    <Layout>
      <SEO title="Update Records" />
      <div className="columns">
        <div className="column"></div>
        <div className="column is-narrow">
          <button className="button is-info" onClick={() => handleClick('/player-bios')}>Player Bios</button>
        </div>
        <div className="column is-narrow">
          <button className="button is-info" onClick={() => handleClick('/player-stats')}>Player Stats</button>
        </div>
        <div className="column is-narrow">
          <button className="button is-info" onClick={() => handleClick('/games')}>Games</button>
        </div>
        <div className="column is-narrow">
          <button className="button is-info" onClick={() => handleClick('/game-stats')}>Game Stats</button>
        </div>
        <div className="column is-narrow">
          <button className="button is-info" onClick={() => handleClick('/player-game-stats')}>Player Game Stats</button>
        </div>
        <div className="column"></div>
      </div>
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

export default Schedule
