import React, { Component } from 'react';
import './InstructionText.css';
export declare type InstructionTextProps = {
    /**
    * Pass the class names to be appended to this prop
    */
    className?: string;
    /**
    * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id)
    */
    testId?: string;
    /**
    * Add the styles that can be added directly to the component
    */
    style?: React.CSSProperties;
    children?: React.ReactNode;
} & typeof defaultProps;
declare const defaultProps: {
    testId: string;
};
export declare class InstructionText extends Component<InstructionTextProps> {
    static defaultProps: {
        testId: string;
    };
    render(): JSX.Element;
}
export default InstructionText;
