import React, { Component } from 'react';
import './Help.css';
export declare type HelpProps = {
    className?: string;
    text: string | React.ReactNode;
    type: 'primary' | 'secondary';
    alignment?: string;
    tippyProps?: any;
} & typeof defaultProps;
declare const defaultProps: {
    type: string;
};
export declare class Help extends Component<HelpProps> {
    static defaultProps: {
        type: string;
    };
    render(): JSX.Element;
}
export default Help;
