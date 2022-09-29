import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../index'
import DocSubData from '../../utils/components/DocSubData';

import notes from './Button.md'

const buttonTypeArray: any = ['primary', 'secondary', 'tertiary', 'warning', 'danger', 'success', 'light', 'control', 'delete', 'white', 'bulk-delete', 'outline', 'tertiary-outline', 'outline-delete', 'outline-success']

const iconArray: any = ['PublishAsset', 'Upload', 'Send', 'Proceed'];

const iconAlignmentArray: any = ['left', 'right'];

const buttonSize: any = ['small', 'large', 'default'];

const typeArray: any = ['button', 'submit', 'reset'];

const componentDescription = 'The Button component lets you communicate an action that needs to occur when you click on them. They contain a text label to describe the action, and an icon if appropriate.'

const usageDescription = 'On clicking a button, an event is triggered that initiates an action attached to it. Buttons can contain letters, icons, or a label to describe the action that is performed.'

export default {
  title: 'Components / Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Provide a label to your button',
      table: {
        type: {
          summary: 'text'
        }
      }
    },
    isFullWidth: {
      control: { type: 'boolean' },
      description: 'If button covers full width',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    // isRounded: {
    //   control: { type: 'boolean' },
    //   description: 'If button is rounded',
    //   table: {
    //     type: {
    //       summary: 'boolean'
    //     },
    //     defaultValue: {
    //       summary: false
    //     }
    //   }
    // },
    size: {
      control: { type: 'select', options: buttonSize },
      description: 'Determine the size of the button: small or large',
      table: {
        type: {
          summary: 'select'
        }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Determines whether button is disabled or not',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    // type: {
    //   control: { type: 'select', options: typeArray },
    //   description: 'Type of button action (button, submit,reset)',
    //   table: {
    //     type: {
    //       summary: 'select'
    //     },
    //     defaultValue: {
    //       summary: 'button'
    //     }
    //   }
    // },
    className: {
      control: { type: 'disabled' },
      description: 'Provide the class names to be appended to this prop',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    buttonType: {
      control: { type: 'select', options: buttonTypeArray },
      description: 'Determine the type of button you want to use',
      table: {
        type: {
          summary: 'select'
        },
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    icon: {
      control: { type: 'select', options: iconArray },
      description: 'Pass the icon that you want to add in the button',
      table: {
        type: {
          summary: 'select'
        }
      }
    },
    iconAlignment: {
      control: { type: 'select', options: iconAlignmentArray },
      description: 'Determines the alignment of the icon',
      table: {
        type: {
          summary: 'select'
        }
      }
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Used to set the button in the loading state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    loadingColor: {
      control: { type: 'color' },
      description: 'Determines the color of the loading animation you want to display',
      table: {
        type: {
          summary: 'color'
        }
      }
    },
    onClick: {
      control: { type: 'disabled' },
      description: 'Action that you want to perform when a button is clicked',
      table: {
        type: {
          summary: 'MouseEventHandle'
        }
      }
    },
    children: {
      control: { type: 'disabled' },
      description: 'Action that you want to perform when a button is clicked',
      table: {
        type: {
          summary: 'ReactReactNode'
        }
      }
    },
    href: {
      control: { type: 'disabled' },
      description: 'If you want a button as a link, provide the details in href.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    style: {
      control: { type: 'disabled' },
      description: 'If you want a button as a link, provide the details in href.',
      table: {
        type: {
          summary: 'CSSProperties'
        }
      }
    },
    onlyIcon: {
      control: { type: 'boolean' },
      description: 'If you want to show only icon, set the param to ‘true’',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    iconProps: {
      control: { type: 'diabled' },
      description: 'Pass additional props for icon',
      table: {
        type: {
          summary: 'Partial'
        }
      }
    },
    id: {
      control: { type: 'diabled' },
      description: 'Pass id to the button ',
      table: {
        type: {
          summary: 'string'
        }
      },
    },
    testId: {
      control: { type: 'diabled' },
      description: 'An ID used for testing purposes applied as a data attribute (data-test-id)',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'cs-button'
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
        'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=22%3A3&scaling=min-zoom',
    }
  },
}

const tableDisable = { table: { disable: true } }

export const Default = (args) => {
  return (
    <Button isFullWidth={args.isFullWidth} style={{ backgroundColor: "brown" }} isRounded={args.isRounded} size={args.size} disabled={args.disabled} buttonType={args.buttonType} iconAlignment={args.iconAlignment} isLoading={args.isLoading} loadingColor={args.loadingColor} onlyIcon={args.onlyIcon} icon={args.onlyIcon ? 'Send' : args.icon} onClick={action('onClick')}>{args.onlyIcon ? '' : args.label}</Button>
  );
};
Default.args = { label: 'Default', onlyIcon: false };

export const TypesOfButtons = (args) => {

  return (
    <Button onClick={action('onClick')} buttonType={args.buttonType}>{args.label}</Button>
  );
}

TypesOfButtons.args = { label: 'Types of buttons', buttonType: 'primary' };
TypesOfButtons.parameters = {
  docs: {
    storyDescription: `We have multiple button types such as primary, secondary, tertiary, and so on based on various user requirements. To select a button type, go to <b>Controls</b> in the <b>Canvas</b> area, and click on <b>buttonType</b> dropdown.`
  }
}
TypesOfButtons.argTypes = {
  isFullWidth: tableDisable,
  isRounded: tableDisable,
  disabled: tableDisable,
  style: tableDisable,
  type: tableDisable,
  isLoading: tableDisable,
  className: tableDisable,
  children: tableDisable,
  icon: tableDisable,
  onlyIcon: tableDisable,
  iconAlignment: tableDisable,
  iconProps: tableDisable,
  size: tableDisable,
  loadingColor: tableDisable,
  onClick: tableDisable,
  href: tableDisable,
  id: tableDisable,
  testId: tableDisable
}

export const WithIcon = (args) => {

  return (
    <>
      <span>
        <Button onClick={action('onClick')} buttonType="primary" iconAlignment={args.iconAlignment} icon={args.icon}>
          {args.label}
        </Button>
      </span>
    </>
  );
};

WithIcon.args = { label: 'Publish', icon: 'MarketplaceSmallFilledWhite' };
WithIcon.parameters = {
  docs: {
    storyDescription: 'You can provide icons to buttons as follows:'
  }
}
WithIcon.argTypes = {
  isFullWidth: tableDisable,
  isRounded: tableDisable,
  disabled: tableDisable,
  style: tableDisable,
  type: tableDisable,
  isLoading: tableDisable,
  className: tableDisable,
  buttonType: tableDisable,
  children: tableDisable,
  onlyIcon: tableDisable,
  iconProps: tableDisable,
  size: tableDisable,
  loadingColor: tableDisable,
  onClick: tableDisable,
  href: tableDisable,
  id: tableDisable,
  testId: tableDisable
}

export const Disabled = (args) => (
  <Button onClick={action('onClick')} disabled={args.disabled}>
    {args.label}
  </Button>
);
Disabled.args = { label: 'Disabled', disabled: true };
Disabled.parameters = {
  docs: {
    storyDescription: 'A non-functional button, depending on the use case, can be displayed in a disabled state.'
  }
}
Disabled.argTypes = {
  isFullWidth: tableDisable,
  isRounded: tableDisable,
  style: tableDisable,
  type: tableDisable,
  isLoading: tableDisable,
  className: tableDisable,
  buttonType: tableDisable,
  children: tableDisable,
  icon: tableDisable,
  onlyIcon: tableDisable,
  iconAlignment: tableDisable,
  iconProps: tableDisable,
  size: tableDisable,
  loadingColor: tableDisable,
  onClick: tableDisable,
  href: tableDisable,
  id: tableDisable,
  testId: tableDisable
}

export const WithLoader = (args) => (
  <>
    <Button onClick={action('onClick')} buttonType="primary" icon="PublishAsset" isLoading={args.isLoading}>
      {args.label}
    </Button>
    <Button onClick={action('onClick')} className="ml-10" buttonType="secondary" icon="Save" isLoading={args.isLoading} loadingColor={args.loadingColor}>
      {args.label}
    </Button>
  </>
);
WithLoader.args = { label: 'Publish', isLoading: true, loadingColor: "#6c5ce7" };
WithLoader.parameters = {
  docs: {
    storyDescription: 'You can provide a loading state to buttons until its respective actions are performed.'
  }
};
WithLoader.argTypes = {
  isFullWidth: tableDisable,
  isRounded: tableDisable,
  style: tableDisable,
  icon: tableDisable,
  type: tableDisable,
  className: tableDisable,
  buttonType: tableDisable,
  children: tableDisable,
  disabled: tableDisable,
  onlyIcon: tableDisable,
  iconAlignment: tableDisable,
  iconProps: tableDisable,
  size: tableDisable,
  onClick: tableDisable,
  href: tableDisable,
  id: tableDisable,
  testId: tableDisable
}

