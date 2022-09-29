import React from 'react';
import './TagAsSelect.css';
interface ITagList {
    label: string | React.ReactNode;
    value?: string;
}
interface ITagAsSelect {
    tags: Array<ITagList>;
    updateTag: (tagToUpdate: string[]) => void;
    openModalCb: (callback: any) => any;
    showCount: boolean;
    showEmptyState: boolean;
    placeholder?: string;
    showSingleItem?: boolean;
    error?: Boolean;
    width?: string;
    seeMoreCount?: number;
    selectText?: string;
    tagName?: string;
    showTooltip?: boolean;
    maxCount?: number;
}
declare function TagAsSelect(props: ITagAsSelect): JSX.Element;
declare namespace TagAsSelect {
    var defaultProps: Partial<ITagAsSelect>;
}
export default TagAsSelect;
