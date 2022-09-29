export declare const suggestedSyntaxes: {
    label: string;
    value: string;
    info: string;
    uid: string;
}[];
export declare const suggestedSyntaxByUid: {
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
export declare const languageLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const localizedInLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const inEntries: {
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
export declare const dateLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const workflowStageLabel: {
    group: string;
    queryType: string;
    nextQuery: string;
    type: string;
    options: {
        label: string;
        value: string;
    }[];
};
export declare const suggestForEntries: (data: any) => Promise<{
    withOperator: boolean;
    queryData: any;
    isQueryCompleted: boolean;
    count: number;
    operators: any;
    defaultOperator: any;
}>;
