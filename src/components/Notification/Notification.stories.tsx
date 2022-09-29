import React, { useState } from 'react'
import Notification from './Notification'
import DocSubData from '../../utils/components/DocSubData';
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import notes from './Notification.md'

const componentDescription = "Notifications are messages relayed to the users as a response to any action performed by them."
const usageDescription = "Notifications are useful when you want to inform users about the performed actions. They communicate with users and provide them with immediate feedback on the performed actions."

const notificationTypeArray: any = ['default', 'success', 'message', 'warning', 'error', 'shortcut', 'dark', 'custom']
const positionArray: any = ["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"]

export default {
  title: 'Components /Notification',
  component: Notification,
  argTypes: {
    type: {
      control: { type: 'select', options: notificationTypeArray },
      description: 'Specify the type of notification you want to use.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
        }
      }
    },
    notificationProps: {
      control: 'disabled',
      description:
        'Provides additional properties for a Toast notification.',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
        },
      },
    },
    notificationContent: {
      control: 'disabled',
      description:
        'Displays the text or the component you want to notify.',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
        },
      },
    },
    cta: {
      control: 'disabled',
      description: 'Specify the action that you want to perform when a button is clicked on.',
      table: {
        type: {
          summary: 'ReactReactNode'
        },
        defaultValue: {
        },
      }
    },
    testId: {
      control: 'disabled',
      description: 'Pass an ID that can be used for testing purposes and is applied as a data attribute (data-test-id).',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'cs-notification'
        }
      },
    },
    "Following are the prop values that you can pass under notificationProps:": {
      control: 'disabled',
      description: '',
      table: {
        type: {
        },
        defaultValue: {
        },
      },
    },
    hideProgressBar: {
      control: { type: 'boolean' },
      description: 'Lets you display/hide the Progress bar.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
        },
      }
    },
    position: {
      control: { type: 'select', options: positionArray },
      description: 'Changes the display position of the toast message.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'bottom-center'
        }
      }
    },
    closeOnClick: {
      control: { type: 'boolean' },
      description: 'Lets you close the toast message when clicked on.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        },
      }
    },
    autoClose: {
      control: 'disabled',
      description: 'Lets you close a toast message after a time interval.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'Default value is 3 secs, with CTA 5 secs'
        },
      }
    },
    closeButton: {
      control: { type: 'boolean' },
      description: 'Lets you close the toast message on clicking the close button.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      },
    },
    transition: {
      control: 'disabled',
      description: 'Provide a transition to the toast message.',
      table: {
        type: {
          summary: 'Bounce | Flip | Zoom | Slide | cssTransition'
        },
        defaultValue: {
          summary: 'Bounce'
        }
      }
    },
    "Following are the prop values that you can pass under notificationContent:": {
      control: 'disabled',
      description: '',
      table: {
        type: {
        },
        defaultValue: {
        },
      },
    },
    component: {
      control: { type: 'disabled' },
      description: 'Provide a custom component that can be passed as the props.',
      table: {
        type: {
          summary: 'ReactReactNode'
        },
        defaultValue: {
        },
      },
    },
    text: {
      control: { type: 'text' },
      description: 'Provide the text that can be passed to the toast message.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
        },
      }
    },
    description: {
      control: { type: 'text' },
      description: 'Provide the description that can be passed to the toast message.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
        },
      }
    },
    error: {
      control: { type: 'disabled' },
      description: 'Pass an object with the key as the error title and value as the description of it (Array). Multiple errors can be shown.',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
        },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fVHE6tRA25bQ14ls3agjPv/Toast-Messages?node-id=0%3A1',
    },
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
  }
}
const tableDisable = { table: { disable: true } }

const ButtonComponent = (props: any) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      isLoading={loading}
      onClick={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, props.autoClose)
        props.onClick()
      }}
    >
      {props.label}
    </Button>
  )
}

export const Default = (args) => {
  return (
    <ButtonComponent
      autoClose={3000}
      label={'Button'}
      onClick={() => {
        Notification({
          notificationContent: { text: args.text, description: args.description, component: args.component, error: args.error },
          notificationProps: {
            hideProgressBar: args.hideProgressBar, position: args.position, closeOnClick: args.closeOnClick, draggable: args.draggable,
            autoClose: args.autoClose, transition: args.transition, closeButton: args.closeButton
          },
          type: args.type,
        })
      }}
    />
  )
}
Default.args = {
  text: 'This is the text to be displayed',
  description: 'This is the description to be displayed',
  hideProgressBar: true,
  type: 'success'
}

Default.parameters = {
  docs: {
    storyDescription: notes
  }
}

