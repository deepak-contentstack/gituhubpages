import { Component } from 'react';
import './Paragraph.css';
export declare type ParagraphProps = {
    /**
    * Pass the class names to be appended to this prop
    */
    className?: string;
    /**
    * Name of the html tag
    */
    tagName?: 'p';
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
    text: string;
    testId: string;
    tagName: string;
};
export declare class Paragraph extends Component<ParagraphProps> {
    static defaultProps: {
        text: string;
        testId: string;
        tagName: string;
    };
    render(): JSX.Element;
}
export default Paragraph;
