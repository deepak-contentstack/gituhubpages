import React from 'react';
import './Select.css';
export declare type ISelectProps = {
    width?: string;
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
    onBlur?: any;
    options: any[];
    value: any;
    canEditOption?: boolean;
    updateOption?: (IUpdateOption: {
        label: any;
        id: any;
    }) => void;
    selectLabel?: string;
    isNested?: boolean;
    showCount?: boolean;
    selectedLabel?: string;
    addOption?: Function;
    hasAddOption?: boolean;
    addOptionText?: React.ReactNode | Element;
    getOptionLabel?: any;
    getOptionValue?: any;
    noCheckBox?: boolean;
    showMore?: boolean;
    className?: string;
    decorators?: object;
    noOptionsMessage?: any;
    error?: Boolean;
    optionClassname?: string;
    testId?: string;
    filterOption?: Function;
    isOptionSelected?: Function;
    isOptionDisabled?: Function;
    multiDisplayLimit?: number;
    menuPortalTarget?: any;
    styles?: any;
    menuStyle?: object;
    menuClassName?: string;
    type?: 'primary' | 'secondary';
    onMenuOpen?: Function;
};
declare const _default: React.NamedExoticComponent<ISelectProps>;
export default _default;
