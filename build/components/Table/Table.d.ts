import React from 'react';
import './Table.css';
declare type IInitialSortBy = {
    id: string;
    desc: boolean;
};
declare type IRowSelectCheckboxProp = {
    key: string;
    value: boolean;
};
declare type IActionCbArg = {
    data: any[];
    type: string;
};
declare type IOnRowSelectProp = {
    label: string | React.ReactNode;
    cb: (actionCbArg: IActionCbArg) => void;
};
declare type IDataType = {
    singular: string;
    plural: string;
};
declare type IColumns = {
    Header: string;
    accessor: string;
    default?: boolean;
    disableSortBy?: boolean;
    assetSmallView?: boolean;
    Cell?: (props: any) => React.ReactNode;
    addToColumnSelector?: boolean | false;
    cssClass?: string;
};
declare type ISortBy = {
    id: string;
    sortingDirection: string;
};
declare type IFetchTableDataArg = {
    skip: number;
    limit: number;
    pageIndex: number;
    pageSize: number;
    sortBy?: ISortBy | undefined;
};
export declare type ITableProps = {
    columns: IColumns[];
    columnSelector?: boolean;
    data: any[];
    dataType?: IDataType;
    hiddenColumns?: string[];
    initialSortBy?: IInitialSortBy[] | [];
    initialPageSize?: number;
    initialPageIndex?: number;
    pageCount?: number;
    fetchTableData?: (fetchTableDataArg: IFetchTableDataArg) => void;
    canPaginate?: boolean;
    onRowClick?: (e: any) => void;
    loading?: boolean;
    isRowSelect?: boolean;
    onRowSelectProp?: IOnRowSelectProp[];
    uniqueKey: string;
    rowSelectCheckboxProp?: IRowSelectCheckboxProp;
    isResetPage?: boolean;
    initialSelectedRowIds?: object;
    getSelectedRow?: Function;
    totalCounts: number;
};
declare const Table: React.FunctionComponent<ITableProps>;
export default Table;
