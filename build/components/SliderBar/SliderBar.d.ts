/// <reference types="react" />
import './SliderBar.css';
interface SliderProps {
    defaultValue?: number;
    start?: number;
    end?: number;
    step?: number;
    fill?: String;
    background?: String;
    /**
     * An optional function to be called when form is saved
     **/
    onChange?: (arg?: any) => void;
}
declare const SliderBar: {
    (props: SliderProps): JSX.Element;
    defaultProps: Partial<SliderProps>;
};
export default SliderBar;
