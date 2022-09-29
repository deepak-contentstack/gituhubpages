import React, { Component } from 'react'
import './Heading.css'

export type HeadingProps = {
  /**
  * Pass the class names to be appended to this prop
  */
  className?: string
  /**
  * Name of the html tag
  */
  tagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
  * Data that you want to display in tag
  */
  text?: string
  /**
  * Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id)
  */
  testId?: string;
} & typeof defaultProps

const defaultProps = {
  tagName: 'h1',
  text: 'Heading 1',
  testId: 'cs-heading-tag'
}

export class Heading extends Component<HeadingProps> {
  static defaultProps = defaultProps

  render() {
    const { tagName, text, className, testId } = this.props
    const Element: any = tagName
    return (
      <Element className={className} data-test-id={testId}>
        {text}
      </Element>
    )
  }
}

export default Heading
