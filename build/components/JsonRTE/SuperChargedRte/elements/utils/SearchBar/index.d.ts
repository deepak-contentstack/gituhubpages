/// <reference types="react" />
export declare interface SearchBarProps {
    setQuery?: any;
    placeholder: string;
    type: any;
    disabled: boolean;
    size: any;
    [key: string]: any;
}
declare function SearchBar({ setQuery, placeholder, type, disabled, size, ...props }: Partial<SearchBarProps>): JSX.Element;
export default SearchBar;
