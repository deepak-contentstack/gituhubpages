import './ListItem.css';
import React from 'react';
import { IconType } from '../Icon2/Icon';
export declare type ListItemProps = {
    content: string | React.ReactNode;
    description?: string | React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    icon?: IconType;
    testId?: string;
};
declare const ListItem: (props: ListItemProps) => JSX.Element;
export default ListItem;