export const Error = (args) => {

  const error = {
    "error_message": "Entry publishing failed. Please enter valid data.",
    "errors": { "single_line": ["is a required field."], "group._metadata.uid": ["is a required field."], "group_ref._metadata.uid": ["is a required field."] }
  }

  return (
    <ButtonComponent
      autoClose={4000}
      label={'Error'}
      onClick={() => {
        Notification({
          displayContent: { error: error },
          notifyProps: {
            hideProgressBar: args.hideProgressBar, position: args.position,
            autoClose: args.autoClose, transition: args.transition, closeButton: args.closeButton
          },
          type: 'error',
        })
      }}
    />
  )
}
Error.parameters = {
  docs: {
    storyDescription: `Lets you display an “error” toast message.`
  }
}

Error.argTypes = {
  type: tableDisable,
  notifyProps: tableDisable,
  notificationContent: tableDisable,
  testId: tableDisable,
  cta: tableDisable,
  component: tableDisable,
  text: tableDisable,
  description: tableDisable,
  transition: tableDisable,
  autoClose: tableDisable
}

export const Shortcut = (args) => {

  return (
    <ButtonComponent
      autoClose={3000}
      label={'Shortcut'}
      onClick={() => {
        Notification({
          displayContent: {
            component: (
              <span className="flex-v-center">
                <span>Pro Tip : Press</span>
                <span className="Key-Shortcut">
                  <Icon icon="NewFolder" />
                </span>{' '}
                <span>+</span>
                <span className="Key-Shortcut">m</span> <span>to show / hide menu bar</span>
              </span>
            ),
          },
          notificationProps: {
            hideProgressBar: args.hideProgressBar, position: args.position, closeOnClick: args.closeOnClick,
            autoClose: args.autoClose, transition: args.transition, closeButton: args.closeButton
          },
          type: 'shortcut',
        })
      }}
    />
  )
}
Shortcut.args = {
  hideProgressBar: true
}

Shortcut.parameters = {
  docs: {
    storyDescription: `Lets you display the shortcut of a certain component/button within a toast message.`
  }
}

Shortcut.argTypes = {
  type: tableDisable,
  testId: tableDisable,
  cta: tableDisable,
  text: tableDisable,
  description: tableDisable,
  notificationContent: tableDisable,
  notificationProps: tableDisable,
  error: tableDisable,
  transition: tableDisable,
  autoClose: tableDisable
}

export const WithCTA = (args) => {
  const Success = () => {
    return <Button onClick={() => alert('Click triggered')} buttonType="success">View Publish Queue</Button>
  }
  const Warning = () => {
    return <Button onClick={() => alert('Click triggered')} buttonType="warning">View Publish Queue</Button>
  }
  const Error = () => {
    return <Button onClick={() => alert('Click triggered')} buttonType="danger">View Publish Queue</Button>
  }
  return (
    <>
      <div className="pb-10">
        <ButtonComponent
          autoClose={5000}
          label={'Success'}
          onClick={() => {
            Notification({
              notificationContent: { text: args.text, description: args.description, component: args.component },
              notificationProps: {
                hideProgressBar: args.hideProgressBar, position: args.position, closeOnClick: args.closeOnClick,
                autoClose: args.autoClose, transition: args.transition, closeButton: args.closeButton
              },
              type: 'success',
              cta: <Success />,
            })
          }
          }
        />
      </div>
      <div className="pb-10">
        <ButtonComponent
          autoClose={5000}
          label='Warning'
          onClick={() => {
            Notification({
              notificationContent: { text: args.text, description: args.description, component: args.component },
              notificationProps: {
                hideProgressBar: args.hideProgressBar, position: args.position, closeOnClick: args.closeOnClick,
                autoClose: args.autoClose
              },
              type: 'warning',
              cta: <Warning />,
            })
          }
          }
        />
      </div>
      <div className="pb-10">
        <ButtonComponent
          autoClose={5000}
          label={'Error'}
          onClick={() => {
            Notification({
              notificationContent: { text: args.text, description: args.description, component: args.component },
              notificationProps: {
                hideProgressBar: args.hideProgressBar, position: args.position, closeOnClick: args.closeOnClick,
                autoClose: args.autoClose
              },
              type: 'error',
              cta: <Error />,
            })
          }
          }
        />
      </div>
    </>
  )
}

WithCTA.args = {
  text: 'Your bulk publish request is in progress.',
  description: 'Please check Publish Queue for more details.',
  hideProgressBar: true
}

WithCTA.parameters = {
  docs: {
    storyDescription: `Lets you display a toast message that is associated with specific call-to action.`
  }
}

WithCTA.argTypes = {
  type: tableDisable,
  testId: tableDisable,
  component: tableDisable,
  notificationContent: tableDisable,
  notificationProps: tableDisable,
  error: tableDisable,
  transition: tableDisable,
  autoClose: tableDisable
}