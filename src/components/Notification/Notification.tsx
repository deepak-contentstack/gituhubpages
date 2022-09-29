import React from 'react'
import { toast, ToastContainer, Slide, Bounce, Flip, Zoom, cssTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import withDeprecatedProp from '../../utils/hooks/depricatedPropsHoc';
// import Icon from '../Icon2/Icon';
import './Notification.css'


toast.configure({});

type NotificationProps = {
    /**
    * Lets you display/hide the Progress bar.
    */
    hideProgressBar?: boolean
    /**
    * Changes the display position of the toast message.
    */
    position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"
    /**
    * Lets you close the toast message when clicked on.
    */
    closeOnClick?: boolean
    /**
    * Lets you close a toast message by dragging it.
    */
    draggable?: boolean
    /**
    * Lets you close a toast message after a time interval.
    */
    autoClose?: boolean | number
    /**
    * Lets you close the toast message on clicking the close button.
    */
    closeButton?: boolean
    /**
    * Provide the class names to be appended to this prop.
    */
    className?: string
    /**
    * Provide a transition to the toast message.
    */
    transition?: typeof Bounce | typeof Flip | typeof Zoom | typeof Slide | typeof cssTransition
}

type NotificationContent = {
    /**
    * Provide a custom component that can be passed as the props.
    */
    component?: React.ReactNode
    /**
    * Provide the text that can be passed to the toast message.
    */
    text?: string
    /**
    * Provide the description that can be passed to the toast message.
    */
    description?: string
    /**
    * Pass an object with the key as the error title and value as the description of it (Array). Multiple errors can be shown.
    */
    error?: Object
}

export type NotificationItemProps = {
    /**
    * Displays the text or the component you want to notify.
    */
    notificationContent: NotificationContent
    /**
    * Provides additional properties for a Toast notification.
    */
    notificationProps?: NotificationProps
    /**
    * Specify the type of notification you want to use.
    */
    type: string
    /**
    * Specify the action that you want to perform when a button is clicked on.
    */
    cta?: React.ReactNode
    /**
    * Pass an ID that can be used for testing purposes and is applied as a data attribute (data-test-id).
    */
    testId?: string
}

type JSXMaker = {
    title: string
    description: string
}

type ErrorJSXMaker = {
    title: string
    error: any
}

export const JSXMaker: React.FunctionComponent<JSXMaker> = props => {
    return (
        <>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </>
    )
}

export const ErrorJSXMaker: React.FunctionComponent<ErrorJSXMaker> = props => {
    return (
        <>
            {props.title || props.error.error_message}
            {props.error && props.error.errors && <div className="error-details">
                {Object.keys(props.error.errors).map((field, i) => {
                    return (<p key={i}>{`${field} - ${props.error.errors[field]}`}</p>);
                })}
            </div>}
        </>
    )
}

export const NotificationDom = ({ cta, displayToast, iconName, testId }: any) => {
    return (<div data-test-id={testId}>
        <div className="Toastify__toast-wrapper">
            {iconName && <div className="Toastify__toast-displayIcon"></div>}
            {displayToast && <div className="Toastify__toast-displayMessage">{displayToast}</div>}
        </div>
        {cta && <div className="Toastify__toast-actions">{cta}</div>}
    </div>
    )
}

const calculateAutoClose = (type, autoClose, error, title, description) => {
    const defaultValues = {
        charCountMin: 25,
        charCountMax: 60,
        timerMin: 3000,
        timerMed: 5000,
        timerMax: 7000
    }
    switch (type) {
        case "error":
            const errorMessageCharactersCount = error?.error_message?.length || title?.length || 0;
            const errorCloseTimer = autoClose || (errorMessageCharactersCount <= defaultValues.charCountMin ? defaultValues.timerMin : errorMessageCharactersCount <= defaultValues.charCountMax ? defaultValues.timerMed : defaultValues.timerMax);
            return errorCloseTimer;

        default:
            let maxLength: any;
            maxLength = title ? title.length : 0;
            maxLength += description ? description.length : 0;
            const closeTimer = autoClose || (maxLength <= defaultValues.charCountMin ? defaultValues.timerMin : maxLength <= defaultValues.charCountMax ? defaultValues.timerMed : defaultValues.timerMax);
            return closeTimer;
    }
}

const Notification = ({ notificationContent, notificationProps, type, cta, testId = 'cs-notification' }: NotificationItemProps) => {

    const props = notificationProps ? notificationProps : {}
    const position = props.position ? props.position : 'bottom-center'
    const hideProgressBar = props.hideProgressBar !== undefined ? props.hideProgressBar === true ? true : false : false
    const closeOnClick = props.closeOnClick !== undefined ? props.closeOnClick : false
    const draggable = props.draggable !== undefined ? props.draggable : true
    const autoClose: any = calculateAutoClose(type, props.autoClose, notificationContent.error, notificationContent.text, notificationContent.description)
    const closeButton = props.closeButton !== undefined ? props.closeButton : false
    const className = props.className ? props.className : null
    const SlideTransition = ["Default", "Custom", "shortcut"]
    const transition: any = props.transition !== undefined ? props.transition : SlideTransition.includes(type) ? Slide : Bounce
    let displayToast: any;
    let toastObj: any = {
        hideProgressBar: hideProgressBar,
        position: position,
        closeOnClick: closeOnClick,
        className: `${className || ''}`,
        transition: transition,
        closeButton: closeButton,
        draggable: draggable,
        autoClose: autoClose,
    }

    switch (true) {
        case notificationContent.hasOwnProperty("component") && notificationContent.component !== undefined: {
            displayToast = notificationContent.component;
            break;
        }
        case notificationContent.hasOwnProperty("description") && notificationContent.description !== undefined: {
            displayToast = <JSXMaker title={notificationContent.text} description={notificationContent.description} />
            break;
        }
        case notificationContent.hasOwnProperty("error") && notificationContent.error !== undefined: {
            displayToast = <ErrorJSXMaker title={notificationContent.text} error={notificationContent.error} />
            break;
        }
        default:
            displayToast = notificationContent.text
            break;
    }


    switch (type) {
        case 'message':
            return (
                <>
                    {toast.info(<NotificationDom iconName="Info" displayToast={displayToast} cta={cta} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        case 'success':
            return (
                <>
                    {toast.success(<NotificationDom iconName="Success" displayToast={displayToast} cta={cta} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        case 'warning':
            return (
                <>
                    {toast.warning(<NotificationDom iconName="Warning" displayToast={displayToast} cta={cta} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        case 'error':
            return (
                <>
                    {toast.error(<NotificationDom iconName="Error" displayToast={displayToast} cta={cta} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        case 'dark':
            toastObj.className += ' dark'
            return (
                <>
                    {toast(<NotificationDom displayToast={displayToast} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>

            )
        case 'default':
            return (
                <>
                    {toast(<NotificationDom displayToast={displayToast} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        case 'shortcut':
            toastObj.className += ' shortcut'
            return (
                <>
                    {toast(<NotificationDom displayToast={displayToast} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        case 'custom':
            toastObj.className += ' custom'
            return (
                <>
                    {toast(<NotificationDom displayToast={displayToast} testId={testId} />, toastObj)}
                    <ToastContainer />
                </>
            )
        default:
            break;
    }
}

export default withDeprecatedProp({ type: 'method', callback: Notification }, { 'displayContent': 'notificationContent', 'notifyProps': 'notificationProps' })