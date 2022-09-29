import React from 'react'
import renderer from 'react-test-renderer'

import PageTitle from './PageTitle'

describe('PageTitle', () => {
  it('render PageTitle', () => {
    const DefaultPageTitle = () => {
      return <PageTitle title="Page Title 1"></PageTitle>
    }
    const tree = renderer.create(<DefaultPageTitle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
