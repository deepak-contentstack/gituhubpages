import React from 'react';
import './SectionHeader.css';
export declare type SectionHeaderProps = {
    content: string | React.ReactNode;
    fontColor?: "white" | "base" | "link" | "black";
    fontWeight?: "bold" | "extra-bold" | "semi-bold";
    fontSize?: "tiny" | "small" | "medium" | "large";
    leftMargin?: string | number;
    topMargin?: string | number;
    rightMargin?: string | number;
    bottomMargin?: string | number;
    className?: string;
};
declare const SectionHeader: {
    (props: SectionHeaderProps): JSX.Element;
    defaultProps: Partial<SectionHeaderProps>;
};
export default SectionHeader;
