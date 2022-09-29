import React, { useState, useMemo } from 'react';
import cn from 'classnames';

import withDeprecatedProp from '../../utils/hooks/depricatedPropsHoc';

// import Icon from '../Icon2/Icon';
//import Line from '../Line/Line';

import './Accordion.css';


export type accordionProps = {
  accordionLock?: boolean
  accordionData?: string
  addLeftComponent?: React.ReactNode
  addRightComponent?: React.ReactNode
  children?: React.ReactNode
  className?: string
  noChevron?: boolean
  preRender?: boolean
  renderExpanded?: boolean
  setTitleOnHide?: any | React.ReactNode
  title: string | React.ReactNode
  accordionDataCount?: number,
  hasBackgroundColor?: boolean
  /**
   * Actions List of {component: ReactNode, onClick: () => void}
   */
  actions?: AccordionActionsList,
  isAccordionOpen?: boolean | undefined
  onTitleClick?: () => void,
  errorMessage?: string
  dashedLineVisibility?: 'hover' | 'always',
  accordionTitlePropagation?: boolean
  testId?: string
};

type accordionTitleProps = {
  accordionLock?: boolean
  addLeftComponent?: React.ReactNode
  addRightComponent?: React.ReactNode
  accordionDataCount: number
  noChevron?: boolean
  setTitleOnHide: any | React.ReactNode | undefined
  title: string | React.ReactNode
  toggle: Function
  toggleStat?: boolean
  actions?: AccordionActionsList
  onClick?: () => void,
  error?: string
  hasBackgroundColor?: boolean
  dashedLineVisibility?: 'hover' | 'always',
  accordionTitlePropagation?: boolean
};

type accordionDataProps = {
  accordionData: string | React.ReactNode
};
type AccordionAction = {
  component: React.ReactNode
  onClick?: () => void,
  actionClassName?: string,
}

export type AccordionActionsList = AccordionAction[]

const AccordionTitle = (props: accordionTitleProps) => {
  // const noDefaultIcon = props.noDefaultIcon !== undefined ? props.noDefaultIcon : false;

  const getAccordionTitle = () => {
    if (!props.toggleStat) {
      return props.setTitleOnHide ? props.setTitleOnHide : props.title
    }
    else return props.title
  }

  const dashedLineClassname = cn('Accordion__heading__line', {
    'visible': props.dashedLineVisibility === 'always',
  });

  const { accordionTitlePropagation } = props || { accordionTitlePropagation: true }

  return useMemo(() => {

    const handleToggle = () => {
      if (!props.accordionLock) {
        if (props.onClick) props.onClick();
        props.toggle();
      }
    }

    return (
      <>
        <div className={`Accordion__heading ${props.accordionLock ? 'Accordion__heading-disabled' : ''}`} onClick={handleToggle}>
          <div className="flex">
            {props.addLeftComponent ? props.addLeftComponent : null}
            <div className={`Accordion__heading__title ${props.addLeftComponent ? 'ml-8' : ''} ${typeof props.title == 'string' ? 'Accordion__heading__title__ellipsis' : ''}`} onClick={(e) => { if (!accordionTitlePropagation) { e.stopPropagation() } }}>
              {getAccordionTitle()}
            </div>
          </div>
          {props.toggleStat === false && props.accordionDataCount ? <div className="Accordion__heading__field-count">{props.accordionDataCount}</div> : ""}
          {props.addRightComponent ? (
            props.addRightComponent
          ) : (
            <>
              {!props.noChevron &&
                <div className={props.accordionLock ? 'Accordion__heading__toggle-disabled' : 'Accordion__heading__toggle'}>
                </div>
              }
              <div className="flex-v-center flex-grow-1">
                {props.error && (
                  <div className="Accordion__heading__errorMsg">
                    {props.error}
                  </div>
                )}
                <span className={dashedLineClassname}>
                  {/* <Line type='dashed' /> */}
                </span>
              </div>
              {props.actions && <AccordionActions actions={props.actions} />}
            </>
          )}
        </div>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.toggleStat,
    props.accordionDataCount,
    props.title,
    props.error,
    props.addLeftComponent,
    props.addRightComponent,
  ])
};

export const AccordionData = (props: accordionDataProps) => {
  return <div className="Accordion__data">{props.accordionData}</div>
};

const AccordionActions = ({ actions }: {
  actions: AccordionAction[]
}) => {
  return (
    <div className="Accordion__actions">
      {actions?.map((action: AccordionAction, index) => {
        const actionClassname = cn("actions_list_item", action.actionClassName)
        return (
          <div
            className={actionClassname}
            onClick={(event) => { event.stopPropagation(); action.onClick(); }} key={index}
          >
            {action.component}
          </div>
        );
      })}
    </div>
  )
}

const Accordion = (props: accordionProps) => {

  const [toggleShow, setToggleShow] = useState(
    props.renderExpanded
  );

  const {
    title,
    accordionData,
    children,
    noChevron,
    accordionDataCount,
    hasBackgroundColor,
    dashedLineVisibility,
    accordionTitlePropagation,
    testId
  }: accordionProps = props;

  const [preRender, setPreRender] = useState(
    props.preRender
  );

  const accordionDataValue = accordionData !== undefined ? accordionData : children;

  const accordionDataCountValue = accordionDataCount;

  const toggleView = () => {
    setToggleShow(!toggleShow);
    if (preRender === false) {
      setPreRender(true);
    };
  };

  const classNames = cn('Accordion', props.className, {
    'Accordion--backgroundColor': hasBackgroundColor && !props.accordionLock,
  });

  let toggleState = toggleShow

  if (props.isAccordionOpen !== undefined) {
    toggleState = props.isAccordionOpen
  }

  return (
    <div className={classNames} data-test-id={testId}>
      <AccordionTitle
        title={title}
        setTitleOnHide={props.setTitleOnHide}
        toggleStat={toggleState}
        toggle={toggleView}
        hasBackgroundColor={hasBackgroundColor}
        noChevron={noChevron}
        addLeftComponent={props.addLeftComponent}
        addRightComponent={props.addRightComponent}
        accordionDataCount={accordionDataCountValue}
        accordionLock={props.accordionLock}
        actions={props.actions}
        onClick={props.onTitleClick}
        error={props.errorMessage}
        dashedLineVisibility={dashedLineVisibility}
        accordionTitlePropagation={accordionTitlePropagation}
      />
      {preRender === false ? (
        (toggleState === true) ? (
          <div className='Accordion__open'>
            <AccordionData accordionData={accordionDataValue} />
          </div>
        ) : null
      ) : (
        <div className={`${(toggleState) ? 'Accordion__open' : 'Accordion__collapsed'}`}>
          <AccordionData accordionData={accordionDataValue} />
        </div>
      )}
    </div>

  )
};

Accordion.defaultProps = {
  renderExpanded: false,
  preRender: false,
  noChevron: false,
  accordionLock: false,
  hasBackgroundColor: false,
  dashedLineVisibility: 'hover',
  accordionTitlePropagation: true,
  testId: 'cs-accordion'
} as Partial<accordionProps>;

export default withDeprecatedProp(
  Accordion,
  {
    'accordiondata': 'accordionData',
    'accordiondataCount': 'accordionDataCount',
    'accordionDataLock': 'accordionLock',
    'accordionState': 'isAccordionOpen',
    'backGroundColor': 'hasBackgroundColor',
    'errorMsg': 'errorMessage',
    'onClick': 'onTitleClick',
    'noDefaultIcon': 'noChevron',
    actions: [
      {
        className: 'actionClassName'
      }
    ]
  })
