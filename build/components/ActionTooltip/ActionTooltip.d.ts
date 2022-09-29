import React from 'react';
import './ActionTooltip.css';
export declare type ActionTooltipList = {
    label: string | React.ReactNode;
    title: string;
    action: Function;
    className?: string;
};
export declare type IActionTooltip = {
    type?: 'primary' | 'secondary';
    list: Array<ActionTooltipList>;
    children?: React.ReactNode | Element;
    className?: string;
    data?: any;
    right?: string | number;
    testId?: string;
};
declare const ActionTooltip: React.FunctionComponent<IActionTooltip>;
export default ActionTooltip;
