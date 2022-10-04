import { useTable, useSortBy } from 'react-table'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

/**
 *
 * Component to display table with react-table
 *
 */

const FoodPlacesTable = ({foodPlaces, columns}) => {

    // Get needed functions and properties from useTable
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: foodPlaces }, useSortBy)

    return (
        <Table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map( headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps( column.getSortByToggleProps() )} className='text-nowrap' >
                                        { column.render('Header') }
                                        { column.Header !== 'Actions' 

                                            ?<FontAwesomeIcon icon={faSort} className='ms-3' />
                                            :''
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map( (row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} >
                                {
                                    row.cells.map( cell => (
                                        <td {...cell.getCellProps()}>
                                            { cell.render('Cell') }
                                        </td>
                                    ) )
                                }
                            </tr>
                        )
                    } )
                }
            </tbody>
        </Table>
    )

}

export default FoodPlacesTable