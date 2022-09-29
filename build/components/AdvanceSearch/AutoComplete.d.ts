/// <reference types="lodash" />
import { Component } from 'react';
declare class AutoComplete extends Component<any> {
    state: {
        queryType: any;
        nextQuery: any;
        suggestions: any[];
        currentSearch: any;
        needOperator: boolean;
        isQueryCompleted: boolean;
        action: any;
        queryCursor: number;
        opeartorCursor: number;
        suggestionsLength: number;
        showSuggestions: boolean;
        hasMore: boolean;
        skip: number;
        count: number;
        loading: boolean;
        operators: {
            name: string;
            icon: string;
            value: string;
        }[];
    };
    suggestionsRef: any;
    isCursorInside: any;
    timer: any;
    preventMultiEnter: boolean;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    updatePlaceholder: (label?: string) => void;
    debounceInputChange: (() => Promise<void>) & import("lodash").Cancelable;
    handleClickOutside: (e: any) => void;
    regiterKeyBindings: (event: any) => void;
    handleSearchTextOnClickSearchIcon: () => void;
    handleSelectQuery: (queryType: any, nextQuery: any, selectedOpt: any, type: any) => Promise<void>;
    handleMultiSelectQuery: (queryType: any, nextQuery: any, selectedOpt: any, type: any, checked: any) => void;
    handleOperatorChange: (selectedOperator: any) => void;
    fetchOnScroll: () => Promise<void>;
    onChangeDate: (selectedDate: any) => void;
    render(): JSX.Element;
}
export default AutoComplete;
