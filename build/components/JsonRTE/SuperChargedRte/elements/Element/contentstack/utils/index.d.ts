export * from './requests';
export * from './checkProps';
export declare const isEmbedLink: (editor: any) => boolean;
export declare const isEmbedAssetLink: (editor: any) => boolean;
export declare const isEmbedLinkActive: (editor: any) => boolean;
export declare const isEmbedAssetLinkActive: (editor: any) => boolean;
export declare const setEntryInEditor: (editor: any, entry: any) => void;
export declare const setAssetInEditor: (editor: any, asset: any) => void;
export declare const getReferenceNode: ({ type, displayType, entry, linkDetails, asset }: {
    type: any;
    displayType: any;
    entry: any;
    linkDetails: any;
    asset: any;
}) => {
    type: string;
    attrs: {
        'display-type': any;
        type: string;
        'class-name': string;
    };
    uid: any;
    children: {
        text: any;
    }[];
};
