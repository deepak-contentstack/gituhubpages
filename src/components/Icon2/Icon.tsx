import React, { CSSProperties, useState, useEffect } from 'react'
import cn from 'classnames'

import { iconName, iconComponents } from './constants'

import './Icon.css'
import Tooltip from '../Tooltip/Tooltip'

export type IconType = keyof typeof iconName
// export type IconColorType = 'primary' | 'secondary' | 'white'

export type IconSize = 'original' | 'tiny' | 'mini' | 'small' | 'large' | 'medium' | 'extraSmall'

// Default prop value was not working with this way added default props with another way

// const defaultProps = {
//   size: 'original',
//   withTooltip: false,
//   testId: 'cs-Icon'
// }
// type DefaultProps = Readonly<typeof defaultProps>

export type IconProps = {
  icon: string
  /**
   * sizes can be 'original' | 'tiny' | 'small' | 'large' | 'medium'
   */
  size?: IconSize
  active?: Boolean
  hover?: Boolean
  hoverType?: 'primary' | 'secondary'
  shadow?: 'mini' | 'tiny' | 'medium'
  /**
   * custom css class for active state of icon
   */
  activeClassName?: string
  /**
   * custom css class for hover state of icon
   */
  hoverClassName?: string
  className?: string
  style?: CSSProperties
  fill?: string
  stroke?: string
  height?: Number | string
  width?: Number | string
  id?: string
  onClick?: Function
  disabled?: boolean
  activeIcon?: string
  viewBox?: string
  data?: string | React.ReactNode
  testId?: string
  // withTooltip?: boolean
  // tooltipContent?: string | React.ReactNode
  // tooltipPosition?: string
  withTooltip?: boolean
  tooltipContent?: string | React.ReactNode
  tooltipPosition?: string
}
// & Partial<DefaultProps>

//Should be replaced with Fallback Icon below
const FallbackIcon = () => null

export const Icon = (props: IconProps) => {
  const {
    icon,
    size,
    hover,
    hoverType = "primary",
    shadow,
    active,
    activeClassName,
    hoverClassName,
    id,
    className,
    style,
    activeIcon,
    data,
    testId,
    // withTooltip,
    // tooltipContent,
    // tooltipPosition,
    withTooltip,
    tooltipContent,
    tooltipPosition,
    ...otherProps
  } = props

  /**
   * To handle test env,
   * while testing, iconComponents[icon] = {}
   * So this must return Something valid component
   **/
  const [iconToDisplay, setIconToDisplay] = useState<string>(icon)

  const Element =
    typeof iconComponents[iconToDisplay] === 'object' && !Object.keys(iconComponents[iconToDisplay]).length
      ? FallbackIcon
      : iconComponents[iconToDisplay] || FallbackIcon

  /**
   * ref:-
   * State "iconColor" has three values i.e. 1)default, 2)active, and 3)hover.
   * 1)'default': original svg(default state of icon),
   * 2)'active': fill and stroke property applied to original svg(active state of icon)
   * 3)'hover': only stroke property applied to original svg(hover state of icon).
   **/
  const [iconState, setIconState] = useState<"default" | "hover" | "active">(active && !activeIcon ? 'active' : 'default')

  useEffect(() => {
    if (active) {
      if (activeIcon) {
        setIconToDisplay(activeIcon)
        if (iconState === 'hover') {
          setIconState('default')
        }
      }
      else {
        setIconState('active')
      }
    }
    else {
      setIconToDisplay(icon)
      setIconState('default')
    }
    // (used to disable es lint warning for next line)
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [active, icon])

  const classNames = cn(className, {
    [`Icon--${size}`]: size,
    [`Icon--hover--${hoverType}`]: iconState === 'hover',
    [`Icon--active`]: iconState === 'active',
    [`${activeClassName}`]:
      iconState === 'active' ? (typeof activeClassName === 'string' ? true : false) : false,
    [`${hoverClassName}`]:
      iconState === 'hover' ? (typeof hoverClassName === 'string' ? true : false) : false,
  })

  const shadowClassnames = cn("flex-center", "flex-v-center", {
    [`Icon__shadow`]: iconState === 'hover',
    [`Icon__shadow-${shadow}`]: shadow
  })

  const mouseEnterHandle = (event: any) => {
    if (!active) {
      if (hover) {
        setIconState('hover')
      }
    }
  }
  const mouseLeaveHandle = (event: any) => {
    if (!active) {
      if (hover) {
        setIconState('default')
      }
    }
  }

  const iconElement = <Element
    onMouseEnter={mouseEnterHandle}
    onMouseLeave={mouseLeaveHandle}
    className={classNames}
    style={style}
    name={icon}
    id={id}
    {...otherProps}
  />


  if (data) {
    return shadow ? (
      <div className="flex-v-center" data-test-id={testId}>
        <div className={shadowClassnames}>{iconElement}</div>
        {data && data}
      </div>
    ) : (
      <div className="flex-v-center" data-test-id={testId}>{iconElement}{data && data}</div>
    )
  } else {
    return shadow ? (
      <div
        className={shadowClassnames}
        data-test-id={testId}
      >
        {withTooltip ? <Tooltip content={tooltipContent ? tooltipContent : ''} position={tooltipPosition ? tooltipPosition : 'top'}>{iconElement}</Tooltip> :
          iconElement
        }
      </div>
    ) : (
      withTooltip ? <Tooltip content={tooltipContent ? tooltipContent : ''} position={tooltipPosition ? tooltipPosition : 'top'}>{iconElement}</Tooltip> :
        iconElement

    )
  }
}

Icon.defaultProps = {
  size: 'original',
  withTooltip: false,
  testId: 'cs-Icon'
}
export default Icon