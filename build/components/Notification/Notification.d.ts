import React from 'react';
import { Slide, Bounce, Flip, Zoom, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notification.css';
declare type NotificationProps = {
    /**
    * Lets you display/hide the Progress bar.
    */
    hideProgressBar?: boolean;
    /**
    * Changes the display position of the toast message.
    */
    position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
    /**
    * Lets you close the toast message when clicked on.
    */
    closeOnClick?: boolean;
    /**
    * Lets you close a toast message by dragging it.
    */
    draggable?: boolean;
    /**
    * Lets you close a toast message after a time interval.
    */
    autoClose?: boolean | number;
    /**
    * Lets you close the toast message on clicking the close button.
    */
    closeButton?: boolean;
    /**
    * Provide the class names to be appended to this prop.
    */
    className?: string;
    /**
    * Provide a transition to the toast message.
    */
    transition?: typeof Bounce | typeof Flip | typeof Zoom | typeof Slide | typeof cssTransition;
};
declare type NotificationContent = {
    /**
    * Provide a custom component that can be passed as the props.
    */
    component?: React.ReactNode;
    /**
    * Provide the text that can be passed to the toast message.
    */
    text?: string;
    /**
    * Provide the description that can be passed to the toast message.
    */
    description?: string;
    /**
    * Pass an object with the key as the error title and value as the description of it (Array). Multiple errors can be shown.
    */
    error?: Object;
};
export declare type NotificationItemProps = {
    /**
    * Displays the text or the component you want to notify.
    */
    notificationContent: NotificationContent;
    /**
    * Provides additional properties for a Toast notification.
    */
    notificationProps?: NotificationProps;
    /**
    * Specify the type of notification you want to use.
    */
    type: string;
    /**
    * Specify the action that you want to perform when a button is clicked on.
    */
    cta?: React.ReactNode;
    /**
    * Pass an ID that can be used for testing purposes and is applied as a data attribute (data-test-id).
    */
    testId?: string;
};
declare type JSXMaker = {
    title: string;
    description: string;
};
declare type ErrorJSXMaker = {
    title: string;
    error: any;
};
export declare const JSXMaker: React.FunctionComponent<JSXMaker>;
export declare const ErrorJSXMaker: React.FunctionComponent<ErrorJSXMaker>;
export declare const NotificationDom: ({ cta, displayToast, iconName, testId }: any) => JSX.Element;
declare const _default: any;
export default _default;
