import React from 'react'
import renderer from 'react-test-renderer'
import Paragraph from '../Paragraph/Paragraph'

describe('Paragraph', () => {
  it('Paragraph tag', () => {
    const DefaultParagraphTag = () => {
      return (
        <Paragraph tagName='p' text='Paragraph' />
      )
    }
    const tree = renderer.create(<DefaultParagraphTag />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component with an additional class name', () => {
    const DefaultParagraphTag = () => {
      return (
        <Paragraph tagName='p' className="paragraph-tag" text='Paragraph' />
      )
    }
    const tree = renderer.create(<DefaultParagraphTag />).toJSON();
    expect(tree.props.className.includes("paragraph-tag")).toBe(true);
  })

})
