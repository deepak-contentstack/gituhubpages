import React from 'react'
import ButtonGroup from './ButtonGroup'
import notes from './ButtonGroup.md'
import { action } from '@storybook/addon-actions';

import { Button } from '../Button'
import DocSubData from '../../../utils/components/DocSubData'

const componentDescription = 'ButtonGroup component can be used to group two or more buttons together.'
const usageDescription='You can group two or more Buttons in a ButtonGroup when an action required by the user has more than one option. Here, the negative action button is paired with a positive action button in that order. The negative action buttons are placed on the left, whereas the positive action buttons should be placed on the right.'

export default {
    title: 'Components /Button/ButtonGroup',
    component: ButtonGroup,
    argTypes:{
        className: {
        control: { type: 'disabled' },
        description: 'Provide the class names to be appended to this prop',
        table: {
            type: {
            summary: 'string'
            }
        }
        },
        children: {
        control: { type: 'disabled' },
        description: 'Add child elements defined within a component.',
        table: {
            type: {
            summary: 'ReactReactNode'
            }
        }
        },
        style: {
        control: { type: 'disabled' },
        description: 'Pass the CSS properties for the button group.',
        table: {
            type: {
            summary: 'CSSProperties'
            }
        }
        },
        testId: {
        control: { type: 'diabled' },
        description: 'Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id).',
        table: {
            type: {
            summary: 'string'
            },
            defaultValue: {
            summary: 'cs-button-group'
            }
        },
        }
    },
    parameters: {
        componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
        notes: { notes },
        design: {
            type: 'figma',
            url:
              'https://www.figma.com/proto/NUaPd7QxttcJAQfx9KYjBu/01-%E2%80%A2-Atoms-%26-Properties?page-id=52%3A6&node-id=4352%3A13557&viewport=241%2C48%2C0.12&scaling=min-zoom',
          }
    }
}

const tableDisable = { table: { disable: true } }

export const Default = (args) => (
    <ButtonGroup>
      <Button onClick={action('onClick')} buttonType="light">Cancel</Button>
      <Button onClick={action('onClick')} buttonType="secondary" icon="UnpublishAsset">Unpublish</Button>
      <Button onClick={action('onClick')} buttonType="primary" icon="PublishWhite">Publish</Button>
    </ButtonGroup>
  )
  
