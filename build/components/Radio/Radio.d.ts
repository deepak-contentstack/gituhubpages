import { MouseEventHandler, RefObject, CSSProperties } from 'react';
import './Radio.css';
declare const defaultProps: {
    required: boolean;
    disabled: boolean;
    testId: string;
};
export interface RadioState {
    checked?: boolean;
    disabled?: boolean;
    value?: string;
}
export declare type RadioProps = {
    className?: string;
    /**
     * specifies that an checkbox input field must be filled out before submitting the form
    */
    checked?: boolean;
    required?: boolean;
    /**
     * The name prop specifies the name attribute of an checkbox input element
    */
    name?: string;
    /**
     *The id prop specifies the id attribute of an checkbox input element
    */
    id?: string;
    /**
     * label on click of which it check/uncheck
    */
    label?: string;
    /**
     *specifies if a checkbox is in checked state when the form is submitted
    */
    value?: string;
    /**
     *determines whether checkbox is disabled or not
    */
    disabled?: boolean;
    /**
     *Action that want to perform onclick of checkbox
    */
    onClick?: MouseEventHandler;
    /**
     *The onchange event occurs when the value of an element has been changed
    */
    onChange?: any;
    style?: CSSProperties;
    /**
     *The inputRef will add ref to the checkbox input field
    */
    inputRef?: RefObject<HTMLInputElement>;
    testId?: string;
} & typeof defaultProps;
declare const _default: any;
export default _default;
