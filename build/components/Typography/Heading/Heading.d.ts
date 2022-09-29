import { Component } from 'react';
import './Heading.css';
export declare type HeadingProps = {
    /**
    * Pass the class names to be appended to this prop
    */
    className?: string;
    /**
    * Name of the html tag
    */
    tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Data that you want to display in tag
    */
    text?: string;
    /**
    * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id)
    */
    testId?: string;
} & typeof defaultProps;
declare const defaultProps: {
    tagName: string;
    text: string;
    testId: string;
};
export declare class Heading extends Component<HeadingProps> {
    static defaultProps: {
        tagName: string;
        text: string;
        testId: string;
    };
    render(): JSX.Element;
}
export default Heading;
