import './ListItem.css'

import React from 'react'

import cn from 'classnames'

// import HelpText from '../HelpText/HelpText'
// import Icon, { IconType } from '../Icon2/Icon'
import Paragraph from '../Typography/Paragraph/Paragraph'

export type ListItemProps = {
  content: string | React.ReactNode;
  description?: string | React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  // icon?: IconType;
  testId?: string;
}

const ListItem = (props: ListItemProps) => {
  return (
    <div
      onClick={() => {
        props.onClick && props.onClick();
      }}
      className={cn('pl-10 pb-10 pt-10 pr-10 ListItem__Wrapper', {
        [props.className]: !!props.className
      })}
      style={props.style}
    >
      <div className="flex ListItem">
        <Paragraph
          tagName="p"
          className={'font-size-large ListItem__Content'}
          text={props.content as string}
        />
        {/* {
          props.icon &&
          <Icon
            className="ListItem__Icon"
            icon={props.icon}
            size="tiny"
          />
        } */}
      </div>
      {/* {
        props.description &&
        <HelpText
          className={'ml-0 mt-0 ListItem__HelpText'}
        >
          {props.description}
        </HelpText>
      } */}
    </div>
  );
};

export default ListItem;
