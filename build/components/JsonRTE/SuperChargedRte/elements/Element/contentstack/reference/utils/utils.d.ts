export declare const tableHead: ({
    Header: string;
    accessor: string;
    id: string;
    default: boolean;
    disableSortBy?: undefined;
} | {
    Header: string;
    accessor: string;
    id: string;
    default: boolean;
    disableSortBy: boolean;
})[];
export declare const getEmbedLinkDetails: (editor: any) => {
    href: string;
    inNewTab: boolean;
    text: string;
    isActive: boolean;
};
export declare const updateLink: (editor: any, state: any, singleSelectedRowId: any, contentTypeUid: any) => void;
export declare const updateAssetLink: (editor: any, state: any) => void;
