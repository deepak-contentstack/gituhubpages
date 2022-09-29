import React, { MouseEventHandler } from 'react'
import Button from '../Button/Button'
import Icon from '../Icon2/Icon'
import PageTitle from '../PageTitle/PageTitle'
import cn from 'classnames'

// import Grid from '../Grid/Grid'
import './PageHeader.css'

interface IInfo {
  link: string
}
interface IHeaderTitle {
  label: string | React.ReactNode
  component?: React.ReactNode
  info?: string
  editable?: boolean
}

interface IHeaderContent {
  content: string | React.ReactNode
}

interface IHeaderAction {
  label: string | React.ReactNode
  onClick?: MouseEventHandler
  type?:
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'muted'
  | 'light'
  | 'dark'
  | 'link'
  | 'sidebar'
}

interface IPageHeader {
  title?: IHeaderTitle
  content?: string | React.ReactNode
  actions?: Array<IHeaderAction>
  className?: string
  component?: React.ReactNode
}

const Info: React.FunctionComponent<IInfo> = props => {
  const { link } = props
  return (
    <a href={link} className="PageHeaderIcon">
      <Icon icon="HelpDocs" />
    </a>
  )
}

const HeaderTitle: React.FunctionComponent<IHeaderTitle> = props => {
  const { label, component, info, editable } = props
  return (
    <div className="PageTitleWrapper">
      {label && <PageTitle className={(editable) ? 'PageTitle--editable' : ''} title={label} />}
      {info && <Info link={info} />}
      {component}
    </div>
  )
}

const HeaderContent: React.FunctionComponent<IHeaderContent> = props => {
  const { content } = props
  return <div className="PageSubTitle">{content}</div>
}

const HeaderAction: React.FunctionComponent<IHeaderAction> = props => {
  const { label, onClick, type } = props
  if (typeof label === 'string' && type) {
    return (
      <Button buttonType={type as any} onClick={onClick}>
        {label}
      </Button>
    )
  }
  else if (type === "sidebar") {
    return (
      <div className="PageHeader--Sidebar" >
        {label}
      </div>
    );
  }
  else {
    return <>{label}</>
  }
}

const PageHeader: React.FunctionComponent<IPageHeader> = props => {
  const { title, content, actions, className, component } = props
  const classNames = cn('PageHeader', className)

  return (
    <>
      {
        component ? <>{component}</> :
          <div className={classNames}>
            {/* <div className="flex-justify flex-v-center"> */}
            <HeaderTitle {...title} />
            {Array.isArray(actions) && (
              <div className="actions flex-v-center">
                {actions.map((action: IHeaderAction, index: number) => {
                  return <HeaderAction key={index} {...action} />
                })}
              </div>
            )}
            {/* </div> */}
            {content && <HeaderContent content={content} />}
          </div>
        /* <Grid rows={1} columns={2} justifyContent={'space-between'}>
          <HeaderTitle {...title} />
          {Array.isArray(actions) && (
            <div className="actions flex-v-center">
              {actions.map((action: IHeaderAction, index: number) => {
                return <HeaderAction key={index} {...action} />
              })}
            </div>
          )}
        </Grid> */
      }
    </>
  )
}

export default PageHeader
