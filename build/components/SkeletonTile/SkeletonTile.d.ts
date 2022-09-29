import { PureComponent } from 'react';
import './SkeletonTile.css';
declare const defaultProps: {
    testId: string;
};
export declare type SkeletonTileProps = {
    numberOfTiles: number;
    tileHeight: number;
    tileWidth: number | string;
    tileBottomSpace: number;
    tileTopSpace: number;
    tileleftSpace: number;
    tileRadius?: number;
    testId?: string;
} & typeof defaultProps;
export declare class SkeletonTile extends PureComponent<SkeletonTileProps> {
    static defaultProps: {
        testId: string;
    };
    render(): JSX.Element;
}
export default SkeletonTile;
