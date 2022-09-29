/// <reference types="react" />
export declare const Embeds: (props: any) => JSX.Element;
export declare const findEmbedType: (url: any) => {
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
