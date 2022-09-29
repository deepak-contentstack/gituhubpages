/**
 * This table component provides infinite scrolling
 * with virtual rendering
 **/
import React from 'react';
import './Table.css';
declare const viewByName: {
    compact_view: string;
    comfort_view: string;
};
export declare type InitialSortByProp = {
    id: string;
    desc: boolean;
};
export declare type RowSelectCheckboxProp = {
    key: string;
    value: boolean;
};
export declare type ActionCbArgProp = {
    data: any[];
    type: string;
};
export declare type OnRowSelectProp = {
    label: string | React.ReactNode;
    cb: (actionCbArg: ActionCbArgProp) => void;
    type?: string;
    icon?: string;
    showSelected?: boolean;
};
export declare type NameProp = {
    singular: string;
    plural: string;
};
export declare type ColumnsProp = {
    Header: string;
    accessor: string | Function;
    default?: boolean;
    disableSortBy?: boolean;
    Cell?: (props: any) => React.ReactNode;
    addToColumnSelector?: boolean | false;
    id?: string;
    cssClass?: string;
    columnWidthMultiplier?: number;
};
export declare type SortByProp = {
    id: string;
    sortingDirection: string;
};
export declare type FetchDataArgProp = {
    skip: number;
    limit: number;
    sortBy?: SortByProp | undefined;
    startIndex: number;
    stopIndex: number;
    searchText?: string;
};
export declare type ItemStatusMapProp = {
    [index: number]: 'loading' | 'loaded';
};
export declare type TooltipListProp = {
    label: string | React.ReactNode;
    title: string;
    action: Function;
    displayType: string;
};
export declare type ExportCtaProp = {
    component: React.ReactNode;
    showExportCta: boolean;
};
export declare type RowDisableProp = {
    key: string;
    value: boolean;
};
declare const defaultProps: {
    columnSelector: boolean;
    name: {
        singular: string;
        plural: string;
    };
    controlledSelectedRowIds: {};
    minBatchSizeToFetch: number;
    loading: boolean;
    viewSelector: boolean;
    canSearch: boolean;
    canRefresh: boolean;
    tableHeight: number;
    withExportCta: {
        component: JSX.Element;
        showExportCta: boolean;
    };
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type TableProps = {
    /**
     * The core columns configuration object for the entire table
    */
    columns: ColumnsProp[];
    /**
     * Show and hide, column selectors filters
    */
    columnSelector?: boolean;
    /**
     * The Data array that you want to display on table
    */
    data: any[];
    /**
     * Used in rowselect header and table panel items counts
    */
    name?: NameProp;
    /**
     * If a column's ID is contained in this array, it will be hidden
    */
    hiddenColumns?: string[];
    /**
     * used for sort data in table initially
    */
    initialSortBy?: InitialSortByProp[] | [];
    /**
     * Calls when searchText, sortBy changes with `FetchDataArgProp`
    */
    fetchTableData: (fetchTableDataArg: FetchDataArgProp) => void;
    /**
     * Click handler to attach onrowclick, calls with row data
    */
    onRowClick?: (e: any) => void;
    /**
     * Used in other parts of table to track status of data
    */
    loading?: boolean;
    /**
     * Pass true to add checkbox in row
    */
    isRowSelect?: boolean;
    /**
     * Used for bulk opeartion on selected row
    */
    onRowSelectProp?: OnRowSelectProp[];
    /**
     * Used internally for table operation, rendering unique row data
    */
    uniqueKey: string;
    /**
     * Used for conditinally add select box in a row
    */
    rowSelectCheckboxProp?: RowSelectCheckboxProp;
    /**
     * pass the rowIds which will be selected at table initial load
    */
    initialSelectedRowIds?: object;
    /**
     * calls getSelectedRow method  with all selected row ids
    */
    getSelectedRow?: Function;
    /**
     * Min batch size or data size(limit) to fetch on scroll
    */
    minBatchSizeToFetch?: number;
    /**
     * Table uses this to track based of value of index if loading shows skeleton loader, if loaded shows data
    */
    itemStatusMap: ItemStatusMapProp;
    /**
     * Table calls this to fetch data with `FetchDataArgProp`
    */
    loadMoreItems: (loadMoreItemsArg: FetchDataArgProp) => void;
    /**
     * Total counts of all data
    */
    totalCounts: number;
    /**
     * Size of a item basically row height
    */
    itemSize?: number;
    /**
     * Pass it if you need to control scroll or smth with ref
    */
    fixedlistRef?: any;
    /**
     * Show and hide table view selector
    */
    viewSelector?: boolean;
    /**
     * Header text when there is no data available
    */
    emptyHeading?: any;
    /**
     * Description for emptystate
    */
    emptyDescription?: any;
    /**
     * we can also use this prop for empty state of table
    */
    emptyObj?: any;
    /**
     *Get table view when changes, Comfort or Compact
    */
    getViewByValue?: (selectedViewBy: keyof typeof viewByName) => void;
    /**
     * get position  value of scrollOffset
    */
    getScrollPostion?: (scrollOffset: number) => void;
    /**
     * Pass it for Actions tooltip on hover of row
    */
    onHoverActionList?: Array<TooltipListProp>;
    /**
     * use this props to make the entire row of table selectable
    */
    fullRowSelect?: boolean;
    /**
     * Pass true to add search bar on top of table
    */
    canSearch?: boolean;
    /**
     * Pass true to add refresh icon on top of table
    */
    canRefresh?: boolean;
    /**
     * Placeholder for search
    */
    searchPlaceholder?: string;
    /**
     * Input value for search
    */
    searchValue?: string;
    /**
     * Pass it for single row select, use onRowClick to set it
    */
    singleSelectedRowId?: string;
    /**
     * Height for table
    */
    tableHeight?: number;
    /**
     * Pass it for different set of Actions tooltip on hover of row based on some condition
    */
    onHoverListCondition?: any;
    /**
     * determines if single row of table is selectable or not based key and value passed in obj to this prop
    */
    conditionalSingleSelect?: any;
    /**
     * With every action that is dispatched to the table's internal `React.useReducer` instance, this reducer is called and is allowed to modify the final state object for updating.
    */
    tableStateReducer?: any;
    /**
     * decides maximum selected of the data of table
    */
    maxSelect?: number;
    /**
     * table will use this to load with initial selected data
    */
    initialRowSelectedData?: [];
    /**
     * Pass the number of static row you add in the table
    */
    staticRowCount?: number;
    /**
     * will make all columns of table equal in width
    */
    equalWidthColumns?: boolean;
    /**
     * calls with updated columnSelector data  when column selector is changed
    */
    onToggleColumnSelector?: Function;
    /**
     * use this when we want open in new tab support for table row that has link
    */
    linkToRow?: string | Function;
    /**
     * load custom component beside viewSeletor and columnSelector
    */
    withExportCta?: ExportCtaProp;
    testId?: string;
    customRowAdd?: boolean;
    onSaveChange?: Function;
    resetSearch?: boolean;
    hideTablePanel?: boolean;
    LinkComponent?: Function;
    customRowComponent?: React.ReactNode;
    /**
     * Used for conditinally disable a row
    */
    rowDisableProp?: RowDisableProp;
    /**
     * calls onHoverText method  with current row data
    */
    onRowHoverText?: Function;
    /**
      * Pass true to enable ordering of table column from column selector
     */
    canOrderColumn?: boolean;
    /**
     * Table uses order of column's ID array to set its column order
    */
    columnsOrder?: string[];
    /**
     * calls with updated column orders when column's orders is changed
    */
    onChangeColumnOrder?: Function;
} & Partial<DefaultProps>;
export declare const InfiniteScrollTable: (props: TableProps) => JSX.Element;
declare const _default: any;
export default _default;
