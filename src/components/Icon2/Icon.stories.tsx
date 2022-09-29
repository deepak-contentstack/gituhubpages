import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'
import DocSubData from '../../utils/components/DocSubData';
import Icon from './Icon'
//import ClipBoard from '../ClipBoard/ClipBoard'
import { iconName } from './constants'
const notes = require('./Icon.md').default;

const componentDescription = <p>Icons are visual symbols used to represent actions, objects, or ideas. They are often used in the product as a visual aid to represent common actions when explaining certain processes.</p>
const usageDescription = <div>
  <p style={{ "fontSize": "20px", "lineHeight": "28px" }}>
    <p>Icons help communicate information through pictorial depictions. They help draw user attention to important actions.</p>
    <br></br>
    <div>How to use Icon:</div>
    <p style={{ marginLeft: "10px" }}>
      - Select an icon that accurately represents the subject.<br></br>
      - Pair icons with text. <br></br>
      - Position buttons consistently in the interface. <br></br>
      - Ensure the behavior of the button is consistent in all use cases. <br></br>
      - Consider how the button fits into the context of the screen and reduce complexity where possible
    </p>
  </p>
</div>

export default {
  title: 'Components / Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'string' },
      description: `Name of the icon to be used`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: true
      }
    },
    size: {
      control: { type: 'select', options: ['original', 'tiny', 'mini', 'small', 'large', 'medium', 'extraSmall'] },
      description: `Select the icon size from “tiny,” “small,” “medium,” “large,” or “original.”`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    active: {
      control: { type: 'boolean' },
      description: `To set an icon in an active state, set this property to true. For e.g., <Icon icon='Star' active='true' >`,
      table: {
        type: {
          summary: 'Boolean'
        }
      },
      type: {
        required: false
      }
    },
    hover: {
      control: { type: 'boolean' },
      description: `To set the hover state of an icon, set the property to true. e.g. <Icon icon='Star' hover='true' >`,
      table: {
        type: {
          summary: 'Boolean'
        }
      },
      type: {
        required: false
      }
    },
    hoverType: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: `To set the hover behavior of the icon, set the property to either “Primary” or “Secondary”`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    shadow: {
      control: { type: 'select', options: ['mini', 'tiny', 'medium'] },
      description: `Lets you add  a shadow effect to icons.`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    activeClassName: {
      control: { type: 'string' },
      description: `Provide the custom css class name for the active state of an icon.`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    hoverClassName: {
      control: { type: 'string' },
      description: `Provide the custom css class name for the hover state of an icon.`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    className: {
      control: { type: 'string' },
      description: `Provide the class names to be appended to this prop`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    style: {
      control: { type: 'CSSProperties' },
      description: `Pass the styles that can be added directly to the component`,
      table: {
        type: {
          summary: 'CSSProperties'
        }
      },
      type: {
        required: false
      }
    },
    fill: {
      control: { type: 'text' },
      description: `Used to set the custom fill color to the corresponding svg element. For e.g. <Icon icon='Star' fill='pink' >`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    stroke: {
      control: { type: 'string' },
      description: `Used to set the custom stroke color to the corresponding svg element. For e.g. <Icon icon='Star' stroke='pink' >`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    height: {
      control: { type: 'text' },
      description: `Used to set the custom height to the corresponding svg element. For e.g. <Icon icon='Star' height='100' >`,
      table: {
        type: {
          summary: 'number | string'
        }
      },
      type: {
        required: false
      }
    },
    width: {
      control: { type: 'text', options: ['select', 'click', 'hover'] },
      description: `Used to set the custom width to the corresponding svg element. For e.g. <Icon icon='Star' width='100' >`,
      table: {
        type: {
          summary: 'number |string'
        }
      },
      type: {
        required: false
      }
    },
    id: {
      control: { type: 'string' },
      description: `Specifies the id attribute of an icon element`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    onClick: {
      control: { type: 'Function' },
      description: `Pass the action that you want to perform when the icon is clicked on`,
      table: {
        type: {
          summary: 'Function'
        }
      },
      type: {
        required: false
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: `Determines whether icon is disabled or not`,
      table: {
        type: {
          summary: 'boolean'
        }
      },
      type: {
        required: false
      }
    },
    activeIcon: {
      control: { type: 'string' },
      description: `An alternative to the active prop. Specify a different Icon that replaces the current Icon when the Icon is in the active mode.
      This still needs the active prop to be passed.
      For e.g. <Icon icon='PersonalizationExperiences' active={activeConditionhere} activeIcon='PersonalizationExperiencesHover' >
      `,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    viewBox: {
      control: { type: 'string' },
      description: `Defines the position and dimension in the user space of an icon’s SVG viewport.`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    data: {
      control: { type: 'string | React.ReactNode' },
      description: `Used to render a string or an element besides Icon. For e.g. <Icon icon='Star' data="data as string" > e.g. <Icon icon='Star' data=<>data as markup</> >`,
      table: {
        type: {
          summary: 'string | React.ReactNode'
        }
      },
      type: {
        required: false
      }
    },
  },
  // decorators: [withKnobs, withA11y],
  parameters: {
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    // notes: { notes },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=113%3A325&scaling=min-zoom',
    },
  },
}

const tableDisable = { table: { disable: true } }

const icons = {
  Assets: 'Assets',
  // ContentModels: 'ContentModels',
  Dashboard: 'Dashboard',
  Entries: 'Entries',
  Releases: 'Releases',
  // Tasks: 'Tasks',
}

export const Default = (arg) => (
  <div className="flex IconStoriesWrapper">
    {Object.keys(icons).map((icon: any, index: any) => {
      return (
        <div key={`${icon}-${index}`} className="icon-spacing">
          <Icon icon={icon} size={arg.size} />
        </div>
      )
    })}
  </div>
)
Default.args = { size: "large" }


export const IconState = (arg) => (
  <div className="IconStoriesWrapper">
    <div>
      <div>Default State :</div>
      <div className="flex pb-10">
        {Object.keys(icons).map((icon: any, index: any) => {
          return (
            <div key={`${icon}-${index}`} className="icon-spacing">
              <Icon icon={icon} size="large" />
            </div>
          )
        })}
      </div>
    </div>
    <div>
      <div>Hover State:</div>
      <div className="flex pb-10">
        {Object.keys(icons).map((icon: any, index: any) => {
          return (
            <div key={`${icon}-${index}`} className="icon-spacing">
              <Icon icon={icon} hover={true} size="large" />
            </div>
          )
        })}
      </div>
    </div>
    <div>
      <div>Active State:</div>
      <div className="flex pb-10">
        {Object.keys(icons).map((icon: any, index: any) => {
          return (
            <div key={`${icon}-${index}`} className="icon-spacing">
              <Icon icon={icon} active={true} size="large" />
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

IconState.args = {}
IconState.parameters = {
  docs: {
    storyDescription: 'Icon is usually in the default state i.e., the rest state,  and changes to the “hover” state when a user hovers on an icon, or the “active” state, when a user clicks or select an icon'
  }
}
IconState.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

export const IconHover = (arg) => {
  return (
    <>
      <div className="IconStoriesWrapper flex" style={{ flexDirection: 'column' }}>
        <div>Hover Type: Primary (default)</div>
        <div className="flex pb-10">
          <div className="icon-spacing">
            <Icon icon="Releases" hover={true} />
          </div>
          <div className="icon-spacing">
            <Icon icon="Dashboard" hover={true} />
          </div>
          <div className="icon-spacing">
            <Icon icon="Preferences" hover={true} />
          </div>
        </div>
      </div>
      <div className="IconStoriesWrapper flex" style={{ flexDirection: 'column' }}>
        <div>Hover Type: Secondary</div>
        <div className="flex pt-10 pb-10" style={{ columnGap: 20 }}>
          <Icon icon="SettingsOutline" hover={true} hoverType='secondary' shadow='medium' />
          <Icon icon="Expand" hover={true} hoverType='secondary' shadow='medium' />
          <Icon icon="Compress" hover={true} hoverType='secondary' shadow='medium' />
        </div>
      </div>
    </>
  )
}
IconHover.args = {}
IconHover.parameters = {
  docs: {
    storyDescription: 'Icon hover has two types: “Primary,” the default type, where the primary outline color of the default icon is changed on hover, and “secondary”, where a gray color fill appears in the background of the icon on hover.'
  }
}
IconHover.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

export const IconStateUsingActiveIcon = (arg) => {
  //Some logic for active state
  const [activeIconState, setActiveIconState] = useState('exp')

  return (
    <div className="IconStoriesWrapper">
      <div>
        <div>Using only active:</div>
        <div className="flex pb-10">
          <div className="icon-spacing">
            <Icon icon='Preferences' active={activeIconState === 'pref'} hover={true} size="large" onClick={() => setActiveIconState('pref')} />
          </div>
          <div className="icon-spacing">
            <Icon icon='Assets' active={activeIconState === 'asset'} hover={true} size="large" onClick={() => setActiveIconState('asset')} />
          </div>
          <div className="icon-spacing">
            <Icon icon='Entries' active={activeIconState === 'entries'} hover={true} size="large" onClick={() => setActiveIconState('entries')} />
          </div>
        </div>
      </div>
      <div>
        <div>Using active with activeIcon:</div>
        <div className="flex pb-10">
          <div className="icon-spacing">
            <Icon
              icon='PersonalizationExperiences'
              hover={true}
              active={activeIconState === 'exp'}
              activeIcon='PersonalizationExperiencesActive'
              size="large"
              onClick={() => setActiveIconState('exp')}
            />
          </div>
          <div className="icon-spacing">
            <Icon
              icon='PersonalizationAudiences'
              hover={true}
              active={activeIconState === 'aud'}
              activeIcon='PersonalizationAudiencesActive'
              size="large"
              onClick={() => setActiveIconState('aud')}
            />
          </div>
          <div className="icon-spacing">
            <Icon
              icon='PersonalizationAttributes'
              hover={true}
              active={activeIconState === 'attr'}
              activeIcon='PersonalizationAttributesActive'
              size="large"
              onClick={() => setActiveIconState('attr')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
IconStateUsingActiveIcon.args = {}
IconStateUsingActiveIcon.parameters = {
  docs: {
    storyDescription: 'Changes the icon to be shown once the icon is active'
  }
}
IconStateUsingActiveIcon.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

export const IconSizes = (arg) => (
  <div className="IconStoriesWrapper">
    <div className="flex-v-center">
      <div>Tiny</div>
      <Icon icon="Releases" size="tiny" />
    </div>
    <div className="flex-v-center">
      <div>Small</div>
      <Icon icon="Releases" size="small" />
    </div>
    <div className="flex-v-center">
      <div>Medium</div>
      <Icon icon="Releases" size="medium" />
    </div>
    <div className="flex-v-center">
      <div>Large</div>
      <Icon icon="Releases" size="large" />
    </div>
    <div className="flex-v-center">
      <div>Original</div>
      <Icon icon="Releases" size="original" />
    </div>
  </div>
)
IconSizes.args = {}
IconSizes.parameters = {
  docs: {
    storyDescription: 'Display icons in different sizes: tiny, small, medium, large, original.'
  }
}
IconSizes.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

export const IconWithFillProperty = (arg) => (
  <div className="IconStoriesWrapper">
    <div className="flex-v-center">
      <div>Default Icon</div>
      <Icon icon="Dropdown" size="large" />
    </div>
    <div className="flex-v-center">
      <div>Icon with fill property</div>
      <Icon icon="Dropdown" size="large" fill={arg.fill} />
    </div>
  </div>
)
IconWithFillProperty.args = { fill: "blue" }
IconWithFillProperty.parameters = {
  docs: {
    storyDescription: 'Fills icons with color depending on the SVG shape of the icon.'
  }
}
IconWithFillProperty.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

// export const IconWithStrokeProperty = () => (
//   <div className="IconStoriesWrapper">
//     <div className="flex-v-center">
//       <div>Default Icon</div>
//       <Icon icon="Dropdown" size="large" />
//     </div>
//     <div className="flex-v-center">
//       <div>Icon with stroke property</div>
//       <Icon icon="Dropdown" size="large" stroke="red" />
//     </div>
//   </div>
// )

export const IconWithHeightAndWidthProperty = (arg) => (
  <div className="IconStoriesWrapper">
    <div className="flex-v-center">
      <div>Default Icon</div>
      <Icon icon="Dropdown" size="large" />
    </div>
    <div className="flex-v-center">
      <div>Icon with height and width property</div>
      <Icon icon="Dropdown" height={arg.height} width={arg.width} />
    </div>
  </div>
)
IconWithHeightAndWidthProperty.args = { height: "100px", width: "100px" }
IconWithHeightAndWidthProperty.parameters = {
  docs: {
    storyDescription: 'Provide a custom height and width to icon'
  }
}
IconWithHeightAndWidthProperty.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

// export const IconWithCustomHoverStyle = () => (
//   <div className="IconStoriesWrapper">
//     <div className="flex-v-center">
//       <div>Default hover state</div>
//       <Icon icon="Dropdown" size="large" hover={true} />
//     </div>
//     <div className="flex-v-center">
//       <div>Custom hover state</div>
//       <Icon icon="Dropdown" size="large" hover={true} hoverClassName={'custom-hover-red'} />
//     </div>
//   </div>
// )

// export const IconWithCustomActiveStyle = () => (
//   <div className="IconStoriesWrapper">
//     <div className="flex-v-center">
//       <div>Default Active state</div>
//       <Icon icon="Dropdown" size="large" active={true} />
//     </div>
//     <div className="flex-v-center">
//       <div>Custom Active state</div>
//       <Icon icon="Dropdown" size="large" active={true} activeClassName={'custom-active-red'} />
//     </div>
//   </div>
// )

export const IconWithData = (arg) => {
  const dataAsText = 'data as string'
  const DataAsMarkup = <div>data as markup</div>
  return (
    <>
      <div className="">
        <Icon icon={icons.Assets} data={dataAsText} />
      </div>
      <div className="">
        <Icon icon={icons.Assets} data={DataAsMarkup} />
      </div>
    </>
  )
}
IconWithData.args = {}
IconWithData.parameters = {
  docs: {
    storyDescription: 'Provide words beside icons. The words can be of type string or markup'
  }
}
IconWithData.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}

// export const IconWithShadowAndData = (arg) => {
//   const dataAsText = 'data as string'
//   const DataAsMarkup = <div>data as markup</div>
//   return (
//     <>
//       <div className="">
//         <Icon icon="SettingsOutline" hover={true} data={dataAsText} shadow={arg.shadow} />
//       </div>
//       <div className="">
//         <Icon icon="SettingsOutline" hover={true} data={DataAsMarkup} shadow={arg.shadow} />
//       </div>
//     </>
//   )
// }
// IconWithShadowAndData.args = { shadow: "medium" }
// IconWithShadowAndData.parameters = {
//   docs: {
//     storyDescription: 'Icon will have a shadow effect with the use of shadow property (medium, mini, tiny).'
//   }
// }
// IconWithShadowAndData.argTypes = {
//   icon: tableDisable,
//   size: tableDisable,
//   active: tableDisable,
//   hover: tableDisable,
//   hoverType: tableDisable,
//   activeClassName: tableDisable,
//   hoverClassName: tableDisable,
//   className: tableDisable,
//   style: tableDisable,
//   fill: tableDisable,
//   stroke: tableDisable,
//   height: tableDisable,
//   width: tableDisable,
//   id: tableDisable,
//   onClick: tableDisable,
//   disabled: tableDisable,
//   activeIcon: tableDisable,
//   viewBox: tableDisable,
//   data: tableDisable,
//   testId: tableDisable
// }

export const AllIcons = (arg) => (
  <div
    className="IconStoriesWrapper"
    style={{
      columns: '5',
      width: '1200px',
    }}
  >
    {Object.keys(iconName).map((icon: any, index: any) => {
      return (
        <div key={`${icon}-${index}`} className="icon-spacing">
          {/* <ClipBoard copyText={icon}>
            <div className="icon-flex">
              <Icon icon={icon} size="small" />
              <div className="icon-name">{icon}</div>
            </div>
          </ClipBoard> */}
        </div>
      )
    })}
  </div>
)
AllIcons.argTypes = {
  icon: tableDisable,
  size: tableDisable,
  active: tableDisable,
  hover: tableDisable,
  hoverType: tableDisable,
  shadow: tableDisable,
  activeClassName: tableDisable,
  hoverClassName: tableDisable,
  className: tableDisable,
  style: tableDisable,
  fill: tableDisable,
  stroke: tableDisable,
  height: tableDisable,
  width: tableDisable,
  id: tableDisable,
  onClick: tableDisable,
  disabled: tableDisable,
  activeIcon: tableDisable,
  viewBox: tableDisable,
  data: tableDisable,
  testId: tableDisable
}