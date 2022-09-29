/// <reference types="react" />
export declare const jsx: <S extends "text" | "selection" | "focus" | "element" | "anchor" | "cursor" | "editor" | "fragment">(tagName: S, attributes?: Object, ...children: any[]) => ReturnType<({
    anchor: typeof import("slate-hyperscript/dist/creators").createAnchor;
    cursor: typeof import("slate-hyperscript/dist/creators").createCursor;
    editor: (tagName: string, attributes: {
        [key: string]: any;
    }, children: any[]) => import("slate").BaseEditor;
    element: typeof import("slate-hyperscript/dist/creators").createElement;
    focus: typeof import("slate-hyperscript/dist/creators").createFocus;
    fragment: typeof import("slate-hyperscript/dist/creators").createFragment;
    selection: typeof import("slate-hyperscript/dist/creators").createSelection;
    text: typeof import("slate-hyperscript").createText;
} | {
    anchor: typeof import("slate-hyperscript/dist/creators").createAnchor;
    cursor: typeof import("slate-hyperscript/dist/creators").createCursor;
    editor: (tagName: string, attributes: {
        [key: string]: any;
    }, children: any[]) => import("slate").BaseEditor;
    element: typeof import("slate-hyperscript/dist/creators").createElement;
    focus: typeof import("slate-hyperscript/dist/creators").createFocus;
    fragment: typeof import("slate-hyperscript/dist/creators").createFragment;
    selection: typeof import("slate-hyperscript/dist/creators").createSelection;
    text: typeof import("slate-hyperscript").createText;
})[S]>;
export declare const BlockInput: JSX.Element;
export declare const BlockOutput: JSX.Element;
export declare const MarkInput: JSX.Element;
export declare const MarkOutput: JSX.Element;
export declare const isBlockActiveInput: JSX.Element;
