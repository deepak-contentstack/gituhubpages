import React from 'react'
import renderer from 'react-test-renderer'

import Heading from '../Heading/Heading'

describe('Heading', () => {
  it('H1 tag', () => {
    const H1 = () => {
      return (
        <Heading tagName='h1' text='Heading 1' />
      )
    }
    const tree = renderer.create(<H1 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('H2 tag', () => {
    const H2 = () => {
      return (
        <Heading tagName='h2' text='Heading 2' />
      )
    }
    const tree = renderer.create(<H2 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('H3 tag', () => {
    const H3 = () => {
      return (
        <Heading tagName='h3' text='Heading 3' />
      )
    }
    const tree = renderer.create(<H3 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('H4 tag', () => {
    const H4 = () => {
      return (
        <Heading tagName='h4' text='Heading 4' />
      )
    }
    const tree = renderer.create(<H4 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('H5 tag', () => {
    const H5 = () => {
      return (
        <Heading tagName='h5' text='Heading 5' />
      )
    }
    const tree = renderer.create(<H5 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('H6 tag', () => {
    const H6 = () => {
      return (
        <Heading tagName='h6' text='Heading 6' />
      )
    }
    const tree = renderer.create(<H6 />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the component with an additional class name', () => {
    const H1 = () => {
      return (
        <Heading tagName="h1" className="heading-tag" text='Heading 1' />
      )
    }
    const tree = renderer.create(<H1 />).toJSON();
    expect(tree.props.className.includes("heading-tag")).toBe(true);
  })

})
