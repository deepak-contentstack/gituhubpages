/// <reference types="react" />
export declare const EmbedBtnGrp: ({ isError, isDisabled, handleEdit, editor, attributes, handleDelete, handleUnlink, handleCaption, type }: {
    isError: any;
    isDisabled: any;
    handleEdit: any;
    editor: any;
    attributes: any;
    handleDelete: any;
    handleUnlink: any;
    handleCaption: any;
    type: any;
}) => JSX.Element;
export declare const ReferenceComponent: ({ content_type_uid, attributes, children, type, entry, handleEdit, handleDelete, editor }: {
    content_type_uid: any;
    attributes: any;
    children: any;
    type: any;
    entry: any;
    handleEdit: any;
    handleDelete: any;
    editor: any;
}) => JSX.Element;
export declare const InlineReference: ({ loading, entry, loadEntry, deleteReference, editor, element, ...props }: {
    [x: string]: any;
    loading: any;
    entry: any;
    loadEntry: any;
    deleteReference: any;
    editor: any;
    element: any;
}) => JSX.Element;
export * from './withInlineReference';
export * from './deserializer';
