import React, { CSSProperties } from 'react';
import './ButtonGroup.css';
export declare type ButtonGroupProps = {
    /**
     * Provides the class names to be appended to this prop.
     */
    className?: string;
    /**
     * Add child elements defined within a component.
     */
    children?: React.ReactNode;
    /**
     * Pass the CSS properties for the button group.
     */
    style?: CSSProperties;
    /**
     * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id).
     */
    testId?: string;
};
declare const ButtonGroup: {
    (props: ButtonGroupProps): JSX.Element;
    defaultProps: Partial<ButtonGroupProps>;
};
export default ButtonGroup;
