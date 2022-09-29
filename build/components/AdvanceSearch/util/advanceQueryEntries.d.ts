export declare const inTextInput: {
    group: string;
    queryType: string;
    type: string;
    options: any[];
};
export declare const inSelect: {
    group: string;
    queryType: string;
    type: string;
    options: any[];
};
export declare const numberLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: any[];
};
export declare const inNumber: {
    group: string;
    queryType: string;
    type: string;
    options: any[];
};
export declare const booleanLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: any[];
};
export declare const inBoolean: {
    group: string;
    queryType: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const fileLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: any[];
};
export declare const inFile: {
    group: string;
    queryType: string;
    type: string;
    options: any[];
};
export declare const linkLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: any[];
};
export declare const referenceLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: any[];
};
export declare const inReference: {
    group: string;
    queryType: string;
    type: string;
    options: any[];
};
export declare const getCtUserDefinedFields: (schema: any[], userDefinedFields: any, parentUid: any, parentDisplayName: any) => any;
export declare const updateSelectedContentTypeStatus: (queryObject: any, type: any) => string;
export declare const validateAdvanceQuery: (advanceQueryArray: any, errorObject: any) => void;
export declare const buildQueryObjectForAdvCase: (advanceQueryArray: any, selectedModule: any) => any;
export declare const advanceQueryParserForEntries: (queryObject: any, cacheResponse: any, fetchData: any, selectedCtStatus?: any, isRoot?: boolean) => Promise<any>;
export declare const formatOlduiEntriesQueries: (query: any, selectedModule: any) => any;
