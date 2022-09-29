import React, { Component, CSSProperties } from 'react';
import './Field.css';
export declare type FieldProps = {
    /**
   *Specifies the name attribute of the element.
   */
    name?: string;
    /**
   *Specifies the id attribute of the element.
   */
    id?: string;
    /**
  *Sets the width of the field area. It can be ‘small’,‘medium’,‘large’ or ‘full’..
  */
    width?: 'small' | 'medium' | 'large' | 'full';
    /**
   *Lets you add a value to a field.
   */
    value?: string;
    /**
   *Defines the label of a field.
   */
    labelText?: string;
    /**
     *Sets a corresponding field state to  required, which means it cannot be left blank/empty.
     */
    required?: boolean;
    /**
     *Lets you add child elements defined within a component.
     */
    children?: React.ReactNode;
    /**
     *Provides corresponding guidance to the field when hovered.
     */
    helpText?: string;
    maxLength?: number;
    countCharacters?: boolean;
    /**
     *Lets you disable a field.
     */
    disabled?: boolean;
    /**
     *Pass the class names to be appended to this prop.
     */
    className?: string;
    /**
     *Pass any CSS properties to be added to this component.
     */
    style?: CSSProperties;
    /**
     *Used for testing purposes.
     */
    testId?: string;
} & typeof defaultProps;
export interface FieldState {
    value?: string;
    initialValue?: string;
}
declare const defaultProps: {
    required: boolean;
    countCharacters: boolean;
    width: string;
    testId: string;
    disabled: boolean;
};
export declare class Field extends Component<FieldProps, FieldState> {
    static defaultProps: {
        required: boolean;
        countCharacters: boolean;
        width: string;
        testId: string;
        disabled: boolean;
    };
    state: {
        value: string;
        initialValue: string;
    };
    static getDerivedStateFromProps(props: FieldProps, state: FieldState): FieldState;
    render(): JSX.Element;
}
export default Field;
