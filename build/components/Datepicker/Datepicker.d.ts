/// <reference types="react" />
import 'react-date-range/dist/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-date-range/dist/theme/default.css';
import './Datepicker.css';
interface IDatepicker {
    initialDate?: any;
    formatType?: string;
    startDate?: Date;
    endDate?: Date;
    onChange?: (data?: any, from?: string) => void;
    viewType?: string;
    noBorder?: boolean;
    selectsStart?: boolean;
    selectsEnd?: boolean;
    closeModal?: () => void;
    testId?: string;
}
declare const Datepicker: {
    (props: IDatepicker): JSX.Element;
    defaultProps: Partial<IDatepicker>;
};
export default Datepicker;
