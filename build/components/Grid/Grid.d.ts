/// <reference types="react" />
import './Grid.css';
export declare type gridProp = {
    columns: number;
    rows: number;
    columnGap?: number;
    rowGap?: number;
    justifyContent?: 'center' | 'end' | 'flex-end' | 'flex-start' | 'initial' | 'left' | 'normal' | 'right' | 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'stretch' | 'unset';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'wrap-reverse' | 'wrap' | 'nowrap';
    alignContent?: 'flex-end' | 'flex-start' | 'stretch' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'end' | 'start' | 'self-start' | 'self-end';
    alignItems?: 'flex-end' | 'flex-start' | 'stretch' | 'center' | 'baseline' | 'first baseline' | 'last baseline' | 'end' | 'start' | 'self-start' | 'self-end';
    className?: string;
    children: any;
};
declare const Grid: {
    (props: gridProp): JSX.Element;
    defaultProps: Partial<gridProp>;
};
export default Grid;
