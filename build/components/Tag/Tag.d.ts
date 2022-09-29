/// <reference types="react" />
import './Tag.css';
declare type ITag = {
    tags: string[];
    isDisabled?: boolean;
    onChange?: (tagToUpdate: string[]) => void;
    label?: string;
    testId?: string;
};
export declare const Tag: {
    (props: ITag): JSX.Element;
    defaultProps: Partial<ITag>;
};
export declare const Tags: any;
declare const _default: any;
export default _default;
