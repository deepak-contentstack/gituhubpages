import React from 'react';
import notes from './InstructionText.md';
import InstructionText from './InstructionText';
import DocSubData from '../../utils/components/DocSubData';

const componentDescription = 'The InstructionText component lets you pass on information to the user about a form component.'

const usageDescription = 'This component lets you inform a user more about specific details for a particular field in your form. You can use it only in the context of a form as a corresponding guidance to an input field.'

export default {
  title: 'Components / InstructionText',
  component: InstructionText,
  argTypes: {
    label: {
      control: 'text'
    },
    className: {
      control: 'disabled'
    },
    style: {
      control: 'disabled'
    },
    children: {
      control: 'disabled'
    }
  },
  parameters: {
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/QHcXcnGhGDBQ49J1kRwzYf/02-%E2%80%A2-Molecules?node-id=233%3A5666',
    },
    notes: { notes }
  }
}

export const Default = (args) => <InstructionText>{args.label}</InstructionText>
Default.args = {
  label: 'Instruction text here'
}


