import React from 'react';
import './SideBarModal.css';
interface ISideBarModalProps {
    children: React.ReactNode;
    shouldCloseOnOverlayClick?: boolean;
    modalContent: React.ReactNode;
    modalContentPosition?: string;
    store?: any;
    customClass?: string;
}
interface IGetModalContentProps {
    modalContent: React.ReactNode;
    shouldCloseOnOverlayClick?: boolean;
    closeModal: (data?: any) => void;
}
export declare const GetModalContent: React.FunctionComponent<IGetModalContentProps>;
declare const SideBarModal: {
    (props: ISideBarModalProps): JSX.Element;
    defaultProps: Partial<ISideBarModalProps>;
};
export default SideBarModal;
