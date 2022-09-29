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
export declare const insertEmbedAsset: ({ asset, editor, isInline }: {
    asset: any;
    editor: any;
    isInline: any;
}) => void;
export declare const SelectEmbedAssetType: ({ imageSelected, isInline, setIsInline }: {
    imageSelected: any;
    isInline: any;
    setIsInline: any;
}) => JSX.Element;
export declare const SelectEmbedAssetTypeUpload: ({ imageSelected, isInline, setIsInline }: {
    imageSelected: any;
    isInline: any;
    setIsInline: any;
}) => JSX.Element;
export default class extends React.Component<ModalComponentProps> {
    state: {
        linkDetails: {
            linkTitle: string;
            href: string;
            newTab: boolean;
        };
        image: {
            url: string;
            filename: string;
            uid: string;
        };
        newTab: boolean;
        isInline: boolean;
    };
    setImage: (asset: any) => void;
    setIsInline: (value: any) => void;
    handleSubmit: () => void;
    handleReset: () => void;
    render(): JSX.Element;
}
export {};
