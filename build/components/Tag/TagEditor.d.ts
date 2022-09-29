import './TagEditor.css';
export declare type TagEditorProps = {
    tags: string[];
    label?: string;
    onChange: (tagToUpdate: string[]) => any;
    isSortable?: boolean;
    placeholder?: string;
    testId?: string;
    error?: boolean;
};
export declare const EditableTags: any;
declare const _default: any;
export default _default;
