import React from 'react';
import './Tabs.css';
declare type tabInfoArray = {
    id: string;
    title?: string;
    componentTitle?: React.ReactNode;
    componentData?: React.ReactNode;
    data?: string;
    callBack?: Function | undefined;
    disabled?: boolean;
};
export declare type tabProps = {
    tabInfo: Array<tabInfoArray>;
    /**
   * A Tab can be a controlled component
   */
    activeTab?: string | undefined;
    type?: 'primary' | 'secondary';
    className?: string;
    testId?: string;
};
declare const Tabs: {
    (props: tabProps): JSX.Element;
    defaultProps: Partial<tabProps>;
};
export default Tabs;
