import React from 'react'
import Link from '../Link/Link'
import notes from './Link.md'
import { action } from '@storybook/addon-actions';
import DocSubData from '../../../utils/components/DocSubData';

const fontColorList: any = ['black', 'link', 'base', 'white'];
const fontSizeList: any = ['tiny', 'small', 'medium', 'large'];
const fontWeightList: any = ['bold', 'semi-bold', 'regular'];
const underLineTypeList: any = ['dashed', 'solid'];
const targetList: any = ['__blank', '_self', '_parent', '_top'];
const typeList: any = ['external'];
const componentDescription = 'Links are navigational elements that let you traverse to web-based destinations or assets.'
const usageDescription = 'Link allows you to customize anchor elements. You can use them on their own or inline with text.'

export default {
  title: 'Components / Typography/Link',
  component: Link,
  argTypes: {
    href: {
      control: 'text'
    },
    fontSize: {
      control: {
        type: "select",
        options: fontSizeList
      }
    },
    fontColor: {
      control: {
        type: "select",
        options: fontColorList
      }
    },
    fontWeight: {
      control: {
        type: "select",
        options: fontWeightList
      }
    },
    underline: {
      control: 'boolean'
    },
    underLineType: {
      control: {
        type: "select",
        options: underLineTypeList
      }
    },
    target: {
      control: {
        type: "select",
        options: targetList
      }
    },
    type: {
      control: {
        type: "select",
        options: typeList
      }
    },
    className: {
      control: "disabled"
    },
    label: {
      control: 'text'
    },
    style: {
      control: "disabled"
    },
    children: {
      control: "disabled"
    },
    cbOnClick: {
      control: "disabled"
    },
    iconName: {
      control: "disabled"
    }
  },
  parameters: {
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/NUaPd7QxttcJAQfx9KYjBu/01-%E2%80%A2-Atoms-%26-Properties?node-id=1263%3A9'
    },
    notes: { notes }
  }
}

const tableDisable = { table: { disable: true } }

export const Default = (args) => {

  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit{' '}
      <Link
        href={args.href}
        cbOnClick={action('cbOnClick triggered')}
        underLineType={args.underLineType}
        underline={args.underline}
        fontColor={args.fontColor}
        fontSize={args.fontSize}
        fontWeight={args.fontWeight}
        iconName={args.iconName}
        className={args.className}
        target={args.target}>
        {args.label}
      </Link>
      {' '}sed do eiusmod tempor incididunt ut labore et dolore magna.
    </p>
  )
}
Default.args = {
  underline: 'true',
  label: "Learn more"
}
Default.argTypes = {
  children: tableDisable,
  testId: tableDisable,
}

export const ExternalLink = (args) => {
  return (
    <Link href={args.href} type={args.type} underline={args.underline} underLineType={args.underLineTypeList}>Learn more</Link>
  )
}
ExternalLink.args = {
  type: "external",
  underline: 'true',
}
ExternalLink.argTypes = {
  children: tableDisable,
  cbOnClick: tableDisable,
  target: tableDisable,
  fontWeight: tableDisable,
  fontSize: tableDisable,
  fontColor: tableDisable,
  style: tableDisable,
  className: tableDisable,
  testId: tableDisable,
}
ExternalLink.parameters = {
  docs: {
    storyDescription: 'You can use this component to display an external link with an icon. And, you need to specify the URL you want to open when the component is clicked on.',
  },
}

export const onClick = (args) => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit <Link cbOnClick={action("cbOnClick triggered")} href={null} underLineType={args.underLineType} underline={args.underline} >Learn more</Link> sed do eiusmod tempor incididunt ut labore et dolore magna.
  </p>
)
onClick.args = {
  underline: 'true',
}
onClick.argTypes = {
  children: tableDisable,
  target: tableDisable,
  type: tableDisable,
  fontWeight: tableDisable,
  fontSize: tableDisable,
  fontColor: tableDisable,
  iconName: tableDisable,
  style: tableDisable,
  className: tableDisable,
  testId: tableDisable,
}
onClick.parameters = {
  docs: {
    storyDescription: 'You can use this component in scenarios where you need a function to be triggered when the link/text will be clicked on.',
  },
}