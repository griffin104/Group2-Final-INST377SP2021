import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Table = ( {table, headers} ) => {

    const properties = Object.getOwnPropertyNames(table[0])
    
    const [sortBy, setSortBy] = useState([properties[0], true])
    const [displayedTable, setDisplayedTable] = useState(table)

    function sortTable(prop) {
        if (prop == sortBy[0]) {
            setSortBy(sortBy[0], !sortBy[1])
        } else {
            setSortBy([prop, true])
        } 
    } 

    useEffect(() => {
        table.sort((a, b) => {
            if (sortBy[1]) {
                return (a[sortBy[0]] > b[sortBy[0]] ? 1 : -1)
            } else {
                return (a[sortBy[0]] < b[sortBy[0]] ? 1 : -1)
            }
        })
        setDisplayedTable(table.slice(0))
    }, [sortBy])

    return (
        <table className="table is-striped is-bordered is-hoverable center has-text-centered">
        <thead>
          <tr>
            {headers.map((header, i) => (
                <th className="is-clickable" onClick={() => sortTable(properties[i+1])}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {displayedTable.map(row => (
             <tr>
              {properties.map((prop, i) => {
                  if (i) {
                    return(
                  <td>
                  <Link to={`/game-stats?game=${row[properties[0]]}`}>{row[prop]}</Link>
                  </td>
                    )
                  }
                })}
            </tr> 
          ))}
        </tbody>
      </table>
    )
}

Table.propTypes = {
    table: PropTypes.array,
    headers: PropTypes.array,
}

Table.defaultProps = {
    table: [],
    headers: []
}

export default Table