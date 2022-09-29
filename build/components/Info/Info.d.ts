import React, { CSSProperties } from 'react';
import './Info.css';
declare type InfoType = 'light' | 'dark' | 'success' | 'warning' | 'attention';
interface InfoProps {
    className?: string;
    icon?: React.ReactNode;
    content: string | React.ReactNode;
    type?: InfoType;
    borderColor?: string;
    backgroundColor?: string;
    dismissable?: boolean;
    width?: number | string | undefined;
    leftSpacing?: any;
    rightSpacing?: any;
    bottomSpacing?: any;
    topSpacing?: any;
    enableHover?: boolean | undefined;
    style?: CSSProperties;
    contentStyles?: CSSProperties;
    iconStyles?: CSSProperties;
    dismissStyles?: CSSProperties;
    infoClassName?: string;
    contentClassName?: string;
    iconClassName?: string;
    dismissClassName?: string;
}
declare const Info: {
    (props: InfoProps): JSX.Element;
    defaultProps: Partial<InfoProps>;
};
export default Info;
