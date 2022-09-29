import './Tooltip.css'

import React, { createRef } from 'react'

import cn from 'classnames'

import Tippy, { TippyProps } from '@tippyjs/react'

// import Icon from '../Icon2'

enum ArrowDirection {
  "left-start" = "right-start",
  "left-end" = "right-end",
  "left" = "right",

  "right-start" = "left-start",
  "right-end" = "left-end",
  "right" = "left",

  "top-start" = "bottom-start",
  "top-end" = "bottom-end",
  "top" = "bottom",

  "bottom-start" = "top-start",
  "bottom-end" = "top-end",
  "bottom" = "top",
};

enum PaddingClass {
  "left-start" = "pl-10",
  "left-end" = "pl-10",
  "left" = "pl-10",

  "right-start" = "pr-10",
  "right-end" = "pr-10",
  "right" = "pr-10",

  "top-start" = "pt-10",
  "top-end" = "pt-10",
  "top" = "pt-10",

  "bottom-start" = "pb-10",
  "bottom-end" = "pb-10",
  "bottom" = "pb-10",
};
interface ITooltip extends TippyProps {
  content: string | React.ReactNode | { text: string; icon: any }
  position: string
  showArrow?: boolean
  onCreate?: (data: any) => void
  trigger?: string
  onHidden?: () => any
  disabled?: boolean
  variantType?: "dark" | "light" | "menuIcon"
  visible?: boolean,
  showClose?: boolean,
  onClose?: () => void,
  type?: "primary" | "secondary" | "dynamic",
  maxWidth?: any,
  style?: React.CSSProperties,
  [propsKey: string]: any
  testId?: string
  customTooltipCss?: string,
  wrapperElementType?: "div" | "span",
}

const Tooltip: React.FunctionComponent<ITooltip> = (props: any) => {
  const node = createRef<HTMLInputElement>()
  const { content, position, children, isMenuIcon, visible, showClose, testId, style, customTooltipCss, ...rest } = props

  const showArrow = props.showArrow !== undefined ? props.showArrow : false
  const variant = props.variantType || "dark"
  const tooltipType = props.type !== undefined ? props.type : "primary"
  const disabled = props.disabled ? props.disabled : false
  const interactive = typeof content === "string" ? false : true;

  let className =
    variant === "dark"
      ? "tippy-box-dark"
      : tooltipType === "primary"
        ? "tippy-box-light tippy-box-light--primary"
        : `tippy-box-light tippy-box-light--${tooltipType}`
  className = variant === "menuIcon" ? "tippy-box-light tippy-box-light-menu" : className
  className = customTooltipCss ? customTooltipCss : className
  className = cn(className, props.className);
  const wrapperClassNames = cn("tippy-wrapper", { [`${PaddingClass[position]}`]: showArrow });

  const getContent = () => {
    if (variant === "menuIcon") {
      return getKeyIcon(content.text, content.icon);
    }

    if (showArrow) {
      return (
        <div className="flex">
          {content}
          <div className={`tippy-arrow-${variant} tippy-arrow-${variant}-${ArrowDirection[position]}`} />
        </div >
      );
    }

    return content;
  }

  const wrapWithClose = (content) => {
    return (
      <>
        <div className="flex-v-center">
          <div>{content}</div>
          <div className="closeContainer flex-v-center flex-h-center" onClick={props.onClose ? () => props.onClose() : null}>
            {/* <Icon icon='Cancel' /> */}
          </div>
        </div>

      </>
    );
  };

  const WrapperTag = getWrapperType(props.wrapperElementType || "div");
  return (
    <Tippy
      content={showClose ? wrapWithClose(getContent()) : getContent()}
      className={className}
      placement={position}
      arrow={showArrow}
      interactive={interactive}
      disabled={disabled}
      visible={visible}
      {...rest}
    >
      <WrapperTag ref={node} className={wrapperClassNames} data-test-id={testId} style={style}>
        {children}
      </WrapperTag>
    </Tippy>
  )
}

const getKeyIcon = (text: string, icon: any) => {
  return (
    <div className="flex-v-center">
      <div>{text}</div>
      <div className="KeyShortcut">{icon}</div>
    </div>
  )
}
const getWrapperType = (type: string) => {
  if (type === "span") {
    return "span";
  }
  return "div";
}

Tooltip.defaultProps = {
  testId: "cs-tooltip",
  wrapperElementType: "div",
  trigger: "mouseenter focusin"
}

export default Tooltip
