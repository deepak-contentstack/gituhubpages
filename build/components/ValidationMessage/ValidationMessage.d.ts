import React, { Component } from 'react';
import './ValidationMessage.css';
export declare type ValidationMessageProps = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};
export declare class ValidationMessage extends Component<ValidationMessageProps> {
    render(): JSX.Element;
}
export default ValidationMessage;
