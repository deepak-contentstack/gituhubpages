import React, { CSSProperties, ReactNode } from 'react'
// import Icon from '../../Icon2';
import cn from 'classnames'
import './Link.css'

export type LinkProps = {
  children: ReactNode,
  /**
   * Specify the URL where the text is to be linked.
   */
  href: string,
  /**
   *  Pass the function to be triggered when the link is clicked on.
   */
  cbOnClick?: Function,
  /**
   * Set the type of link to “external” when you want the icon and text to be made clickable
   */
  type?: 'external',
  /**
   * Specify where to display the end response.
   */
  target?: "_blank" | "_self" | "_parent" | "_top",
  /**
   * Make the link text bolder.
   */
  fontWeight?: "bold" | "regular" | "semi-bold",
  /**
   * Set the font-size of link text
   */
  fontSize?: "tiny" | "small" | "medium" | "large"
  /**
   * Add styles to the component.
   */
  style?: CSSProperties,
  /**
   * Add a custom icon, set this prop to the name of the icon.
   */
  iconName?: string,
  /**
   *  Pass the class names to be appended to this prop.
   */
  className?: string,
  /**
   * Display an underline below the hyperlink, set this prop to “true”, else set it to “false”.
   */
  underline?: boolean,
  /**
   * Change the underline style of the link to either “dashed” or “solid”.
   */
  underLineType?: 'dashed' | 'solid'
  /**
   * Change the color of the link text.
   */
  fontColor: "white" | "base" | "link" | "black"
  /**
   * Pass an ID that you can use for testing purposes.
   */
  testId?: string;
}

const Link = (props: LinkProps) => {
  const { children, className, href, type, fontSize, underline, iconName, underLineType, fontWeight, fontColor, cbOnClick, testId, ...rest } = props;
  const isExternal = type === 'external';
  const target = props.target ? props.target : "_blank"

  const classNames = cn('Link', className, {
    'ExternalLink': isExternal,
    [`Link--${fontWeight}`]: fontWeight,
    [`Link--${fontSize}`]: fontSize,
    [`Link--${fontColor}`]: fontColor,
  })

  const handleOnClick = () => {
    if (cbOnClick) {
      cbOnClick();
    }
  }
  return (
    <div className={classNames} onClick={handleOnClick} data-test-id={testId} {...rest}>
      <a href={href} target={target} className="flex-v-center">
        <span className={`${underline ? `Link__${underLineType}` : ""}`}>
          {children}
        </span>
        {/* {isExternal &&
          // <Icon className="ml-5" icon={iconName} />
        } */}
      </a>
    </div>
  )
}

Link.defaultProps = {
  iconName: "NewTab",
  underLineType: "dashed",
  target: "_blank",
  underline: false,
  fontWeight: "regular",
  fontColor: "base",
  fontSize: "large",
  testId: 'cs-link'
} as Partial<LinkProps>;

export default Link;