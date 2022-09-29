import React, { useState, useEffect, useRef } from 'react'
// import { useComponentVisible } from '../DropDown/Dropdown'
//import ClipBoard from '../ClipBoard/ClipBoard'
import Tooltip from '../Tooltip/Tooltip'
import './ActionTooltip.css'
import cn from 'classnames'
export type ActionTooltipList = {
  label: string | React.ReactNode
  title: string
  action: Function
  className?: string
}
export type IActionTooltip = {
  type?: 'primary' | 'secondary'
  list: Array<ActionTooltipList>
  children?: React.ReactNode | Element
  className?: string
  data?: any
  right?: string | number,
  testId?: string
}

function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref: any = useRef(null)

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
    }
  }

  const handleClickOutside = (event: any) => {
    if ((ref.current && !ref.current.contains(event.target)) || (document.activeElement === document.getElementById('sidebar-extension')) || (document.activeElement.clientWidth == 315)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true)
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true)
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isComponentVisible, setIsComponentVisible }
}

const ActionTooltip: React.FunctionComponent<IActionTooltip> = (props) => {
  const { list, children, className, data, testId, type, ...rest } = props
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const classNames = cn('ActionTooltip', `ActionTooltip--${type}`, className)
  const RenderLabel = (props) => {
    const Component = props.component
    return <Component data={props.data} />
  }

  return (
    <div
      className={classNames}
      ref={ref}
      data-test-id={testId}
      onMouseEnter={() => {
        setIsComponentVisible(true)
      }}
      onMouseLeave={() => {
        setIsComponentVisible(false)
      }}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          setIsComponentVisible(true)
        }
      }}
    >
      {children}
      {isComponentVisible && (
        <ul className="ActionTooltip__actions" style={{ right: rest.right }}>
          {list.map((item: any, i: any) => {
            const canDisplay = typeof item.canDisplay === 'function' ? item.canDisplay(data) : true
            const actionClassnames = cn('wrappper-svg', item.className);
            const controlledClipboardCopyText = data && data[item.copyText] ? data[item.copyText] : data?.uid

            return (
              (canDisplay && item.displayType && item.displayType === 'clipboard') ?

                <li key={i}>
                  {typeof item.label === 'function' ? <RenderLabel component={item.label} data={data} /> : <div className={actionClassnames}>{item.label}</div>}
                </li>
                :
                canDisplay && (
                  item.title !== undefined
                    ? <Tooltip
                      key={i}
                      content={typeof item.title === 'function' ? item.title(data) : item.title}
                      position="top"
                    >
                      <li tabIndex={0}
                        data-test-id="title-action"
                        onBlur={(e) => {
                          if (i === list.length - 1) {
                            setIsComponentVisible(false)
                          }
                        }}
                        onClick={(e) => {
                          setIsComponentVisible(!isComponentVisible)
                          item.action(e, data, rest)
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            setIsComponentVisible(!isComponentVisible)
                            item.action(e, data, rest)
                          }
                        }}
                      >
                        {typeof item.label === 'function' ? <RenderLabel component={item.label} data={data} /> : <div className={actionClassnames} data-test-id="label-tooltip">{item.label}</div>}
                      </li>
                    </Tooltip>
                    : <li tabIndex={0}
                      data-test-id="no-title-action"
                      onBlur={(e) => {
                        if (i === list.length - 1) {
                          setIsComponentVisible(false)
                        }
                      }}
                      onClick={(e) => {
                        setIsComponentVisible(!isComponentVisible)
                        item.action(e, data, rest)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setIsComponentVisible(!isComponentVisible)
                          item.action(e, data, rest)
                        }
                      }}
                    >
                      {typeof item.label === 'function' ? <RenderLabel component={item.label} data={data} /> : <div className={actionClassnames} data-test-id="label-tooltip">{item.label}</div>}
                    </li>
                )
            )
          })}
        </ul>
      )}
    </div>
  )
}

ActionTooltip.defaultProps = {
  testId: 'cs-actiontooltip',
  type: 'primary'
} as Partial<IActionTooltip>

export default ActionTooltip