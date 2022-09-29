export declare const getStringFromJson: (value: any) => any;
export declare const handleToken: (tokens: any, properties?: {}) => any[];
export declare const getVariableFromToken: (token: any) => any;
export declare const getJsonFromString: (stringVal: any) => {
    type: string;
    children: any;
}[];
export declare const getVariables: (value: any) => {
    variables: {};
    jsonStringWithoutVariables: any;
};
export declare const getHtmlFromJsonTemp: (value: any) => {
    type: string;
    children: any[];
}[];
export declare const getHtmlFromJson: (value: any) => {
    type: string;
    children: any[];
}[];
