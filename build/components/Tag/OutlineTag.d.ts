import './OutlineTag.css';
import React, { CSSProperties } from 'react';
export declare type OutlineTagProps = {
    style?: CSSProperties;
    content?: string | React.ReactNode;
    className?: string;
    type?: "positive" | "primary";
    testId?: string;
    hasLink?: boolean;
    allowPropagation?: boolean;
};
declare const _default: any;
export default _default;
