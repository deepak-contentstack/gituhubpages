import React from 'react';
import './SideBarWindow.css';
declare type IArray = {
    id: string;
    tabLabel?: string;
    tabIcon?: React.ReactNode;
    hasNotification?: Boolean;
    notifTabIcon?: React.ReactNode;
    data?: React.ReactNode;
    windowTitle?: string | React.ReactNode;
    width?: string;
    discussionPanelClassName?: string;
    disableSidebar?: boolean;
    enableInEntryCreatePage?: boolean;
    isIndependentlyActive?: boolean;
    onClick: () => void;
};
interface SideBarWindowProps {
    /**
     * An array of tab info objects(id, tabLabel, tabIcon, data)
     */
    tabsInfo?: Array<IArray>;
    windowData?: {
        tabLabel?: string;
        tabIcon?: React.ReactNode;
        data?: React.ReactNode;
        windowTitle?: string | React.ReactNode;
    };
    isInsideEntryCreatePage?: boolean;
    onSelect?: (data?: any) => void;
    onClose?: (data?: any) => void;
    borderOpen?: boolean;
    borderClose?: boolean;
    isResizable?: boolean;
}
interface WindowContentProps {
    data?: React.ReactNode;
    windowTitle?: string | React.ReactNode;
    width?: string;
    discussionPanelClassName?: string;
    isResizable?: boolean;
}
export declare const GetWindowContent: (props: WindowContentProps) => JSX.Element;
declare const SideBarWindow: {
    (props: SideBarWindowProps): JSX.Element;
    defaultProps: Partial<SideBarWindowProps>;
};
export default SideBarWindow;
