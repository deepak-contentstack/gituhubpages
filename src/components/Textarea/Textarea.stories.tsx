import React from 'react';
import Textarea from './Textarea';
import notes from './Textarea.md'
import { action } from '@storybook/addon-actions';
import DocSubData from '../../utils/components/DocSubData';

const widthList: any = ['small', 'medium', 'large', 'x-large', 'full'];
const componentDescription = 'The Textarea component allows the developer to render a text area for long text requirements.';
const usageDescription = 'Can be used as a text input area where text to be entered can be of multiple lines. Depending on the end goal of the requirement, the user is free to choose any Textarea component.';

export default {
  title: 'Components / Textarea',
  component: Textarea,
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'Specifies the name attribute of input element.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    id: {
      control: { type: 'text' },
      description: 'Specifies the id attribute of input element.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Used to give a hint before entering value.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'Type something...'
        }
      }
    },
    width: {
      control: { type: 'select', options: widthList },
      description: 'Sets the width of the text area .It can be `small`| `medium` |`large` |`x-large`| `full` .',
      table: {
        type: {
          summary: 'union'
        },
        defaultValue: {
          summary: 'full'
        },
      }
    },
    required: {
      control: { type: 'boolean' },
      description: 'Sets that the corresponding input is required and cannot be blank/empty.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Used to disable the input field.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    value: {
      control: { type: 'text' },
      description: 'Lets you add value in the text area.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    rows: {
      control: { type: 'number' },
      description: 'Specifies the row space taken by the text area.',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    error: {
      control: { type: 'boolean' },
      description: 'Used to visually indicate an error.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    showCharacterCount: {
      control: { type: 'boolean' },
      description: 'Shows the count of characters entered in the text area.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Used to limit the length of the input value characters.',
      table: {
        type: {
          summary: 'number'
        }
      },
    },
    onChange: {
      control: { type: 'disabled' },
      description: 'The event occurs when the value of an element has been changed.',
      table: {
        type: {
          summary: 'ChangeEventHandler'
        }
      }
    },
    inputRef: {
      control: { type: 'disabled' },
      description: 'This will add a reference to the text area.',
      table: {
        type: {
          summary: 'RefObject'
        }
      }
    },
    testId: {
      control: { type: 'text' },
      description: 'Used for testing purposes.',
      table: {
        type: {
          summary: 'text'
        },
        defaultValue: {
          summary: 'cs-text-area'
        }
      }
    },
    className: {
      control: { type: 'disabled' },
      description: 'Pass the class names to be appended to this prop.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
  },
  parameters: {
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    notes: { notes },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/QHcXcnGhGDBQ49J1kRwzYf/02-%E2%80%A2-Molecules?node-id=1234%3A12512'
    },
  }
}
const tableDisable = { table: { disable: true } }

export const Default = (args) => {
  return (
    <Textarea
      className={args.className}
      name={args.name}
      id={args.id}
      error={args.error}
      required={args.required}
      width={args.width}
      disabled={args.disabled}
      value={args.value}
      placeholder={args.placeholder}
      rows={args.rows}
      maxLength={args.maxLength}
      showCharacterCount={args.showCharacterCount}
      onChange={action('onChange')}
    ></Textarea>
  )
}
Default.args = {
  name: "someInput",
  id: "someInput",
  rows: 2,
}
Default.argTypes = {
  inputRef: tableDisable,
  testId: tableDisable,
}

export const Disabled = (args) => {
  return (<Textarea
    className={args.className}
    name={args.name}
    id={args.id}
    disabled={args.disabled}
    value={args.value}
  ></Textarea>
  )
}
Disabled.args = {
  name: "someInput",
  id: "someInput",
  value: "Some description",
  disabled: "true",
}
Disabled.argTypes = {
  className: tableDisable,
  placeholder: tableDisable,
  error: tableDisable,
  required: tableDisable,
  width: tableDisable,
  maxLength: tableDisable,
  showCharacterCount: tableDisable,
  rows: tableDisable,
  inputRef: tableDisable,
  testId: tableDisable,
  onChange: tableDisable,
}
Disabled.parameters = {
  docs: {
    storyDescription: 'Can be used where we need to make an input area disabled.',
  },
}

export const WithError = (args) => {
  return (<Textarea
    name={args.name}
    id={args.id}
    error={args.error}
    width={args.width}
    value={args.value}
    onChange={action('onChange')}
  ></Textarea>
  )
}
WithError.args = {
  name: "someInput",
  id: "someInput",
  error: 'true',
}
WithError.argTypes = {
  className: tableDisable,
  placeholder: tableDisable,
  disabled: tableDisable,
  required: tableDisable,
  maxLength: tableDisable,
  showCharacterCount: tableDisable,
  rows: tableDisable,
  inputRef: tableDisable,
  testId: tableDisable,
}
WithError.parameters = {
  docs: {
    storyDescription: 'Can be used to indicate error virtually.',
  },
}

export const MediumSize = (args) => {
  return (
    <Textarea
      className={args.className}
      name={args.name}
      id={args.id}
      width={args.width}
      value={args.value}
      rows={args.rows}
    ></Textarea>
  )
}
MediumSize.args = {
  name: "someInput",
  id: "someInput",
  width: 'medium'
}
MediumSize.argTypes = {
  className: tableDisable,
  placeholder: tableDisable,
  disabled: tableDisable,
  required: tableDisable,
  error: tableDisable,
  maxLength: tableDisable,
  showCharacterCount: tableDisable,
  inputRef: tableDisable,
  testId: tableDisable,
  onChange: tableDisable,
}
MediumSize.parameters = {
  docs: {
    storyDescription: 'Can set width of text area as small, medium, large, x-large or full.',
  },
}

export const WithCharCount = (args) => {
  return (<Textarea
    name={args.name}
    id={args.id}
    width={args.width}
    placeholder={args.placeholder}
    showCharacterCount={args.showCharacterCount}
    maxLength={50}
    onChange={action('onChange')}
  ></Textarea>
  )
}
WithCharCount.args = {
  name: "someInput",
  id: "someInput",
  width: 'medium',
  showCharacterCount: 'true',
  maxLength: '50',
}
WithCharCount.argTypes = {
  className: tableDisable,
  value: tableDisable,
  disabled: tableDisable,
  required: tableDisable,
  error: tableDisable,
  rows: tableDisable,
  inputRef: tableDisable,
  testId: tableDisable,
}
WithCharCount.parameters = {
  docs: {
    storyDescription: 'Can be used to show the count of characters entered in the text area.',
  },
}


