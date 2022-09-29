/**
 * Syntax QueryTypes | Ops
 * 1. Created At  | compare
 * 2. Created By | compare
 * 3. File Name | stringOps
 * 4. File Size | compare
 * 5. Published At | compare
 * 6. Published By | compare
 * 7. Published Enviornment | basicOperators
 * 8. Tags | basicOperators
 * 9. Title | stringOps
 * 10. Type | basicOperators
 * 11. Updated At | compare
 * 12. Updated By | basicOperators
 * 13. URL | stringops
 */
export declare const suggestedSyntaxes: {
    label: string;
    value: string;
    info: string;
    uid: string;
}[];
export declare const suggestedSyntaxByUid: {
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
};
export declare const inAssets: {
    group: string;
    queryType: string;
    type: string;
    nextQuery: string;
    options: any[];
};
export declare const textLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const uidLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const fileNameLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const fileSizeLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const urlLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const titleLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const suggestForAssets: ({ queryType, fetchData, queryCase, inputValue, skip, limit, currentSearch, action }: {
    queryType: any;
    fetchData: any;
    queryCase: any;
    inputValue: any;
    skip: any;
    limit: any;
    currentSearch: any;
    action: any;
}) => Promise<{
    withOperator: boolean;
    queryData: any;
    isQueryCompleted: boolean;
    count: number;
    operators: any;
    defaultOperator: any;
}>;
export declare const queryBuilderAssets: ({ queryArray }: {
    queryArray: any;
}) => {
    queryObject: string | {
        $and: any[];
    };
    search: string;
};
export declare const queryParserAssets: (queryObject: any, search_text: any, fetchData: any, cacheResponse?: any) => Promise<any[]>;
export declare const advanceQueryAssetParser: (query: any, selectedModule: any, fetchData: any, cache?: any, isRoot?: boolean) => Promise<any>;
