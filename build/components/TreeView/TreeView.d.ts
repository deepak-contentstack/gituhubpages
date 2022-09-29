import { Component } from 'react';
export declare type treeViewProps = {
    fetchMoreRootData?: Function;
    onClickHeader?: Function;
    fetchMoreNestedData?: Function;
    onToggle?: Function;
    initialState?: any;
    canFetch?: boolean;
    locationState?: any;
    customDecorators?: any;
    customStyles?: any;
    asyncClassName?: string;
    height?: any;
    limitForRoot?: number;
    nestedFolderLimit?: number;
    emptyHeading?: string;
};
declare class TreeView extends Component<treeViewProps, any> {
    state: {
        data: {
            name: string;
            toggled: boolean;
            children: any[];
            loading: boolean;
        };
        skip: number;
        cursor: {};
        totalCounts: any;
        hasMore: boolean;
    };
    canFetch: boolean;
    locationState: any;
    initialState: any;
    nestedFolderLimit: number;
    limitForRoot: number;
    FallBackEmptyState: any;
    componentDidMount(): Promise<void>;
    updateCbRefrence: (node: any) => void;
    updateOnToggleRef: (node?: any) => void;
    fetchInitRootData: () => Promise<void>;
    fetchMoreRootData: () => Promise<void>;
    handleLoadMoreClick: (node: any) => Promise<void>;
    onToggle: (node: any, toggled: any) => void;
    render(): JSX.Element;
}
export default TreeView;
