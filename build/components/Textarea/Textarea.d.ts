import React, { Component, ChangeEventHandler } from 'react';
import './Textarea.css';
export declare type TextareaProps = {
    /**
     *Specifies the name attribute of input element.
     */
    name?: string;
    /**
     *Specifies the id attribute of input element.
     */
    id?: string;
    /**
     *Used to give a hint before entering value.
     */
    placeholder?: string;
    /**
     *Pass the class names to be appended to this prop.
     */
    className?: string;
    /**
     *Sets the width of the text area .It can be `small`| `medium` |`large` |`x-large`| `full` .
     */
    width?: 'small' | 'medium' | 'large' | 'x-large' | 'full';
    /**
     *Used to limit the length of the input value characters.
     */
    maxLength?: number;
    /**
     *Sets that the corresponding input is required and cannot be blank/empty.
     */
    required?: boolean;
    /**
     *Used to disable the input field.
     */
    disabled?: boolean;
    /**
     *Lets you add value in the text area.
     */
    value?: string;
    /**
     *Specifies the row space taken by the text area.
     */
    rows?: number;
    /**
     *Used to visually indicate an error.
     */
    error?: boolean;
    /**
     *Shows the count of characters entered in the text area.
     */
    showCharacterCount?: boolean;
    /**
     *The event occurs when the value of an element has been changed.
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    /**
     *This will add a reference to the text area.
     */
    inputRef?: React.Ref<HTMLTextAreaElement>;
    /**
     *Used for testing purposes.
     */
    testId?: string;
    /**
     * Provides the directionality of the text.
     */
    textDirection?: 'ltr' | 'rtl' | 'auto';
} & typeof defaultProps;
export interface TextareaState {
    value?: string;
}
declare const defaultProps: {
    disabled: boolean;
    required: boolean;
    width: string;
    placeholder: string;
    testId: string;
    dir: string;
};
export declare class Textarea extends Component<TextareaProps, TextareaState> {
    static defaultProps: {
        disabled: boolean;
        required: boolean;
        width: string;
        placeholder: string;
        testId: string;
        dir: string;
    };
    state: {
        value: string;
    };
    UNSAFE_componentWillReceiveProps(nextProps: TextareaProps): void;
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
