import { Component } from 'react';
declare class SearchFilter extends Component<any, any> {
    state: {
        errorMessage: string;
        allLanguages: any[];
        isScrollDisabled: boolean;
        dropdownOpenState: any[];
    };
    setDropdownState: (index: any, value: any) => void;
    validateFilters: (filters: any) => {
        isValid: boolean;
        errorMessage: string;
    };
    clearErrorMessage: () => void;
    handleResultClick: () => void;
    componentDidUpdate(prevProps: any): Promise<void>;
    render(): JSX.Element;
}
export default SearchFilter;
