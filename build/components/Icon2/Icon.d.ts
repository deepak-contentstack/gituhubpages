import React, { CSSProperties } from 'react';
import { iconName } from './constants';
import './Icon.css';
export declare type IconType = keyof typeof iconName;
export declare type IconSize = 'original' | 'tiny' | 'mini' | 'small' | 'large' | 'medium' | 'extraSmall';
export declare type IconProps = {
    icon: string;
    /**
     * sizes can be 'original' | 'tiny' | 'small' | 'large' | 'medium'
     */
    size?: IconSize;
    active?: Boolean;
    hover?: Boolean;
    hoverType?: 'primary' | 'secondary';
    shadow?: 'mini' | 'tiny' | 'medium';
    /**
     * custom css class for active state of icon
     */
    activeClassName?: string;
    /**
     * custom css class for hover state of icon
     */
    hoverClassName?: string;
    className?: string;
    style?: CSSProperties;
    fill?: string;
    stroke?: string;
    height?: Number | string;
    width?: Number | string;
    id?: string;
    onClick?: Function;
    disabled?: boolean;
    activeIcon?: string;
    viewBox?: string;
    data?: string | React.ReactNode;
    testId?: string;
    withTooltip?: boolean;
    tooltipContent?: string | React.ReactNode;
    tooltipPosition?: string;
};
export declare const Icon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        size: string;
        withTooltip: boolean;
        testId: string;
    };
};
export default Icon;
