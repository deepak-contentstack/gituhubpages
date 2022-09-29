import React from 'react';
import './Truncate.css';
export declare type TruncateProps = {
    children: string;
    maxChar?: number;
    tooltip?: TruncateTooltipProps;
    isResponsive?: boolean;
    testId?: string;
};
export declare type TruncateTooltipProps = {
    position: 'bottom' | 'top' | 'left' | 'right' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    showArrow?: boolean;
    disabled?: boolean;
    variantType?: 'dark' | 'light' | 'menuIcon';
    type?: 'primary' | 'secondary' | 'dynamic';
    maxWidth?: any;
    [propsKey: string]: any;
};
export declare const Truncate: React.ForwardRefExoticComponent<TruncateProps & React.RefAttributes<unknown>>;
