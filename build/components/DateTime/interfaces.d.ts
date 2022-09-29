/// <reference types="react" />
interface IDateInput {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (data?: any) => void;
    component?: React.ReactNode;
}
interface IDatePicker {
    initialDate?: string;
    formatType?: string;
    startDate?: string;
    endDate?: string;
    inputDisabled?: boolean;
    component?: React.ReactNode;
    onChange?: (data?: any, from?: string) => void;
    placeholder?: string;
    dateType?: string;
}
interface IDateRange {
    fromDate?: string;
    toDate?: string;
    onCancel?: () => void;
    onChange?: (data?: any) => void;
    component?: React.ReactNode;
}
interface IDate_Time {
    date?: string;
    dateComponent?: React.ReactNode;
    timeComponent?: React.ReactNode;
    datePlaceholder?: string;
    timePlaceholder?: string;
    startDate?: string;
    endDate?: string;
    dateFormatType?: string;
    dateInputDisabled?: boolean;
    timeInputDisabled?: boolean;
    onChange?: (data?: any) => void;
    component?: React.ReactNode;
    type?: string;
    inputDisabled?: boolean;
    autoFocus?: boolean;
}
interface ITime {
    onChange?: (data?: any) => void;
}
interface ITimeSlider {
    name?: string;
    value?: string | number;
    onClick?: (data?: any) => void;
    min?: number;
    max?: number;
}
interface ITimePicker {
    initialDate?: string;
    component?: React.ReactNode;
    onChange?: (data?: any, from?: any) => void;
    inputDisabled?: boolean;
    placeholder?: string;
    viewType?: string;
    onDone?: (data?: any, dataObj?: any) => void;
    onCancel?: (data?: any) => void;
    closeModal?: () => void;
    hasVisitorTimezoneCheckBox?: boolean;
    useVisitorTimezone?: boolean;
    useVisitorTimezoneOnChange?: (useVisitorTimezone?: boolean) => void;
}
interface ITimeZoneDST {
    onChange?: (data?: any) => void;
}
interface ITimeZoneStandard {
    zone?: string;
    dstZone?: any;
    onChange?: (val?: any, obj?: any) => void;
    disableTzDropdown?: boolean;
}
export { IDate_Time, IDateInput, IDatePicker, IDateRange, ITime, ITimePicker, ITimeSlider, ITimeZoneDST, ITimeZoneStandard };
