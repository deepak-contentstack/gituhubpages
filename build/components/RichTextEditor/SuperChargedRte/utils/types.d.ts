import { Node, Ancestor, Editor as SlateEditor, Range } from 'slate';
export declare type JsonNode = (Ancestor | Node) & {
    attrs?: attrs;
    [key: string]: any;
};
export declare interface attrs {
    type: string;
    style: object;
    "redactor-attributes": object;
    [key: string]: unknown;
}
export interface Editor extends SlateEditor {
    savedSelection?: Range | null;
}
export declare type TScrteShortcutKey = string | {
    win: string;
    mac: string;
};
export declare interface IDropdownShortcutElementProps {
    shortcut: TScrteShortcutKey;
}
export declare interface IScrteShortcut {
    key: TScrteShortcutKey;
    callback?: (event: any, editor: any, format: any, registryObj: any) => {};
    isDisable?: (event: any, editor: any, format: any, registryObj: any) => Boolean;
    byKey: boolean;
}
