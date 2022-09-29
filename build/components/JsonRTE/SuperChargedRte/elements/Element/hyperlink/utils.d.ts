export declare const isLinkActive: (editor: any) => boolean;
export declare const getLinkDetail: (editor: any, selection: any) => {
    url: string;
    text: string;
    inNewTab: boolean;
};
export declare const unwrapLink: (editor: any) => void;
export declare const wrapLink: (editor?: any, url?: any, linkText?: any, newTab?: boolean) => void;
