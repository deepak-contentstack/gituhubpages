import React, { useState } from 'react'
import Button from '../Button/Button'
import DocSubData from '../../utils/components/DocSubData';
import Tooltip from './Tooltip'
// import notes from './Tooltip.md'

const componentDescription = "The Tooltip component enables users to provide additional bits of information associated with a button or field."
const usageDescription =
  <ul>
    <li>Use tooltips only on elements that appear interactive, such as buttons or links.</li>
    <li>Makes content concise, contextual, and easy to understand.</li>
    <li>Position the tooltip in such a way that when content appears, it should not overlap other elements.</li>
    <li>Use tooltips mostly for small and medium amounts of content.</li>
  </ul>

export default {
  title: 'Components / Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      control: { type: 'text' },
      description: `Lets you add the content that will be displayed when the tooltip appears`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: true
      }
    },
    position: {
      control: { type: 'select', options: ["top", "left", "right", "bottom"] },
      description: `Lets you choose the preferred placement of the tooltip. Note that tooltip's flip modifier can change this to the opposite placement if it has more space.`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: true
      }
    },
    variantType: {
      control: { type: 'select', options: ['dark', 'light', 'menuIcon'] },
      description: `Lets you choose a theme for tooltip (light and dark).`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    type: {
      control: { type: 'select', options: ['primary', 'secondary', 'dynamic'] },
      description: `Lets you select the type of tooltip. There are three types:  “primary,” “secondary,” and “dynamic” (supports only variantType="light")`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    showArrow: {
      control: { type: 'boolean' },
      description: `Determines if the tooltip has an arrow.`,
      table: {
        type: {
          summary: 'boolean'
        }
      },
      type: {
        required: false
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: `Lets you disable the tooltip`,
      table: {
        type: {
          summary: 'boolean'
        }
      },
      type: {
        required: false
      }
    },
    visible: {
      control: { type: 'boolean' },
      description: `Controls the visibility of the tooltip`,
      table: {
        type: {
          summary: 'boolean'
        }
      },
      type: {
        required: false
      }
    },
    showClose: {
      control: { type: 'boolean' },
      description: `Lets you display a cancel button on your tooltip to close it.`,
      table: {
        type: {
          summary: 'boolean'
        }
      },
      type: {
        required: false
      }
    },
    onCreate: {
      control: { type: 'function' },
      description: `Lets you pass the function that is Invoked once the tooltip has been created.`,
      table: {
        type: {
          summary: 'function'
        }
      },
      type: {
        required: false
      }
    },
    trigger: {
      control: { type: 'string' },
      description: `Determines the events that cause the tooltip to show. There are multiple event names separated by spaces.`,
      table: {
        type: {
          summary: 'string'
        }
      },
      type: {
        required: false
      }
    },
    onHidden: {
      control: { type: 'function' },
      description: `Lets you pass the function that is invoked once the tooltip has been fully hidden and unmounted from the DOM.`,
      table: {
        type: {
          summary: 'function'
        }
      },
      type: {
        required: false
      }
    },

    onClose: {
      control: { type: 'function' },
      description: `Lets you pass the function that is invoked when the showClose (cancel) button is clicked`,
      table: {
        type: {
          summary: 'function'
        }
      },
      type: {
        required: false
      }
    },
    maxWidth: {
      control: { type: 'number' },
      description: `Specifies the maximum width of the tooltip. Useful to prevent it from being too horizontally wide to read.`,
      table: {
        type: {
          summary: 'number'
        }
      },
      type: {
        required: false
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
          summary: 'cs-tooltip'
        }
      },
    }
  },
  parameters: {
    componentSubtitle: <DocSubData componentDescription={componentDescription} usageDescription={usageDescription} />,
    // notes: { notes },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=213%3A558&scaling=min-zoom',
    },
  },
}

const tableDisable = { table: { disable: true } }

