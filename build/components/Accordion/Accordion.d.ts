import React from 'react';
import './Accordion.css';
export declare type accordionProps = {
    accordionLock?: boolean;
    accordionData?: string;
    addLeftComponent?: React.ReactNode;
    addRightComponent?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    noChevron?: boolean;
    preRender?: boolean;
    renderExpanded?: boolean;
    setTitleOnHide?: any | React.ReactNode;
    title: string | React.ReactNode;
    accordionDataCount?: number;
    hasBackgroundColor?: boolean;
    /**
     * Actions List of {component: ReactNode, onClick: () => void}
     */
    actions?: AccordionActionsList;
    isAccordionOpen?: boolean | undefined;
    onTitleClick?: () => void;
    errorMessage?: string;
    dashedLineVisibility?: 'hover' | 'always';
    accordionTitlePropagation?: boolean;
    testId?: string;
};
declare type accordionDataProps = {
    accordionData: string | React.ReactNode;
};
declare type AccordionAction = {
    component: React.ReactNode;
    onClick?: () => void;
    actionClassName?: string;
};
export declare type AccordionActionsList = AccordionAction[];
export declare const AccordionData: (props: accordionDataProps) => JSX.Element;
declare const _default: any;
export default _default;
