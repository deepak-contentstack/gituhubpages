/// <reference types="react" />
import './Carousel.css';
declare const defaultProps: {
    spacing: number;
    items: any[];
    disableDragDrop: boolean;
    testId: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type CarouselProps = {
    spacing?: number;
    items: Array<any>;
    itemCount: number;
    type?: string;
    showDragIcon?: boolean;
    disableDragDrop?: boolean;
    dragEndCallback?: Function;
    addBlockFlag?: boolean;
    addCallback?: Function;
    deleteBlockFlag?: boolean;
    deleteCallBack?: Function;
    uploadFileFlag?: boolean;
    uploadFileCallback?: Function;
    itemWidth?: number;
    maxWidth?: number;
    left?: number;
    /**
     * An ID used for testing purposes applied as a data attribute (data-test-id)
     */
    testId?: string;
} & Partial<DefaultProps>;
declare const Carousel: {
    (props: CarouselProps): JSX.Element;
    defaultProps: {
        spacing: number;
        items: any[];
        disableDragDrop: boolean;
        testId: string;
    };
};
export default Carousel;
