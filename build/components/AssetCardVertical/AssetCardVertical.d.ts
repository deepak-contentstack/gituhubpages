import React, { ReactNode } from 'react';
import './AssetCardVertical.css';
declare const defaultProps: {
    assetType: string;
    canHover: boolean;
    checked: boolean;
    isRadio: boolean;
    isCardDisabled: boolean;
    testId: string;
};
export interface AssetCardVerticalState {
    hoverState: boolean;
}
export declare type Actions = {
    actionTitle: string;
    actionIcon: ReactNode;
    actionOnClick: Function;
};
export declare type AssetCardVerticalProps = {
    assetType?: 'image' | 'folder' | 'code' | 'pdf' | 'excel' | 'presentation' | 'document' | 'json' | 'text/plain' | 'zip' | 'video' | 'audio' | 'imageBroken' | 'image/tiff';
    assetUrl?: string;
    title?: string;
    size?: number;
    height?: any;
    width?: any;
    onCardClick?: Function;
    onEditClick?: Function;
    onCopyClick?: Function;
    onDeleteClick?: Function;
    onFullScreenClick?: Function;
    onChecked?: Function;
    fullScreenComponent?: React.ReactNode;
    cardData?: any;
    checked?: boolean;
    isRadio?: boolean;
    progressBar?: number;
    canHover?: boolean;
    onReloadClick?: Function;
    actions?: Actions[];
    isCardDisabled?: boolean;
    hoverText?: string;
    testId?: string;
} & typeof defaultProps;
declare const _default: any;
export default _default;
