import * as React from "react"
import PropTypes from "prop-types"

const PlayersTable = ({players}) => {

    return(
      <table className="table is-striped is-bordered is-hoverable center has-text-centered">
      {/* <thead>
        <tr>
          {headers.map(header => (
              <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-body">
        {table.map(row => (
           <tr>
            {properties.map(prop => (
                <td>{row[prop]}</td>
            ))}
          </tr> 
        ))}
      </tbody> */}

      <thead><tr><th colspan="2">Players</th></tr></thead>
        <tbody className="table-body">
          <tr>
            <td><button class="button">JOSHUA TOMAIC</button></td> <td><button class="button">ANDREW TERRELL</button></td>
          </tr>
          <tr>
            <td><button class="button">ANTHONY COWAN JR.</button></td> <td><button class="button">IVAN BENDER</button></td>
          </tr>
          <tr>
            <td><button class="button">AARON WIGGINS</button></td> <td><button class="button">BRUNO FERNANDO</button></td>
          </tr>
          <tr>
            <td><button class="button">RICKY LINDO JR.</button></td> <td><button class="button">TRACE RAMSEY</button></td>
          </tr>
          <tr>
            <td><button class="button">ERIC ALAYA</button></td>
          </tr>
          <tr>
            <td><button class="button">SERREL SMITH JR.</button></td>
          </tr>
          <tr>
            <td><button class="button">DARRYL MORSELL</button></td>
          </tr>
          <tr>
            <td><button class="button">REESE MONA</button></td>
          </tr>
          <tr>
            <td><button class="button">HAKIM HART</button></td>
          </tr>
          <tr>
            <td><button class="button">WILL CLARK</button></td>
          </tr>
          <tr>
            <td><button class="button">CHOL MARIAL</button></td>
          </tr>
          <tr>
            <td><button class="button">TRAVIS VALMON</button></td>
          </tr>
          <tr>
            <td><button class="button">DONTA SCOTT</button></td>
          </tr>
          <tr>
            <td><button class="button">JALEN SMITH</button></td>
          </tr>
        </tbody>

    </table>
    )
}

PlayersTable.propTypes = {
    players: PropTypes.array,
}

export default PlayersTable