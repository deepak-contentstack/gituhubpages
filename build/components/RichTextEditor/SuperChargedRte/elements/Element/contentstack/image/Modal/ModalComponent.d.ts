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
};
export default class extends React.Component<ModalComponentProps> {
    state: {
        image: {
            url: string;
            filename: string;
            uid: string;
        };
    };
    setImage: (asset: any) => void;
    handleSubmit: () => void;
    handleReset: () => void;
    render(): JSX.Element;
}
export {};
