import React from 'react'
import './PageTitle.css'
import cn from 'classnames'

class PageTitle extends React.Component<any, any> {
  render() {
    const { className, title, ctdetails, ...otherProps } = this.props

    const classNames = cn('PageTitle', className)

    return (
      <div className={classNames} {...otherProps}>
        {title}
        {ctdetails && ctdetails()}
        {/* {ctdetails && ctdetails.title ? <span className="PageTitle--ct_name"> {ctdetails.title} </span> : null} */}
      </div>
    )
  }
}

export default PageTitle
