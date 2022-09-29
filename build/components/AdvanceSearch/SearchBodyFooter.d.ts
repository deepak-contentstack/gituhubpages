import { Component } from "react";
export declare class AdvanceSearchBody extends Component<any, any> {
    state: {
        savedSearchUid: string;
        statusMapSyntaxes: any[];
        suggestedSyntaxes: any[];
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    handleErrorState: () => void;
    updateSuggestedSyntaxOrder: (queryArray: any) => void;
    getInitStatusMap: (data?: any[], type?: string) => any[];
    handleShowMore: (type: any) => void;
    simulateCursorClick: (cursor: any, type: any) => void;
    handleShowLess: (type: any) => void;
    render(): JSX.Element;
}
export declare const AdvanceSearchFooter: (props: any) => JSX.Element;
