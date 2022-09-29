import { Component } from 'react';
declare class SavedViews extends Component<any, any> {
    state: {
        isSavedViewOpen: boolean;
        mode: string;
        disabled: boolean;
        editingIndex: number;
        searchText: string;
        loading: boolean;
    };
    isCursorInside: boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    handleClickOutside: (event: any) => void;
    openSavedView: () => Promise<void>;
    closeSavedView: () => void;
    setMode: () => void;
    setDefaultMode: () => void;
    updateSavedView: (data: any, search: any) => Promise<void>;
    deleteSavedView: (data: any) => Promise<void>;
    cancelEditView: (search: any) => void;
    onDeleteView: (data: any) => void;
    handleSubmitOfView: (data: any) => Promise<void>;
    handleSearchChange: (value: any) => void;
    handleSavedSearchClick: (search: any) => void;
    render(): JSX.Element;
}
export default SavedViews;
