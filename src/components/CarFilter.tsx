import React from 'react'
import { Table, TableColumn, TableRow, TableFilters } from '@consta/uikit/Table';
import {TableTextFilter} from '@consta/uikit/__internal__/src/components/Table/TextFilter/TableTextFilter';

interface CustomTableRow extends TableRow {
    brand: string,
    model: string,
    year: number,
    fuel: string,
    bodyType: string,
    price: number
}

class CarFilter extends React.Component {
    render() {
        const columns: TableColumn<CustomTableRow>[] = [
            {
                title: 'Brand',
                accessor: 'brand',
                align: 'center'
            },
            {
                title: 'Model',
                accessor: 'model',
                align: 'center'
            },
            {
                title: 'Year',
                accessor: 'year',
                align: 'center',
                sortable: true,
            },
            {
                title: 'Fuel',
                accessor: 'fuel',
                align: 'center',
            },
            {
                title: 'Type',
                accessor: 'bodyType',
                align: 'center'
            },
            {
                title: 'Price',
                accessor: 'price',
                align: 'center',
                sortable: true,
            },
        ]

        const rows: CustomTableRow[] = [
            {
                id: '1',
                brand: 'Lada',
                model: 'VAZ-5',
                year: 1990,
                fuel: 'electric',
                bodyType: 'Sedan',
                price: 18500
            },
            {
                id: '2',
                brand: 'Land Rover',
                model: 'VAZ-5',
                year: 1983,
                fuel: 'diesel',
                bodyType: 'Hatchback',
                price: 118500
            },
            {
                id: '3',
                brand: 'Lada',
                model: 'VAZ-5',
                year: 1980,
                fuel: 'petrol',
                bodyType: 'Estate',
                price: 2500
            },
            {
                id: '4',
                brand: 'Opel',
                model: 'VAZ-5',
                year: 1990,
                fuel: 'hybrid',
                bodyType: 'Pickup',
                price: 18500
            },
            {
                id: '5',
                brand: 'Mazda',
                model: 'VAZ-5',
                year: 1990,
                fuel: 'hybrid',
                bodyType: 'SUV',
                price: 18500
            },
            {
                id: '6',
                brand: 'Lada',
                model: 'VAZ-5',
                year: 2009,
                fuel: 'petrol',
                bodyType: 'Cabrio',
                price: 138500
            },
            {
                id: '7',
                brand: 'Lada',
                model: 'VAZ-5',
                year: 2019,
                fuel: 'electric',
                bodyType: 'MPV',
                price: 54700
            },
        ];

        const filters: TableFilters<CustomTableRow> = [ 
            {
                id: 'brand',
                name: 'Brand: ',
                field: 'brand',
                filterer: (cellValue, filterValues: Array<{ value: string; name: string }>) => {
                return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
                },
                component: {
                    name: TableTextFilter,
                    props: {
                        withSearch: true,
                        items: [
                        { name: 'Lada', value: 'Lada' },
                        { name: 'Land Rover', value: 'Land Rover' },
                        { name: 'Mazda', value: 'Mazda' },
                        { name: 'Opel', value: 'Opel' }
                        ],
                    },
                },
            },
        ]

        return(
            <Table columns={columns} rows={rows} filters={filters}/>
        )
    }
}

export default CarFilter;