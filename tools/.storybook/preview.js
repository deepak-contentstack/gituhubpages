import { addParameters, addDecorator } from '@storybook/react'
import contentstackTheme from './contentstack-theme'
import React from 'react'
import '../../src/static/styles/css/external/reset.css'
// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs'
//import { withPropTypes } from 'storybook-prop-types-addon';
import { withA11y } from '@storybook/addon-a11y'

// Setup Addons
addDecorator(withKnobs)
//addDecorator(withPropTypes);
addDecorator(withA11y)

const scssReq = require.context('!!raw-loader!../../tokens', true, /\-file\.scss$/)
const scssTokenFiles = scssReq.keys().map((filename) => ({
  filename,
  content: scssReq(filename).default
}))

// addParameters({
//   designToken: {
//     files: {
//       //   css: cssTokenFiles,
//       // less: lessTokenFiles,
//       scss: scssTokenFiles
//       //   svgIcons: svgIconTokenFiles
//     }
//   },
//   options: {
//    // panelPosition: 'right'
//   }
// })

addParameters({
  options: {
    theme: contentstackTheme,
    storySort: {
      order: ['OVERVIEW', 'Components', 'In-progress']
    }
  }
})

addParameters({
  info: {
    header: false,
    source: false
  }
})
addParameters({
  layout: 'fullscreen'
})
addParameters({
  designToken: {
    files: {
      //   css: cssTokenFiles,
      // less: lessTokenFiles,
      scss: scssTokenFiles
      //   svgIcons: svgIconTokenFiles
    }
  }
})

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      index: 1
    }
  },
  layout: 'centered',
  controls: {
    expanded: true
  },
  options: {
    storySort: {
      order: ['OVERVIEW', 'Components'],
      method: 'alphabetical'
    }
  }
}

export const decorators = [
  (Story) => (
    <div id="StoryWrapper">
      {' '}
      <Story />{' '}
    </div>
  )
]
