import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Table = ({ table, headers, path, pathColumn }) => {

    const properties = Object.getOwnPropertyNames(table[0])


    // sortBy[{propertyBeingSorted}, {asc}]
    const [sortBy, setSortBy] = useState([properties[0], true])
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

    const [displayedTable, setDisplayedTable] = useState(table)

    function sortTable(prop) {
        if (prop === sortBy[0]) {
            setSortBy(sortBy[0], !sortBy[1])
        } else {
            setSortBy([prop, true])
        }
    }

    return (
        <table className="table is-striped is-bordered is-hoverable center has-text-centered">
            <thead>
                <tr>
                    {headers.map((header, i) => (
                        <th className="is-clickable" onClick={() => sortTable(properties[i + 1])}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="table-body">
                {displayedTable.map((row, i) => (
                    <tr>
                        {properties.map((prop, j) => {
                            if (j) {
                                if (j === pathColumn) {
                                    return (
                                        <td>
                                            <Link to={`${path}${row[properties[0]]}`}>{row[prop]}</Link>
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td>{row[prop]}</td>
                                    )
                                }
                            } else {
                                return (null)
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
    path: PropTypes.string,
    pathColumn: PropTypes.number
}

Table.defaultProps = {
    table: [],
    headers: [],
    path: '',
    pathColumn: null
}

export default Table