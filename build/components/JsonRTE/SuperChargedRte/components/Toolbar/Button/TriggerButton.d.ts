/// <reference types="react" />
export declare interface TriggerButtonProps {
    value: any;
    toolbarType: any;
    format: any;
    shortcut: any;
    title?: string;
}
export declare const TriggerButton: ({ value, toolbarType, format, shortcut }: Partial<TriggerButtonProps>) => JSX.Element;
export declare const TriggerDropdownButton: ({ value, format }: {
    value: any;
    format: any;
}) => JSX.Element;
