/// <reference types="react" />
export declare const allElements: (registry?: any) => any[][];
export declare const allCategory: (category?: {}) => [string, unknown][];
export declare const toolbarFilter: (elements?: any[], toolbarType?: any, contentStack?: boolean, toolbarMode?: string, customToolbarComponents?: {}, registry?: any) => any[];
export declare const toolbarElements: ({
    registry: string;
    categories: any[];
    elements: any[][];
    DefaultComponent: () => void;
    DefaultMenuComponent?: undefined;
} | {
    registry: string;
    categories: {
        TEXT_STYLE_SEE_MORE: {
            id: string;
            title: string;
            rootCategory: boolean;
            openOnFullScreen: boolean;
            toolbar: {
                inHoveringToolbar: boolean;
            };
            icon: JSX.Element;
        };
        TEXT_STYLE: {
            id: string;
            title: string;
            rootCategory: boolean;
            subCategories: any[];
            seeMore: string;
            spread: {
                inHoveringToolbar: boolean;
            };
        };
    };
    DefaultComponent: (props: any) => JSX.Element;
    DefaultMenuComponent: (props: any) => JSX.Element;
    elements?: undefined;
} | {
    registry: string;
    categories: {
        TEXT_FORMAT: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        CONTENTSTACK_REFERENCE: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inMainToolbar: boolean;
                inHoveringToolbar: boolean;
            };
        };
        LINK_DROPDOWN: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inMainToolbar: boolean;
                inHoveringToolbar: boolean;
            };
        };
        ALIGNMENT_DROPDOWN: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        LIST_ITEMS: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        TABLE_ACTION: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        IMAGE: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        VIDEO: {
            id: string;
            rootCategory: boolean;
            isButton: boolean;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        SOCIAL_EMBEDS: {
            id: string;
            rootCategory: boolean;
            isButton: boolean;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        MULTIMEDIA_SEE_MORE: {
            id: string;
            title: string;
            rootCategory: boolean;
            icon: JSX.Element;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
        ALIGNMENT_AND_LIST: {
            id: string;
            title: string;
            rootCategory: boolean;
            subCategories: string[];
            seeMore: any;
        };
        MULTIMEDIA: {
            id: string;
            title: string;
            rootCategory: boolean;
            subCategories: string[];
            seeMore: string;
            toolbar: {
                inHoveringToolbar: boolean;
            };
        };
    };
    DefaultComponent: (props: any) => JSX.Element;
    DefaultMenuComponent: (props: any) => JSX.Element;
    elements?: undefined;
})[];
