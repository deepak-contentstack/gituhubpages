import React from 'react';
import './EmptyState.css';
declare type imgSrcProps = {
    /**
    * Lets you pass an “alt” attribute to your <img> tag.
    */
    alt?: string;
    /**
    * Lets you pass the src of the image you want to display in the <img> tag.
    */
    src: string;
};
export declare type emptyStateProps = {
    /**
    * Lets you specify what type of EmptyState component you want to use. By default, the type is set to “primary.”
    */
    type?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Provide the class names to be appended to this prop.
    */
    className?: string;
    /**
    * Lets you pass the name of the icon you want to display.
    */
    moduleIcon?: string;
    /**
    * Lets you set the title of a page.
    */
    heading?: string | React.ReactNode;
    /**
    * Describes the style of the heading of the component.
    */
    headingType?: 'large' | 'small';
    /**
    * Lets you set and display the description of the page as a string or as a component.
    */
    description?: string | React.ReactNode;
    /**
    * Lets you pass actions that can be passed to the EmptyState and are displayed below the description.
    */
    actions?: React.ReactNode;
    /**
    * Lets you pass a footer that can be passed to the EmptyState and is displayed below the actions.
    */
    footer?: React.ReactNode;
    /**
    * Gives you the provision to display or not your image. To hide your display image, set the prop to “false”.
    */
    displayImage?: boolean;
    /**
    * Lets you use a custom image.
    */
    img?: React.ReactNode;
    /**
    * Lets you send the src and alt values for an image.
    */
    imgSrc?: imgSrcProps;
    /**
    * Lets you pass a custom component to render as a child component inside the empty state.
    */
    children?: React.ReactNode;
    /**
    * Lets you determine for which page you need to use the emptyState.
    */
    forPage?: 'card' | 'list' | 'fullPage' | 'empty';
    /**
    * Sets the width for the emptyState.
    */
    width?: number | string;
    /**
    * An ID used for testing purposes applied as a data attribute (data-test-id).
    */
    testId?: string;
};
declare const _default: any;
export default _default;
