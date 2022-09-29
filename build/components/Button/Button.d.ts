import React, { Component, CSSProperties, MouseEventHandler } from 'react';
import { IconProps } from '../Icon2';
import './Button.css';
declare const defaultProps: {
    isFullWidth: boolean;
    isRounded: boolean;
    disabled: boolean;
    buttonType: string;
    type: string;
    isLoading: boolean;
    testId: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type ButtonProps = {
    /**
     * Class names to be appended to the className prop of the Button Component
     */
    className?: string;
    children?: React.ReactNode;
    /**
     * Pass the icon that want to add in button
     */
    icon?: any;
    /**
     * If you want to show only icon, set the param to ‘true’
     */
    onlyIcon?: boolean;
    /**
     * Determines the alignment of the icon
     */
    iconAlignment?: 'left' | 'right';
    /**
     * Pass additional props for icon
     */
    iconProps?: Partial<IconProps>;
    /**
     * Pass an id to the button
     */
    id?: string;
    /**
     * Determine the type of button you want to use
     */
    buttonType?: 'primary' | 'secondary' | 'tertiary' | 'tertiary-outline' | 'outline' | 'success' | 'danger' | 'warning' | 'light' | 'control' | 'delete' | 'bulk-delete' | 'outline-delete' | 'outline-success' | 'white';
    /**
     * Determine the size of the button: small or large
     */
    size?: 'small' | 'large';
    /**
     * If button covers full width
     */
    isFullWidth?: boolean;
    /**
     * If button is rounded
     */
    isRounded?: boolean;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
    /**
     * Used to set the button in the loading state
     */
    isLoading?: boolean;
    /**
     * Determines the color of the loading animation you want to display
     */
    loadingColor?: string;
    /**
     * Action that you want to perform when a button is clicked
     */
    onClick?: MouseEventHandler;
    /**
     * Determines whether button is disabled or not
     */
    disabled?: boolean;
    /**
     * If you want a button as a link, provide the details in href.
     */
    href?: string;
    /**
     * Type of button action (button, submit,reset)
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Pass any CSS properties for the button
     */
    style?: CSSProperties;
} & Partial<DefaultProps>;
export declare class Button extends Component<ButtonProps> {
    static propTypes: any;
    static defaultProps: {
        isFullWidth: boolean;
        isRounded: boolean;
        disabled: boolean;
        buttonType: string;
        type: string;
        isLoading: boolean;
        testId: string;
    };
    render(): JSX.Element;
}
declare const _default: any;
export default _default;
