import React, {
  Component,
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  Fragment,
} from 'react'
import cn from 'classnames'

import withDeprecatedProp from '../../utils/hooks/depricatedPropsHoc';

// import Icon, { IconProps } from '../Icon2'
// import { iconName } from '../Icon2/constants'
// import AsyncLoader from '../AsyncLoader/AsyncLoader'

import './Button.css'

const defaultProps = {
  isFullWidth: false,
  isRounded: false,
  disabled: false,
  buttonType: 'primary',
  type: 'button',
  isLoading: false,
  testId: 'cs-button'
}

type DefaultProps = Readonly<typeof defaultProps>

export type ButtonProps = {
  /**
   * Class names to be appended to the className prop of the Button Component
   */
  className?: string
  children?: React.ReactNode
  /**
   * Pass the icon that want to add in button
   */
  icon?: any
  /**
   * If you want to show only icon, set the param to ‘true’
   */
  onlyIcon?: boolean
  /**
   * Determines the alignment of the icon
   */
  iconAlignment?: 'left' | 'right'
  /**
   * Pass additional props for icon
   */
  // iconProps?: Partial<IconProps>
  /**
   * Pass an id to the button
   */
  id?: string
  /**
   * Determine the type of button you want to use
   */
  buttonType?:
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-outline'
  | 'outline'
  | 'success'
  | 'danger'
  | 'warning'
  | 'light'
  | 'control'
  | 'delete'
  | 'bulk-delete'
  | 'outline-delete'
  | 'outline-success'
  | 'white'
  /**
   * Determine the size of the button: small or large
   */
  size?: 'small' | 'large'
  /**
   * If button covers full width
   */
  isFullWidth?: boolean
  /**
   * If button is rounded
   */
  isRounded?: boolean
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string
  /**
   * Used to set the button in the loading state
   */
  isLoading?: boolean
  /**
   * Determines the color of the loading animation you want to display
   */
  loadingColor?: string
  /**
   * Action that you want to perform when a button is clicked
   */
  onClick?: MouseEventHandler
  /**
   * Determines whether button is disabled or not
   */
  disabled?: boolean
  /**
   * If you want a button as a link, provide the details in href.
   */
  href?: string
  /**
   * Type of button action (button, submit,reset)
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Pass any CSS properties for the button
   */
  style?: CSSProperties
} & Partial<DefaultProps>
export class Button extends Component<ButtonProps> {
  public static propTypes: any = {}
  static defaultProps = defaultProps
  render() {
    const {
      className,
      children,
      buttonType,
      size,
      isFullWidth,
      isRounded,
      onClick,
      disabled,
      href,
      type,
      icon,
      iconAlignment,
      style,
      isLoading,
      loadingColor,
      onlyIcon,
      testId,
      id,
      iconProps = {},
      ...otherProps
    }: any = this.props
    const classNames = cn('Button', className, [`Button--${buttonType}`], {
      [`Button--state-disabled`]: disabled,
      [`Button--size-${size}`]: size,
      ['Button--style-fullwidth']: isFullWidth,
      ['Button--style-circle']: isRounded,
      [`Button--icon-alignment-${iconAlignment}`]: iconAlignment,
      [`Button--state-loading`]: isLoading,
      [`Button--icon`]: onlyIcon,
    })
    const addButtonIconClassNames = cn('Button__icon')
    const Element = href ? 'a' : 'button'
    return (
      <Element
        data-test-id={testId}
        className={classNames}
        disabled={disabled}
        href={!disabled ? href : null}
        id={id}
        aria-label={id || 'aria-button'}
        type={type}
        style={style}
        onClick={(e: any) => {
          if (onClick) {
            onClick(e)
          }
        }}
        {...otherProps}
      >
        <div className="flex-center">
          {isLoading &&
            <div className="Button__loader">
              {/* <AsyncLoader color={loadingColor} /> */}
            </div>
          }
          <div
            style={{ visibility: !isLoading ? 'visible' : 'hidden' }}
            className={iconAlignment === "right" ? "flex-right" : "flex-v-center"}
          >
            {buttonType === 'control' && (
              <span className={addButtonIconClassNames}>
                {/* <Icon icon={iconName.PlusSign} /> */}
              </span>
            )}
            {/* {icon && <Icon icon={icon} {...iconProps} />} */}
            {children && <>{children}</>}
          </div>
        </div>
      </Element>
    )
  }
}

export default withDeprecatedProp(Button, { 'loading': 'isLoading' })