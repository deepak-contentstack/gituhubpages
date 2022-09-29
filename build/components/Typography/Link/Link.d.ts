import { CSSProperties, ReactNode } from 'react';
import './Link.css';
export declare type LinkProps = {
    children: ReactNode;
    /**
     * Specify the URL where the text is to be linked.
     */
    href: string;
    /**
     *  Pass the function to be triggered when the link is clicked on.
     */
    cbOnClick?: Function;
    /**
     * Set the type of link to “external” when you want the icon and text to be made clickable
     */
    type?: 'external';
    /**
     * Specify where to display the end response.
     */
    target?: "_blank" | "_self" | "_parent" | "_top";
    /**
     * Make the link text bolder.
     */
    fontWeight?: "bold" | "regular" | "semi-bold";
    /**
     * Set the font-size of link text
     */
    fontSize?: "tiny" | "small" | "medium" | "large";
    /**
     * Add styles to the component.
     */
    style?: CSSProperties;
    /**
     * Add a custom icon, set this prop to the name of the icon.
     */
    iconName?: string;
    /**
     *  Pass the class names to be appended to this prop.
     */
    className?: string;
    /**
     * Display an underline below the hyperlink, set this prop to “true”, else set it to “false”.
     */
    underline?: boolean;
    /**
     * Change the underline style of the link to either “dashed” or “solid”.
     */
    underLineType?: 'dashed' | 'solid';
    /**
     * Change the color of the link text.
     */
    fontColor: "white" | "base" | "link" | "black";
    /**
     * Pass an ID that you can use for testing purposes.
     */
    testId?: string;
};
declare const Link: {
    (props: LinkProps): JSX.Element;
    defaultProps: Partial<LinkProps>;
};
export default Link;
