import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import ActionBar from './ActionBar'
import notes from './ActionBar'


export default {
  title: 'Components / ActionBar',
  component: ActionBar,
  decorators: [withKnobs, withA11y],
  parameters: {
    componentSubtitle: 'Operation tool',
    notes: { notes },
  },
}

export const Default = () => {
  return (
    <ActionBar hoverMessage="Abc" onClick={() => console.log("Action bar clicked")} ><div>Abc</div></ActionBar>
  )
}

export const Disabled = () => {
  return (
    <ActionBar hoverMessage="Abc" onClick={() => console.log("Action bar clicked")} disabled={true} ><div>Abc</div></ActionBar>
  )
}