export const Default = (arg) => {
  return (
    <div className="TooltipWrapper">
      <div style={{ marginBottom: '20px' }}>
        <Tooltip content={arg.variantType === "menuIcon" ? { text: 'abc', icon: 'A' } : arg.content} position={arg.position} type={arg.type} variantType={arg.variantType} maxWidth={arg.maxWidth} disabled={arg.disabled}>
          <Button buttonType="primary">Hover for Tooltip</Button>
        </Tooltip>
      </div>
    </div>
  )
}
Default.args = { content: 'Tooltip Content...', position: "right", type: "primary", variantType: "dark", disabled: false }
Default.argTypes = {
  showArrow: tableDisable,
  type: tableDisable,
  showClose: tableDisable,
  visible: tableDisable,
}

// export const Left = () => {
//   return (
//     <div className="TooltipWrapper">
//       <div style={{ marginBottom: '20px' }}>
//         <Tooltip content="Label Text" position="left" showArrow={true}>
//           <Button buttonType="primary">Left</Button>
//         </Tooltip>
//       </div>
//     </div>
//   )
// }

// export const Right = () => {
//   return (
//     <div className="TooltipWrapper">
//       <Tooltip content="Label Text" position="right" showArrow={false}>
//         <Button buttonType="primary">Right</Button>
//       </Tooltip>
//     </div>
//   )
// }


// export const Top = () => {
//   return (
//     <div className="TooltipWrapper">
//       <Tooltip content="Label Text" position="top" showArrow={false}>
//         <Button buttonType="primary">Top</Button>
//       </Tooltip>
//     </div>
//   )
// }

// export const Bottom = () => {
//   return (
//     <div className="TooltipWrapper">
//       <Tooltip content="Label Text" position="bottom" trigger='click' showArrow={false}>
//         <Button buttonType="primary">Bottom</Button>
//       </Tooltip>
//     </div>
//   )
// }

// export const MenuIcon = () => {
//   return (
//     <div className="TooltipWrapper">
//       <Tooltip content={{ text: 'abc', icon: 'A' }} position="right" variantType="menuIcon">
//         <Button buttonType="primary">Menu-Icon</Button>
//       </Tooltip>
//     </div >
//   )
// }

// export const Primary = () => {
//   return (
//     <>
//       <div className="flex-equidistant">
//         <div className="TooltipWrapper">
//           <Tooltip
//             content={
//               <>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="Staging" size="original" />
//                     <p className="Env-label">Staging</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                     <div className="mt-15">
//                       <div className="flex">
//                         <div className="tippy-value w-100">
//                           http://demo1-preview.contentstack.co.../assets/123
//                         </div>
//                         <ClipBoard copyText={'default'} withArrow={false} position="left">
//                           <Icon icon="SingleCopyIcon" size="small" />
//                         </ClipBoard>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="Production" size="original" />
//                     <p className="Env-label">Production</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                     <div className="mt-15">
//                       <div className="flex">
//                         <div className="tippy-value w-100">No URL available</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="Development" size="original" />
//                     <p className="Env-label">Development</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                     <div className="mt-15">
//                       <div className="flex">
//                         <div className="tippy-value w-100">
//                           http://demo1-preview.contentstack.co.../assets/123
//                         </div>
//                         <ClipBoard copyText={'default'} withArrow={false} position="left">
//                           <Icon icon="SingleCopyIcon" size="small" />
//                         </ClipBoard>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="RestEnvironments" size="original" />
//                     <p className="Env-label">Mobile</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                     <div className="mt-15">
//                       <div className="flex">
//                         <div className="tippy-value w-100">
//                           http://demo1-preview.contentstack.co.../assets/123
//                         </div>
//                         <ClipBoard copyText={'default'} withArrow={false} position="left">
//                           <Icon icon="SingleCopyIcon" size="small" />
//                         </ClipBoard>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             }
//             position="top"
//             variantType="light"
//             showArrow={false}
//           >
//             <Button buttonType="primary">Asset list Tooltip</Button>
//           </Tooltip>
//         </div>
//         <div className="TooltipWrapper">
//           <Tooltip
//             content={
//               <>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="Staging" size="original" />
//                     <p className="Env-label">Staging</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="Production" size="original" />
//                     <p className="Env-label">Production</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="Development" size="original" />
//                     <p className="Env-label">Development</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tippy-card">
//                   <div className="flex-v-center">
//                     <Icon icon="RestEnvironments" size="original" />
//                     <p className="Env-label">Mobile</p>
//                   </div>
//                   <div className="tippy-card-content">
//                     <div className="flex w-100">
//                       <div className="w-50">
//                         <div className="tippy-label">Robert Curlette</div>
//                         <DateLabel type="small" className="mt-5" date={'May 29, 2020 09:30 AM'} />
//                       </div>
//                       <div className="w-50">
//                         <div className="tippy-lang">en-us</div>
//                         <div className="tippy-value">3</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             }
//             position="top"
//             variantType="light"
//             showArrow={false}
//           >
//             <Button buttonType="primary">Entries list Tooltip</Button>
//           </Tooltip>
//         </div>
//       </div>
//     </>
//   )
// }

