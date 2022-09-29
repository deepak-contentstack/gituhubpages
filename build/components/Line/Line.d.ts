import { CSSProperties } from 'react';
import './Line.css';
export declare type LineProps = {
    type: 'dashed' | 'solid';
    className?: string;
    style?: CSSProperties;
    /**
    * value in "px"
    */
    width?: number;
};
declare const Line: (props: LineProps) => JSX.Element;
export default Line;
