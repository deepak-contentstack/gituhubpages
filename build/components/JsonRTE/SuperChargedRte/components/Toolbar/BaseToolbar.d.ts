import React from 'react';
import './style.css';
export declare interface BaseToolbarProps {
    toolbarType: any;
    contentStack: boolean;
    toolbarMode: any;
    customToolbarComponents: any;
}
export declare const BaseToolbar: React.MemoExoticComponent<(props: BaseToolbarProps) => JSX.Element>;
