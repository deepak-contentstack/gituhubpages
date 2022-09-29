export declare const getRangeBefore: (range: any, len: any) => {
    anchor: {
        path: import("slate").Path;
        offset: number;
    };
    focus: number;
};
export declare const getRangeAfter: (range: any, len: any) => {
    anchor: import("slate").BasePoint;
    focus: {
        offset: any;
        path: import("slate").Path;
    };
};
