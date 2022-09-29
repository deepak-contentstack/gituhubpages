export * from './requests';
export * from './checkProps';
export declare const isEmbedLink: (editor: any) => boolean;
export declare const setEntryInEditor: (editor: any, entry: any) => void;
export declare const getReferenceNode: ({ type, displayType, entry, linkDetails }: {
    type: any;
    displayType: any;
    entry: any;
    linkDetails: any;
}) => {
    type: string;
    attrs: {
        'display-type': any;
        'entry-uid': any;
        'content-type-uid': any;
        locale: any;
        type: string;
        'class-name': string;
    };
    uid: any;
    children: {
        text: any;
    }[];
};
