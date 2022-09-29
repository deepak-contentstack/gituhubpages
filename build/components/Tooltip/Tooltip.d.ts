import './Tooltip.css';
import React from 'react';
import { TippyProps } from '@tippyjs/react';
interface ITooltip extends TippyProps {
    content: string | React.ReactNode | {
        text: string;
        icon: any;
    };
    position: string;
    showArrow?: boolean;
    onCreate?: (data: any) => void;
    trigger?: string;
    onHidden?: () => any;
    disabled?: boolean;
    variantType?: "dark" | "light" | "menuIcon";
    visible?: boolean;
    showClose?: boolean;
    onClose?: () => void;
    type?: "primary" | "secondary" | "dynamic";
    maxWidth?: any;
    style?: React.CSSProperties;
    [propsKey: string]: any;
    testId?: string;
    customTooltipCss?: string;
    wrapperElementType?: "div" | "span";
}
declare const Tooltip: React.FunctionComponent<ITooltip>;
export default Tooltip;
