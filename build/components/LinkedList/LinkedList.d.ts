import React from 'react';
import './LinkedList.css';
export declare type InfoRow = {
    title: string | React.ReactNode;
    content: string | React.ReactNode;
};
export declare type LinkedListProps = {
    count?: string | React.ReactNode;
    className?: string;
    listData?: InfoRow[];
    heading?: string;
    seeMore?: Function;
    contentFontColor?: "base" | "secondary" | "tertiary" | "black";
    contentFontSize?: "tiny" | "small" | "medium" | "large";
};
declare const LinkedList: {
    (props: LinkedListProps): JSX.Element;
    defaultProps: Partial<LinkedListProps>;
};
export default LinkedList;
