import React from 'react';
import './DateRangePicker.css';
interface IDateRangePicker {
    fromDate?: string;
    toDate?: string;
    onChange?: (data?: any) => void;
    onCancel?: () => void;
    onSave?: (data?: any) => void;
    minStartDate?: any;
    maxEndDate?: any;
    testId?: string;
    header?: React.ReactNode;
}
declare const DateRangePicker: (props: IDateRangePicker) => JSX.Element;
export default DateRangePicker;
