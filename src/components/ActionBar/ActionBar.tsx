import Tooltip from '../Tooltip/Tooltip';
import React from 'react';
// import Icon from '../Icon2';
import cn from 'classnames'
import './ActionBar.css'

export type ActionBarProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>,
  hoverMessage: string | React.ReactNode | { text: string; icon: any }
  showOnHover?: boolean,
  children?: React.ReactChild,
  disabled?: boolean,
  testId?: string
}
const ActionBar = ({ children, onClick, hoverMessage, showOnHover = false, disabled = false, testId = "action-bar" }: ActionBarProps) => {
  const disableClickHandler = e => e.preventDefault()
  return (
    <>
      {React.Children.count(children) ? children : null}
      <div className="ActionBar" data-test-id={testId} onClick={(disabled ? disableClickHandler : onClick)}>
        <div className={cn('ActionBar_bar', { hide: showOnHover }, (disabled && "ActionBar_bar_disabled"))}>
          <div className="ActionBar_sign">
            <Tooltip content={hoverMessage} position="top"></Tooltip>
            This is test commit
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionBar;