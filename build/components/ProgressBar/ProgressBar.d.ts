/// <reference types="react" />
import './ProgressBar.css';
declare type ProgressBarProps = {
    percentage: number;
    color?: string;
    /**
     * Height of the Progress bar in pixel
     */
    height?: Number;
    /**
     * Border radius in pixel
     */
    borderRadius?: Number;
    type?: 'bar' | 'circle';
    stroke?: number;
    radius?: number;
    bgColor?: string;
};
declare const ProgressBar: {
    (props: ProgressBarProps): JSX.Element;
    defaultProps: Partial<ProgressBarProps>;
};
export default ProgressBar;
