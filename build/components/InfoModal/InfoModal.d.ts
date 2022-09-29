/**
 * IMPORTANT
 * 1. infoModal Component renders as a different mini-app withine
 *  sibling node of body invoke using callback
 * 2. Block mulitple calling of infomodal callback in your component  using a state variable
 *  so that it wont open multi instance of info modal
 **/
import React, { ReactNode } from 'react';
import './InfoModal.css';
export declare type portalProps = {
    sourceElem: React.ReactNode;
    AdjustLeftOffset?: Number;
    AdjustTopOffset?: Number;
    destinationElem?: React.ReactNode;
};
export declare type ModalProps = {
    onClose?: (data?: any) => void;
    wrapperStyle?: Object;
    targetNodeOrId: ReactNode | string;
    closeOnOverlayClick?: boolean;
    portal?: portalProps;
    className?: string;
    ignoreContainers?: Array<string>;
};
export declare type InfoModalProps = {
    component: React.ReactNode;
    modalProps?: ModalProps;
    alignment?: string;
};
export declare type Modal = {
    closeModal: (data?: any) => void;
    component: any;
    wrapperStyle: Object;
    updatedProps: any;
    className?: string;
    alignment?: string;
    portal?: portalProps;
    destElem?: any;
    sourceStyle?: any;
    closeOnOverlayClick?: boolean;
    ignoreContainers?: Array<string>;
};
declare const infoModal: ({ component, modalProps, alignment }: InfoModalProps) => {
    div: HTMLDivElement;
    closeModal: (data: any) => void;
    update: (updatedProps: any) => void;
};
export default infoModal;
