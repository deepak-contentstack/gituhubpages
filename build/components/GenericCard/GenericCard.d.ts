/// <reference types="react" />
import './GenericCard.css';
declare const defaultProps: {
    active: boolean;
    data: string;
    onActiveToggle: (state: any) => void;
    disableActiveFn: boolean;
    width: number;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type GenericCardProps = {
    title?: string;
    active?: boolean;
    mainContent?: JSX.Element;
    footerContent?: JSX.Element;
    data?: any;
    onActiveToggle: (state: any) => void;
    disableActiveFn?: boolean;
    width?: number;
} & Partial<DefaultProps>;
declare const GenericCard: {
    (props: GenericCardProps): JSX.Element;
    defaultProps: {
        active: boolean;
        data: string;
        onActiveToggle: (state: any) => void;
        disableActiveFn: boolean;
        width: number;
    };
};
export default GenericCard;
