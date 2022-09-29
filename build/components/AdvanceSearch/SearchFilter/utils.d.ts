export declare let entriesfilters: ({
    key: {
        label: string;
        value: string;
    };
    value: {};
    operator: {
        name: string;
        icon: string;
        value: string;
    };
    currentQuery: string;
    queryType: string;
    defaultOperator: {
        name: string;
        icon: string;
        value: string;
    };
    isMulti?: undefined;
    type?: undefined;
    uid: number;
} | {
    key: {
        label: string;
        value: string;
    };
    value: {};
    operator: {
        name: string;
        icon: string;
        value: string;
    };
    currentQuery: string;
    defaultOperator: {
        name: string;
        icon: string;
        value: string;
    };
    queryType?: undefined;
    isMulti?: undefined;
    type?: undefined;
    uid: number;
} | {
    key: {
        label: string;
        value: string;
    };
    value: any[];
    operator: {
        name: string;
        icon: string;
        value: string;
    };
    isMulti: boolean;
    currentQuery: string;
    defaultOperator: {
        name: string;
        icon: string;
        value: string;
    };
    queryType?: undefined;
    type?: undefined;
    uid: number;
} | {
    key: {
        label: string;
        value: string;
    };
    value: any[];
    operator: {
        name: string;
        icon: string;
        value: string;
    };
    isMulti: boolean;
    currentQuery: string;
    type: string;
    defaultOperator: {
        name: string;
        icon: string;
        value: string;
    };
    queryType?: undefined;
    uid: number;
} | {
    key: {
        label: string;
        value: string;
    };
    value: string;
    operator: {
        name: string;
        icon: string;
        value: string;
    };
    isText: boolean;
    isMulti: boolean;
    type: string;
    defaultOperator: {
        name: string;
        icon: string;
        value: string;
    };
    currentQuery?: undefined;
    uid: number;
} | {
    key: {
        label: string;
        value: string;
    };
    value: {};
    operator: {
        name: string;
        icon: string;
        value: string;
    };
    isMulti: boolean;
    currentQuery: string;
    defaultOperator: {
        name: string;
        icon: string;
        value: string;
    };
    isText?: undefined;
    type?: undefined;
    uid: number;
})[];
export declare const fetchFilterData: ({ skip, limit, inputValue, fetchData, currentQuery, isText, filters, languages }: any) => Promise<any>;
export declare const filterQueryObjectBuilder: ({ filters, selectedModuleVal }: {
    filters: any;
    selectedModuleVal: any;
}) => {
    queryObject: {};
    search: string;
} | {
    search: string;
    queryObject?: undefined;
};
export declare const getFiltersBySelectedOption: (selectedOption: any) => any;
export declare const getAdvanceQueryByFilters: (filters: any) => {
    queryType: string;
    root: boolean;
    queryArray: any[];
    children: any[];
}[];
export declare const checkSearchFilterValue: (filters: any) => boolean;