// export const Secondary = () => {
//   return (
//     <div className="TooltipWrapper">
//       <Tooltip
//         content="Plain text to show additional information."
//         position="right"
//         showArrow={false}
//         variantType="light"
//         type="secondary"
//       >
//         <Button buttonType="primary">Large Tooltip</Button>
//       </Tooltip>
//     </div>
//   )
// }

// export const SecondaryWithTitle = () => {
//   return (
//     <div className="TooltipWrapper">
//       <Tooltip
//         content={
//           <>
//             <div className="tippy-content-title">Non-Localizable Field</div>
//             <div>
//               Editing this field is restricted in localized entries. To make changes, edit the field
//               content in the master-language entry.
//             </div>
//           </>
//         }
//         position="right"
//         showArrow={false}
//         variantType="light"
//         type="secondary"
//       >
//         <Button buttonType="primary">Large Tooltip with title</Button>
//       </Tooltip>
//     </div>
//   )
// }

export const CustomComponentAsContent = () => {
  const CustomComponent = () => {
    return (
      <Button
        buttonType="secondary"
        onClick={() => {
          alert('You Clicked from Custom Component!')
        }}
      >
        This is the custom Component
      </Button>
    )
  }
  return (
    <Tooltip content={<CustomComponent />} position="bottom" showArrow={false} variantType="light" trigger='click'>
      <Button buttonType="primary">Click me!</Button>
    </Tooltip>
  )
}
CustomComponentAsContent.args = {}
CustomComponentAsContent.parameters = {
  docs: {
    storyDescription: "Lets you add a tooltip that has either a custom react component or string."
  }
}
CustomComponentAsContent.argTypes = {
  content: tableDisable,
  position: tableDisable,
  showArrow: tableDisable,
  onCreate: tableDisable,
  trigger: tableDisable,
  onHidden: tableDisable,
  disabled: tableDisable,
  variantType: tableDisable,
  visible: tableDisable,
  showClose: tableDisable,
  onClose: tableDisable,
  type: tableDisable,
  maxWidth: tableDisable
}

// export const CustomComponentAsChildren = () => {
//   const AnyComponent = () => {
//     return <Icon icon="Logo" size="small" />
//   }
//   return (
//     <Tooltip content="ContentStack Logo" position="right" showArrow={false}>
//       <AnyComponent />
//     </Tooltip>
//   )
// }

