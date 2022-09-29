export declare const limitToFetch = 30;
export declare const options: {
    label: string;
    value: string;
    placeholder: string;
}[];
export declare const tooltipWrapperId = "AdvancedSearch__tooltip-wrapper";
export declare const portalId = "AdvancedSearch__portal";
export declare const usersKey: string[];
export declare const dateKey: string[];
export declare const environmentKey = "_publish_environment";
export declare const contentTypeKey = "_content_type_uid";
export declare const languageKey = "locale";
export declare const tagKey = "tags";
export declare const fileNameKey = "filename";
export declare const fileSizeKey = "file_size";
export declare const urlKey = "url";
export declare const titleKey = "title";
export declare const assetTypeKey = "_content_type_uid";
export declare const uidKey = "uid";
export declare const workflowStageKey = "_workflow";
export declare const iconName: {
    Equals: string;
    Contains: string;
    NotEquals: string;
    Search: string;
    DropdownDark: string;
    Clock: string;
    DeleteQueryBuilder: string;
    AddQueryBuilder: string;
    LessThanEquals: string;
    GreaterThanEquals: string;
    Disk: string;
    LessThan: string;
    GreaterThan: string;
    SettingsOutline: string;
    NewTab: string;
    Filter: string;
};
export declare const inputTextShadow = "-10px 0 24px #6c83a9, 2px 0 24px #7991b8";
export declare const viewAllCtaId = "AdvancedSearch-optionButton-viewAllCta";
export declare let stringOperators: {
    name: string;
    icon: string;
    value: string;
}[];
export declare let basicOperators: {
    name: string;
    icon: string;
    value: string;
}[];
export declare let comparisonOperator: {
    name: string;
    icon: string;
    value: string;
}[];
export declare let allOperators: {
    name: string;
    icon: string;
    value: string;
}[];
export declare const switchMatchAllAny: {
    matchAll: string;
    matchAny: string;
};
export declare const advanceQueryOpts: {
    label: string;
    name: string;
    value: string;
}[];
export declare const operatorTextByName: {
    Contains: string;
    Equals: string;
    NotEquals: string;
    LessThan: string;
    GreaterThan: string;
    LessThanEquals: string;
    GreaterThanEquals: string;
};
export declare const operatorByValue: {
    $in: {
        name: string;
        icon: string;
        value: string;
    };
    $nin: {
        name: string;
        icon: string;
        value: string;
    };
    $eq: {
        name: string;
        icon: string;
        value: string;
    };
    $ne: {
        name: string;
        icon: string;
        value: string;
    };
    $lte: {
        name: string;
        icon: string;
        value: string;
    };
    $gte: {
        name: string;
        icon: string;
        value: string;
    };
    contains: {
        name: string;
        icon: string;
        value: string;
    };
    $regex: {
        name: string;
        icon: string;
        value: string;
    };
    $lt: {
        name: string;
        icon: string;
        value: string;
    };
    $gt: {
        name: string;
        icon: string;
        value: string;
    };
};
export declare const assetQueryFormat: {
    created_by: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    updated_by: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    _published_by: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    _publish_environment: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    created_at: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    updated_at: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    _published_at: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    uid: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    filename: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    url: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    title: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    file_size: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    _content_type_uid: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    tags: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
};
export declare const entriesQueryFormat: {
    created_by: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    updated_by: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    _published_by: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        nextQuery: string;
        queryType: string;
    };
    _publish_environment: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    created_at: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    updated_at: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    _published_at: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    uid: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    locale: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    _content_type_uid: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    tags: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
    $localization: {
        key: {
            label: string;
            value: string;
        }[];
        operator: {
            name: string;
            icon: string;
            value: string;
        }[];
        value: {
            label: string;
            value: {
                label: string;
                value: string;
            }[];
        }[];
        queryType: string;
        nextQuery: string;
        isQueryCompleted: boolean;
    };
    _workflow: {
        key: {
            label: string;
            value: string;
        }[];
        operator: any[];
        value: any[];
        isQueryCompleted: boolean;
        queryType: string;
        nextQuery: string;
    };
};
export declare const defaultTextContent: {
    placeholders: {
        search_bar: string;
        advance_search_query: string;
        saved_views: string;
    };
    advance_search_ui: {
        suggested_syntax: {
            title: string;
        };
        saved_searches: {
            title: string;
        };
        recent_searches: {
            title: string;
        };
        button: {
            see_more: string;
            see_less: string;
        };
    };
    saved_views: {
        title: string;
        save_current_search_btn_txt: string;
        no_search_result: string;
        no_result: string;
        no_result_description: string;
    };
    notification: {
        delete_saved_search: string;
        success_saved_search: string;
        update_saved_search: string;
    };
    modals: {
        delete_saved_search: {
            title: string;
        };
    };
    empty_states: {
        recent_searches: {
            title: string;
        };
        save_searches: {
            title: string;
        };
    };
    validations: {
        advance_query: {
            no_conditions: string;
            no_cursor_found: string;
            userdef_field_error: string;
        };
        basic_query: {
            no_valid_text: string;
            only_single_text: string;
        };
        filters: {
            no_filters: string;
            no_localization: string;
        };
        saved_searches: {
            search_name_empty: string;
            search_name_length: string;
        };
    };
    links: {
        learn_more_basic_search: string;
        learn_more_saved_searches: string;
    };
    tooltips: {
        operators: {
            LessThanEquals: string;
            GreaterThanEquals: string;
            GreaterThan: string;
            LessThan: string;
            Contains: string;
            Equals: string;
            NotEquals: string;
            NotEqualsNumeric: string;
            EqualsNumeric: string;
        };
        clear_search: string;
        close_view: string;
        advance_query_bottom_remove_hover: string;
        advance_query_right_remove_hover: string;
        saved_views: string;
    };
};
