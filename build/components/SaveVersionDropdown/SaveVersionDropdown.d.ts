import React from 'react';
import './SaveVersionDropdown.css';
export declare type IList = {
    _version: number;
    _version_name?: {
        locale?: string;
        title: string;
        updated_at?: string;
        updated_by?: string;
    };
};
declare type ISaveVersionDropdown = {
    latestVersion: {
        _version: number;
        _version_name?: {
            locale?: string;
            title: string;
            updated_at?: string;
            updated_by?: string;
        };
    };
    defaultSelected: {
        _version: number;
        _version_name?: {
            locale?: string;
            title: string;
            updated_at?: string;
            updated_by?: string;
        };
    };
    list: Array<IList>;
    versionChange: Function;
    loadMoreVersion: Function;
    itemStatusMap: object;
    saveVersion: Function;
    itemsCount?: number;
    compareVersion?: Function;
    defaultVersionList: Array<IList>;
    viewOnlyMode?: boolean;
    isEntryCompare?: boolean;
    reduceCount?: number;
    cancelEdit?: Function;
};
declare const SaveVersionDropdown: React.FunctionComponent<ISaveVersionDropdown>;
export default SaveVersionDropdown;
