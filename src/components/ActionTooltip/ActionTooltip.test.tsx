import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
// import Icon from '../Icon2/Icon'
import { act } from '@testing-library/react'
import ActionTooltip from './ActionTooltip'
// import ClipBoard from '../ClipBoard/ClipBoard'
import Tooltip from '../Tooltip/Tooltip'

describe('ActionTooltip', () => {
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test-id="${val}"]`)
  }

  const toolList = [
    {
      label: <div></div>,
      title: 'Refresh',
      action: () => {
        console.log('Refresh triggered')
      }
    },
    {
      label: <div></div>,
      title: 'Delete',
      action: () => {
        console.log('Delete triggered')
      }
    },
    {
      label: <div></div>,
      title: 'Copy',
      action: () => {
        console.log('Copy triggered')
      }
    }
  ]

  const toolListNoLabelIcon = [
    {
      label: 'Refresh',
      title: 'Refresh',
      action: () => {
        console.log('Refresh triggered')
      }
    }
  ]

  const toolListWithClassname = [
    {
      label: <div></div>,
      title: 'Delete',
      action: () => {
        console.log('Delete triggered')
      },
      className: 'ActionListItem--warning'
    },
    {
      label: <div></div>,
      title: 'Move',
      action: () => {
        console.log('Move triggered')
      },
      className: 'ActionListItem--warning'
    },
    {
      label: <div></div>,
      title: 'Copy UID',
      action: () => {
        console.log('Copy triggered')
      },
      displayType: 'clipboard',
      copyText: 'ct_uid'
    }
  ]

  const noTitle = [
    {
      label: <div></div>,
      // title: 'Refresh',
      action: () => {
        console.log('Refresh triggered')
      }
    }
  ]

  const labelAsFunction = [
    {
      label: () => {
        return <div></div>
      },
      title: 'Refresh',
      action: () => {
        console.log('Refresh triggered')
      }
    }
  ]

  const labelAsFunctionWithoutTitle = [
    {
      label: () => {
        return <div></div>
      },
      action: () => {
        console.log('Refresh triggered')
      }
    }
  ]

  it('render Default ActionTooltip', () => {
    const tree = renderer
      .create(
        <ActionTooltip list={toolList}>
          <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
        </ActionTooltip>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Checks if it renders the component correctly', () => {
    const tree = renderer
      .create(
        <ActionTooltip list={toolList}>
          <ActionTooltip className="ActionTooltip-row" list={toolList}>
            <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
          </ActionTooltip>
        </ActionTooltip>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Checks if it renders the component correctly with type secondary', () => {
    const tree = renderer
      .create(
        <ActionTooltip list={toolList}>
          <ActionTooltip type="secondary" className="ActionTooltip-row" list={toolList}>
            <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
          </ActionTooltip>
        </ActionTooltip>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Checks if it renders the component correctly with custom classnames list', () => {
    const tree = renderer
      .create(
        <ActionTooltip list={toolList}>
          <ActionTooltip type="secondary" className="ActionTooltip-row" list={toolListWithClassname}>
            <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
          </ActionTooltip>
        </ActionTooltip>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Checks the tooltip hover', () => {
    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolList} className="ActionTooltip-row" type="secondary">
        Can Augmented And Future Reality Build Empathy?
      </ActionTooltip>
    )
    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(3)
    hoverDiv.simulate('mouseleave')
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(0)
  })

  it('Checks the clipboard component and tooltip', () => {
    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolListWithClassname} className="ActionTooltip-row" type="secondary">
        Can Augmented And Future Reality Build Empathy?
      </ActionTooltip>
    )
    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    //expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(3)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(1)
    hoverDiv.simulate('mouseleave')
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(0)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(0)
  })

  it('Checks the clipboard component and tooltip inner functions', () => {
    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolListWithClassname} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )
    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')

    //expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(3)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(1)
    const toolTip = ActionTooltipComponent.find(Tooltip).first()
    const toolTipRender = findByTestAttr(toolTip, 'title-action')
    expect(toolTipRender).toHaveLength(1)

    toolTipRender.simulate('click')
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(0)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(0)
  })

  it('Checks the tooltip without title', () => {
    const ActionTooltipComponent = mount(
      // @ts-ignore
      <ActionTooltip list={noTitle} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )
    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')

    const toolTipRender = findByTestAttr(ActionTooltipComponent, 'no-title-action')
    expect(toolTipRender).toHaveLength(1)

    toolTipRender.simulate('click')
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(0)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(0)
  })

  it('Checks the event click outside', () => {
    const map = {}
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    const handleClickOutside = jest.fn()

    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolListWithClassname} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )

    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    //expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(3)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(1)

    act(() => {
      //@ts-ignore
      map.click({
        target:
          document.body ||
          document?.activeElement === document?.getElementById('sidebar-extension') ||
          document?.activeElement?.clientWidth == 315
      })
      /* fire events that update state */
    })
  })
  it('triggers the keydown event to close dropdown', () => {
    const map = {}
    document.addEventListener = jest.fn((e, cb) => {
      map[e] = cb
    })
    const handleHideDropdown = jest.fn()

    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolListWithClassname} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )

    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    //expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(3)
    //expect(ActionTooltipComponent.find(ClipBoard)).toHaveLength(1)

    act(() => {
      //@ts-ignore
      map.keydown({ key: 'Escape' })
      /* fire events that update state */
    })
  })

  it('Checks if the Icons are rendering  correctly', () => {
    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolList} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )

    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    //expect(ActionTooltipComponent.find(Icon)).toHaveLength(3)
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(3)
  })

  it('Checks if label is rendered if not a component', () => {
    const ActionTooltipComponent = mount(
      <ActionTooltip list={toolListNoLabelIcon} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )

    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    //expect(ActionTooltipComponent.find(Icon)).toHaveLength(0)
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(1)
    const toolTip = ActionTooltipComponent.find(Tooltip)
    const labelRender = findByTestAttr(toolTip, 'label-tooltip')
    expect(labelRender).toHaveLength(1)
  })

  it('Checks if label is rendered as a RenderLabel component', () => {
    const ActionTooltipComponent = mount(
      <ActionTooltip list={labelAsFunction} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )

    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    //expect(ActionTooltipComponent.find(Icon)).toHaveLength(1)
    expect(ActionTooltipComponent.find(Tooltip)).toHaveLength(1)
    const toolTip = ActionTooltipComponent.find(Tooltip)
    const checkRenderLabel = toolTip.find('RenderLabel')
    expect(checkRenderLabel).toHaveLength(1)
  })

  it('Checks if label is rendered as a RenderLabel component without title', () => {
    const ActionTooltipComponent = mount(
      //@ts-ignore
      <ActionTooltip list={labelAsFunctionWithoutTitle} className="ActionTooltip-row" type="secondary">
        <div style={{ width: '600px', height: '30px', border: '2px solid grey' }}>Item 1</div>
      </ActionTooltip>
    )

    expect(ActionTooltipComponent).toHaveLength(1)
    const hoverDiv = findByTestAttr(ActionTooltipComponent, 'cs-actiontooltip')
    expect(hoverDiv).toHaveLength(1)
    hoverDiv.simulate('mouseenter')
    const checkRenderLabel = ActionTooltipComponent.find('RenderLabel')
    expect(checkRenderLabel).toHaveLength(1)
  })
})
