import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const PlayersTable = ({ parentCallback }) => {

    const [activePlayer, setActivePlayer] = useState(1)

    const playerNames = ["EA", "IB", "WC", "ACjr", "BF", "RLjr", "RM", "DM", "TR", "JS", "SSjr", "AT", "JT", "TV", "AW"]

    function playerClick(e) {
      setActivePlayer(e.target.id)
    }

    useEffect(() => {
      parentCallback(activePlayer)
    }, [activePlayer])

    return(
      <table className="table is-bordered center has-text-centered">
      <thead>
        <tr>
          <th colSpan="2">Players</th>
        </tr>
      </thead>
        <tbody className="table-body">
            {playerNames.map((name, i) => {
              if (!(i%2)) {
                return (<tr>
                  <td className="is-clickable is-hoverable-cell" role="presentation" id={i+1} onClick={playerClick}>{playerNames[i]}</td> 
                  <td className="is-clickable is-hoverable-cell" role="presentation" id={i+2} onClick={playerClick}>{playerNames[i+1]}</td>
                </tr>)
              } else {
                return ''
              }
          })}
        </tbody>
    </table>
    )
}

PlayersTable.propTypes = {
    parentCallback: PropTypes.func,
}

PlayersTable.defaultProps = {
    parentCallback: function() {return null}
}

export default PlayersTable