/// <reference types="react" />
import './DateLabel.css';
export declare type dateLabelProps = {
    date: any;
    className?: string;
    type?: 'tiny' | 'small' | 'medium';
    dateVal?: any;
};
declare const DateLabel: {
    (props: dateLabelProps): JSX.Element;
    defaultProps: Partial<dateLabelProps>;
};
export default DateLabel;
