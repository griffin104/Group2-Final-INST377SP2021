import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const PlayersTable = () => {

    const [activePlayer, setActivePlayer] = useState(1)

    const playerNames = ["EA", "IB", "WC", "ACjr", "BF", "RLjr", "RM", "DM", "TR", "JS", "SSjr", "AT", "JT", "TV", "AW", "test"]

    function playerClick(e) {
      setActivePlayer(e.target.id)
    }

    useEffect(() => {
      console.log(activePlayer)
    }, [activePlayer])

    return(
      <table className="table is-bordered center has-text-centered">
      <thead><tr><th colspan="2">Players</th></tr></thead>
        <tbody className="table-body">
            {playerNames.map((name, i) => {
              if (!(i%2)) {
                return (<tr>
                  <td className="is-clickable is-hoverable-cell" id={i+1} onClick={playerClick}>{playerNames[i]}</td> 
                  <td className="is-clickable is-hoverable-cell" id={i+2} onClick={playerClick}>{playerNames[i+1]}</td>
                </tr>)
              } 
          })}
        </tbody>
    </table>
    )
}

PlayersTable.propTypes = {
    players: PropTypes.array,
}

export default PlayersTable