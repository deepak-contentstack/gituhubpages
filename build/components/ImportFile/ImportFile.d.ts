import React from 'react';
import './ImportFile.css';
export declare type importFileProps = {
    details?: React.ReactNode | string;
    getFile: Function;
    cancelImport?: Function;
    label: string;
    asIcon?: boolean;
    type?: 'light' | 'secondary';
    importTooltipText?: string;
};
declare type importModalProps = {
    closeModal: Function;
    cancelImport?: Function;
    details?: React.ReactNode | string | undefined;
    getFile: Function;
    label: string;
};
export declare const ImportModal: (props: importModalProps) => JSX.Element;
declare const ImportFile: (props: importFileProps) => JSX.Element;
export default ImportFile;
