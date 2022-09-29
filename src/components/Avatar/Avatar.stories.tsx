import React from 'react'
import Avatar, { AvatarInfo } from './Avatar'
import Tooltip from '../Tooltip/Tooltip'

export default {
  title: 'In-progress / Avatar',
  component: Avatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Tn5uYSFQSqblrqrEDt8CcH/Entry-Editor?node-id=603%3A1428',
    },
  },
  argTypes: {
    showPlusSignAfter: {
      control: { type: 'number' },
    },
    showStatus: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    showExtraType: {
      control: { type: 'select', options: ['link', 'button'], },

      table: {
        type: {
          summary: 'Partial'
        }
      }
    },
    type: {
      control: { type: 'select', options: ['text', 'image'] },
      description: "Controls the type of the avatar",
      table: {
        type: {
          summary: 'Partial'
        }
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
      table: {
        type: {
          summary: 'Partial'
        }
      }
    },
    showExtraColor: {
      control: {
        type: 'select',
        options: ['light', 'dark']
      },
      table: {
        type: {
          summary: 'Partial'
        }
      }
    }
  },
}

const colorList: any = [
  "#99D8CE",
  "#6BC3FE",
  "#5060C1",
  "#835EC3",
  "#B16DBD",
  "#FF85BC",
  "#FF7E83",
  "#A2D959",
  "#59BA5E"
]

function getRandomColor() {
  const color: any = colorList[Math.floor(Math.random() * colorList.length)];
  return color;
};

const personAvatars = [
  {
    id: 1,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    status: 'active',
    avatarColor: getRandomColor()
  },
  {
    id: 2,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 3,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 4,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 5,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 6,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 7,
    name: 'Branko Toshin',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 8,
    name: 'Anup Singh',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 9,
    name: 'Amrendra Upadhyay',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
  {
    id: 10,
    name: 'Rutuja Patil',
    image: 'https://via.placeholder.com/32x32/ff4988/ff4988?text=1',
    email: 'fe_developer@gmail.com',
    avatarColor: getRandomColor(),
    status: 'active'
  },
]
const tableDisable = { table: { disable: true } }
let avatarInfo = <AvatarInfo name="Branko Toshin" email="developer@upwork.com"></AvatarInfo>

export const Default = (args) => <Avatar avatars={[personAvatars[0]]} type={args.type} showExtraType={args.showExtraType} showStatus={args.showStatus} showPlusSignAfter={args.showPlusSignAfter} showExtraColor={args.showExtraColor} testId={args.testId}></Avatar>
Default.args = { type: 'text', showExtraType: 'link', showExtraColor: "light", showPlusSignAfter: 5, showStatus: true };
Default.argTypes = {
  showExtraType: tableDisable,
  showExtraColor: tableDisable,
  showPlusSignAfter: tableDisable,
  avatars: tableDisable,
  size: tableDisable,

}

export const SingleAvatarWithTooltip = (args) => (
  <Tooltip content={avatarInfo} position="right" variantType="light">
    <Avatar avatars={[personAvatars[0]]} type={args.type} size={args.size}></Avatar>
  </Tooltip>
)
SingleAvatarWithTooltip.args = { type: 'text' };
SingleAvatarWithTooltip.argTypes = {
  showExtraType: tableDisable,
  showExtraColor: tableDisable,
  showPlusSignAfter: tableDisable,
  showStatus: tableDisable,
  avatars: tableDisable,
  size: tableDisable
}
export const AvatarList = (args) => (
  <Avatar avatars={personAvatars} type={args.type} showPlusSignAfter={args.showPlusSignAfter} showExtraColor={args.showExtraColor} showExtraType={args.showExtraType} size={args.size} showStatus={args.showStatus}></Avatar>
)
AvatarList.args = { type: 'image', showPlusSignAfter: 5, showExtraType: 'link', showExtraColor: "light", showStatus: true, };
AvatarList.argTypes = {

  showStatus: tableDisable,
  avatars: tableDisable,
}
