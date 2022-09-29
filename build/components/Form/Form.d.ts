import React, { Component, FormEventHandler, FormEvent } from 'react';
import './Form.css';
export declare type FormProps = {
    onSubmit?: FormEventHandler;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChild | React.ReactNodeArray;
} & typeof defaultProps;
declare const defaultProps: {};
export declare class Form extends Component<FormProps> {
    static defaultProps: {};
    handleSubmit: (event: FormEvent) => void;
    render(): JSX.Element;
}
export default Form;
