import * as React from "react"
import PropTypes from "prop-types"

const Players = ({table}) => {

    let properties

    if (typeof table[0] === 'object') {
        properties = Object.getOwnPropertyNames(table[0])
    }

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

      <thead><tr><th>Players</th></tr></thead>
        <tbody className="table-body">
          <tr>
            <td>JOSHUA TOMAIC</td> <td>ANDREW TERRELL</td>
          </tr>
          <tr>
            <td>ANTHONY COWAN JR.</td> <td>IVAN BENDER</td>
          </tr>
          <tr>
            <td>AARON WIGGINS</td> <td>BRUNO FERNANDO</td>
          </tr>
          <tr>
            <td>RICKY LINDO JR.</td> <td>TRACE RAMSEY</td>
          </tr>
          <tr>
            <td>ERIC ALAYA</td>
          </tr>
          <tr>
            <td>SERREL SMITH JR.</td>
          </tr>
          <tr>
            <td>DARRYL MORSELL</td>
          </tr>
          <tr>
            <td>REESE MONA</td>
          </tr>
          <tr>
            <td>HAKIM HART</td>
          </tr>
          <tr>
            <td>WILL CLARK</td>
          </tr>
          <tr>
            <td>CHOL MARIAL</td>
          </tr>
          <tr>
            <td>TRAVIS VALMON</td>
          </tr>
          <tr>
            <td>DONTA SCOTT</td>
          </tr>
          <tr>
            <td>JALEN SMITH</td>
          </tr>
        </tbody>

    </table>
    )
}

Players.propTypes = {
    table: PropTypes.array,
}

export default Players