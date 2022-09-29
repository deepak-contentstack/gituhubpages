import React, {CSSProperties} from 'react'
import cn from 'classnames'
import './ButtonGroup.css'

export type ButtonGroupProps = {
  /**
   * Provides the class names to be appended to this prop.
   */
  className?:string,
  /**
   * Add child elements defined within a component.
   */
  children?: React.ReactNode
  /**
   * Pass the CSS properties for the button group.
   */
  style?:CSSProperties,
  /**
   * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id).
   */
  testId?: string
} 

const ButtonGroup = (props: ButtonGroupProps) => {
  const {className,children,style,testId,...otherProps}: any =props
  const classNames = cn('Button__group', className)

  return (
    <div className={classNames} data-test-id={testId} {...otherProps}>
      {children && children}
    </div>
  )
  }

  ButtonGroup.defaultProps = {
    testId: 'cs-button-group'
  } as Partial<ButtonGroupProps>;

export default ButtonGroup;