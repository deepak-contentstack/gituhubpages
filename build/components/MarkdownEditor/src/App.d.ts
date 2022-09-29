/// <reference types="react" />
import './styles.module.css';
declare const VenusMarkdown: {
    ({ onBlur, onFocus, onMouseEnter, onMouseLeave, value, onChange, requestProps, height, required, onKeyDown, placeholder, disabled, ...props }: {
        [x: string]: any;
        onBlur: any;
        onFocus: any;
        onMouseEnter: any;
        onMouseLeave: any;
        value?: string;
        onChange: any;
        requestProps: any;
        height: any;
        required: any;
        onKeyDown: any;
        placeholder: any;
        disabled: any;
    }): JSX.Element;
    defaultProps: {
        onChange: () => void;
        value: string;
        onFocus: () => void;
        onBlur: () => void;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        placeholder: string;
        uid: any;
        required: boolean;
        height: string;
        requestProps: {};
        onKeyDown: () => void;
        disabled: boolean;
    };
};
export default VenusMarkdown;
