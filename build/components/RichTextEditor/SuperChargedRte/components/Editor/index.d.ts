/// <reference types="react" />
export declare interface EditorElementProps {
    customToolbarComponents?: any;
    value: any;
    hideToolbarOnBlur?: boolean;
    onChange?: any;
    toolbar: boolean;
    hoveringToolbar: boolean;
    contentStack: boolean;
    toolbarMode: any;
    templateRegistryCondition: any;
    requestProps: any;
    onFocus: any;
    onBlur: any;
    onMouseEnter: any;
    onMouseLeave: any;
    className: any;
    required: boolean;
    allowExtraTags: object;
    customPasteOptions: object;
    contentTypeNameMap: object;
    disabled: boolean;
    fieldName: string;
}
declare const EditorElement: {
    ({ customToolbarComponents, value, hideToolbarOnBlur, onChange, toolbar, hoveringToolbar, contentStack, toolbarMode, templateRegistryCondition, allowExtraTags, customPasteOptions, contentTypeNameMap, disabled, fieldName, ...props }: EditorElementProps): JSX.Element;
    defaultProps: {
        onChange: () => void;
        value: {
            type: string;
            children: {
                type: string;
                attrs: {};
                children: {
                    text: string;
                }[];
            }[];
        }[];
        requestProps: {};
        onFocus: () => void;
        onBlur: () => void;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        placeholder: string;
        uid: any;
        required: boolean;
        allowExtraTags: {};
        customPasteOptions: {};
        contentTypeNameMap: {};
        disabled: boolean;
    };
};
export default EditorElement;
