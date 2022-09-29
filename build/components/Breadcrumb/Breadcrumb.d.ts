import React from 'react';
import './Breadcrumb.css';
interface IBreadcrumbItem {
    name: React.ReactNode;
    action?: (breadcrumbItem: any) => void;
    path: string;
}
interface IProps {
    maxWidth?: number;
    tooltipPosition?: string;
    testId?: string;
    breadcrumbItems: Array<IBreadcrumbItem>;
}
declare const Breadcrumb: {
    (props: IProps): JSX.Element;
    defaultProps: {
        maxWidth: number;
        tooltipPosition: string;
        testId: string;
    };
};
declare let withRouterBreadcrumb: any;
export default Breadcrumb;
export { withRouterBreadcrumb };
