import './Stepper.css';
import { FunctionComponent } from 'react';
export declare enum StepStatus {
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    DISABLED = "DISABLED"
}
export declare type stepsArray = {
    id: string;
    title?: JSX.Element | string | Element;
    data?: JSX.Element | Element | FunctionComponent;
    status?: StepStatus;
};
export declare type stepperProps = {
    steps: Array<stepsArray>;
    className?: string;
    emptyStateMsg?: string | JSX.Element;
    stepComponentProps?: any;
    hideTabView?: boolean;
    stepContentClassName?: string;
    stepTitleClassName?: string;
};
declare const Stepper: {
    (props: stepperProps): JSX.Element;
    defaultProps: Partial<stepperProps>;
};
export declare const VerticalStepper: (props: stepperProps) => JSX.Element;
export default Stepper;
