/// <reference types="lodash" />
import { Component, RefObject, FocusEvent } from 'react';
import './Search.css';
export declare type SearchProps = {
    /**
     *Sets the width of the input text area of the search component. It can be ‘small,’ ‘medium,’ ‘large,’ or ‘full’.
     */
    width?: 'small' | 'medium' | 'large' | 'full';
    /**
     *Determines the type of search you want to use. It can be ‘primary’ ‘secondary’.
     */
    type?: 'primary' | 'secondary';
    /**
     *Determines the type of corners you want to use for your search bar. It can be ‘regular’ or ‘oval’.
     */
    corners?: 'regular' | 'oval';
    /**
     *Specifies the name attribute of the input element.
     */
    name?: string;
    /**
     *Specifies the id attribute of the input element.
     */
    id?: string;
    /**
     *Pass the class names to be appended to this prop.
     */
    className?: string;
    /**
     *Lets you to add the value in the input text area that is to be searched.
     */
    value?: string;
    /**
     *Lets you add the reference to the input text area of the search component.
     */
    inputRef?: RefObject<HTMLInputElement>;
    /**
     *Gives you the provision to virtually indicate an error.
     */
    error?: boolean;
    /**
     *This event occurs when the value on an element has been changed.
     */
    onChange?: Function;
    /**
     *Lets you display a cancel icon to clear the text of the input area.
     */
    onClear?: boolean;
    /**
     *Displays the hint of the expected value in the input.
     */
    placeholder?: string;
    /**
     *Lets you disable the input field of the search component.
     */
    disabled?: boolean;
    /**
     *Lets you delay the processing of events until the user stops typing.
     */
    debounceSearch?: boolean;
    /**
     *Shows the input text area when the search icon is clicked.
     */
    dynamicInput?: boolean;
    /**
     *Pass an ID that can be used for testing purposes. It is applied as a data attribute(data-test-id).
     */
    testId?: string;
    visibilityValue?: any;
} & JSX.IntrinsicElements['input'] & typeof defaultProps;
export interface SearchState {
    value?: string;
}
declare const defaultProps: {
    disabled: boolean;
    width: string;
    type: string;
    corners: string;
    debounceSearch: boolean;
    dynamicInput: boolean;
    testId: string;
};
export declare class Search extends Component<SearchProps> {
    static defaultProps: {
        disabled: boolean;
        width: string;
        type: string;
        corners: string;
        debounceSearch: boolean;
        dynamicInput: boolean;
        testId: string;
    };
    state: {
        value: string;
    };
    componentDidUpdate(prevProps: any): void;
    debounceSearch: (() => void) & import("lodash").Cancelable;
    onChange: (e: any) => void;
    handleFocus: (e: FocusEvent) => void;
    hanldeClearSearch: (e: any) => void;
    handleToggleInput: (event: any) => void;
    render(): JSX.Element;
}
declare const _default: (props: any) => JSX.Element;
export default _default;
