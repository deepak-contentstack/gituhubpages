import React, { useState } from 'react';

import Accordion, { AccordionActionsList } from './Accordion';
import Field from '../Field/Field';
import FieldLabel from '../FieldLabel/FieldLabel';
import InstructionText from '../InstructionText/InstructionText';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
//import Icon from '../Icon2';
import Tooltip from '../Tooltip/Tooltip';
import DocSubData from '../../utils/components/DocSubData';

import notes from './Accordion.md';

const dashedLineVisibilityArray: any = ['hover', 'always'];

const componentDescription = <>
  <div>The Accordion component allows you to reveal or hide child components that are stacked vertically.</div>
  <div>Each Accordion item can be collapsed with just a short label visible or expanded to display the full content.</div>
</>

const usageDescription = <ul>
  <li>To show the related information in an organized form.</li>
  <li>To condense pages and reduce scrolling when content is not crucial to be read in its entirety.</li>
  <li>When you don’t want to display all the content at once, but instead want to provide the user the option of viewing the related content.</li>
</ul>

export default {
  title: 'Components / Accordion',
  component: Accordion,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Sets the Title that is displayed on the tab.',
      table: {
        type: {
          summary: 'string | React.ReactNode'
        }
      },
      type: {
        required: true
      }
    },
    isAccordionOpen: {
      control: { type: 'boolean' },
      description: 'Gives you the control on the opening and closing of the accordion externally.',
      table: {
        type: {
          summary: 'boolean | undefined'
        }
      }
    },
    accordionLock: {
      control: { type: 'boolean' },
      description: 'Set this prop to `true` if you want to disable the toggle functionality of the accordion.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    addLeftComponent: {
      control: { type: 'disabled' },
      description: 'Lets you add an icon on the left hand side of the accordion title',
      table: {
        type: {
          summary: 'React.ReactNode'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    addRightComponent: {
      control: { type: 'disabled' },
      description: 'Lets you add an icon on the right hand side of the accordion title',
      table: {
        type: {
          summary: 'React.ReactNode'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    accordionData: {
      control: { type: 'text' },
      description: 'Lets you send the data of a respective accordion as a prop and not as a child.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    children: {
      control: { type: 'disabled' },
      description: 'Lets you send a ReactNode or child component as the accordionData. Wrap it inside `<Accordion></Accordion>`',
      table: {
        type: {
          summary: 'React.ReactNode'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    className: {
      control: { type: 'disabled' },
      description: 'Provide the class names to be appended to this prop',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    noChevron: {
      control: { type: 'boolean' },
      description: "Sets this prop to 'true' if you don't want the default chevron icon rendered.",
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    preRender: {
      control: { type: 'boolean' },
      description: 'Set this prop to `true` if you want the data to be pre-rendered i.e. before expanding.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    renderExpanded: {
      control: { type: 'boolean' },
      description: 'Set this prop to `true` if you want the Accordion to be open on its first render.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    setTitleOnHide: {
      control: { type: 'text' },
      description: 'Changes or sets the title of the accordion on collapsing and expanding it.',
      table: {
        type: {
          summary: 'any | React.ReactNode'
        }
      }
    },
    accordionDataCount: {
      control: { type: 'number' },
      description: 'Displays the number of data present in the accordion.',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    hasBackgroundColor: {
      control: { type: 'boolean' },
      description: 'Set this prop to `true` if you want a background color to show up on the accordion heading upon hovering.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    onTitleClick: {
      control: { type: 'disabled' },
      description: 'Function that determines what actions to be performed when you click on the title of the accordion.',
      table: {
        type: {
          summary: 'function'
        }
      }
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Displays the error related to the accordion.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    dashedLineVisibility: {
      control: { type: 'select', options: dashedLineVisibilityArray },
      description: "Controls the visibility of the dashed line in the accordion's heading.",
      table: {
        type: {
          summary: 'Partial'
        }
      }
    },
    accordionTitlePropagation: {
      control: { type: 'boolean' },
      description: 'Set this to `true` if you want the title to propagate the event when it is clicked on.',
      table: {
        type: {
          summary: false
        }
      },
    },
    testId: {
      control: { type: 'disabled' },
      description: 'Pass an ID that you can use for testing purposes. It is applied as a data attribute (data-test-id).',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'cs-accordion'
        }
      },
    },
    actions: {
      control: { type: 'disabled' },
      description: 'Adds custom actions to the accordion. Each action is an object having properties of the component, onClick and actionClassName.',
      table: {
        type: {
          summary: 'array'
        }
      }
    },
    "Following are the prop values that you can pass under actions array as an object:": {
      control: 'disabled',
      description: '',
      table: {
        type: {
          // summary: '',
        },
        defaultValue: {
        },
      },
    },
    component: {
      control: 'disabled',
      description: 'Pass the component you want to display as an action',
      table: {
        type: {
          summary: 'React.ReactNode',
        }
      },
    },
    onClick: {
      control: 'disabled',
      description: 'Function that determines the action(s) to be performed when the component is clicked on.',
      table: {
        type: {
          summary: 'function',
        }
      },
    },
    actionClassName: {
      control: { type: 'disabled' },
      description: 'Provide the class names to be appended to that particular action',
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
      url:
        'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=22%3A3&scaling=min-zoom',
    }
  },
}

const tableDisable = { table: { disable: true } }

export const Default = (args) => {

  return (
    <Accordion
      title={args.title}
      accordionDataCount={args.accordionDataCount}
      hasBackgroundColor={args.hasBackgroundColor}
      dashedLineVisibility={args.dashedLineVisibility}
      accordionTitlePropagation={args.accordionTitlePropagation}
      errorMessage={args.errorMessage}
      setTitleOnHide={args.setTitleOnHide}
      renderExpanded={args.renderExpanded}
      preRender={args.preRender}
      noChevron={args.noChevron}
      accordionLock={args.accordionLock}
    >
      <Field>
        <FieldLabel required htmlFor="name">
          {' '}
          Name
        </FieldLabel>
        <TextInput
          required
          value=""
          placeholder="Type your name.."
          name="name"
          autoComplete="off"
        ></TextInput>
        <InstructionText>Name should include middle name also</InstructionText>
      </Field>
    </Accordion>
  );
};
Default.args = { title: 'Default View', isAccordionOpen: false, accordionLock: false, noChevron: false, preRender: false, renderExpanded: false, accordionDataCount: 2, hasBackgroundColor: true, dashedLineVisibility: 'hover', accordionTitlePropagation: false, errorMessage: '', setTitleOnHide: '' };
Default.argTypes = {
  accordionTitlePropagation: tableDisable,
  setTitleOnHide: tableDisable,
  isAccordionOpen: tableDisable,
}

export const MultipleAccordion = (args) => {
  return (
    <>
      <Accordion title={'Group 1'} accordionDataCount={1}>
        <Field>
          <FieldLabel required htmlFor="name">
            {' '}
            Name
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your name.."
            name="name"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Name should include middle name also</InstructionText>
        </Field>
      </Accordion>
      <Accordion title={'Group 2'} accordionDataCount={2}>
        <Field>
          <FieldLabel required htmlFor="location">
            {' '}
            Location
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your name.."
            name="name"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Name should include middle name also</InstructionText>
        </Field>
        <Field>
          <FieldLabel required htmlFor="location">
            {' '}
            Name
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your location.."
            name="location"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Include house no also</InstructionText>
        </Field>
      </Accordion>
      <Accordion title={'Group 3'} accordionDataCount={1}>
        <Field>
          <FieldLabel required htmlFor="name">
            {' '}
            Name
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your name.."
            name="name"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Name should include middle name also</InstructionText>
        </Field>
      </Accordion>
    </>
  );
};
// MultipleAccordion.args = { title: 'Async count set' };
MultipleAccordion.parameters = {
  docs: {
    storyDescription: `Lets you add multiple accordions one below the other.`
  }
}
MultipleAccordion.argTypes = {
  title: tableDisable,
  accordionLock: tableDisable,
  noChevron: tableDisable,
  preRender: tableDisable,
  renderExpanded: tableDisable,
  addLeftComponent: tableDisable,
  addRightComponent: tableDisable,
  accordionData: tableDisable,
  children: tableDisable,
  className: tableDisable,
  actions: tableDisable,
  onTitleClick: tableDisable,
  testId: tableDisable,
  accordionDataCount: tableDisable,
  onlyIcon: tableDisable,
  hasBackgroundColor: tableDisable,
  dashedLineVisibility: tableDisable,
  accordionTitlePropagation: tableDisable,
  errorMessage: tableDisable,
  setTitleOnHide: tableDisable,
  isAccordionOpen: tableDisable,
  "Following are the prop values that you can pass under actions array as an object:": tableDisable,
  component: tableDisable,
  onClick: tableDisable,
  actionClassName: tableDisable
}

export const NestedAccordion = (args) => {
  return (
    <Accordion title={'Group 1'} accordionDataCount={2} hasBackgroundColor={args.hasBackgroundColor}>
      <Field>
        <FieldLabel required htmlFor="name">
          {' '}
          G Name
        </FieldLabel>
        <TextInput
          required
          value=""
          placeholder="Type your name.."
          name="name"
          autoComplete="off"
        ></TextInput>
        <InstructionText>Name should include middle name also</InstructionText>
      </Field>
      <Accordion title={'Group 2'} accordionDataCount={1}>
        <Field>
          <FieldLabel required htmlFor="name">
            {' '}
            Name
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your name.."
            name="name"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Name should include middle name also</InstructionText>
        </Field>
        <Accordion title={'Group 3'} accordionDataCount={1}>
          <Field>
            <FieldLabel required htmlFor="name">
              {' '}
              Name
            </FieldLabel>
            <TextInput
              required
              value=""
              placeholder="Type your name.."
              name="name"
              autoComplete="off"
            ></TextInput>
            <InstructionText>Name should include middle name also</InstructionText>
          </Field>
          <Accordion title={'Group 4'} accordionDataCount={1}>
            <Field>
              <FieldLabel required htmlFor="name">
                {' '}
                Name
              </FieldLabel>
              <TextInput
                required
                value=""
                placeholder="Type your name.."
                name="name"
                autoComplete="off"
              ></TextInput>
              <InstructionText>Name should include middle name also</InstructionText>
            </Field>
          </Accordion>
        </Accordion>
      </Accordion>
    </Accordion>
  );
};
NestedAccordion.args = { hasBackgroundColor: true };
NestedAccordion.parameters = {
  docs: {
    storyDescription: `Lets you add a nested accordion.`
  }
}
NestedAccordion.argTypes = {
  title: tableDisable,
  accordionLock: tableDisable,
  noChevron: tableDisable,
  preRender: tableDisable,
  renderExpanded: tableDisable,
  addLeftComponent: tableDisable,
  addRightComponent: tableDisable,
  accordionData: tableDisable,
  children: tableDisable,
  className: tableDisable,
  actions: tableDisable,
  onTitleClick: tableDisable,
  testId: tableDisable,
  accordionDataCount: tableDisable,
  onlyIcon: tableDisable,
  dashedLineVisibility: tableDisable,
  accordionTitlePropagation: tableDisable,
  errorMessage: tableDisable,
  setTitleOnHide: tableDisable,
  isAccordionOpen: tableDisable,
  actionClassName: tableDisable
}

export const RenderExpanded = (args) => {
  return (
    <Accordion
      title={'Render Expanded'}
      renderExpanded={args.renderExpanded}
      accordionDataCount={2}
    >
      <Field>
        <FieldLabel required htmlFor="name">
          {' '}
          Name
        </FieldLabel>
        <TextInput
          required
          value=""
          placeholder="Type your name.."
          name="name"
          autoComplete="off"
        ></TextInput>
        <InstructionText>Name should include middle name also</InstructionText>
      </Field>
      <Accordion title={'Group 2'} accordionDataCount={1}>
        <Field>
          <FieldLabel required htmlFor="name">
            {' '}
            Name
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your name.."
            name="name"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Name should include middle name also</InstructionText>
        </Field>
      </Accordion>
    </Accordion>
  );
};
RenderExpanded.args = { renderExpanded: true };
RenderExpanded.parameters = {
  docs: {
    storyDescription: `Lets you render the Accordion in the expanded form.`
  }
}
RenderExpanded.argTypes = {
  title: tableDisable,
  hasBackgroundColor: tableDisable,
  accordionLock: tableDisable,
  noChevron: tableDisable,
  preRender: tableDisable,
  addLeftComponent: tableDisable,
  addRightComponent: tableDisable,
  accordionData: tableDisable,
  children: tableDisable,
  className: tableDisable,
  actions: tableDisable,
  onTitleClick: tableDisable,
  testId: tableDisable,
  accordionDataCount: tableDisable,
  onlyIcon: tableDisable,
  dashedLineVisibility: tableDisable,
  accordionTitlePropagation: tableDisable,
  errorMessage: tableDisable,
  setTitleOnHide: tableDisable,
  isAccordionOpen: tableDisable,
  "Following are the prop values that you can pass under actions array as an object:": tableDisable,
  component: tableDisable,
  onClick: tableDisable,
  actionClassName: tableDisable
}

export const SetHeaderDynamically = (args) => {
  const [value, setValue] = useState('Accordion title')

  const handleChange = (event: any) => {
    setValue(event.target.value)
  }

  const getAccordionTitle = (): string => {
    return value ? value : 'Accordion Title'
  }

  return (
    <Accordion
      title={getAccordionTitle()}
      setTitleOnHide={`${getAccordionTitle()} On hide`}
      renderExpanded={true}
      accordionDataCount={1}
    >
      <Field>
        <FieldLabel required htmlFor="name">
          {' '}
          Name
        </FieldLabel>
        <TextInput
          required
          value={value}
          placeholder="Type your name.."
          name="name"
          autoComplete="off"
          onChange={handleChange}
        ></TextInput>
        <InstructionText>Name should include middle name also</InstructionText>
      </Field>
    </Accordion>
  );
};
// RenderExpanded.args = { renderExpanded: true };
SetHeaderDynamically.parameters = {
  docs: {
    storyDescription: `Lets you set the header of the Accordion dynamically.`
  }
}
SetHeaderDynamically.argTypes = {
  title: tableDisable,
  hasBackgroundColor: tableDisable,
  renderExpanded: tableDisable,
  accordionLock: tableDisable,
  noChevron: tableDisable,
  preRender: tableDisable,
  addLeftComponent: tableDisable,
  addRightComponent: tableDisable,
  accordionData: tableDisable,
  children: tableDisable,
  className: tableDisable,
  actions: tableDisable,
  onTitleClick: tableDisable,
  testId: tableDisable,
  accordionDataCount: tableDisable,
  onlyIcon: tableDisable,
  dashedLineVisibility: tableDisable,
  accordionTitlePropagation: tableDisable,
  errorMessage: tableDisable,
  setTitleOnHide: tableDisable,
  isAccordionOpen: tableDisable,
  "Following are the prop values that you can pass under actions array as an object:": tableDisable,
  component: tableDisable,
  onClick: tableDisable,
  actionClassName: tableDisable
}

export const AccordionWithActions = (args) => {
  const actions: any = [
    {
      component: (
        <Tooltip content="Delete" position="top" showArrow={false}></Tooltip>
      ),
      onClick: () => {
        alert('Delete triggered')
      },
      actionClassName: "ActionListItem--warning",
    },
    {
      component: (
        <Tooltip content="Edit" position="top" showArrow={false}></Tooltip>
      ),
      onClick: () => {
        alert('Edit triggered')
      },
      actionClassName: "font-color-tertiary",
    },
  ]

  return (
    <Accordion
      title={args.title}
      renderExpanded={args.renderExpanded}
      actions={actions}
      hasBackgroundColor={args.hasBackgroundColor}
    >
      <Field>
        <FieldLabel required htmlFor="name">
          Name
        </FieldLabel>
        <TextInput
          required
          value=""
          placeholder="Type your name.."
          name="name"
          autoComplete="off"
        ></TextInput>
        <InstructionText>Name should include middle name also</InstructionText>
      </Field>
    </Accordion>
  );
};
AccordionWithActions.parameters = {
  docs: {
    storyDescription: `Lets you add custom actions to the accordion.`
  }
}
AccordionWithActions.args = { renderExpanded: true, hasBackgroundColor: true, title: 'Accordion With Actions', actions: [{ component: 'With Actions' }] };
AccordionWithActions.argTypes = {
  title: tableDisable,
  hasBackgroundColor: tableDisable,
  renderExpanded: tableDisable,
  accordionLock: tableDisable,
  noChevron: tableDisable,
  preRender: tableDisable,
  addLeftComponent: tableDisable,
  addRightComponent: tableDisable,
  accordionData: tableDisable,
  children: tableDisable,
  className: tableDisable,
  // actions: tableDisable,
  onTitleClick: tableDisable,
  testId: tableDisable,
  accordionDataCount: tableDisable,
  onlyIcon: tableDisable,
  dashedLineVisibility: tableDisable,
  accordionTitlePropagation: tableDisable,
  errorMessage: tableDisable,
  setTitleOnHide: tableDisable,
  isAccordionOpen: tableDisable
}

export const ToggleWithExternalState = (args) => {
  const [isAccordionOpen, setAccordionOpen] = useState(args.isAccordionOpen);

  const actions: AccordionActionsList = [
    {
      component: (
        <Tooltip content="Delete" position="top" showArrow={false}></Tooltip>
      ),
      onClick: () => {
        alert('Delete triggered')
      },
    },
    {
      component: (
        <Tooltip content="Edit" position="top" showArrow={false}></Tooltip>
      ),
      onClick: () => {
        alert('Edit triggered')
      },
    },
  ]

  return (
    <>
      <Button onClick={() => setAccordionOpen(!isAccordionOpen)}>Toggle Accordion</Button>
      <Accordion
        title={args.title}
        renderExpanded={args.renderExpanded}
        actions={actions}
        isAccordionOpen={isAccordionOpen}
        onTitleClick={() => setAccordionOpen(!isAccordionOpen)}
      >
        <Field>
          <FieldLabel required htmlFor="name">
            Name
          </FieldLabel>
          <TextInput
            required
            value=""
            placeholder="Type your name.."
            name="name"
            autoComplete="off"
          ></TextInput>
          <InstructionText>Name should include middle name also</InstructionText>
        </Field>
      </Accordion>
    </>
  );
};
ToggleWithExternalState.parameters = {
  docs: {
    storyDescription: `Lets you handle the toggle state of the accordion externally.`
  }
}
ToggleWithExternalState.args = { renderExpanded: true, title: 'Toggle With External State', isAccordionOpen: false };
ToggleWithExternalState.argTypes = {
  title: tableDisable,
  hasBackgroundColor: tableDisable,
  renderExpanded: tableDisable,
  accordionLock: tableDisable,
  noChevron: tableDisable,
  preRender: tableDisable,
  addLeftComponent: tableDisable,
  addRightComponent: tableDisable,
  accordionData: tableDisable,
  children: tableDisable,
  className: tableDisable,
  actions: tableDisable,
  onTitleClick: tableDisable,
  testId: tableDisable,
  accordionDataCount: tableDisable,
  onlyIcon: tableDisable,
  dashedLineVisibility: tableDisable,
  accordionTitlePropagation: tableDisable,
  errorMessage: tableDisable,
  setTitleOnHide: tableDisable,
  "Following are the prop values that you can pass under actions array as an object:": tableDisable,
  component: tableDisable,
  onClick: tableDisable,
  actionClassName: tableDisable
}