/// <reference types="react" />
export declare const SlashElement: (editor: any) => {
    onKeyDownSlash: ({ event, dispatch }: any) => void;
    onChangeSlash: (editor: any, scrollRef: any) => void;
    index: number;
    search: string;
    target: any;
    choice: any;
    setChoice: import("react").Dispatch<any>;
    handleSet: (editor: any, format: any) => void;
    setTarget: import("react").Dispatch<any>;
    chars: any[];
    setstartingPoint: import("react").Dispatch<any>;
};