export const WithArrow = () => {
  return (
    <>
      <div className="pl-10">
        <Tooltip
          content="Plain text to show additional information."
          position="top"
          showArrow={true}
          variantType="dark"
          type="secondary"
          visible={true}
        >
          <Button buttonType="primary">Save</Button>
        </Tooltip>
      </div>

      <div className="mt-20 pl-10">
        <Tooltip
          content="Plain text to show additional information."
          position="right"
          showArrow={true}
          variantType="light"
          type="secondary"
          visible={true}
        >
          <Button buttonType="primary">Save</Button>
        </Tooltip>
      </div>
      <div className="mt-20">
        <Tooltip
          content="Plain text to show additional information."
          position="left"
          showArrow={true}
          variantType="light"
          type="secondary"
          visible={true}
        >
          <Button buttonType="primary">Save</Button>
        </Tooltip>
      </div>
      <div className="mt-20 pl-10">
        <Tooltip
          content="Plain text to show additional information."
          position="bottom"
          showArrow={true}
          variantType="dark"
          type="secondary"
          visible={true}
        >
          <Button buttonType="primary">Save</Button>
        </Tooltip>
      </div>
    </>

  )
}
WithArrow.args = {}
WithArrow.parameters = {
  docs: {
    storyDescription: "Lets you display a tooltip with an arrow that points to the component it’s associated with."
  }
}
WithArrow.argTypes = {
  content: tableDisable,
  position: tableDisable,
  showArrow: tableDisable,
  onCreate: tableDisable,
  trigger: tableDisable,
  onHidden: tableDisable,
  disabled: tableDisable,
  variantType: tableDisable,
  visible: tableDisable,
  showClose: tableDisable,
  onClose: tableDisable,
  type: tableDisable,
  maxWidth: tableDisable
}

export const ControlVisibility = (arg) => {

  const [showTooltip, setShowTooltip] = useState(arg.visible);
  const buttonText = showTooltip ? 'Hide Tooltip' : 'Show Tooltip';

  return (
    <div style={{ position: "absolute", top: "20%", left: "10%" }}>
      <Tooltip
        content="Plain text to show additional information."
        position="right"
        showArrow={true}
        variantType="light"
        type="secondary"
        visible={showTooltip}
      >
        <Button buttonType="primary" onClick={() => setShowTooltip(!showTooltip)}>{buttonText}</Button>
      </Tooltip>
    </div>
  );
}
ControlVisibility.args = { visible: true }
ControlVisibility.parameters = {
  docs: {
    storyDescription: "Lets you display a tooltip where you can control its visibility by passing certain props."
  }
}
ControlVisibility.argTypes = {
  content: tableDisable,
  position: tableDisable,
  showArrow: tableDisable,
  onCreate: tableDisable,
  trigger: tableDisable,
  onHidden: tableDisable,
  disabled: tableDisable,
  variantType: tableDisable,
  showClose: tableDisable,
  onClose: tableDisable,
  type: tableDisable,
  maxWidth: tableDisable
}

export const WithClose = (arg) => {

  const [showTooltip, setShowTooltip] = useState(true);
  const buttonText = showTooltip ? 'Hide Tooltip' : 'Show Tooltip';

  return (
    <div style={{ position: "absolute", top: "20%", left: "10%" }}>
      <Tooltip
        content={
          <div style={{ width: 280 }}>
            <div style={{ fontSize: 14, maxWidth: 240, lineHeight: '20px' }}>Some tooltip text here.</div>
          </div>
        }
        position="bottom"
        showArrow={true}
        variantType="light"
        type="secondary"
        visible={showTooltip}
        showClose={arg.showClose}
        onClose={() => setShowTooltip(false)}
      >
        <Button buttonType="primary" onClick={() => setShowTooltip(!showTooltip)}>{buttonText}</Button>
      </Tooltip>
    </div>
  );
}
WithClose.args = { showClose: true }
WithClose.parameters = {
  docs: {
    storyDescription: "Lets you display tooltips with a close button to help close the tooltip."
  }
}
WithClose.argTypes = {
  content: tableDisable,
  position: tableDisable,
  showArrow: tableDisable,
  onCreate: tableDisable,
  trigger: tableDisable,
  onHidden: tableDisable,
  disabled: tableDisable,
  variantType: tableDisable,
  visible: tableDisable,
  onClose: tableDisable,
  type: tableDisable,
  maxWidth: tableDisable
}

