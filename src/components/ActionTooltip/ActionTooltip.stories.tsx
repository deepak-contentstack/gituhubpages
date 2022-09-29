import React from 'react'
import { withDesign } from 'storybook-addon-designs'
// @ts-ignore
import notes from './ActionTooltip.md'
import ActionTooltip, { IActionTooltip } from './ActionTooltip'
// import Icon from '../Icon2/Icon'

const tableDisable = { table: { disable: true } }

export default {
  title: 'Components / ActionTooltip',
  component: ActionTooltip,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: 'Operation tool',
    notes: { notes },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=213%3A558&scaling=min-zoom'
    }
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Option for adding custom class',
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    testId: {
      control: { type: 'text' },
      description: 'An ID used for testing purposes applied as a data attribute (data-test-id)',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'cs-actiontooltip'
        }
      },
      type: {
        required: false
      }
    },
    type: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
      description: 'Provide the type of tooltip ',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'primary'
        }
      },
      type: {
        required: false
      }
    },
    children: {
      control: { type: 'object' },
      description: 'Provide the content for which Tooltip needs to be displayed',
      table: {
        type: {
          summary: 'string|ReactNode'
        }
      }
    },
    list: {
      control: { type: 'object' },
      description: 'Provide the list of actions for the tooltip',
      table: {
        type: {
          summary: 'array'
        }
      }
    },
    data: {
      control: { type: 'disabled' },
      description: 'Provide the data for the component, if provided as label',
      table: {
        type: {
          summary: 'array'
        }
      }
    },
    label: {
      control: { type: 'disabled' },
      description: 'Provide the label for the tooltip as a component or string',
      table: {
        type: {
          summary: 'string|ReactNode'
        }
      }
    },
    right: {
      control: { type: 'text' },
      description: 'The right CSS property to specify the horizontal position of tooltip',
      table: {
        type: {
          summary: 'string|number'
        }
      }
    }
  }
}

export const Default = (args: IActionTooltip) => {
  const toolList = [
    {
      label: () => <div></div>,
      title: 'Edit',
      action: () => console.log('Edit triggered')
    },
    {
      label: <div></div>,
      title: 'Copy UID',
      action: () => console.log('Copy triggered'),
      displayType: 'clipboard',
      copyText: 'ct_uid'
    },
    {
      label: <div></div>,
      title: 'Publish',
      action: () => console.log('PublishIcon triggered')
    },
    {
      label: <div></div>,
      title: 'Trash',
      action: () => console.log('Trash triggered'),
      className: 'ActionListItem--warning'
    }
  ]

  return (
    <>
      <ActionTooltip list={toolList} className={args.className} type={args.type} right={args.right}>
        {args.children}
      </ActionTooltip>
    </>
  )
}

Default.args = {
  className: 'ActionTooltip-row',
  type: 'primary',
  children: 'Can Augmented And Future Reality Build Empathy?',
  testId: 'cs-actiontooltip',
  right: '0'
}

Default.argTypes = {
  list: tableDisable,
  data: tableDisable,
  label: tableDisable
}

export const CustomAction = (args) => {
  const actions = [
    {
      label: <div></div>,
      title: args.title,
      action: () => console.log(`${args.title} triggered`),
      className: args.className
    }
  ]

  return (
    <div className="flex-column">
      <span className="pb-20 font-size-medium"></span>
      <ActionTooltip list={actions} className="ActionTooltip-row">
        The {args.title} action for this row has a custom classname
      </ActionTooltip>
    </div>
  )
}

CustomAction.args = {
  className: 'ActionListItem--warning',
  title: 'Trash'
}

CustomAction.argTypes = {
  className: {
    control: { type: 'text' },
    description: 'Provide the custom className to action in the tooltip',
    table: {
      type: {
        summary: 'string'
      }
    }
  },
  title: {
    control: { type: 'text' },
    description: 'Provide the title/icon to action in the tooltip',
    table: {
      type: {
        summary: 'string'
      }
    }
  },
  list: tableDisable,
  data: tableDisable,
  right: tableDisable,
  label: tableDisable,
  testId: tableDisable,
  children: tableDisable,
  type: tableDisable
}
