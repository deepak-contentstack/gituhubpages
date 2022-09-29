import { MouseEventHandler, RefObject } from 'react';
import './ToggleSwitch.css';
export declare type ToggleSwitchProps = {
    /**
     * Used to identify the particular switch. Must be unique.
    */
    id?: string;
    /**
     * The name attribute of the element.
    */
    name?: string;
    /**
     * Boolean that decides whether the toggle switch should be on or off
    */
    checked?: boolean;
    /**
     * Boolean that decides whether toggle should be on or off upon rendering
    */
    defaultChecked?: boolean;
    /**
     * Used to get reference (ref) of the element in React.
    */
    inputRef?: RefObject<HTMLInputElement>;
    /**
     * Action that you wish to perform when the switch is turned on or off.
    */
    onChange?: any;
    /**
     * Action that you wish to perform when the user clicks on the switch.
    */
    onClick?: MouseEventHandler;
    /**
     * Boolean that, if true, locks the switch in the current state. Use with `checked` to keep it turned on mandatorily.
    */
    disabled?: boolean;
    /**
     * Set tab index for the element when user is navigating using the tab key.
    */
    tabIndex?: any;
    /**
     * Set the label for the toggle switch
    */
    label?: string;
    /**
     * Set the label position for the toggle switch. Defaults to `right`
    */
    labelPosition?: "left" | "right" | "top" | "bottom";
    /**
     * Set the label color for the toggle switch. Defaults to `primary`
    */
    labelColor?: "primary" | "secondary";
    testId?: string;
};
declare const ToggleSwitch: {
    (props: ToggleSwitchProps): JSX.Element;
    defaultProps: {
        testId: string;
    };
};
export default ToggleSwitch;
