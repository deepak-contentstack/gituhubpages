/// <reference types="lodash" />
import { Component } from 'react';
declare class FilterDropdown extends Component<any> {
    state: {
        suggestions: any[];
        needOperator: boolean;
        queryCursor: number;
        suggestionsLength: number;
        showSuggestions: boolean;
        hasMore: boolean;
        skip: number;
        count: number;
        loading: boolean;
        operators: any;
    };
    suggestionContainerRef: any;
    suggestionsRef: any;
    isCursorInside: any;
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    debounceInputChange: (() => Promise<void>) & import("lodash").Cancelable;
    handleClickOutside: (e: any) => void;
    regiterKeyBindings: (event: any) => void;
    fetchOnScroll: () => Promise<void>;
    setMultipleValues: (values: any, uid?: any) => void;
    updateMultipleValue: (checkStatus: any, option: any, isLocalized?: boolean) => void;
    updateSingleValue: (isMulti: any, selectedOpt: any, isLanguage?: boolean) => void;
    handleOperatorChange: (selectedOperator: any, index: any) => void;
    onChangeDate: (selectedDate: any) => void;
    render(): JSX.Element;
}
export default FilterDropdown;
