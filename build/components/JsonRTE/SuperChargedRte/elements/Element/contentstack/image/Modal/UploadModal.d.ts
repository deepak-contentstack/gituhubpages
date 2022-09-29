import React from 'react';
import { ReactEditor } from 'slate-react';
import { Editor as ModifiedEditor } from '../../../../../utils/types';
import './style.css';
export declare const getImageMarkdown: (href: any, text?: string) => string;
declare interface ModifiedEditorSecond extends ModifiedEditor, ReactEditor {
}
export declare type ModalComponentProps = {
    editor: ModifiedEditorSecond;
    closeModal: Function;
    type: string;
};
export default class extends React.Component<ModalComponentProps> {
    state: {
        folderUid: string;
        loading: boolean;
        selected: boolean;
        isInline: boolean;
        files: any[];
    };
    setFolderUid: (uid: any) => void;
    handleSubmit: (res: any) => void;
    handleReset: () => void;
    setLoading: (isLoading: any) => void;
    handleUpload: (files: any, uid?: string) => void;
    setIsInline: (value: any) => void;
    render(): JSX.Element;
}
export {};
