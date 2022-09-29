import React, { MouseEventHandler } from 'react';
import './PageHeader.css';
interface IHeaderTitle {
    label: string | React.ReactNode;
    component?: React.ReactNode;
    info?: string;
    editable?: boolean;
}
interface IHeaderAction {
    label: string | React.ReactNode;
    onClick?: MouseEventHandler;
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'muted' | 'light' | 'dark' | 'link' | 'sidebar';
}
interface IPageHeader {
    title?: IHeaderTitle;
    content?: string | React.ReactNode;
    actions?: Array<IHeaderAction>;
    className?: string;
    component?: React.ReactNode;
}
declare const PageHeader: React.FunctionComponent<IPageHeader>;
export default PageHeader;
