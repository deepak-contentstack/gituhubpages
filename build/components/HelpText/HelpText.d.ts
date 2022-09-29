import React, { Component } from 'react';
import './HelpText.css';
export declare type HelpTextProps = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
} & typeof defaultProps;
declare const defaultProps: {};
export declare class HelpText extends Component<HelpTextProps> {
    static defaultProps: {};
    render(): JSX.Element;
}
export default HelpText;
