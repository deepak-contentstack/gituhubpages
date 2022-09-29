export declare const getSuggestedSyntaxes: (option?: string) => {
    label: string;
    value: string;
    info: string;
    uid: string;
}[];
export declare const getSuggestedSyntaxByUid: (option?: string) => {
    _text_assets: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    filename: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    file_size: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _publish_environment: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    tags: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    title: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _content_type_uid: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    url: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _published_at: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _published_by: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    created_at: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    created_by: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    updated_at: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    updated_by: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    uid: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
} | {
    _text_entries: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    uid: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _content_type_uid: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    locale: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _publish_environment: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    created_by: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    created_at: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    tags: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _published_at: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _published_by: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    updated_at: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    updated_by: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
    _workflow: {
        label: string;
        value: string;
        info: string;
        uid: string;
    };
};
export declare const getRecentUsedFieldsOrder: ({ queryArray, suggestedSyntaxes, selectedModule, storedRecentUsedFields, action }: {
    queryArray: any;
    suggestedSyntaxes: any;
    selectedModule: any;
    storedRecentUsedFields?: any[];
    action?: string;
}) => any;
export declare const autoSuggest: (data: any) => Promise<any>;
export declare const updateCurrentSearch: (data: any) => any;
export declare const getSuggestionsLength: (suggestions: any) => number;
export declare const getSuggestionsDataByIndex: (suggestions: any, selectedIndex: any) => {
    queryType: any;
    nextQuery: any;
    selectedOpt: any;
    type: any;
};
export declare const handleDataFetch: (data: any) => Promise<any>;
export declare const queryBuilder: (data: any) => {
    queryObject: any;
    search: string;
};
export declare const basicQueryParser: (data: any) => Promise<any[]>;
export declare const advanceQueryParser: ({ query, selectedModule, fetchData, cache }: {
    query: any;
    selectedModule: any;
    fetchData: any;
    cache?: any;
}) => Promise<any[][]>;
export declare const getQueryTypeAndParseQuery: (data: any) => Promise<{
    queryType: string;
    parsedQueryArray: any[];
}>;
export declare const numericTypes: string[];
export declare const textTypes: string[];
export declare const dateTypes: string[];
export declare const notify: (message: any, type?: 'warning' | 'error' | 'success') => void;
export declare const validateSelectedOption: ({ queryType, nextQuery, selectedOpt, type, queryArray, errorContent, action }: any) => {
    isValid: boolean;
    errorMessage: any;
};
export declare const maxSuggetsedItemsCount: {
    entries: number;
    assets: number;
};
export declare const maxSavedSearchesCount = 5;
export declare const getOperatorTextContent: ({ operatorKey, textContent, queryType }: {
    operatorKey: any;
    textContent: any;
    queryType: any;
}) => any;
