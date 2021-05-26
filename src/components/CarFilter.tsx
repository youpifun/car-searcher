import React from 'react'
import { Table, TableColumn, TableRow, TableFilters } from '@consta/uikit/Table';
import {TableTextFilter} from '@consta/uikit/__internal__/src/components/Table/TextFilter/TableTextFilter';
import data from '../assets/data.json'
import columns_config from '../assets/columns_config.json'

interface IIndexable {
    [key: string]: any
}

type CustomTableRow = TableRow & {
    brand: string,
    model: string,
    year: number,
    fuel: string,
    bodyType: string,
    price: number
}

type CustomIndexableTableRow = IIndexable & CustomTableRow;

function getUniqueByFieldFilterObjects(field: string, arr: CustomIndexableTableRow[]) {
    return Array.from(new Set(arr.map(element => element[field]))).map(element => Object({name: element, value: element}));
}

class CarFilter extends React.Component {
    render() {

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
                        items: getUniqueByFieldFilterObjects('brand', data)
                    },
                }, 
            },
            {
                id: 'model',
                name: 'Model: ',
                field: 'model',
                filterer: (cellValue, filterValues: Array<{ value: string; name: string }>) => {
                return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
                },
                component: {
                    name: TableTextFilter,
                    props: {
                        withSearch: true,
                        items: getUniqueByFieldFilterObjects('model', data)
                    },
                },
            },
        ]

        return(
            <Table columns={columns_config as TableColumn<CustomTableRow>[]} rows={data} filters={filters}/>
        )
    }
}

export default CarFilter;