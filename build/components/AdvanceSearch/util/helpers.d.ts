export declare const searchInStaticData: (allQueryData: any, inputValue: any) => {
    data: any;
    count: any;
};
export declare const getFileSizes: ({ inputValue }: {
    inputValue: any;
}) => {
    label: string;
    value: number;
    enteredValue: any;
}[];
export declare const getFileSizeLabel: (value: any) => string;
export declare const queryBuilderEntries: ({ queryArray }: {
    queryArray: any;
}) => {
    queryObject: any;
    search: string;
};
export declare const getLocalizedOptions: ({ languages, selectedLanguageValue }: {
    languages: any;
    selectedLanguageValue: any;
}) => {
    label: string;
    value: string;
}[];
export declare const queryParserEntries: (queryObject: any, search_text: any, fetchData: any, cacheResponse?: any) => Promise<any[]>;
export declare const setCounterForAdvanceQuery: (queryArray: any, counter: any) => any;
export declare const getQueryType: (queryString: any, selectedModule: any) => string;
export declare const validateBasicQuery: (queryArray: any, selectedModule: any) => {
    isValid: boolean;
    errorMessage: string;
};
export declare const isEmpty: (value: any) => boolean;
export declare const isEmptyFilters: (filters: any) => any;
export declare const truncate: (input?: string, maxLen?: number) => {
    truncatedText: string;
    isOverflow: boolean;
};
export declare const getPopulatedQueryUids: (queryObjectArray: any[]) => {
    users: any[];
    contentTypes: any[];
    languages: any[];
    types: any[];
    workflowStages?: undefined;
} | {
    users: any[];
    contentTypes: any[];
    languages: any[];
    types: any[];
    workflowStages: any[];
};
export declare const fetchDataByValue: ({ users, types, contentTypes, languages, workflowStages, fetchData }: {
    users?: any[];
    types?: any[];
    contentTypes?: any[];
    languages?: any[];
    workflowStages?: any[];
    fetchData: any;
}) => Promise<{
    userResponse: any;
    typesResponse: any;
    ctResponse: any;
    langResponse: any;
    workflowStagesResponse: any;
}>;
export declare const fetchDataForQuery: (rawQueryObjectArray: any, fetchData: any) => Promise<{
    userResponse: any;
    typesResponse: any;
    ctResponse: any;
    langResponse: any;
    workflowStagesResponse: any;
}>;
export declare const parseSafeJSON: (json: any) => any;
export declare const groupEntriesByCt: (response: any) => any[];
export declare const getOS: () => any;
