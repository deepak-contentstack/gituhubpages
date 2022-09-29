import { Component } from 'react';
export declare class AdvanceQueryDropdown extends Component<any, any> {
    state: {
        cursor: number;
    };
    showSuggestions: boolean;
    isCursorInside: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickOutside: () => void;
    registerKeybindings: (event: any) => void;
    render(): JSX.Element;
}
declare class AdvanceSearchQuery extends Component<any, any> {
    state: {
        cursorY: number;
        cursorX: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    setResetCursor: (cursorY?: number, cursorX?: number) => void;
    regiterKeyBindings: (event: any) => void;
    render(): JSX.Element;
}
export default AdvanceSearchQuery;
