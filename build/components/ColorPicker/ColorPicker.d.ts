import { Component } from 'react';
import './ColorPicker.css';
export declare type ColorPickerProps = {
    onChange?: Function;
    value: string;
    testId?: string;
    openColorPicker?: boolean;
    onClose?: Function;
};
declare class ColorPicker extends Component<ColorPickerProps> {
    static propTypes: any;
    static defaultProps: {
        testId: string;
        value: string;
    };
    state: {
        displayColorPicker: boolean;
        color: string;
        tempColor: string;
    };
    handleClick: () => void;
    handleClose: () => void;
    handleChange: (color: any) => void;
    handleChoose: () => void;
    presetColors: {
        color: string;
        title: string;
    }[];
    colorObj: {
        "#fdbab1": string;
        "#fa6e33": string;
        "#ffd600": string;
        "#52c0ff": string;
        "#01977c": string;
        "#6c5ce7": string;
        "#002c53": string;
    };
    render(): JSX.Element;
}
export default ColorPicker;
