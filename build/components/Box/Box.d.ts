import { ReactNode } from 'react';
declare type PropertyTypes = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};
export declare type BoxProps = {
    children: ReactNode;
    component?: keyof JSX.IntrinsicElements;
    className?: string;
    margin?: PropertyTypes;
    padding?: PropertyTypes;
    width?: string;
};
declare const Box: (props: BoxProps) => JSX.Element;
export default Box;
