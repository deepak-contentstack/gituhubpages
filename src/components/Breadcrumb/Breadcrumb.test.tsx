import React from 'react'
import renderer from 'react-test-renderer'

import Breadcrumb from './Breadcrumb'
import { BrowserRouter as Router } from 'react-router-dom'

const breadcrumbItems = [
  {
    name: 'Breadcrumb 1',
    path: '#',
    action: () => console.log('Breadcrumb 1 clicked'),
  },
  {
    name: 'Breadcrumb 2',
    path: '#',
    action: () => console.log('Breadcrumb 2 clicked'),
  },
  {
    name: 'Breadcrumb 3',
    path: '#',
    action: () => console.log('Breadcrumb 3 clicked'),
  },
]

describe('Breadcrumb', () => {
  it('render default Breadcrumb component', () => {
    const DefaultBreadcrumb = () => {
      return (
        <Router>
          <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </Router>
      )
    }
    const tree = renderer.create(<DefaultBreadcrumb />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
