import { useTable, useSortBy } from 'react-table'
import { Table } from 'react-bootstrap'
import { useMemo } from 'react'

const FoodPlacesTable = ({foodPlaces, onFoodItemClick, columns}) => {

    // console.log(columns)
    //console.log(foodPlaces)

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
                                    <th {...column.getHeaderProps( column.getSortByToggleProps() )}>
                                        { column.render('Header') }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map( (row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} onClick={()=>{onFoodItemClick(foodPlaces[i])}}>
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