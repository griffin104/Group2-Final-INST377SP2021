import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Table = ( {table, headers} ) => {

    let properties

    if (typeof table[0] === 'object') {
        properties = Object.getOwnPropertyNames(table[0])
    }

    return(
        <table className="table is-striped is-bordered is-hoverable center has-text-centered">
        <thead>
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
        </tbody>
      </table>
    )
}

Table.propTypes = {
    table: PropTypes.array,
    headers: PropTypes.array,
}

export default Table