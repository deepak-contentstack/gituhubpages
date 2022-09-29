import React, { Component } from 'react'
import ContentTypeSkeleton from './ContentTypeSkeleton'
// import notes from './ContentTypeSkeleton.md'

export default {
  title: 'In Progress / Content Type Skeleton',
  component: ContentTypeSkeleton,
  parameters: {
    componentSubtitle:
      'Buttons communicate the action that will occur when the user clicks them. They contain a text label to describe the action, and an icon if appropriate.',
    // notes: { notes },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/dU3u1nUO0vS147GBJE1b9h/Content-Type-Builder?node-id=1292%3A902',
    },
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => <ContentTypeSkeleton></ContentTypeSkeleton>
