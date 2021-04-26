import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Table = ({ table, headers, path, pathColumn, pathState, remove }) => {

    const properties = Object.getOwnPropertyNames(table[0])

    let deleteColumn = ''

    const [visibleColumns, setVisibleColumns] = useState(() => {return headers.map(()=>(true))})

    const [displayedTable, setDisplayedTable] = useState(table)

    // sortBy[{propertyBeingSorted}, {asc}]
    const [sortBy, setSortBy] = useState([properties[0], true])

    const [filter, setFilter] = useState(() => {return headers.map(() => (''))})

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

    function sortTable(prop) {
        if (prop === sortBy[0]) {
            setSortBy(sortBy[0], !sortBy[1])
        } else {
            setSortBy([prop, true])
        }
    }

    function test(e) {
        let id = parseInt(e.target.name)
        let newFilter = [...filter]
        newFilter[id] = e.target.value
        setFilter(newFilter)
        /* if (e.target.value) {
            e.target.className = "input has-background-danger-light is-hovered is-small"
        } else {
            e.target.className = "input is-hovered is-small"
        } */
    }

    function checkFilter(row) {
        let ans = true
        properties.forEach((prop, i) => {
            if (filter[i-1] && !row[prop].toString().toUpperCase().includes(filter[i-1].toUpperCase())) {
                //console.log(`${filter[i-1]} is not in ${row[prop]}`)
                ans = false
            } 
        })
        return ans
    }

    function toggleColumn(i, e) {
        let newColumns = [...visibleColumns]
        let newFilter = [...filter]
        newColumns[i] = !newColumns[i]
        if (!newColumns[i]) {
            newFilter[i] = ''
            console.log(newFilter)
            setFilter(newFilter)
        }
        setVisibleColumns(newColumns)
    }

    if (remove) {
        deleteColumn = <td>Remove</td>
    }

    return (
        <>
        {headers.map((header, i) => {
            return (
            <label className="checkbox mr-5">
                {header}
                <input type="checkbox" name="header" checked={visibleColumns[i]} onChange={(e) => toggleColumn(i, e)}/>
            </label>)
        })}
        <table className="table is-striped is-bordered is-hoverable center has-text-centered">
            <thead>
                <tr>
                    {headers.map((header, i) => {
                        if (visibleColumns[i]) return <th className="is-clickable is-hoverable-cell" onClick={() => sortTable(properties[i + 1])}>{header}</th>
                        return ''
                    })}
                </tr>
                <tr>
                    {headers.map((header, i) => {
                        if (visibleColumns[i]) {
                        return (<th>
                        <input className="input is-hovered is-small" size="1" autoComplete= "off" 
                            onChange={test} type="text" name={i}></input>
                        </th>)
                        } return ''
                    })}
                </tr>
            </thead>
            <tbody className="table-body">
                {displayedTable.map((row, i) => {
                    if (checkFilter(row)) {
                    return(<tr>
                        {properties.map((prop, j) => {
                            if (visibleColumns[j-1]) {
                                if (j === pathColumn) {
                                    return (
                                        <td>
                                            <Link to={`${path}${row[properties[0]]}`}
                                                state={pathState(row, prop)}>{row[prop]}</Link>
                                        </td>
                                    )
                                } else {
                                    return (
                                        <td>{row[prop]}</td>
                                    )
                                }
                            } else {
                                return ''
                            }
                        })}
                        {deleteColumn}
                    </tr>
                )}
                })}

            </tbody>
        </table>
        </>
    )
}

Table.propTypes = {
    table: PropTypes.array,
    headers: PropTypes.array,
    path: PropTypes.string,
    pathColumn: PropTypes.number,
    pathState: PropTypes.func,
    remove: PropTypes.bool
    }

Table.defaultProps = {
    table: [],
    headers: [],
    path: '',
    pathColumn: null,
    pathState: function(row, prop){return ''},
    remove: false
}

export default Table