// export const followCursor = () => {
//   return (
//     <div style={{ 'padding': '100px' }}>
//       <Tooltip content="Follow Me" position="auto">
//         <div style={{ 'height': '3000px', 'width': '2px', background: '#222' }}></div>
//       </Tooltip>
//     </div>
//   )
// }

// export const UpdateContentDynamically = () => {
//   const [flag, setflag] = useState(false)
//   return (
//     <Tooltip
//       content={flag ? 'copied' : 'copy'}
//       position="right"
//       showArrow={false}
//       onHidden={() => {
//         setflag(false)
//       }}
//       trigger={flag ? 'mouseenter' : 'click mouseenter'}
//     >
//       <span
//         onClick={() => {
//           setflag(true)
//         }}
//       >
//         ClipBoard
//       </span>
//     </Tooltip>
//   )
// }
// export const Default = () => {
//   const CustomComponent = () => {
//     return (
//       <div>
//         <h1>info title</h1>
//         <div>
//           Plain text to show additional information. This is the maximum width for this pattern. Height will adjust accordingly
//         </div>
//       </div>
//     )
//   }
//   return (
//     <div className="TooltipWrapper">
//       <div style={{ padding: '10px' }} className="left">
//         <Tooltip content="Label Text" position="left" showArrow={false} trigger="click">
//           <Button buttonType="primary">Left</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }} className="top">
//         <Tooltip content="Label Text" position="top" showArrow={false} trigger="click">
//           <Button buttonType="primary">Top</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }} className="right">
//         <Tooltip content="Label Text" position="right" showArrow={false} trigger="click">
//           <Button buttonType="primary">Right</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }} className="down">
//         <Tooltip content="Label Text" position="bottom" showArrow={false} trigger="click">
//           <Button buttonType="primary">Bottom</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }} className="Small-Tooltip">
//         <Tooltip
//           content="Plain text to show additional information"
//           position="right"
//           showArrow={false}
//           variantType="light"
//           trigger="click"
//         >
//           <Button buttonType="primary">Small Tooltip</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }} className="Large-Tooltip">
//         <Tooltip
//           content={<CustomComponent />}
//           position="right"
//           showArrow={false}
//           variantType="light"
//           trigger="click"
//         >
//           <Button buttonType="primary">Tooltip Title</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }} className="Large-Tooltip">
//         <Tooltip
//           content="Plain text to show additional information. This is the maximum width for this pattern. Height will adjust accordingly"
//           position="right"
//           showArrow={false}
//           variantType="light"
//           trigger="click"
//         >
//           <Button buttonType="primary">Large Tooltip</Button>
//         </Tooltip>
//       </div>
//       <div style={{ padding: '10px' }}>
//         <div className="TooltipStatusCard">
//           <Tooltip
//             content={
//               <>
//                 <div className="flex w-100">
//                   <div className="w-50">
//                     <div className="tippy-label">Robert Curlette</div>
//                     <div className="tippy-value">May 29, 2020 09:30 AM</div>
//                   </div>
//                   <div className="w-50">
//                     <div className="tippy-lang">en-us</div>
//                     <div className="tippy-value">3</div>
//                   </div>
//                 </div>
//                 <div className="w-100 mt-15">
//                   <div className="tippy-label">URL</div>
//                   <div className="flex">
//                     <div className="tippy-value w-100">
//                       http://demo1-preview.contentstack.com/.../assets/123
//                     </div>
//                     <div className="Storybook-wrapper">
//                       <ClipBoard copyText={'default'} withArrow={false} position="left">
//                         <Icon icon="SingleCopyIcon" size="small" />
//                       </ClipBoard>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             }
//             position="right"
//             variantType="light"
//             showArrow={false}
//             trigger="click"
//           >
//             <Button buttonType="primary">Tooltip Card</Button>
//           </Tooltip>
//         </div>
//       </div>
//     </div>
//   )
// }
