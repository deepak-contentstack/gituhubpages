import React from "react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import notes from "./PageHeader.md";
import { PageHeader, Button, Icon, Dropdown } from "../../index";
import SideBarWindow from '../SideBarWindow/SideBarWindow';

export const Default = () => {
  const pageActions: any = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  return (
    <PageHeader title={object('title', { label: 'Page Title 1' })} actions={pageActions} />
  )
}

export const EditableTitle = () => {
  const pageActions: any = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  return (
    <PageHeader title={object('title', { label: 'Page Title 1', editable: true })} actions={pageActions} />
  )
}

export const HeaderWithInformation = () => {
  const pageActions: any = [
    {
      label: "Cancel",
      onClick: () => alert("Cancel button clicked"),
      type: "primary",
    },
  ];
  return (
    <PageHeader
      title={object("title", { label: "Page Title 1", info: "#" })}
      actions={pageActions}
    />
  );
};

export const MultipleActions = () => {
  const pageActions: any = [
    {
      label: (
        <Button buttonType="tertiary" className="ml-10" onClick={() => alert('Button clicked')}>
          Tertiary
        </Button>
      ),
    },
    {
      label: (
        <Button
          buttonType="secondary"
          className="ml-10"
          onClick={() => alert('Button clicked')}
        >
          Secondary
        </Button>
      ),
    },
    {
      label: (
        <Button
          buttonType="primary"
          className="ml-10"
          onClick={() => alert('Button clicked')}
        >
          Primary
        </Button>
      ),
    },
  ]
  return (
    <PageHeader title={object('title', { label: 'Page Title 1' })} actions={pageActions} />
  )
}

export const WithSidebarWindow = () => {
  const tabsInfo = [
    {
      id: 'tab1',
      tabIcon: <Icon icon="Information" />,
      tabLabel: 'Images',
      windowTitle: 'Entry Information',
      data: (
        <div>
          Style Dictionary is a build system that allows you to define styles once, in a way for
          any platform or language to consume. A single place to create and edit your styles, and
          a single command exports these rules to all the places you need them - iOS, Android,
          CSS, JS, HTML, sketch files, style documentation, or anything you can think of. It is
          available as a CLI through npm, but can also be used like any normal node module if you
          want to extend its functionality
        </div>
      ),
    },
  ];

  const pageActions: any = [
    {
      label: (
        <SideBarWindow tabsInfo={tabsInfo} />
      ),
      type: 'sidebar'
    },
  ];

  return (
    <PageHeader title={object('title', { label: 'Page Title 1' })} actions={pageActions} />
  )
}


// export const HeaderContent = () => {
//   const pageActions: any = [
//     {
//       label: "Button",
//       onClick: () => alert("Cancel button clicked"),
//       type: "primary",
//     },
//   ];
//   return (
//     <PageHeader
//       title={object("title", { label: "Page Title 1" })}
//       content={text("content", "Some header content")}
//       actions={pageActions}
//     />
//   );
// };

export const CustomComponentInHeader = () => {
  const pageActions: any = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  const AnyComponent = (
    <a className="PageHeaderIcon">
      <Icon icon="Settings" size="small" />
    </a>
  )
  return (
    <PageHeader
      title={{ label: 'Page Title 1', component: AnyComponent }}
      actions={pageActions}
    />
  )
}

export const PageHeaderAsComponent = () => {

  const list: any = [
    {
      label: 'first stack',
      default: true,
    },
    {
      label: 'second stack',
    },
    {
      label: 'third stack',
    },
    {
      label: 'fourth stack',
    },
    {
      label: 'fifth stack',
    },
    {
      label: 'sixth stack',
    }
  ]

  const pageActions: any = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  const AnyComponent = (
    <a className="PageHeaderIcon">
      <Icon icon="Settings" size="small" />
    </a>
  );

  const MockComponent = () => {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropdown
            list={list}
            type="select"
            dropDownType='quaternary'
            withSearch={false}
            headerLabel="Organization"
          />
          <div>Manage</div>
        </div>
        <PageHeader
          title={{ label: 'Page Title 1', component: AnyComponent }}
          actions={pageActions}
        />
      </div>
    )
  }

  return (
    <PageHeader
      component={<MockComponent />}
    />
  )
}

export default {
  title: 'Components / PageHeader',
  component: Default,
  decorators: [withKnobs, withA11y],
  parameters: {
    notes: { notes },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5j7c2ljQw9Z8WghgTwzXa2/Assets-Listing?node-id=411%3A191',
    },
  },
}
