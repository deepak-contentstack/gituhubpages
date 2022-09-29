/// <reference types="react" />
import './style.css';
export declare const handleClick: (e: any, editor: any, props?: {
    title: string;
    prefilled: boolean;
    type: any;
    attributes: {};
}) => void;
export declare const ShortcutOpenReferenceOverlay: (event: any, editor: any, format: any, registryObj: any, props?: {
    title: string;
    prefilled: boolean;
    attributes: {};
}) => void;
declare const ReferenceButton: (props: any) => JSX.Element;
export default ReferenceButton;
