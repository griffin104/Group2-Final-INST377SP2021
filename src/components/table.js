import React, { useState } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Table = ({ table, headers, path, pathColumn, pathState, admin }) => {

    const properties = Object.getOwnPropertyNames(table[0])

    let deleteColumn = ''
    let addRow = ''
    let submit= ''

    let newTable = [...table]

    const [visibleColumns, setVisibleColumns] = useState(() => {return headers.map(()=>(true))})
    const [extraRows, setExtraRows] = useState([])

    // sortBy[{propertyBeingSorted}, {asc}]
    const [sortBy, setSortBy] = useState([properties[0], true])
    const [filter, setFilter] = useState(() => {return headers.map(() => (''))})

 
    function sortTable(prop) {
        if (prop === sortBy[0]) {
            table.sort((a, b) => {
                if (!sortBy[1]) {
                    return (a[sortBy[0]] > b[sortBy[0]] ? 1 : -1)
                } else {
                    return (a[sortBy[0]] < b[sortBy[0]] ? 1 : -1)
                }
            })
            setSortBy(sortBy[0], !sortBy[1])
        } else {
            table.sort((a, b) => {
                    return (a[prop] > b[prop] ? 1 : -1)
            })
            setSortBy([prop, true])
        }
    }

    function filterRows(e) {
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
                ans = false
            } 
        })
        return ans
    }

    function editCell(row, prop, e) {
        if (row) {
        if (row[prop].toString() !== e.target.textContent) {
            e.target.className = "has-background-success-light"
        } else {
            e.target.className = ""
        }
    }
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

    async function deleteRow(e) {
        if(window.confirm("Are you sure you want to delete this row?")) {
            let id = e.target.closest('tr').firstChild.textContent
            /* const response = await fetch(`${process.env.DOMAIN}/api/player-bios/${id}`, {
                method: 'DELETE'
            }) */
            newTable.forEach(obj => {
                if (obj[Object.keys(obj)[0]].toString() === id) {
                    console.log(obj)

                }
            })
        } else {
            console.log("Not Deleted")
        }
    }

    function addExtraRow(i, e) {
        console.log(extraRows)
        setExtraRows([...extraRows,
        <tr>
            {properties.map(prop => {
                return (<td contentEditable={admin} onInput={(e) => editCell(null, null, e)} suppressContentEditableWarning={true}></td>)
            })}
            {deleteColumn}
        </tr>])
    }

    if (admin) {
        deleteColumn = <td><button className="button has-background-danger" onClick={deleteRow}>Delete</button></td>
        addRow = <tr><td className="has-background-info is-clickable" onClick={addExtraRow}>Add Row..</td></tr>
        submit = <button className="button has-background-success is-large is-pulled-right">Submit</button>
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
                        if (visibleColumns[i]) return <th className="is-clickable is-hoverable-cell" onClick={() => {
                            if (admin) {
                                sortTable(properties[i])
                            } else {
                                sortTable(properties[i+1])
                            }}}>{header}</th>
                        return ''
                    })}
                </tr>
                <tr>
                    {headers.map((header, i) => {
                        if (visibleColumns[i]) {
                        return (<th>
                        <input className="input is-hovered is-small" size="1" autoComplete= "off" 
                            onChange={filterRows} type="text" name={i}></input>
                        </th>)
                        } return ''
                    })}
                </tr>
            </thead>
            <tbody className="table-body">
                {table.map((row, i) => {
                    if (checkFilter(row)) {
                    return(<tr>
                        {properties.map((prop, j) => {
                            if (visibleColumns[j-1] || (admin && j===0)) {
                                if (j === pathColumn) {
                                    return (
                                        <td id={prop}>
                                            <Link to={`${path}${row[properties[0]]}`}
                                                state={pathState(row, prop)}>{row[prop]}</Link>
                                        </td>
                                    )
                                } else {
                                    return (
                                        <>
                                        <td contentEditable={admin} id={prop} onInput={(e) => editCell(row, prop, e)} suppressContentEditableWarning={true}>{row[prop]}</td>
                                        </>
                                    )
                                }
                            } else {
                                return ''
                            }
                        })}
                        {deleteColumn}
                    </tr>
                )} else {
                    return ''
                }
                })}
                {extraRows}
                {addRow}
            </tbody>
        </table>
        {submit}
        </>
    )
}

Table.propTypes = {
    table: PropTypes.array,
    headers: PropTypes.array,
    path: PropTypes.string,
    pathColumn: PropTypes.number,
    pathState: PropTypes.func,
    admin: PropTypes.bool
    }

Table.defaultProps = {
    table: [],
    headers: [],
    path: '',
    pathColumn: null,
    pathState: function(row, prop){return ''},
    admin: false
}

export default Table