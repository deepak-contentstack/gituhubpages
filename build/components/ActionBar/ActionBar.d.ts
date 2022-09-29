import React from 'react';
import './ActionBar.css';
export declare type ActionBarProps = {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    hoverMessage: string | React.ReactNode | {
        text: string;
        icon: any;
    };
    showOnHover?: boolean;
    children?: React.ReactChild;
    disabled?: boolean;
    testId?: string;
};
declare const ActionBar: ({ children, onClick, hoverMessage, showOnHover, disabled, testId }: ActionBarProps) => JSX.Element;
export default ActionBar;
