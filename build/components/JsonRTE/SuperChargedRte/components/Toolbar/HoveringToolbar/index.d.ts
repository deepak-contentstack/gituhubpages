import React from 'react';
export declare interface HoveringToolbarProps extends React.PropsWithChildren<object> {
    customToolbarComponents: any;
    contentStack: boolean;
    toolbarMode: any;
    scrollRef: any;
    pluginsLen: any;
}
export declare const HoveringToolbar: React.MemoExoticComponent<(props: HoveringToolbarProps) => JSX.Element>;
