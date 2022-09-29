import React from 'react';
import { HoveringToolbar } from './HoveringToolbar';
export declare interface MainToolbarProps {
    contentStack: boolean;
    customToolbarComponents: any;
    toolbarMode: any;
    templateregistrycondition: any;
    className: any;
    fieldName: string;
    editorRef: any;
}
declare const MainToolbar: React.MemoExoticComponent<(props: Partial<MainToolbarProps>) => JSX.Element>;
export { MainToolbar, HoveringToolbar };
