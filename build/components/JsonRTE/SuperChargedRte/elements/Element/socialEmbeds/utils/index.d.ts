export declare const iframeHeightOnResizeStop: (src: any, ref: any, el: any) => void;
export declare const iFrameUrl: (url: any) => any;
export declare const blockQuoteUrl: (url: any) => any;
export declare const isValidUrl: (url: any) => {
    embed: string;
    type: string;
    url: any;
    id?: undefined;
} | {
    embed: string;
    id: any;
    type?: undefined;
    url?: undefined;
} | {
    embed: string;
    url: any;
    type?: undefined;
    id?: undefined;
};
export declare const changeIframeWidth: (src: any, width: any, ref: any) => void;
