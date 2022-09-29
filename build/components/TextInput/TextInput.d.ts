import React, { Component, RefObject, FocusEvent, KeyboardEvent, ChangeEventHandler, FocusEventHandler } from 'react';
import './TextInput.css';
export declare type TextInputProps = {
    /**
     * Lets you set the width of the input field
     */
    width?: 'small' | 'medium' | 'large' | 'x-large' | 'full';
    /**
     * Makes a field read-only
     */
    isReadOnly?: boolean;
    /**
     * Define the type of input element
     */
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'url' | 'date' | 'time' | string;
    /**
     * Define the name of the input element
     */
    name?: string;
    /**
     * Define the ID of the input element
     */
    id?: string;
    /**
     * Provide the classnames of input element wrapper
     */
    className?: string;
    /**
     * Provide the classnames of input element
     */
    inputClassName?: string;
    /**
     * Pass the callback function on a copy event
     */
    onCopy?: (value: string) => void;
    /**
     * Pass the DOM reference to input element
     */
    inputRef?: RefObject<HTMLInputElement>;
    /**
     * Defines whether input has an error or not
     */
    error?: boolean;
    /**
     * Triggers a blur event on the click of ESC button
     */
    willBlurOnEsc?: boolean;
    /**
     * Provides text suggestions while typing
     */
    autoComplete?: "on" | "off" | "new-password";
    /**
     * Lets you autofocus input element
     */
    autoFocus?: boolean;
    /**
     * Define value of input element
     */
    value?: any;
    /**
     * Show eye suffix tooltip for input element on hover
     */
    suffix?: React.ReactNode;
    /**
     * Provides an option to switch between types: text and password
     */
    canShowPassword?: boolean;
    /**
     * Pass the maximum length of characters to be allowed
     */
    maxLength?: number;
    /**
     * Shows character length of input element value
     */
    showCharacterCount?: boolean;
    /**
     * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id).
     */
    testId?: string;
    /**
     * Disables text input
     */
    disabled?: boolean;
    /**
     * Define an input field as required
     */
    required?: boolean;
    /**
     * Pass the callback function on a change event
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Pass the callback function on a blur event
     */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /**
     * Pass the placeholder value
     */
    placeholder?: string;
    /**
     * Pass the callback function on a keypress event
     */
    onKeyDown?: (value: any) => void;
    /**
     * Provides the directionality of the text.
     */
    textDirection?: 'ltr' | 'rtl' | 'auto';
} & JSX.IntrinsicElements['input'] & typeof defaultProps;
interface TextInputState {
    value?: string;
    visiblePassword?: boolean;
}
interface RenderVisiblePasswordProps {
    togglePassworVisible: () => void;
    visiblePassword: boolean;
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'url' | 'date' | 'time' | string;
    canShowPassword: boolean;
}
declare const defaultProps: {
    disabled: boolean;
    isReadOnly: boolean;
    required: boolean;
    autoComplete: string;
    autoFocus: boolean;
    width: string;
    willBlurOnEsc: boolean;
    placeholder: string;
    testId: string;
    textDirection: string;
};
export declare const RenderVisiblePassword: React.MemoExoticComponent<({ togglePassworVisible, visiblePassword, type, canShowPassword }: RenderVisiblePasswordProps) => JSX.Element>;
export declare class TextInput extends Component<TextInputProps, TextInputState> {
    static defaultProps: {
        disabled: boolean;
        isReadOnly: boolean;
        required: boolean;
        autoComplete: string;
        autoFocus: boolean;
        width: string;
        willBlurOnEsc: boolean;
        placeholder: string;
        testId: string;
        textDirection: string;
    };
    state: {
        value: any;
        visiblePassword: boolean;
    };
    UNSAFE_componentWillReceiveProps(nextProps: TextInputProps): void;
    handleFocus: (e: FocusEvent) => void;
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    handleChange: (e: any) => void;
    renderSuffix: () => JSX.Element;
    togglePassworVisible: () => void;
    handleClearSearch: (e: any) => void;
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
