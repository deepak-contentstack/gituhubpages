/// <reference types="react" />
import './AssetCardHorizontal.css';
export declare type AssetCardHorizontalProps = {
    url?: string;
    name?: string;
    size?: any;
    description?: string;
    onDelete?: (data?: any) => void;
    onEdit?: (data?: any) => void;
    data?: any;
    type?: any;
    imageWidth?: any;
    imageHeight?: any;
    progressBar?: number;
    onReload?: Function;
    withDragAction?: boolean;
};
declare const AssetCardHorizontal: {
    (props: AssetCardHorizontalProps): JSX.Element;
    defaultProps: Partial<AssetCardHorizontalProps>;
};
export default AssetCardHorizontal;
