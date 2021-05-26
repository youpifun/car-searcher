import React from 'react'
import { Table, TableColumn, TableRow, TableFilters } from '@consta/uikit/Table';
import { TableTextFilter } from '@consta/uikit/__internal__/src/components/Table/TextFilter/TableTextFilter';
import { TableNumberFilter } from '@consta/uikit/__internal__/src/components/Table/NumberFilter/TableNumberFilter';
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


class CarFilter extends React.Component {
    getUniqueFieldsForTextFilter(field: string, arr: CustomIndexableTableRow[]) {
        return Array.from(new Set(arr.map(element => element[field]))).map(element => Object({name: element, value: element}));
    }

    rangeFilterer(cellValue:number, filterValues: {min: number, max: number}) : boolean {
        return cellValue>=filterValues.min&&cellValue<=filterValues.max;
    }

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
                        items: this.getUniqueFieldsForTextFilter('brand', data)
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
                        items: this.getUniqueFieldsForTextFilter('model', data)
                    },
                },
            },
            {
                id: 'year',
                name: 'Year range: ',
                field: 'year',
                filterer: (cellValue, filterValues: {min: number, max: number}) => {
                    return this.rangeFilterer(cellValue, filterValues);
                },
                component: {
                    name: TableNumberFilter,
                },
            },
            {
                id: 'fuel',
                name: 'Fuel: ',
                field: 'fuel',
                filterer: (cellValue, filterValues: Array<{ value: string; name: string }>) => {
                    return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
                },
                component: {
                    name: TableTextFilter,
                    props: {
                        withSearch: false,
                        items: this.getUniqueFieldsForTextFilter('fuel', data)
                    },
                },
            },
            {
                id: 'type',
                name: 'Body type: ',
                field: 'bodyType',
                filterer: (cellValue, filterValues: Array<{ value: string; name: string }>) => {
                    return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
                },
                component: {
                    name: TableTextFilter,
                    props: {
                        withSearch: false,
                        items: this.getUniqueFieldsForTextFilter('bodyType', data)
                    },
                },
            },
            {
                id: 'price',
                name: 'Price: ',
                field: 'price',
                filterer: (cellValue, filterValues: {min: number, max: number}) => {
                    return this.rangeFilterer(cellValue, filterValues);
                },
                component: {
                    name: TableNumberFilter,
                },
            },
        ]

        return(
            <Table columns={columns_config as TableColumn<CustomTableRow>[]} rows={data} filters={filters}/>
        )
    }
}

export default CarFilter;