import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { withRouterBreadcrumb as Breadcrumb } from '../../index'
import notes from './Breadcrumb.md'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'In-progress / Breadcrumb',
  component: Breadcrumb,
  decorators: [withKnobs, withA11y],
  parameters: {
    componentSubtitle: 'Breadcrumbs are a great way to show hierarchy-based information for a page',
    notes: { notes },
    design: {
      type: 'figma',
      url: '',
    },
  },
}
const Component = () => <span> Breadcrumb 3</span>

const breadcrumbItems = [
  {
    name: 'Breadcrumb 1',
    path: '#path',
    action: () => console.log('Breadcrumb 1 clicked'),
  },
  {
    name: 'Breadcrumb 2',
    path: '#path1',
    action: () => console.log('Breadcrumb 2 clicked'),
  },
  {
    name: <Component />,
    path: '#path2',
    action: () => console.log('Breadcrumb 3 clicked'),
  },
]

export const Default = () => {
  return (
    <Router>
      <div>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>
    </Router>
  )
}

export const WithMaxWidth = () => {
  return (
    <Router>
      <div>
        <Breadcrumb breadcrumbItems={breadcrumbItems} tooltipPosition="top" maxWidth={50}/>
      </div>
    </Router>
  )
}
