import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

/**
 * A table of all the players and the seasons they played
 * @component
 * @example
 * return(
 *  <PlayersTable currentId={1} />
 * )
 */

const PlayersTable = ({ currentId, parentCallback }) => {

    const [activePlayer, setActivePlayer] = useState(currentId)

    const playerNames = ["ERIC AYALA (18-19)", "IVAN BENDER (18-19)", "WILL CLARK (18-19)", "ANTHONY COWAN JR (18-19)", "BRUNO FERNANDO (18-19)", 
    "RICKY LINDO JR (18-19)", "REESE MONA (18-19)", "DARRYL MORSELL (18-19)", "TRACE RAMSEY (18-19)", "JALEN SMITH (18-19)", "SERREL SMITH JR (18-19)", 
    "ANDREW TERRELL (18-19)", "JOSHUA TOMAIC (18-19)", "TRAVIS VALMON (18-19)", "AARON WIGGINS (18-19)", "ERIC AYALA (19-20)", "WILL CLARK (19-20)", 
    "ANTHONY COWAN JR (19-20)", "HAKIM HART (19-20)", "RICKY LINDO JR (19-20)", "CHOL MARIAL (19-20)", "REESE MONA (19-20)", "DARRYL MORSELL (19-20)", 
    "DONTA SCOTT (19-20)", "JALEN SMITH (19-20)", "SERREL SMITH JR (19-20)", "JOSHUA TOMAIC (19-20)", "TRAVIS VALMON (19-20)", "AARON WIGGINS (19-20)"]

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
                if(playerNames[i+1]) {
                  return (<tr>
                    <td className={`is-clickable is-hoverable-cell ${i+1 === parseInt(currentId) ? "is-info" : ""}`} role="presentation" id={i+1} onClick={playerClick}>{playerNames[i]}</td> 
                    <td className={`is-clickable is-hoverable-cell ${i+2 === parseInt(currentId) ? "is-info" : ""}`} role="presentation" id={i+2} onClick={playerClick}>{playerNames[i+1]}</td>
                  </tr>)
                } else {
                  return (<tr>
                    <td className={`is-clickable is-hoverable-cell ${i+1 === parseInt(currentId) ? "is-info" : ""}`} role="presentation" id={i+1} onClick={playerClick}>{playerNames[i]}</td> 
                  </tr>)
                }
              } else {
                return <tr></tr>
              }
          })}
        </tbody>
    </table>
    )
}

PlayersTable.propTypes = {
    currentId: PropTypes.number.isRequired,
    parentCallback: PropTypes.func,
}

PlayersTable.defaultProps = {
    currentId: 1,
    parentCallback: function() {return null}
}

export default PlayersTable