import React, { MouseEventHandler, RefObject, CSSProperties } from 'react';
import './Checkbox.css';
declare const defaultProps: {
    indeterminate: boolean;
    required: boolean;
    disabled: boolean;
    enableStopPropagation: boolean;
    testId: string;
};
export interface CheckboxState {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    value?: string;
}
export declare type CheckboxProps = {
    className?: string;
    checked?: boolean;
    indeterminate?: boolean;
    /**
     * specifies that an checkbox input field must be filled out before submitting the form
    */
    required?: boolean;
    /**
     * is checkbox full width selectable
    */
    isLabelFullWidth?: boolean;
    /**
     * text on click of which it check/uncheck
    */
    label?: string | React.ReactNode;
    /**
     * The name prop specifies the name attribute of an checkbox input element
    */
    name?: string;
    /**
     *The id prop specifies the id attribute of an checkbox input element
    */
    id?: string;
    /**
     *specifies if a checkbox is in checked state when the form is submitted
    */
    value?: any;
    /**
     *determines whether checkbox is disabled or not
    */
    disabled?: boolean;
    /**
     *displays button type checkbox
    */
    isButton?: boolean;
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
    /**
     *specifies the tab order of an checkbox element
    */
    tabIndex?: any;
    testId?: string;
    enableStopPropagation?: boolean;
    tooltipContent?: string;
} & typeof defaultProps;
declare const _default: any;
export default _default;
