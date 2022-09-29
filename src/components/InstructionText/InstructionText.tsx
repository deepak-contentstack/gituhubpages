import React, { Component } from 'react';
import cn from 'classnames';
import './InstructionText.css';

export type InstructionTextProps = {
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

const defaultProps = { testId: 'cs-instruction-text' };

export class InstructionText extends Component<InstructionTextProps> {
    static defaultProps = defaultProps;

    render() {
        const { className, children, testId, ...otherProps } = this.props;

        const classNames = cn('InstructionText', className);

        return (
            <p {...otherProps} className={classNames} data-test-id={testId}>
                {children}
            </p>
        );
    }
}

export default InstructionText;