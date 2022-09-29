import React from 'react';
declare type LoadMoreArgsProps = {
    search: string;
    skip: number;
    limit: number;
    prevOptions: any;
};
declare type InitArrayProps = {
    label: String;
    value: String;
};
declare type LoadMoreOptReturnProps = {
    data: any;
    hasMore: boolean;
};
export declare type SelectProps = {
    width: string;
    maxWidth?: string;
    minWidth?: string;
    name?: string;
    isDisabled?: boolean;
    isClearable?: boolean;
    isMulti?: boolean;
    isSearchable?: boolean;
    placeholder?: string;
    hideSelectedOptions?: boolean;
    menuShouldScrollIntoView?: boolean;
    menuPlacement?: 'auto' | 'bottom' | 'top';
    menuIsOpen?: boolean;
    maxMenuHeight?: number;
    minMenuHeight?: number;
    onChange: Function;
    onBlur?: Function;
    value: any;
    canEditOption?: boolean;
    selectLabel?: string;
    updateOption?: (UpdateOptionProps: {
        label: any;
        id: any;
    }) => void;
    limit?: number;
    loadMoreOptions: (loadmoreArgs: LoadMoreArgsProps) => LoadMoreOptReturnProps;
    initialOptions?: Array<InitArrayProps>;
    defaultOptions?: boolean;
    error?: boolean;
    debounceTimeout?: number;
};
declare const _default: React.NamedExoticComponent<SelectProps>;
export default _default;
