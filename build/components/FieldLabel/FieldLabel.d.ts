import React, { Component } from 'react';
import './FieldLabel.css';
declare type DefaultProps = Readonly<typeof defaultProps>;
declare const defaultProps: {
    requiredText: string;
    required: boolean;
    testId: string;
};
export declare type FieldLabelProps = {
    /**
    * Sets or returns the value of the for attribute of a label. It specifies to which form element the label is bound to
    */
    htmlFor: string;
    /**
    * Pass the class names to be appended to this prop
    */
    className?: string;
    /**
    * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id)
    */
    testId?: string;
    /**
    * Sets whether it is mandatory to input FieldLabel
    */
    required?: boolean;
    /**
    * Pass a custom message that can be added instead of the default text
    */
    requiredText?: string;
    /**
    * Indicates an error
    */
    error?: boolean;
    /**
    * Sets it in the disabled state
    */
    disabled?: boolean;
    children?: React.ReactNode;
} & Partial<DefaultProps>;
export declare class FieldLabel extends Component<FieldLabelProps> {
    static defaultProps: {
        requiredText: string;
        required: boolean;
        testId: string;
    };
    render(): JSX.Element;
}
export default FieldLabel;
