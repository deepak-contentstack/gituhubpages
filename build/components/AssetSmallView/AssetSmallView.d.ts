import { Component } from 'react';
import './AssetSmallView.css';
export declare type DimensionProps = {
    height: number;
    width: number;
};
export declare type AssetSmallViewProps = {
    className?: string;
    name?: string;
    type?: string;
    url?: string;
    dimensions?: DimensionProps;
} & typeof defaultProps;
declare const defaultProps: {};
export declare class AssetSmallView extends Component<AssetSmallViewProps> {
    static defaultProps: {};
    render(): JSX.Element;
}
export default AssetSmallView;
