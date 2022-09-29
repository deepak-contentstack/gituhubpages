import { ReactNode } from 'react';
import './InfoContainer.css';
export declare type InfoRow = {
    title?: string | ReactNode;
    content: string | ReactNode;
};
export declare type InfoContainerProps = {
    rows: InfoRow[];
    className?: string;
    contentFontColor?: "base" | "secondary" | "tertiary" | "black";
    contentFontSize?: "tiny" | "small" | "medium" | "large";
    seeMoreCb?: Function;
};
declare const InfoContainter: {
    (props: InfoContainerProps): JSX.Element;
    defaultProps: Partial<InfoContainerProps>;
};
export default InfoContainter;
