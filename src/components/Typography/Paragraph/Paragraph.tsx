import React, { Component } from 'react'
import './Paragraph.css'

export type ParagraphProps = {
  /**
  * Pass the class names to be appended to this prop
  */
  className?: string
  /**
  * Name of the html tag
  */
  tagName?: 'p'
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
  text: 'Paragraph',
  testId: 'cs-paragraph-tag',
  tagName: 'p'
}

export class Paragraph extends Component<ParagraphProps> {
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

export default Paragraph
