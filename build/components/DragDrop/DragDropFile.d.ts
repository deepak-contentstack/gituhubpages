import { Component } from 'react';
import './DragDropFile.css';
declare type MyProps = {
    handleDrop: Function;
    dragFlag: boolean;
    folderName?: string;
    dragOverlayContent?: string;
    dragDropFileHandler: Function;
    hideDragOverlayContent?: boolean;
};
declare type MyState = {
    drag: boolean;
};
declare class DragDropFile extends Component<MyProps, MyState> {
    dragCounter: number;
    state: MyState;
    dropRef: any;
    handleDrag: (e: any) => void;
    handleDragIn: (e: any) => void;
    handleDragOut: (e: any) => void;
    handleDrop: (e: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default DragDropFile;
